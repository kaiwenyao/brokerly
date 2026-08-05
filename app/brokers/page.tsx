import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ComparisonTable } from "@/components/compare/comparison-table";
import { buildMetadata } from "@/lib/seo";
import { getAllBrokers } from "@/data/brokers";

export const metadata: Metadata = buildMetadata({
  title: "Compare Brokers",
  description:
    "Compare global broker trading fees — US stocks, ETFs, FX costs and more.",
  path: "/brokers",
});

export default function BrokersPage() {
  const brokers = getAllBrokers();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "Compare Brokers" }]} />

      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Compare Brokers</h1>
        <p className="max-w-2xl text-muted-foreground">
          Compare global broker trading fees — US stocks, ETFs, FX costs and more.
        </p>
      </header>

      <ComparisonTable brokers={brokers} />
    </div>
  );
}
