import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Broker } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FeeBadge } from "@/components/badges/fee-badge";
import { RankingBadge } from "@/components/badges/ranking-badge";

interface BrokerCardProps {
  broker: Broker;
  rank?: number;
}

export function BrokerCard({ broker, rank }: BrokerCardProps) {
  return (
    <Card className="h-full transition-colors hover:border-foreground/20">
      <CardHeader className="flex-row items-center gap-3 space-y-0">
        {rank !== undefined && <RankingBadge rank={rank} />}
        <div className="size-10 rounded-md bg-muted" aria-hidden />
        <div>
          <CardTitle className="text-base">{broker.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {broker.summary}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <FeeBadge label="美股" value={broker.feeSummary.usStock} />
          <FeeBadge label="ETF" value={broker.feeSummary.usEtf} />
          <FeeBadge label="FX" value={broker.feeSummary.fx} />
        </div>
        <Link
          href={`/brokers/${broker.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View details <ArrowRight className="size-3.5" />
        </Link>
      </CardContent>
    </Card>
  );
}
