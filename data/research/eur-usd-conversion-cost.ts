import type { Article } from "@/types";

export const eurUsdConversionCost: Article = {
  slug: "eur-usd-conversion-cost",
  title: "一千欧元兑换美元：六条路径的真实成本对比",
  description:
    "以 ECB 参考汇率为基准，对比 Revolut、IBKR、Trading 212、Schwab 等路径把 €1,000 换成美元的实际到账与适用场景。",
  category: "换汇",
  tags: ["fx", "ibkr", "revolut", "trading212", "schwab", "robinhood", "trade-republic"],
  author: { slug: "brokerly-research", name: "Brokerly 研究团队", role: "Research" },
  publishedAt: "2026-08-05",
  readingMinutes: 6,
  cover: "/images/research/eur-usd-conversion-cost.jpg",
  body: `
## 可比假设

基准为 ECB 2026 年 8 月 5 日参考汇率：**€1,000 × 1.1554 = $1,155.40**——这是无费用理论上限。以下只计算平台侧明确的汇率加点或最低佣金，不含银行卡发卡行、跨境汇款、中转行和收款银行费用。

## 实际到账对比

| 排名 | 路径 | 费用假设 | 理论得到美元 | 相对基准损失 | 可提取 USD |
|---:|---|---|---:|---:|---|
| 1 | **Revolut Standard 工作日** | 未超当月 €1,000 额度，明确手续费 0%；用其浮动汇率 | 约 $1,155.40 | 明确费用 €0，实际汇差未知 | 是 |
| 2 | **IBKR 自动换汇** | 0.03% 加点 | $1,155.05 | 约 €0.30 | 用于覆盖交易，非独立现金换汇 |
| 3 | **Trading 212 直接兑换** | 0.15% | $1,153.67 | €1.50 | 可在多币种余额内持有 |
| 4 | **IBKR 手动现货 FX** | 计算值低于最低额，收 $2 | $1,153.40 | 约 €1.73 | 是 |
| 5 | **Schwab 小额换汇** | 约 1% | $1,143.85 | €10.00 | 是，但入金路径或有银行费用 |
| — | Robinhood Europe | 每次下单 0.10% | $1,154.24 的 Token 购买力 | €1.00 | **否** |
| — | Trade Republic | 无独立 USD 兑换路径 | 不适用 | 不适用 | 否 |
| — | Revolut 周末 | 1% 周末费 | 约 $1,143.85 | €10.00 + 汇差 | 是 |

## 两个容易忽视的细节

**IBKR 自动 vs 手动。** 自动换汇 0.03% 成本低于手动换汇的 $2 最低佣金，但它主要在系统为完成交易而自动转换时适用；若目标是获得并长期持有明确的美元现金余额，€1,000 规模的手动 FX 订单反而被 $2 最低佣金主导。

**Trading 212 的入金门槛。** 银行卡、Apple Pay、Google Pay 累计入金前 €2,000 免费，超过后收 0.7%。若门槛已用完，€1,000 会先产生 €7 入金费，只剩 €993 换汇，再扣 0.15% FX 后约得 **$1,145.59**，明显落后于 IBKR 手动换汇。银行转账则不收入金费。

## 按最终用途选择路径

| 最终用途 | 更合理的路径 |
|---|---|
| 可自由持有、转账的美元现金 | 工作日 Revolut；其次 IBKR 手动 FX |
| 马上在 IBKR 买美股/ETF | EUR 汇入 IBKR，自动换汇约 0.03% |
| 在 Trading 212 长期交易 | 免费门槛内用银行卡；超额后银行转账，再一次 0.15% 换成 USD |
| 在 Schwab 买证券 | 先在外部低成本换成美元再入金，避免约 1% 小额换汇 |
| 在 Robinhood Europe 投资 | 只能获得 Token 购买力，不能作为换汇渠道 |
| 在 Trade Republic 投资 | 保持 EUR，买 EUR 报价证券 |
`,
};
