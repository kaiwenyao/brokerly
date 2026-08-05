import type { Broker } from "@/types";

/**
 * Broker registry — CONTENT LAYER.
 *
 * Add one file per broker in this folder (e.g. `ibkr.ts`) exporting a
 * `Broker` object, then register it here. Pages never hard-code broker
 * data; they read through these accessors so the source can later be
 * swapped for a database, Headless CMS, or API without touching the UI.
 */
const brokers: Broker[] = [
  // PLACEHOLDER: import and register broker data files here.
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
