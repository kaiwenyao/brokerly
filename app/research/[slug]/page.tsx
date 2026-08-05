import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article/article-layout";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { ArticleCard } from "@/components/cards/article-card";
import { Section } from "@/components/section";
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd, buildMetadata } from "@/lib/seo";
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "@/data/research";
import type { TocItem } from "@/types";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/research/${slug}`,
    image: article.cover,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  /** TOC is extracted from the MDX body once articles exist. */
  const toc: TocItem[] = [];
  const related = getRelatedArticles(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(article)} />
      <BreadcrumbNav
        items={[
          { title: "Research", href: "/research" },
          { title: article.title },
        ]}
      />

      <ArticleLayout article={article} toc={toc}>
        {/* MDX body renders here once data/research/*.mdx exists */}
        <EmptyState
          title="Article body placeholder"
          description="MDX content for this article will render here."
        />
      </ArticleLayout>

      <Section title="Related posts" className="mt-8">
        {related.length === 0 ? (
          <EmptyState title="No related posts yet" />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
