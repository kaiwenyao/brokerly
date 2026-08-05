import type { Ranking } from "@/types";

/** Ranking lists — CONTENT LAYER. See data/brokers. */
const rankings: Ranking[] = [
  // PLACEHOLDER: register rankings here.
];

export function getAllRankings(): Ranking[] {
  return rankings;
}

export function getRankingBySlug(slug: string): Ranking | undefined {
  return rankings.find((r) => r.slug === slug);
}
