import type { Instrument } from "@/types";

export const qqq: Instrument = {
  symbol: "QQQ",
  name: "Invesco QQQ Trust",
  kind: "etf",
  exchange: "Nasdaq",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "美国账户 Tiered $0.35 起 / Fixed $1", totalEstimate: "美国账户支持", fxNote: "EEA 零售客户通常因无 KID 不能买入" },
    { brokerSlug: "schwab", commission: "$0", totalEstimate: "支持" },
    { brokerSlug: "trading212", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "公共目录列示 QQQ 不等于爱尔兰账户具备购买权限" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "通常缺少 PRIIPs KID；可选 ANAU/CNDX/EQQQ 等 UCITS ETF" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "仅可能是 Token" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供" },
  ],
};
