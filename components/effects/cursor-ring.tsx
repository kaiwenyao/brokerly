"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * CursorRing
 *
 * A smooth, mouse-following ring rendered with `mix-blend-mode: difference`,
 * replicating the `.ds-cursor-ring` element on the DeepSeek Harness reference
 * page. As the ring travels over the background it inverts whatever color sits
 * beneath it, which is exactly the "the background changes where the cursor
 * is" illusion the reference page is known for.
 *
 * The ring expands on hoverable elements (`a`, `button`, `[data-cursor]`…) and
 * is entirely hidden on touch devices and when the user requests reduced
 * motion.
 */

const RING_SIZE = 28; // px, resting diameter
const RING_SIZE_HOVER = 64; // px, diameter over interactive elements

export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Only enable for devices that have a fine pointer (mouse/trackpad).
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || reduceMotion) return;

    const ring = ringRef.current;
    if (!ring) return;

    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    let hovering = false;
    let rafId = 0;
    let visible = false;

    const updateHover = (clientX: number, clientY: number) => {
      const el = document
        .elementsFromPoint(clientX, clientY)
        .find((node) =>
          node.closest(
            "a, button, input, textarea, select, label, [data-cursor], [role='button']",
          ),
        );
      const next = Boolean(el);
      if (next !== hovering) {
        hovering = next;
        ring.classList.toggle("is-blend", hovering);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) {
        visible = true;
        ring.classList.add("is-visible");
      }
      updateHover(event.clientX, event.clientY);
    };

    const onPointerLeave = () => {
      visible = false;
      ring.classList.remove("is-visible");
    };

    const onPointerDown = () => ring.classList.add("is-pressed");
    const onPointerUp = () => ring.classList.remove("is-pressed");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    const render = () => {
      // Ease toward the target for a soft, trailing follow.
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      ring.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      rafId = window.requestAnimationFrame(render);
    };
    rafId = window.requestAnimationFrame(render);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      style={
        {
          "--ring-size": `${RING_SIZE}px`,
          "--ring-size-hover": `${RING_SIZE_HOVER}px`,
        } as React.CSSProperties
      }
      className={cn(
        "ds-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] rounded-full opacity-0 mix-blend-difference",
        enabled && "cursor-ring-enabled",
      )}
    />
  );
}
