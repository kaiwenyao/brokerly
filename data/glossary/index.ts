import type { GlossaryCategory, GlossaryTerm } from "@/types";
import { GLOSSARY_CATEGORIES } from "@/types";
import { feeTerms } from "./fees";
import { fxTerms } from "./fx";
import { regulatoryTerms } from "./regulatory";
import { executionTerms } from "./execution";
import { securitiesTerms } from "./securities";
import { fundTerms } from "./funds";
import { marginTerms } from "./margin";
import { brokerProductTerms } from "./broker-products";
import { tokenTerms } from "./tokens";

/**
 * Glossary registry — CONTENT LAYER.
 * Terms are researched against official sources (see each entry's
 * `sources` and `updatedAt`). Grouped into category files.
 */
const terms: GlossaryTerm[] = [
  ...feeTerms,
  ...fxTerms,
  ...regulatoryTerms,
  ...executionTerms,
  ...securitiesTerms,
  ...fundTerms,
  ...marginTerms,
  ...brokerProductTerms,
  ...tokenTerms,
];

export function getAllTerms(): GlossaryTerm[] {
  return terms;
}

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return terms.find((t) => t.slug === slug);
}

export function getTermSlugs(): string[] {
  return terms.map((t) => t.slug);
}

export function getTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return terms.filter((t) => t.category === category);
}

export function getGlossaryGroups(): {
  category: GlossaryCategory;
  terms: GlossaryTerm[];
}[] {
  return GLOSSARY_CATEGORIES.map((category) => ({
    category,
    terms: getTermsByCategory(category),
  })).filter((g) => g.terms.length > 0);
}
