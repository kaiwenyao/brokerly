import type { Instrument } from "@/types";

/**
 * VOO — 基准价 $709.35（2026-08-05 约 16:26 UTC）。
 * 注意：欧洲平台常见的“标普 500 ETF”多为独立 UCITS 基金（如 VUSA/VUAA），并非 VOO。
 */
export const voo: Instrument = {
  symbol: "VOO",
  name: "Vanguard S&P 500 ETF",
  kind: "etf",
  exchange: "NYSE Arca",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "美国账户 Tiered $0.35 起 / Fixed $1", totalEstimate: "美国账户支持", fxNote: "EEA 零售客户通常因无 KID 不能买入" },
    { brokerSlug: "schwab", commission: "$0", totalEstimate: "$709.35", fxNote: "网上交易" },
    { brokerSlug: "trading212", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "公共目录列示 VOO 不等于爱尔兰账户具备购买权限" },
    { brokerSlug: "trade-republic", commission: "—", totalEstimate: "EEA 零售通常不可买", fxNote: "通常缺少 PRIIPs KID；可选 SPYL/VUAA/CSPX 等 UCITS ETF" },
    { brokerSlug: "robinhood", commission: "—", totalEstimate: "不能持有实际 VOO", fxNote: "若有相应 Token 也仅是衍生合约" },
    { brokerSlug: "revolut", commission: "—", totalEstimate: "不提供美国本土 VOO", fxNote: "ETF 仅限欧盟注册产品，需选 UCITS 替代品" },
  ],
};
