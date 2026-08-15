"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * GradientCanvas
 *
 * A full-viewport WebGL background that renders a flowing, mouse-reactive
 * gradient mesh — the signature effect of https://deepseek.com/harness/en/
 * (the reference page ships an identical `#gradient-canvas` element whose
 * opacity transitions between `.loading` and `.loaded` states).
 *
 * The fragment shader blends a palette of colors across a domain-warped
 * fbm noise field and brightens the field toward the cursor, so the whole
 * background visibly shifts as the mouse moves.
 *
 * Accessibility:
 *  - Honors `prefers-reduced-motion`: when reduced motion is requested the
 *    animation loop is stopped and a single static frame is painted.
 *  - The element is decorative (`aria-hidden`) and never intercepts pointer
 *    events, so it cannot trap focus or block interaction.
 */

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;       // normalized cursor position, 0..1 (y flipped)
uniform float u_intensity;  // overall brightness multiplier
uniform float u_mousePull;  // how strongly the field follows the cursor
uniform vec3 u_colors[5];   // palette stops blended across the noise field

// --- hash-based value noise -------------------------------------------------
float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Fractal brownian motion with mild domain rotation for organic flow.
float fbm(vec2 p) {
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  float f = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    f += amp * noise(p);
    p = m * p;
    amp *= 0.5;
  }
  return f;
}

vec3 paletteBlend(float t) {
  t = clamp(t, 0.0, 1.0);
  float s = t * 4.0;
  int idx = int(floor(s));
  float f = fract(s);
  vec3 a = u_colors[0];
  vec3 b = u_colors[0];
  if (idx == 0) { a = u_colors[0]; b = u_colors[1]; }
  else if (idx == 1) { a = u_colors[1]; b = u_colors[2]; }
  else if (idx == 2) { a = u_colors[2]; b = u_colors[3]; }
  else { a = u_colors[3]; b = u_colors[4]; }
  return mix(a, b, f);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float aspect = u_resolution.x / u_resolution.y;

  // Aspect-correct coordinate space, centered and slightly zoomed.
  vec2 p = uv;
  p.x *= aspect;
  p -= vec2(0.5 * aspect, 0.5);
  p *= 1.8;

  // Cursor position in the same space, with a smoothed offset that warps the
  // whole field toward wherever the pointer currently is.
  vec2 mouse = u_mouse;
  mouse.x *= aspect;
  mouse -= vec2(0.5 * aspect, 0.5);
  mouse *= 1.8;

  vec2 pull = (mouse - p) * u_mousePull;

  // Domain warping: layer the fbm field so it flows and folds organically.
  vec2 q;
  q.x = fbm(p + vec2(0.0, 0.0) + u_time * 0.06);
  q.y = fbm(p + vec2(5.2, 1.3) + u_time * 0.05);

  vec2 r;
  r.x = fbm(p + 1.7 * q + vec2(1.7, 9.2) + 0.15 * u_time + pull);
  r.y = fbm(p + 1.7 * q + vec2(8.3, 2.8) + 0.126 * u_time + pull);

  float f = fbm(p + 2.0 * r + pull * 0.5);
  f = clamp(f * 1.4 + 0.1, 0.0, 1.0);

  vec3 color = paletteBlend(f);

  // Soft glow centered on the cursor — the "background lights up where the
  // mouse is" feel from the reference page.
  float glow = 1.0 / (1.0 + dot(mouse - p, mouse - p) * 3.0);
  color += glow * 0.18 * u_intensity;

  // Gentle vignette keeps the center crisp and the edges calm.
  float vig = smoothstep(1.4, 0.2, length(uv - 0.5));
  color *= mix(0.75, 1.0, vig);

  color *= u_intensity;
  gl_FragColor = vec4(color, 1.0);
}
`;

export type Rgb = readonly [number, number, number];

export interface GradientCanvasProps {
  /** Palette stops blended across the noise field (RGB 0..1). Defaults to a DeepSeek-style indigo/violet/cyan ramp. */
  colors?: readonly [Rgb, Rgb, Rgb, Rgb, Rgb];
  /** Overall brightness of the rendered gradient (0..1). Default 1. */
  intensity?: number;
  /** How strongly the field is pulled toward the cursor. Default 0.25. */
  mousePull?: number;
  className?: string;
}

const DEFAULT_COLORS: readonly [Rgb, Rgb, Rgb, Rgb, Rgb] = [
  [0.02, 0.03, 0.09], // deep navy
  [0.09, 0.13, 0.32], // indigo
  [0.22, 0.31, 0.62], // royal blue
  [0.4, 0.55, 0.92], // light periwinkle
  [0.55, 0.78, 1.0], // icy cyan-white
];

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // Shader compilation failed — clean up and let the caller fall back.
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function GradientCanvas({
  colors = DEFAULT_COLORS,
  intensity = 1,
  mousePull = 0.25,
  className,
}: GradientCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const gl =
      (canvas.getContext("webgl", {
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    // No WebGL available — nothing to render; the CSS background shows through.
    if (!gl) return;

    const vert = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // Full-screen quad.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const positionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uIntensity = gl.getUniformLocation(program, "u_intensity");
    const uMousePull = gl.getUniformLocation(program, "u_mousePull");
    const uColors = gl.getUniformLocation(program, "u_colors[0]");

    const flat = new Float32Array(colors.flat());
    gl.uniform3fv(uColors, flat);
    gl.uniform1f(uIntensity, intensity);
    gl.uniform1f(uMousePull, mousePull);

    // Smoothed cursor in normalized device coords (lerp for fluid motion).
    const target = { x: 0.5, y: 0.5 };
    const current = { x: 0.5, y: 0.5 };

    const onPointerMove = (event: PointerEvent) => {
      target.x = event.clientX / window.innerWidth;
      // Flip Y so the field matches the cursor visually.
      target.y = 1 - event.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (w !== width || h !== height) {
        width = w;
        height = h;
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    let rafId = 0;
    let startTime: number | null = null;
    let running = true;

    // Reveal the canvas once the first frame is painted. We keep the `loading`
    // class (opacity 0) until then; adding `loaded` (defined later in the
    // stylesheet, equal specificity) flips opacity to 1 with the configured
    // transition — mirroring the reference page's `.loading` -> `.loaded`.
    const reveal = () => canvas.classList.add("loaded");

    const render = (now: number) => {
      if (!running) return;
      if (startTime === null) startTime = now;
      const time = (now - startTime) / 1000;

      resize();

      // Ease the cursor position toward the target for a fluid follow.
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      gl.uniform2f(uResolution, width, height);
      // Freeze time under reduced-motion to render a single calm frame.
      gl.uniform1f(uTime, reduceMotion ? 0 : time);
      gl.uniform2f(uMouse, current.x, current.y);
      gl.uniform1f(uIntensity, intensity);
      gl.uniform1f(uMousePull, mousePull);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      reveal();

      if (!reduceMotion) {
        rafId = window.requestAnimationFrame(render);
      }
    };
    rafId = window.requestAnimationFrame(render);

    // Pause the animation loop when the tab is hidden to save resources.
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        if (rafId) window.cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        running = true;
        startTime = null;
        rafId = window.requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onContextLoss = (event: Event) => {
      event.preventDefault();
      running = false;
      if (rafId) window.cancelAnimationFrame(rafId);
    };
    canvas.addEventListener("webglcontextloss", onContextLoss);

    return () => {
      running = false;
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextloss", onContextLoss);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, [colors, intensity, mousePull]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "gradient-canvas loading pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
    />
  );
}
