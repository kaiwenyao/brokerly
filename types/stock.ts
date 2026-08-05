/** A tradable instrument page (stock or ETF). */
export interface Instrument {
  symbol: string; // e.g. "AAPL"
  name: string;
  kind: "stock" | "etf";
  exchange?: string;
  currency?: string;
  /** Per-broker trading cost rows; filled from data later */
  costs: InstrumentCost[];
}

export interface InstrumentCost {
  brokerSlug: string;
  commission?: string;
  fxNote?: string;
  totalEstimate?: string;
}
