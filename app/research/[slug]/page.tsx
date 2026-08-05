import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article/article-layout";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Markdown } from "@/components/markdown";
import { ArticleCard } from "@/components/cards/article-card";
import { Section } from "@/components/section";
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd, buildMetadata } from "@/lib/seo";
import { extractToc } from "@/lib/toc";
import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from "@/data/research";

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

  const toc = extractToc(article.body);
  const related = getRelatedArticles(slug);

  const ordered = getAllArticles();
  const index = ordered.findIndex((a) => a.slug === slug);
  const newer = index > 0 ? ordered[index - 1] : undefined;
  const older = index < ordered.length - 1 ? ordered[index + 1] : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(article)} />
      <BreadcrumbNav
        items={[
          { title: "Research", href: "/research" },
          { title: article.title },
        ]}
      />

      <ArticleLayout
        article={article}
        toc={toc}
        prev={older && { slug: older.slug, title: older.title }}
        next={newer && { slug: newer.slug, title: newer.title }}
      >
        <Markdown body={article.body} />
      </ArticleLayout>

      <Section title="相关文章" className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>
    </div>
  );
}
