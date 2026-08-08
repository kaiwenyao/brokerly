import type { Article } from "@/types";

export const tradingFrequencyCost: Article = {
  slug: "trading-frequency-cost",
  title: "低频、中频、高频：交易频率如何决定哪家券商最便宜",
  description:
    "每月 5 笔、30 笔、100 笔交易下，六家平台的费用排序完全不同。固定费、按比例费和重复 FX 在不同频率下各显其形。",
  category: "策略",
  tags: ["fees", "ibkr", "schwab", "trading212", "trade-republic", "revolut", "robinhood"],
  author: { slug: "brokerly-research", name: "Brokerly 研究团队", role: "Research" },
  publishedAt: "2026-08-05",
  readingMinutes: 5,
  cover: "/images/research/trading-frequency-cost.jpg",
  body: `
## 低频：每月少于十笔

**美元资金：** Schwab 显性费用最优——AAPL、VOO 等普通网上订单为零佣金。IBKR Pro 每笔最低 $0.35（Tiered）或 $1（Fixed），在低频小额场景下成本占比偏高；其价值在于执行控制与换汇成本，而非最低佣金。

**爱尔兰账户定投美国指数：** 通常应买有 KID 的 UCITS ETF，而不是直接买 VOO/VTI/SPY/QQQ。选择 EUR 交易代码后，Trading 212 AutoInvest 与 Trade Republic Savings Plan 的合资格买入都可为 €0；Robinhood 的 0.10% 路径提供的是 Token，不是 ETF 份额。

**只定投 UCITS ETF：** Trading 212 AutoInvest、Trade Republic Savings Plan 与 Revolut 合资格 ETP Investment Plan 都可免买入佣金。Trade Republic 的 €1 是普通手动交易与卖出费用，不适用于 Savings Plan 的买入执行。

## 中频：每月十至五十笔

| 平台 | 中频成本表现 |
|---|---|
| Schwab US | 合资格网上美股/ETF 仍 $0 |
| Trading 212 | USD 余额交易仍 $0，最适合预先一次换汇 |
| IBKR Pro Tiered | 每单至少约 $0.35 + 外部费；被动成交可获交易所返佣 |
| IBKR Pro Fixed | 每笔最低 $1，费用全包、成本可精确预估 |
| Trade Republic | 20 笔手动交易约 €20；合资格 Savings Plan 买入执行 €0，另有价差 |
| Revolut Standard | 仅首笔免费，之后多数订单至少 €1 或 0.25% |
| Robinhood EU | 无佣金，但 0.10% FX 随换手率重复累积 |

## 高频：每月超过五十笔

显性费用上 **Schwab 和预持 USD 的 Trading 212** 依然最便宜。IBKR Pro Tiered 适合看重直接路由、流动性返佣和执行控制的用户，但 100 笔小单仅最低佣金就约 $35（未含外部费用）；若多为被动挂单成交，交易所返佣可抵减其中一部分。

其余三家的成本会迅速恶化：

- **Revolut**（Standard–Metal）：免费额度后 0.25% 或最低 €1，频繁小单快速累积；Ultra/Trading Pro 的 0.12% 较低但仍按成交额计费，还要算月度计划成本
- **Trade Republic**：100 笔普通手动订单至少约 €100；Savings Plan 买入不按该口径收费
- **Robinhood Europe**：每轮完整买卖约两次 0.10% FX，100% 换手一次约 0.20% 名义 FX 成本，且持有的是 Token

## 结论

频率会放大平台收费结构的差异：**普通手动订单的固定费惩罚高频小单，比例费惩罚高频大单，重复 FX 惩罚一切换手。** 对长期定投者，应把自动计划的专属费率与手动交易费率分开比较；爱尔兰账户买美国指数则优先选择 EUR 计价 UCITS ETF。
`,
};
