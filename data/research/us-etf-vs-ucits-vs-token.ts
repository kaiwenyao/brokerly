import type { Article } from "@/types";

export const usEtfVsUcitsVsToken: Article = {
  slug: "us-etf-vs-ucits-vs-token",
  title: "美国本土 ETF、UCITS ETF 与 Stock Token：你买到的到底是什么？",
  description:
    "跟踪同一个标普 500 指数，VOO、VUSA 和 Robinhood 的 ETF Token 是三种完全不同的东西。证券性质决定你的权利、费用结构和可转移性。",
  category: "知识库",
  tags: ["etf", "ucits", "robinhood", "revolut", "trading212", "trade-republic"],
  author: { slug: "brokerly-research", name: "Brokerly 研究团队", role: "Research" },
  publishedAt: "2026-08-05",
  readingMinutes: 5,
  body: `
## 三种"标普 500 敞口"的本质区别

| 类型 | 实际持有什么 | 示例 | 主要区别 |
|---|---|---|---|
| 美国本土 ETF | 美国注册基金的实际份额，NYSE Arca/Nasdaq 交易 | VOO、VTI、SPY、QQQ | 美国 ISIN、美元交易，投资者持有实际权益 |
| UCITS ETF | 爱尔兰、卢森堡等地注册的独立欧洲基金份额 | VUSA、VUAA 等 | 与 VOO 不是同一证券；ISIN、TER、分红方式、交易币种可能不同 |
| 合成 UCITS ETF | 通过互换等衍生合约复制指数的 UCITS 基金 | 取决于具体基金 | 仍是真实基金份额，但敞口主要来自衍生品 |
| Stock Token | 与 Robinhood Europe 订立的衍生合约 | 跟踪某股票/ETF 的 Token | 不拥有基础证券、无投票权、不能转户或上链 |

**跟踪同一指数 ≠ 同一只证券。** 基金注册地、ISIN、资产规模、费用率、分红或累积方式、交易场所都可能不同。

## 六家平台的产品支持实况

| 平台 | 美股 | 美国本土 ETF（VOO 等） | UCITS ETF |
|---|---|---|---|
| IBKR US | 真实股票 | **支持** | 支持欧洲市场产品 |
| Schwab US | 真实股票 | **支持** | 经 Schwab Global 等渠道，非同一执行路径 |
| Trading 212 | 真实股票（Invest） | **官方目录明确列示 VOO/VTI/SPY/QQQ** | 支持大量 UCITS ETF |
| Trade Republic | 真实证券 | 公开目录未确认 | 核心产品范围（2,000+，清单以 app 为准） |
| Robinhood EU | **仅 Stock Token** | 不持有 ETF，仅可能的 Token | 不提供传统 UCITS 持仓 |
| Revolut EU | 真实股票（受益所有人） | **不支持** | 欧盟注册非复杂 ETF |

## 为什么这对费用比较至关重要

把 Robinhood 的 0.10% 与 Trading 212 的 0.15% 直接比较会得出错误结论：前者买的是衍生合约（且买卖各收一次 FX），后者买的是真实 ETF 份额。同样，Revolut 上"免佣买入标普 500 ETF"买到的是一只独立的 UCITS 基金——费用、分红和税务处理都与 VOO 不同。

同一品牌的不同账户实体也可能展示不同产品清单：Trading 212 欧洲版 FX 为 0.15%，澳大利亚实体为 0.40%；Trade Republic 官方也明确表示，并非其交易合作方列出的所有 ETF 都一定可在其平台交易。下单前应以自己账户 app 内的目录和订单预览为准。
`,
};
