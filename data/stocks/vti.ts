import type { Instrument } from "@/types";

export const vti: Instrument = {
  symbol: "VTI",
  name: "Vanguard Total Stock Market ETF",
  kind: "etf",
  exchange: "NYSE Arca",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "美国账户 Tiered $0.35 起 / Fixed $1", totalEstimate: "美国账户支持", fxNote: "EEA 零售客户通常因无 KID 不能买入" },
    { brokerSlug: "schwab", commission: "$0", totalEstimate: "支持" },
    { brokerSlug: "trading212", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "公共目录可见不等于爱尔兰账户可买" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "通常缺少 PRIIPs KID" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "仅可能是 Token" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供" },
  ],
};
