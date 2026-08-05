import Link from "next/link";
import type { Ranking } from "@/types";
import { getBrokerBySlug } from "@/data/brokers";
import { RankingBadge } from "@/components/badges/ranking-badge";

/** Ordered ranking list — broker name links to its profile page. */
export function RankingList({ ranking }: { ranking: Ranking }) {
  return (
    <div className="space-y-1">
      {ranking.lastUpdated && (
        <p className="mb-4 text-xs text-muted-foreground">
          数据核对：{ranking.lastUpdated}
        </p>
      )}
      <ol className="divide-y rounded-lg border">
        {ranking.entries.map((entry) => {
          const broker = getBrokerBySlug(entry.brokerSlug);
          return (
            <li key={entry.brokerSlug} className="flex items-start gap-4 p-4">
              <RankingBadge rank={entry.rank} />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <Link
                    href={`/brokers/${entry.brokerSlug}`}
                    className="font-medium hover:underline"
                  >
                    {broker?.name ?? entry.brokerSlug}
                  </Link>
                  {entry.score !== undefined && entry.score > 0 && (
                    <span className="shrink-0 text-sm font-medium tabular-nums">
                      ${entry.score.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  )}
                </div>
                {entry.reason && (
                  <p className="mt-1 text-sm text-muted-foreground">{entry.reason}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
