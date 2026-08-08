import type { Article } from "@/types";
import { brokerFeeComparison2026 } from "./broker-fee-comparison-2026";
import { eurUsdConversionCost } from "./eur-usd-conversion-cost";
import { usEtfVsUcitsVsToken } from "./us-etf-vs-ucits-vs-token";
import { tradingFrequencyCost } from "./trading-frequency-cost";
import { irelandInvestmentTax } from "./ireland-investment-tax";
import { irelandEtfDcaPlatformComparison2026 } from "./ireland-etf-dca-platform-comparison-2026";

/**
 * Research article registry — CONTENT LAYER.
 * One file per article; body is GFM markdown rendered by components/markdown.tsx.
 */
const articles: Article[] = [
  irelandEtfDcaPlatformComparison2026,
  brokerFeeComparison2026,
  eurUsdConversionCost,
  usEtfVsUcitsVsToken,
  tradingFrequencyCost,
  irelandInvestmentTax,
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

export function getArticlesByTag(tag: string, limit?: number): Article[] {
  const matches = articles.filter((a) => a.tags.includes(tag));
  return limit ? matches.slice(0, limit) : matches;
}
