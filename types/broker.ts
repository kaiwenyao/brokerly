/** Broker domain model. Populated later from data/brokers/* or a CMS/API. */
export interface Broker {
  slug: string;
  name: string;
  logo?: string;
  website?: string;
  /** ISO 3166-1 alpha-2 codes of supported client regions, e.g. ["US", "GB"] */
  regions: string[];
  summary: string;
  fees: BrokerFees;
  features: BrokerFeature[];
  pros: string[];
  cons: string[];
  /** Short display strings for the comparison table */
  feeSummary: FeeSummary;
  /** 0–5 editorial score, optional until reviews are written */
  rating?: number;
  lastUpdated?: string; // ISO 8601 date
}

export interface FeeSummary {
  usStock: string;
  usEtf: string;
  fx: string;
  custody: string;
  inactivity: string;
}

export interface BrokerFees {
  usStockCommission?: FeeAmount;
  usEtfCommission?: FeeAmount;
  optionsPerContract?: FeeAmount;
  fxMarkupPercent?: number;
  custodyFee?: FeeAmount;
  inactivityFee?: FeeAmount;
  withdrawalFee?: FeeAmount;
  /** Free-form rows for anything not covered above */
  extra?: FeeRow[];
}

export interface FeeAmount {
  amount: number;
  currency: string; // ISO 4217
  per?: "trade" | "month" | "year" | "withdrawal";
  note?: string;
}

export interface FeeRow {
  label: string;
  value: string;
  note?: string;
}

export interface BrokerFeature {
  key: string;
  label: string;
  supported: boolean;
  note?: string;
}
