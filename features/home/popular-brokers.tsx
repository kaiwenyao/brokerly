import { Section } from "@/components/section";
import { BrokerCard } from "@/components/cards/broker-card";
import { EmptyState } from "@/components/empty-state";
import { getAllBrokers } from "@/data/brokers";

export function PopularBrokers() {
  const brokers = getAllBrokers().slice(0, 6);

  return (
    <Section
      title="Popular brokers"
      description="Placeholder — most-viewed broker profiles."
    >
      {brokers.length === 0 ? (
        <EmptyState
          title="No brokers yet"
          description="Broker profiles will appear here once added to the data layer."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brokers.map((broker, index) => (
            <BrokerCard key={broker.slug} broker={broker} rank={index + 1} />
          ))}
        </div>
      )}
    </Section>
  );
}
