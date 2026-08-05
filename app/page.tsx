import type { Metadata } from "next";
import { Hero } from "@/features/home/hero";
import { FeatureCards } from "@/features/home/feature-cards";
import { ComparisonEntry } from "@/features/home/comparison-entry";
import { LatestResearch } from "@/features/home/latest-research";
import { PopularBrokers } from "@/features/home/popular-brokers";
import { Faq } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Brokerly — Compare Global Broker Trading Fees",
  description:
    "Placeholder — compare US stock, ETF and FX trading costs across global brokers.",
  path: "/",
});

/** Placeholder FAQ copy — real Q&A supplied later. */
const HOME_FAQ: FaqItem[] = [
  { question: "Placeholder question one?", answer: "Placeholder answer — to be supplied." },
  { question: "Placeholder question two?", answer: "Placeholder answer — to be supplied." },
  { question: "Placeholder question three?", answer: "Placeholder answer — to be supplied." },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Hero />
      <FeatureCards />
      <ComparisonEntry />
      <LatestResearch />
      <PopularBrokers />
      <Section title="Frequently asked questions">
        <Faq items={HOME_FAQ} />
      </Section>
      <Section>
        <Newsletter />
      </Section>
    </div>
  );
}
