export interface RankingEntry {
  rank: number;
  brokerSlug: string;
  score?: number;
  reason?: string;
}

export interface Ranking {
  slug: string;
  title: string;
  description: string;
  entries: RankingEntry[];
  lastUpdated?: string;
}
