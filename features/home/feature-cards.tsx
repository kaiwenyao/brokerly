import {
  ArrowLeftRight,
  Calculator,
  CandlestickChart,
  Landmark,
  PieChart,
  Star,
} from "lucide-react";
import { FeatureCard } from "@/components/cards/feature-card";
import { Section } from "@/components/section";

const FEATURES = [
  {
    icon: Landmark,
    title: "Broker Comparison",
    description: "Placeholder — compare brokers across every fee dimension.",
    href: "/brokers",
  },
  {
    icon: CandlestickChart,
    title: "US Stock Trading Cost",
    description: "Placeholder — per-symbol commission and fee breakdowns.",
    href: "/stocks",
  },
  {
    icon: PieChart,
    title: "US ETF Trading Cost",
    description: "Placeholder — ETF trading and ongoing cost comparison.",
    href: "/etf",
  },
  {
    icon: ArrowLeftRight,
    title: "FX Cost Comparison",
    description: "Placeholder — currency conversion markups by broker.",
    href: "/fx",
  },
  {
    icon: Calculator,
    title: "Interactive Calculator",
    description: "Placeholder — estimate your total cost per trade.",
    href: "/calculator",
  },
  {
    icon: Star,
    title: "Broker Reviews",
    description: "Placeholder — in-depth, hands-on broker reviews.",
    href: "/reviews",
  },
];

export function FeatureCards() {
  return (
    <Section title="Everything about trading costs" description="Placeholder section description.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.href} {...feature} />
        ))}
      </div>
    </Section>
  );
}
