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

**欧元资金买真实美国 ETF：** Trading 212 通常最优——一次 0.15% 换汇后，用 USD 余额买卖 VOO/VTI/SPY/QQQ 不再重复换汇。Robinhood 的 0.10% 看似更低，但提供的是 Token，且买入卖出各发生一次 FX。

**只定投 UCITS ETF：** Revolut 每月免费订单或符合条件的 ETP 投资计划可能零佣；Trade Republic 每笔 €1 适合合并成较少、较大的订单，不适合大量 €10–€50 手动碎股单。

## 中频：每月十至五十笔

| 平台 | 中频成本表现 |
|---|---|
| Schwab US | 合资格网上美股/ETF 仍 $0 |
| Trading 212 | USD 余额交易仍 $0，最适合预先一次换汇 |
| IBKR Pro Tiered | 每单至少约 $0.35 + 外部费；被动成交可获交易所返佣 |
| IBKR Pro Fixed | 每笔最低 $1，费用全包、成本可精确预估 |
| Trade Republic | 20 笔约 €20 固定费，另有价差 |
| Revolut Standard | 仅首笔免费，之后多数订单至少 €1 或 0.25% |
| Robinhood EU | 无佣金，但 0.10% FX 随换手率重复累积 |

## 高频：每月超过五十笔

显性费用上 **Schwab 和预持 USD 的 Trading 212** 依然最便宜。IBKR Pro Tiered 适合看重直接路由、流动性返佣和执行控制的用户，但 100 笔小单仅最低佣金就约 $35（未含外部费用）；若多为被动挂单成交，交易所返佣可抵减其中一部分。

其余三家的成本会迅速恶化：

- **Revolut**（Standard–Metal）：免费额度后 0.25% 或最低 €1，频繁小单快速累积；Ultra/Trading Pro 的 0.12% 较低但仍按成交额计费，还要算月度计划成本
- **Trade Republic**：€1 固定费使 100 笔订单至少约 €100 明确成本
- **Robinhood Europe**：每轮完整买卖约两次 0.10% FX，100% 换手一次约 0.20% 名义 FX 成本，且持有的是 Token

## 结论

频率本身不改变"已有美元选 Schwab、欧元买美国 ETF 选 Trading 212"的基本结论，但它会放大各平台的收费结构差异：**固定费（Trade Republic €1）惩罚高频小单，比例费（Revolut 0.25%）惩罚高频大单，重复 FX（Robinhood 0.10%×2）惩罚一切换手。**
`,
};
