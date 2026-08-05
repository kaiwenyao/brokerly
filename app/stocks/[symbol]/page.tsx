import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ComparisonTable } from "@/components/compare/comparison-table";
import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";
import { getInstrumentBySymbol, getInstrumentSymbols } from "@/data/stocks";
import { getAllBrokers } from "@/data/brokers";

interface StockPageProps {
  params: Promise<{ symbol: string }>;
}

export function generateStaticParams() {
  return getInstrumentSymbols().map((symbol) => ({ symbol: symbol.toLowerCase() }));
}

export async function generateMetadata({ params }: StockPageProps): Promise<Metadata> {
  const { symbol } = await params;
  const instrument = getInstrumentBySymbol(symbol);
  if (!instrument) return {};
  return buildMetadata({
    title: `${instrument.symbol} Trading Cost Comparison`,
    description: `Placeholder — what it costs to trade ${instrument.symbol} at each broker.`,
    path: `/stocks/${symbol.toLowerCase()}`,
  });
}

export default async function StockSymbolPage({ params }: StockPageProps) {
  const { symbol } = await params;
  const instrument = getInstrumentBySymbol(symbol);
  if (!instrument) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav
        items={[
          { title: "US Stocks", href: "/stocks" },
          { title: instrument.symbol },
        ]}
      />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {instrument.symbol} — {instrument.name}
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — trading cost for {instrument.symbol} at every broker.
        </p>
      </header>

      <Section title="Cost by broker">
        <ComparisonTable brokers={getAllBrokers()} />
      </Section>

      <Section title="Fee breakdown">
        <EmptyState
          title="Breakdown placeholder"
          description="Commission + FX + other fees per broker render here."
        />
      </Section>
    </div>
  );
}
