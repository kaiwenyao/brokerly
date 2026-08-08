import type { Instrument } from "@/types";

export const vti: Instrument = {
  symbol: "VTI",
  name: "Vanguard Total Stock Market ETF",
  kind: "etf",
  exchange: "NYSE Arca",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "Pro Tiered $0.35 起 / Fixed $1", totalEstimate: "以实际权限为准", fxNote: "美国账户/Pro 不等于 PRIIPs 专业客户" },
    { brokerSlug: "schwab", commission: "$0（合资格账户）", totalEstimate: "爱尔兰居民不可新增", fxNote: "既有仓位只能持有或卖出" },
    { brokerSlug: "trading212", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "公共目录可见不等于爱尔兰账户可买" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "通常缺少 PRIIPs KID" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "仅可能是 Token" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供" },
  ],
};
