import type { Instrument } from "@/types";

export const qqq: Instrument = {
  symbol: "QQQ",
  name: "Invesco QQQ Trust",
  kind: "etf",
  exchange: "Nasdaq",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "Tiered $0.35 起 / Fixed $1", totalEstimate: "支持" },
    { brokerSlug: "schwab", commission: "$0", totalEstimate: "支持" },
    { brokerSlug: "trading212", commission: "$0", totalEstimate: "支持", fxNote: "官方列示 Nasdaq，ISIN US46090E1038" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "公开目录未确认" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "仅可能是 Token" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供" },
  ],
};
