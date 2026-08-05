import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ComparisonTable } from "@/components/compare/comparison-table";
import { getAllBrokers } from "@/data/brokers";

/** Homepage teaser of the full comparison table. */
export function ComparisonEntry() {
  const brokers = getAllBrokers().slice(0, 5);

  return (
    <Section
      title="Broker fee comparison"
      description="Placeholder — a preview of the full comparison table."
    >
      <ComparisonTable brokers={brokers} />
      <div className="mt-6 text-center">
        <Button variant="outline" asChild>
          <Link href="/brokers">
            View full comparison <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
