import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { Faq } from "@/components/faq";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";
import { getBrokerBySlug, getBrokerSlugs } from "@/data/brokers";

interface ReviewPageProps {
  params: Promise<{ broker: string }>;
}

export function generateStaticParams() {
  return getBrokerSlugs().map((broker) => ({ broker }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { broker: slug } = await params;
  const broker = getBrokerBySlug(slug);
  if (!broker) return {};
  return buildMetadata({
    title: `${broker.name} Review`,
    description: `Placeholder — in-depth ${broker.name} review.`,
    path: `/reviews/${slug}`,
  });
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { broker: slug } = await params;
  const broker = getBrokerBySlug(slug);
  if (!broker) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <BreadcrumbNav
        items={[
          { title: "Reviews", href: "/reviews" },
          { title: broker.name },
        ]}
      />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {broker.name} Review
        </h1>
        <p className="text-muted-foreground">
          Placeholder — verdict, score and full review render here.
        </p>
      </header>

      <Section title="Verdict">
        <EmptyState title="Verdict placeholder" />
      </Section>
      <Section title="Fees tested">
        <EmptyState title="Fee test placeholder" />
      </Section>
      <Section title="Platform & UX">
        <EmptyState title="Platform placeholder" />
      </Section>
      <Section title="FAQ">
        <Faq items={[]} />
      </Section>
    </div>
  );
}
