import type { Instrument } from "@/types";

/**
 * AAPL — 基准价 $309.12（2026-08-05 约 16:26 UTC）。
 * 成本为“已有 USD 余额、买入 1 股”的平台口径；买入不收 SEC/FINRA 卖方监管费。
 */
export const aapl: Instrument = {
  symbol: "AAPL",
  name: "Apple Inc.",
  kind: "stock",
  exchange: "Nasdaq",
  currency: "USD",
  costs: [
    { brokerSlug: "ibkr", commission: "Tiered $0.35 起 / Fixed $1", totalEstimate: "$309.47 起（Tiered）", fxNote: "USD 余额无需换汇；Fixed 为 $310.12" },
    { brokerSlug: "schwab", commission: "$0", totalEstimate: "$309.12", fxNote: "网上交易" },
    { brokerSlug: "trading212", commission: "$0", totalEstimate: "$309.12", fxNote: "选择 USD 余额结算" },
    { brokerSlug: "trade-republic", commission: "€1", totalEstimate: "EUR 成交额 + €1", fxNote: "以交易场所 EUR 报价成交，另加价差/第三方费" },
    { brokerSlug: "robinhood", commission: "$0", totalEstimate: "等值 AAPL Token + 0.10% FX", fxNote: "Token 衍生品，非实际股票；买卖各收 0.10%" },
    { brokerSlug: "revolut", commission: "$0（月度免费额度内）", totalEstimate: "$309.12 等值", fxNote: "超额后 0.25% 或 €1 取高" },
  ],
};
