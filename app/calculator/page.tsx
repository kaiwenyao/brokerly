import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { CalculatorLayout } from "@/components/calculator/calculator-layout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fee Calculator",
  description: "Placeholder — estimate your total trading cost across brokers.",
  path: "/calculator",
});

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "Calculator" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Trading Fee Calculator</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — enter trade size and frequency to compare total costs.
        </p>
      </header>
      <CalculatorLayout />
    </div>
  );
}
