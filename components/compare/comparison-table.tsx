import Link from "next/link";
import type { Broker, FeeSummary } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyState } from "@/components/empty-state";
import { TermLabel } from "@/components/glossary/term-label";

interface ComparisonTableProps {
  brokers: Broker[];
}

/** Column definitions are data-driven — add a FeeSummary key to add a column. */
const COLUMNS: { key: keyof FeeSummary; label: string }[] = [
  { key: "usStock", label: "美股佣金" },
  { key: "usEtf", label: "ETF 佣金" },
  { key: "fx", label: "FX 换汇" },
  { key: "custody", label: "托管费" },
  { key: "inactivity", label: "账户闲置费" },
];

export function ComparisonTable({ brokers }: ComparisonTableProps) {
  if (brokers.length === 0) {
    return (
      <EmptyState
        title="No brokers to compare yet"
        description="Broker data will appear here once the content layer is populated."
      />
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader className="bg-muted/40">
          <TableRow>
            <TableHead className="min-w-40">券商</TableHead>
            {COLUMNS.map((col) => (
              <TableHead key={col.key} className="whitespace-nowrap">
                <TermLabel label={col.label} />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {brokers.map((broker) => (
            <TableRow key={broker.slug}>
              <TableCell className="font-medium">
                <Link
                  href={`/brokers/${broker.slug}`}
                  className="hover:underline"
                >
                  {broker.name}
                </Link>
              </TableCell>
              {COLUMNS.map((col) => (
                <TableCell key={col.key} className="whitespace-nowrap">
                  {broker.feeSummary[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
