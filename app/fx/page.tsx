import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ComparisonTable } from "@/components/compare/comparison-table";
import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";
import { getAllBrokers } from "@/data/brokers";

export const metadata: Metadata = buildMetadata({
  title: "FX Cost Comparison",
  description: "Placeholder — currency conversion costs across brokers.",
  path: "/fx",
});

export default function FxPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "FX Cost" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">FX Cost Comparison</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — how much each broker charges to convert your currency.
        </p>
      </header>

      <Section title="FX markup by broker">
        <ComparisonTable brokers={getAllBrokers()} />
      </Section>

      <Section title="Currency pairs">
        <EmptyState
          title="Pairs placeholder"
          description="Per-currency-pair conversion cost tables render here."
        />
      </Section>
    </div>
  );
}
