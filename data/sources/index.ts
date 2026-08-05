import type { Source } from "@/types";
import { getBrokerBySlug } from "@/data/brokers";
import { ibkrSources } from "./ibkr";
import { schwabSources } from "./schwab";
import { trading212Sources } from "./trading212";
import { tradeRepublicSources } from "./trade-republic";
import { robinhoodSources } from "./robinhood";
import { revolutSources } from "./revolut";
import { regulatorSources } from "./regulators";

/**
 * Source registry — CONTENT LAYER.
 *
 * Rates vary by country/entity (especially Revolut, Trade Republic,
 * Trading 212), so each source keeps its own entity/accountType/checkedAt
 * rather than one global rate per brand.
 */
const brokerSources: Source[] = [
  ...ibkrSources,
  ...schwabSources,
  ...trading212Sources,
  ...tradeRepublicSources,
  ...robinhoodSources,
  ...revolutSources,
];

export function getAllSources(): Source[] {
  return [...brokerSources, ...regulatorSources];
}

export function getSourcesByBroker(slug: string): Source[] {
  return brokerSources.filter((s) => s.brokerSlug === slug);
}

export interface SourceGroup {
  /** Broker slug, or undefined for the regulators/benchmarks group */
  brokerSlug?: string;
  name: string;
  entity: string;
  sources: Source[];
}

export function getSourceGroups(): SourceGroup[] {
  const slugs = [...new Set(brokerSources.map((s) => s.brokerSlug!))];
  const groups: SourceGroup[] = slugs.map((slug) => {
    const sources = getSourcesByBroker(slug);
    return {
      brokerSlug: slug,
      name: getBrokerBySlug(slug)?.name ?? slug,
      entity: sources[0]?.entity ?? "",
      sources,
    };
  });
  groups.push({
    name: "监管机构与汇率基准",
    entity: "SEC / FINRA / ECB",
    sources: regulatorSources,
  });
  return groups;
}
