import { cn } from "@/lib/utils";

const RANK_STYLES: Record<number, string> = {
  1: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400",
  2: "bg-slate-500/15 text-slate-600 dark:text-slate-300",
  3: "bg-amber-700/15 text-amber-700 dark:text-amber-500",
};

export function RankingBadge({ rank }: { rank: number }) {
  return (
    <span
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-full text-xs font-semibold",
        RANK_STYLES[rank] ?? "bg-muted text-muted-foreground",
      )}
      aria-label={`Rank ${rank}`}
    >
      {rank}
    </span>
  );
}
