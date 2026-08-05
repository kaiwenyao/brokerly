import type { Broker } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyState } from "@/components/empty-state";

interface ComparisonTableProps {
  brokers: Broker[];
}

/**
 * Broker comparison table. Column definitions are data-driven so new fee
 * dimensions can be added without restructuring the component.
 */
const COLUMNS: { key: string; label: string; render: (b: Broker) => string }[] = [
  { key: "usStock", label: "US Stock Commission", render: () => "—" },
  { key: "usEtf", label: "US ETF Commission", render: () => "—" },
  { key: "fx", label: "FX Markup", render: () => "—" },
  { key: "custody", label: "Custody Fee", render: () => "—" },
  { key: "inactivity", label: "Inactivity Fee", render: () => "—" },
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
    <div className="rounded-lg border">
      <Table>
        <TableHeader className="sticky top-16 z-10 bg-background">
          <TableRow>
            <TableHead className="min-w-40">Broker</TableHead>
            {COLUMNS.map((col) => (
              <TableHead key={col.key}>{col.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {brokers.map((broker) => (
            <TableRow key={broker.slug}>
              <TableCell className="font-medium">{broker.name}</TableCell>
              {COLUMNS.map((col) => (
                <TableCell key={col.key}>{col.render(broker)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
