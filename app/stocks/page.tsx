import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { SearchBox } from "@/components/search-box";
import { buildMetadata } from "@/lib/seo";
import { getAllInstruments } from "@/data/stocks";

export const metadata: Metadata = buildMetadata({
  title: "US Stock Trading Cost",
  description: "Placeholder — per-symbol US stock trading cost by broker.",
  path: "/stocks",
});

export default function StocksPage() {
  const stocks = getAllInstruments("stock");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "US Stocks" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">US Stock Trading Cost</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — pick a symbol to see its trading cost across brokers.
        </p>
      </header>
      <div className="mb-6 max-w-sm">
        <SearchBox placeholder="Search symbols (e.g. AAPL)…" />
      </div>
      {stocks.length === 0 ? (
        <EmptyState
          title="No symbols yet"
          description="Popular US stock symbols will be listed here."
        />
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stocks.map((s) => (
            <li key={s.symbol} className="rounded-lg border p-4">
              <a href={`/stocks/${s.symbol.toLowerCase()}`} className="font-medium hover:underline">
                {s.symbol}
              </a>
              <p className="text-sm text-muted-foreground">{s.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
