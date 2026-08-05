import type { Article } from "@/types";

/**
 * Research article registry — CONTENT LAYER.
 *
 * Articles will live as MDX files in this folder (e.g. `article-001.mdx`)
 * with frontmatter matching the `Article` type. Register metadata here
 * (or replace with a contentlayer/CMS loader later).
 */
const articles: Article[] = [
  // PLACEHOLDER: register research articles here.
];

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return articles
    .filter(
      (a) =>
        a.slug !== slug &&
        (a.category === current.category ||
          a.tags.some((t) => current.tags.includes(t))),
    )
    .slice(0, limit);
}
