import type { Ranking } from "@/types";
import { eurUsdFxRanking } from "./eur-usd-fx";
import { usStocksUsdRanking } from "./us-stocks-usd";
import { eurUsEtfRanking } from "./eur-us-etf";

/** Ranking lists — CONTENT LAYER. See data/brokers. */
const rankings: Ranking[] = [
  eurUsdFxRanking,
  usStocksUsdRanking,
  eurUsEtfRanking,
];

export function getAllRankings(): Ranking[] {
  return rankings;
}

export function getRankingBySlug(slug: string): Ranking | undefined {
  return rankings.find((r) => r.slug === slug);
}
