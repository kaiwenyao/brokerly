import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TermLabel } from "@/components/glossary/term-label";
import { buildMetadata } from "@/lib/seo";
import { getInstrumentBySymbol, getInstrumentSymbols } from "@/data/stocks";
import { getBrokerBySlug } from "@/data/brokers";

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
    title: `${instrument.symbol}（${instrument.name}）各券商交易成本`,
    description: `在六家券商交易 ${instrument.symbol} 的佣金、FX 与总成本对比。`,
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
          { title: instrument.kind === "etf" ? "US ETFs" : "US Stocks", href: instrument.kind === "etf" ? "/etf" : "/stocks" },
          { title: instrument.symbol },
        ]}
      />
      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{instrument.symbol}</h1>
          <Badge variant="secondary">{instrument.kind === "etf" ? "ETF" : "Stock"}</Badge>
          {instrument.exchange && <Badge variant="outline">{instrument.exchange}</Badge>}
        </div>
        <p className="max-w-2xl text-muted-foreground">{instrument.name}</p>
      </header>

      <Section title="各券商交易成本">
        {instrument.costs.length === 0 ? (
          <EmptyState title="No cost data yet" />
        ) : (
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-40">券商</TableHead>
                  <TableHead><TermLabel label="佣金" /></TableHead>
                  <TableHead>总成本估算</TableHead>
                  <TableHead><TermLabel label="FX / 备注" /></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {instrument.costs.map((cost) => {
                  const broker = getBrokerBySlug(cost.brokerSlug);
                  return (
                    <TableRow key={cost.brokerSlug}>
                      <TableCell className="font-medium">
                        <Link href={`/brokers/${cost.brokerSlug}`} className="hover:underline">
                          {broker?.name ?? cost.brokerSlug}
                        </Link>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">{cost.commission ?? "—"}</TableCell>
                      <TableCell>{cost.totalEstimate ?? "—"}</TableCell>
                      <TableCell className="text-muted-foreground">{cost.fxNote ?? "—"}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </Section>
    </div>
  );
}
