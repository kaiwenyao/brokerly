import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientCanvas } from "@/components/effects/gradient-canvas";

/**
 * Immersive hero inspired by https://deepseek.com/harness/en/
 *
 * A WebGL gradient mesh (see <GradientCanvas />) flows behind the headline and
 * visibly shifts toward the cursor, while the global cursor ring inverts the
 * colors beneath the pointer. The dark backdrop + radial veil keep the copy
 * legible on top of the animation.
 */
export function Hero() {
  return (
    <section className="fx-immersive isolate overflow-hidden bg-[#05060a] text-white">
      <GradientCanvas
        className="absolute inset-0 h-full w-full"
        intensity={0.95}
        mousePull={0.3}
      />
      {/* Radial veil so the headline stays crisp over the flowing gradient. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,6,10,0.55)_68%,rgba(5,6,10,0.9)_100%)]" />
      <div className="relative mx-auto max-w-3xl space-y-6 px-4 py-32 text-center sm:py-40">
        <p className="text-sm font-medium text-white/70">
          Independent broker fee data
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Compare broker trading costs, side by side
        </h1>
        <p className="mx-auto max-w-xl text-lg text-white/70">
          US stocks, ETFs, and FX conversion costs across global brokers, in one
          place.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/brokers">Compare brokers</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/fx">FX costs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
