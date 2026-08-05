import type { Instrument } from "@/types";

export const vti: Instrument = {
  symbol: "VTI",
  name: "Vanguard Total Stock Market ETF",
  kind: "etf",
  exchange: "NYSE Arca",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "$0（Lite）", totalEstimate: "支持", fxNote: "真实美国本土 ETF" },
    { brokerSlug: "schwab", commission: "$0", totalEstimate: "支持" },
    { brokerSlug: "trading212", commission: "$0", totalEstimate: "支持", fxNote: "官方目录列示 NYSE VTI" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "公开目录未确认" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "仅可能是 Token" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供" },
  ],
};
