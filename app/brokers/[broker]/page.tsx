import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { Faq } from "@/components/faq";
import { FeeBadge } from "@/components/badges/fee-badge";
import { Section } from "@/components/section";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Minus, X } from "lucide-react";
import { BrokerCard } from "@/components/cards/broker-card";
import { ArticleCard } from "@/components/cards/article-card";
import { buildMetadata } from "@/lib/seo";
import { getAllBrokers, getBrokerBySlug, getBrokerSlugs } from "@/data/brokers";
import { getArticlesByTag } from "@/data/research";
import { getSourcesByBroker } from "@/data/sources";
import type { Broker, FeeAmount } from "@/types";

interface BrokerPageProps {
  params: Promise<{ broker: string }>;
}

export function generateStaticParams() {
  return getBrokerSlugs().map((broker) => ({ broker }));
}

export async function generateMetadata({ params }: BrokerPageProps): Promise<Metadata> {
  const { broker: slug } = await params;
  const broker = getBrokerBySlug(slug);
  if (!broker) return {};
  return buildMetadata({
    title: `${broker.name} 费用详解`,
    description: broker.summary,
    path: `/brokers/${slug}`,
  });
}

function formatFee(fee?: FeeAmount): string {
  if (!fee) return "—";
  const symbol = fee.currency === "USD" ? "$" : fee.currency === "EUR" ? "€" : `${fee.currency} `;
  return `${symbol}${fee.amount}`;
}

function FeeRows({ broker }: { broker: Broker }) {
  const rows = [
    { label: "美股佣金", value: formatFee(broker.fees.usStockCommission), note: broker.fees.usStockCommission?.note },
    { label: "美国 ETF 佣金", value: formatFee(broker.fees.usEtfCommission), note: broker.fees.usEtfCommission?.note },
    { label: "FX 换汇加点", value: broker.fees.fxMarkupPercent !== undefined ? `${broker.fees.fxMarkupPercent}%` : "—" },
    { label: "托管费", value: formatFee(broker.fees.custodyFee) },
    { label: "账户闲置费", value: formatFee(broker.fees.inactivityFee), note: broker.fees.inactivityFee?.note },
    ...(broker.fees.extra ?? []),
  ];

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-44">费用项目</TableHead>
            <TableHead className="min-w-40">费率</TableHead>
            <TableHead>备注</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="font-medium">{row.label}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell className="text-muted-foreground">{row.note ?? "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/** Unified broker profile template — every section reads from the Broker object. */
export default async function BrokerPage({ params }: BrokerPageProps) {
  const { broker: slug } = await params;
  const broker = getBrokerBySlug(slug);
  if (!broker) notFound();

  const related = getAllBrokers()
    .filter((b) => b.slug !== broker.slug)
    .slice(0, 3);
  const research = getArticlesByTag(broker.slug, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav
        items={[
          { title: "Compare Brokers", href: "/brokers" },
          { title: broker.name },
        ]}
      />

      {/* Hero */}
      <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="size-16 shrink-0 rounded-xl bg-muted" aria-hidden />
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">{broker.name}</h1>
          <p className="max-w-2xl text-muted-foreground">{broker.summary}</p>
          <div className="flex flex-wrap gap-2">
            <FeeBadge label="美股" value={broker.feeSummary.usStock} />
            <FeeBadge label="ETF" value={broker.feeSummary.usEtf} />
            <FeeBadge label="FX" value={broker.feeSummary.fx} />
            {broker.regions.map((r) => (
              <Badge key={r} variant="outline">{r}</Badge>
            ))}
          </div>
          {broker.lastUpdated && (
            <p className="text-xs text-muted-foreground">
              费率核对：{broker.lastUpdated}
              {broker.website && (
                <>
                  {" · "}
                  <Link href={broker.website} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    官网
                  </Link>
                </>
              )}
            </p>
          )}
        </div>
      </header>

      <Separator />

      <Section id="summary" title="产品支持">
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>能力</TableHead>
                <TableHead>支持情况</TableHead>
                <TableHead>备注</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {broker.features.map((feature) => (
                <TableRow key={feature.key}>
                  <TableCell className="font-medium">{feature.label}</TableCell>
                  <TableCell>
                    {feature.supported ? (
                      <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                        <Check className="size-4" /> 支持
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <X className="size-4" /> 不支持
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{feature.note ?? "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>

      <Section id="trading-cost" title="费用明细">
        <FeeRows broker={broker} />
      </Section>

      <Section id="pros-cons" title="优点与缺点">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="mb-3 flex items-center gap-2 font-medium text-green-600 dark:text-green-400">
              <Check className="size-4" /> 优点
            </h3>
            <ul className="space-y-2">
              {broker.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm leading-6">
                  <Check className="mt-1 size-3.5 shrink-0 text-green-600 dark:text-green-400" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="mb-3 flex items-center gap-2 font-medium text-red-600 dark:text-red-400">
              <Minus className="size-4" /> 缺点
            </h3>
            <ul className="space-y-2">
              {broker.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm leading-6">
                  <Minus className="mt-1 size-3.5 shrink-0 text-red-600 dark:text-red-400" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="research" title="相关研究">
        {research.length === 0 ? (
          <EmptyState title="No research yet" description="Related research renders here." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {research.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </Section>

      <Section id="sources" title="信息来源">
        <ul className="space-y-2 rounded-lg border p-5">
          {getSourcesByBroker(broker.slug).map((source) => (
            <li key={source.url} className="text-sm">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                {source.topic}
              </a>
              <span className="text-muted-foreground"> — {source.usedFor}（核对：{source.checkedAt}）</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq" title="FAQ">
        <Faq items={[]} />
      </Section>

      <Section id="related" title="其他券商">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((b) => (
            <BrokerCard key={b.slug} broker={b} />
          ))}
        </div>
      </Section>
    </div>
  );
}
