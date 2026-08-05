import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { BrokerCard } from "@/components/cards/broker-card";
import { buildMetadata } from "@/lib/seo";
import { getAllBrokers } from "@/data/brokers";

export const metadata: Metadata = buildMetadata({
  title: "Broker Reviews",
  description: "Placeholder — hands-on reviews of global brokers.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const brokers = getAllBrokers();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "Reviews" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Broker Reviews</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — every review is based on a real funded account.
        </p>
      </header>
      {brokers.length === 0 ? (
        <EmptyState title="No reviews yet" description="Broker reviews will appear here." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brokers.map((broker) => (
            <BrokerCard key={broker.slug} broker={broker} />
          ))}
        </div>
      )}
    </div>
  );
}
