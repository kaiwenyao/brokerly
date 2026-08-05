import type { Ranking } from "@/types";

/** 已有 USD 余额时，美股交易费用排名 */
export const usStocksUsdRanking: Ranking = {
  slug: "us-stocks-usd",
  title: "美股交易费用排名（已有 USD 余额）",
  description: "以普通网上自主下单的显性佣金为准；买入不收 SEC/FINRA 卖方费用。",
  lastUpdated: "2026-08-05",
  entries: [
    { rank: 1, brokerSlug: "schwab", reason: "网上美股/ETF $0（AAPL 1 股 $309.12 全包）" },
    { rank: 2, brokerSlug: "ibkr", reason: "Lite 同样 $0；Pro Fixed $1、Tiered 约 $0.35 起" },
    { rank: 3, brokerSlug: "trading212", reason: "USD 余额结算 $0，与美股券商持平" },
    { rank: 4, brokerSlug: "revolut", reason: "免费额度内 $0；超额后 0.25% 或 €1 取高" },
    { rank: 5, brokerSlug: "trade-republic", reason: "每笔 €1 + 价差，EUR 报价结算" },
    { rank: 6, brokerSlug: "robinhood", reason: "仅 Stock Token，非实际股票，不参与同口径比较" },
  ],
};
