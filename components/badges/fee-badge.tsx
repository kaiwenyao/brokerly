import { Badge } from "@/components/ui/badge";
import { TermLabel } from "@/components/glossary/term-label";

interface FeeBadgeProps {
  label: string;
  value: string;
}

/** Compact "label: value" pill for fee figures, e.g. "US Stocks: $0". */
export function FeeBadge({ label, value }: FeeBadgeProps) {
  return (
    <Badge variant="secondary" className="gap-1 font-normal">
      <span className="text-muted-foreground">
        <TermLabel label={label} />
      </span>
      <span className="font-medium">{value}</span>
    </Badge>
  );
}
