import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { SearchBox } from "@/components/search-box";
import { buildMetadata } from "@/lib/seo";
import { getAllInstruments } from "@/data/stocks";

export const metadata: Metadata = buildMetadata({
  title: "US ETF Trading Cost",
  description: "Placeholder — US ETF trading cost comparison across brokers.",
  path: "/etf",
});

export default function EtfPage() {
  const etfs = getAllInstruments("etf");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "US ETFs" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">US ETF Trading Cost</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — ETF commissions, FX impact and ongoing costs by broker.
        </p>
      </header>
      <div className="mb-6 max-w-sm">
        <SearchBox placeholder="Search ETFs (e.g. VOO)…" />
      </div>
      {etfs.length === 0 ? (
        <EmptyState title="No ETFs yet" description="Popular US ETFs will be listed here." />
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {etfs.map((e) => (
            <li key={e.symbol} className="rounded-lg border p-4">
              <a href={`/stocks/${e.symbol.toLowerCase()}`} className="font-medium hover:underline">
                {e.symbol}
              </a>
              <p className="text-sm text-muted-foreground">{e.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
