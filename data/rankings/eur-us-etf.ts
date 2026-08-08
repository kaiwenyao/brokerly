import type { Ranking } from "@/types";

/** 爱尔兰零售客户用 UCITS ETF 获取美国指数敞口的平台排名 */
export const eurUsEtfRanking: Ranking = {
  slug: "eur-us-etf",
  title: "爱尔兰账户定投美国指数 ETF 排名",
  description: "VOO、QQQ 通常因 PRIIPs KID 限制不可买；以下比较同指数 UCITS ETF 的定投体验。",
  lastUpdated: "2026-08-08",
  entries: [
    { rank: 1, brokerSlug: "trading212", reason: "EUR 计价 UCITS ETF 可零佣金、零 FX 自动投入；Pie 还能按目标权重定投多只 ETF" },
    { rank: 2, brokerSlug: "trade-republic", reason: "2,000+ ETF，合资格 Savings Plan 买入执行费 €0；普通手动交易和卖出通常 €1" },
    { rank: 3, brokerSlug: "revolut", reason: "合资格 ETP Investment Plan 买入免佣，但准确计划清单只能在 app 内确认" },
    { rank: 4, brokerSlug: "ibkr", reason: "市场覆盖和转户能力强，但欧洲 ETF 定投按标准佣金收费，小额月投受最低费影响" },
    { rank: 5, brokerSlug: "schwab", reason: "美国账户适合已有美元的合资格客户，不是爱尔兰零售客户定投 UCITS ETF 的本地化路径" },
    { rank: 6, brokerSlug: "robinhood", reason: "仅 Token 衍生品，无实际 ETF 份额" },
  ],
};
