import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ComparisonTable } from "@/components/compare/comparison-table";
import { RankingList } from "@/components/ranking-list";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";
import { getAllBrokers } from "@/data/brokers";
import { getRankingBySlug } from "@/data/rankings";

export const metadata: Metadata = buildMetadata({
  title: "FX 换汇成本对比",
  description: "六家券商 EUR→USD 换汇加点对比：IBKR 0.03%、Trading 212 0.15%、Robinhood 0.10%、Schwab 约 1%、Revolut 工作日额度内 0 明确费用。",
  path: "/fx",
});

export default function FxPage() {
  const fxRanking = getRankingBySlug("eur-usd-fx");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "FX Cost" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">FX 换汇成本对比</h1>
        <p className="max-w-2xl text-muted-foreground">
          把欧元换成美元投资时，各平台收取的加点差异可达 30 倍以上。
        </p>
      </header>

      <Section title="换汇费用一览">
        <ComparisonTable brokers={getAllBrokers()} />
      </Section>

      {fxRanking && (
        <Section title={fxRanking.title} description={fxRanking.description}>
          <RankingList ranking={fxRanking} />
        </Section>
      )}
    </div>
  );
}
