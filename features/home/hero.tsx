import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-24 text-center sm:py-32">
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-sm font-medium text-muted-foreground">
          Placeholder eyebrow — e.g. “Independent broker fee data”
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Compare broker trading costs, side by side
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Placeholder subheading — US stocks, ETFs, and FX conversion costs
          across global brokers, in one place.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/brokers">Compare brokers</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/calculator">Fee calculator</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
