import type { Instrument } from "@/types";

export const qqq: Instrument = {
  symbol: "QQQ",
  name: "Invesco QQQ Trust",
  kind: "etf",
  exchange: "Nasdaq",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "Pro Tiered $0.35 起 / Fixed $1", totalEstimate: "以实际权限为准", fxNote: "美国账户/Pro 不等于 PRIIPs 专业客户；Recurring 按 Fixed 口径估算" },
    { brokerSlug: "schwab", commission: "$0（合资格账户）", totalEstimate: "爱尔兰居民不可新增", fxNote: "Schwab 官方仅允许 EEA 居民持有或卖出现有美国 ETP" },
    { brokerSlug: "trading212", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "公共目录列示 QQQ 不等于爱尔兰账户具备购买权限" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "通常缺少 PRIIPs KID；可选 ANAU/CNDX/EQQQ 等 UCITS ETF" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "仅可能是 Token" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供" },
  ],
};
