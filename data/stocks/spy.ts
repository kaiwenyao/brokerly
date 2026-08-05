import type { Instrument } from "@/types";

export const spy: Instrument = {
  symbol: "SPY",
  name: "SPDR S&P 500 ETF Trust",
  kind: "etf",
  exchange: "NYSE Arca",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "Tiered $0.35 起 / Fixed $1", totalEstimate: "支持" },
    { brokerSlug: "schwab", commission: "$0", totalEstimate: "支持" },
    { brokerSlug: "trading212", commission: "$0", totalEstimate: "支持", fxNote: "官方产品页可查" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "公开目录未确认" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "仅可能是 Token" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供" },
  ],
};
