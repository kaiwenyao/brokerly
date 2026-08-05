import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { Faq } from "@/components/faq";
import { FeeBadge } from "@/components/badges/fee-badge";
import { Section } from "@/components/section";
import { Separator } from "@/components/ui/separator";
import { BrokerCard } from "@/components/cards/broker-card";
import { ArticleCard } from "@/components/cards/article-card";
import { buildMetadata } from "@/lib/seo";
import { getAllBrokers, getBrokerBySlug, getBrokerSlugs } from "@/data/brokers";
import { getAllArticles } from "@/data/research";

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
    title: `${broker.name} Fees & Review`,
    description: broker.summary || `Placeholder — ${broker.name} trading fees.`,
    path: `/brokers/${slug}`,
  });
}

/**
 * Unified broker profile template. Every section reads from the Broker
 * object; missing fields render placeholder blocks.
 */
export default async function BrokerPage({ params }: BrokerPageProps) {
  const { broker: slug } = await params;
  const broker = getBrokerBySlug(slug);
  if (!broker) notFound();

  const related = getAllBrokers()
    .filter((b) => b.slug !== broker.slug)
    .slice(0, 3);
  const research = getAllArticles().slice(0, 3);

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
        <div className="size-16 rounded-xl bg-muted" aria-hidden />
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">{broker.name}</h1>
          <p className="max-w-2xl text-muted-foreground">
            {broker.summary || "Placeholder broker summary."}
          </p>
          <div className="flex flex-wrap gap-2">
            <FeeBadge label="US Stocks" value="—" />
            <FeeBadge label="ETFs" value="—" />
            <FeeBadge label="FX" value="—" />
            {broker.regions.map((r) => (
              <Badge key={r} variant="outline">{r}</Badge>
            ))}
          </div>
        </div>
      </header>

      <Separator />

      <Section id="summary" title="Broker Summary">
        <EmptyState title="Summary placeholder" description="Key facts table renders here." />
      </Section>

      <Section id="trading-cost" title="Trading Cost">
        <EmptyState title="Trading cost placeholder" description="US stock / options commission breakdown renders here." />
      </Section>

      <Section id="etf-support" title="ETF Support">
        <EmptyState title="ETF placeholder" description="ETF coverage and costs render here." />
      </Section>

      <Section id="fx-cost" title="FX Cost">
        <EmptyState title="FX placeholder" description="Currency conversion markup details render here." />
      </Section>

      <Section id="pros-cons" title="Pros & Cons">
        <div className="grid gap-4 sm:grid-cols-2">
          <EmptyState title="Pros" description="Pros list renders here." />
          <EmptyState title="Cons" description="Cons list renders here." />
        </div>
      </Section>

      <Section id="research" title="Research">
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

      <Section id="faq" title="FAQ">
        <Faq items={[]} />
      </Section>

      <Section id="related" title="Related Brokers">
        {related.length === 0 ? (
          <EmptyState title="No related brokers yet" description="Similar brokers render here." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <BrokerCard key={b.slug} broker={b} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
