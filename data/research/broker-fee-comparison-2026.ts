import type { Article } from "@/types";

export const brokerFeeComparison2026: Article = {
  slug: "broker-fee-comparison-2026",
  title: "六家券商美股与 ETF 交易费用深度对比（2026 年 8 月）",
  description:
    "IBKR、Schwab、Trading 212、Trade Republic、Robinhood Europe、Revolut 六家平台的显性佣金、外汇成本与高频累积费用全景对比。",
  category: "费用对比",
  tags: ["ibkr", "schwab", "trading212", "trade-republic", "robinhood", "revolut", "us-stocks", "etf"],
  author: {
    slug: "brokerly-research",
    name: "Brokerly 研究团队",
    role: "Research",
  },
  publishedAt: "2026-08-05",
  readingMinutes: 12,
  body: `
## 口径与前提

IBKR 与 Charles Schwab 为美国版账户；Trading 212、Trade Republic、Robinhood 和 Revolut 为欧洲版账户。本文不讨论开户资格与税务，只计算股票和 ETF 相关交易成本。所有费率核对截至 **2026 年 8 月 5 日**。

示例基准：AAPL **$309.12**、VOO **$709.35**（当日约 16:26 UTC 市场价）；EUR/USD 按欧洲央行当日参考汇率 **€1 = $1.1554**。ECB 明确说明其参考汇率主要用于信息和估值，并非可保证成交的交易汇率。

所有例子均作以下处理：

- 假设使用网上自主下单，而非电话或人工经纪服务
- 买入例子不含 SEC Section 31、FINRA TAF（通常只在卖出时收取）
- 不计买卖价差（随时点、流动性、订单类型变化）
- 不纳入 ETF 内部年度管理费（反映在净值中，非下单时扣收）
- 结果四舍五入至美分或欧分

## 核心结论

| 使用场景 | 费用优势平台 | 核心原因 |
|---|---|---|
| 已持有美元，买卖真实美股 | **Schwab US** | 普通网上美股交易佣金 $0；买入不产生卖方监管费。IBKR Pro 每笔最低 $0.35（Tiered）或 $1（Fixed） |
| 欧元资金买真实美国本土 ETF（VOO/VTI/SPY/QQQ） | **Trading 212 Invest** | 官方目录列有上述美国 ETF；佣金 $0，FX 仅 0.15%，可持有 USD 余额 |
| 欧元兑换美元后长期交易 | **IBKR 自动换汇 / Revolut 工作日换汇** | IBKR 加点约 0.03%；Revolut 工作日额度内无明确换汇费（自有浮动汇率） |
| 高频买卖且使用美元余额 | **Schwab / Trading 212** | 两者合资格交易均可零显性佣金；IBKR Pro Tiered 每笔 $0.35 起，但可透传交易所返佣 |
| 小额价格敞口，不要求证券所有权 | **Robinhood Europe** | 每单仅 0.10% FX，但持有的是 Stock Token 衍生品 |
| 定期买 UCITS ETF | **Revolut 投资计划 / Trade Republic** | Revolut 部分 ETP 计划买单免佣；Trade Republic 每笔 €1 适合大额少笔 |

## 全部费用横向比较

| 费用项目 | IBKR US | Schwab US | Trading 212 | Trade Republic | Robinhood EU | Revolut EU |
|---|---|---|---|---|---|---|
| 美股/ETF 佣金 | **Pro Tiered $0.0005–0.0035/股（最低 $0.35）；Pro Fixed $0.005/股（最低 $1、最高成交额 1%）**；另有 Lite 方案为 $0 但依赖订单流付款 | 网上 $0；人工 $25 | $0 | €1 外部结算费（碎股同） | $0（Token） | 每月 1–10 笔免费；超额 0.25% 或 €1 取高 |
| SEC Section 31（卖出） | $0.0000206×卖出额 | 卖出时转嫁 | 以订单预览为准（帮助页为旧值） | 未单列 | 不单列 | 从卖出款中扣除 |
| FINRA TAF（卖出） | $0.000195/股，最高 $9.79 | 同左 | $0.000195×股数 | 未单列 | 不适用 | 可能扣除 |
| EUR→USD 换汇 | 自动 ≈0.03%；手动 0.20bp 起、最低 $2 | 小额档位约 1% | +0.15%，可持 USD 余额 | 无独立 USD 余额 | 买卖各 0.10% | 工作日额度内无明确费；周末 1% |
| 平台/账户费 | $0 | $0 | $0 | 未列月费 | 无其他费用 | Standard 免费；付费计划 €3.99–€55/月 |
| 托管费 | $0 | $0 | $0 | 未单列 | Token 记录 | $0（转出 $35/持仓） |
| 隐性成本/收入来源 | Pro 为显性佣金，不依赖订单流付款（Lite 方案则依赖） | 订单流付款/返佣 | FX + 股票出借 | 价差、第三方费 | 发行人风险 | 超额佣金、付费计划、FX |

## 最重要的产品区别

**VOO、VTI、SPY、QQQ 是美国注册、美国上市的 ETF；欧洲平台提供的"标普 500 ETF"经常是另一个独立的 UCITS 基金，而不是 VOO；Robinhood Europe 的 Token 更不是 ETF 份额，而是衍生合约。** 跟踪同一指数不代表证券、注册地、ISIN、费用率、分红方式或交易场所相同。

## 最终结论

**纯粹按交易费用看，已有美元时 Schwab 与使用 USD 余额的 Trading 212 最便宜；欧元资金且要求真实美国本土 ETF 时，Trading 212 的"零佣金 + 0.15% 一次性换汇 + 美元余额"组合最均衡。IBKR Pro 的强项不在最低佣金，而在 0.03% 的换汇加点、交易所返佣透传与执行控制。**

- Schwab 的强项是美元余额下的零佣金，而不是小额换汇——欧元先经 Revolut 工作日或 IBKR 换成美元再入金通常更省。
- Robinhood Europe 的 0.10% 不能与传统券商佣金直接横向理解：它是 Token 衍生合约，买卖各收一次 FX。
- Revolut 和 Trade Republic 的核心优势是欧洲本地化与 UCITS ETF 体验，而不是直接持有美国本土 VOO。
`,
};
