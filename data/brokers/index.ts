import type { Broker } from "@/types";
import { ibkr } from "./ibkr";
import { schwab } from "./schwab";
import { trading212 } from "./trading212";
import { tradeRepublic } from "./trade-republic";
import { robinhood } from "./robinhood";
import { revolut } from "./revolut";

/**
 * Broker registry — CONTENT LAYER.
 *
 * One file per broker; register it here. Pages read through these
 * accessors so the source can later be swapped for a database,
 * Headless CMS, or API without touching the UI.
 */
const brokers: Broker[] = [
  ibkr,
  schwab,
  trading212,
  tradeRepublic,
  robinhood,
  revolut,
];

export function getAllBrokers(): Broker[] {
  return brokers;
}

export function getBrokerBySlug(slug: string): Broker | undefined {
  return brokers.find((b) => b.slug === slug);
}

export function getBrokerSlugs(): string[] {
  return brokers.map((b) => b.slug);
}
