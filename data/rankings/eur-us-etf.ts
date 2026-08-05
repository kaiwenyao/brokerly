import type { Ranking } from "@/types";

/** 欧元资金买真实美国本土 ETF（VOO/VTI/SPY/QQQ）的平台排名 */
export const eurUsEtfRanking: Ranking = {
  slug: "eur-us-etf",
  title: "欧元资金买美国本土 ETF 排名",
  description: "要求直接持有 VOO/VTI/SPY/QQQ 等美国注册 ETF 的实际份额。",
  lastUpdated: "2026-08-05",
  entries: [
    { rank: 1, brokerSlug: "trading212", reason: "零佣金 + 一次性 0.15% 换汇 + USD 余额长期交易，最均衡" },
    { rank: 2, brokerSlug: "ibkr", reason: "自动换汇约 0.03% 更低，但 Pro 需叠加每笔 $0.35–$1 佣金；Lite 可兼得" },
    { rank: 3, brokerSlug: "schwab", reason: "佣金 $0 但小额换汇约 1%，适合已有低成本美元来源" },
    { rank: 4, brokerSlug: "revolut", reason: "不提供美国本土 ETF，仅欧盟注册替代品" },
    { rank: 5, brokerSlug: "trade-republic", reason: "VOO 等是否可交易，公开官方目录未确认" },
    { rank: 6, brokerSlug: "robinhood", reason: "仅 Token 衍生品，无实际 ETF 份额" },
  ],
};
