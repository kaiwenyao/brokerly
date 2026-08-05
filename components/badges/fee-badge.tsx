import { Badge } from "@/components/ui/badge";

interface FeeBadgeProps {
  label: string;
  value: string;
}

/** Compact "label: value" pill for fee figures, e.g. "US Stocks: $0". */
export function FeeBadge({ label, value }: FeeBadgeProps) {
  return (
    <Badge variant="secondary" className="gap-1 font-normal">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </Badge>
  );
}
