import type { Ranking } from "@/types";

/** €1,000 → USD 换汇成本排名（ECB 基准 $1,155.40，2026-08-05） */
export const eurUsdFxRanking: Ranking = {
  slug: "eur-usd-fx",
  title: "EUR→USD 换汇成本排名（€1,000）",
  description: "以 ECB 参考汇率为理论上限，按平台侧明确费用排序。",
  lastUpdated: "2026-08-05",
  entries: [
    { rank: 1, brokerSlug: "revolut", score: 1155.4, reason: "工作日、额度内无明确手续费（约 $1,155.40）；实际用 Revolut 浮动汇率" },
    { rank: 2, brokerSlug: "ibkr", score: 1155.05, reason: "自动换汇 0.03% 加点（$1,155.05）；手动 FX 因 $2 最低佣金排第四（$1,153.40）" },
    { rank: 3, brokerSlug: "trading212", score: 1153.67, reason: "0.15% FX（$1,153.67）；注意银行卡入金超 €2,000 累计后收 0.7%" },
    { rank: 4, brokerSlug: "schwab", score: 1143.85, reason: "小额换汇档位约 1%（$1,143.85）" },
    { rank: 5, brokerSlug: "robinhood", score: 1154.24, reason: "0.10% 但仅形成 Token 购买力，不产生可提取 USD" },
    { rank: 6, brokerSlug: "trade-republic", score: 0, reason: "无独立 EUR→USD 现金兑换路径，不适用" },
  ],
};
