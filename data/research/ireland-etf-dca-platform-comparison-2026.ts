import type { Article } from "@/types";

export const irelandEtfDcaPlatformComparison2026: Article = {
  slug: "ireland-etf-dca-platform-comparison-2026",
  title: "爱尔兰 ETF 定投平台怎么选：QQQ、VOO 与其他指数全成本对比（2026）",
  description:
    "从自动定投、交易与换汇费用、ETF 内部费率和产品覆盖，比较 Trading 212、Trade Republic、Lightyear、Revolut、IBKR 与 DEGIRO。",
  category: "定投",
  tags: [
    "etf",
    "dca",
    "ireland",
    "qqq",
    "voo",
    "ucits",
    "trading212",
    "trade-republic",
    "revolut",
    "ibkr",
    "degiro",
    "lightyear",
  ],
  author: {
    slug: "brokerly-research",
    name: "Brokerly 研究团队",
    role: "Research",
  },
  publishedAt: "2026-08-08",
  readingMinutes: 14,
  cover: "/images/research/ireland-etf-dca-platform-comparison-2026.jpg",
  body: `
## 结论先行

本文假定你是**居住在爱尔兰、以欧元收入投资、被券商归类为零售客户**的个人，目标是长期定投真实 ETF，而不是 CFD 或 Stock Token。费率和产品规则核对截至 **2026 年 8 月 8 日**；产品清单会随账户实体、居住国和 KID 状态改变，下单前仍应以自己账户中的 ISIN 与成本预览为准。

如果每月投入 €100–€1,000，并选择有欧元交易代码的 UCITS ETF，最实用的结论是：

- **多只 ETF 自动按比例投入：Trading 212 最顺手。** Pie 可把多只 ETF 组成组合并按目标权重自动投入，也支持单只产品定投；ETF 交易和托管不收费。要选 EUR 交易代码，因为 Pie 只能用账户主货币下单，外币产品每次都会触发 0.15% FX。规则见 [Pies & AutoInvest 说明](https://helpcentre.trading212.com/hc/en-us/articles/30661163244317-Pies-AutoInvest-Introduction)和[多币种限制](https://helpcentre.trading212.com/hc/en-us/articles/34159237080861-Can-I-choose-the-currency-in-which-to-buy-sell-assets-for-Invest-accounts)。
- **单只或多只 ETF 分别设储蓄计划：Trade Republic 的明确费用最低。** 股票与 ETF Savings Plan 买入执行费为 €0，可设每周、每月两次、每月或每季；未来卖出每笔收 €1 外部结算费。官方说明见[创建储蓄计划](https://support.traderepublic.com/en-ie/768)和[储蓄计划费用](https://support.traderepublic.com/en-ie/760-What-are-savings-plans)。
- **想要零 ETF 佣金、清晰目录和简单组合：Lightyear 很有竞争力。** EUR 计价 ETF 的执行费、托管费和 FX 都是 €0；Plan 支持每周、每两周或每月自动投入。其公开筛选器列出 482 只 ETF 与货币市场基金，少于大型全市场券商，但主流指数覆盖较好。见[费用表](https://lightyear.com/en-ie/pricing)、[Plans](https://lightyear.com/en-ie/plans)和[基金目录](https://lightyear.com/en/funds/explore)。
- **已经把 Revolut 当主账户且只买一两只主流 ETF：可优先看 Revolut。** 只有带 Investment Plan 标记的 ETP 才能享受计划内买入免佣；一次性和定期买入即使超过月度免费单数也仍免佣，但基金费用和可能的换汇费仍存在。准确的合资格清单只能在 app 内确认。见[Investment Plans 说明](https://help.revolut.com/en-IE/help/wealth/stocks/getting-started-with-etf-s/etfs-investment-plans/)和[投资服务费率表](https://www.revolut.com/en-IE/legal/investment-services-terms/)。
- **重视市场覆盖、订单路由和长期转户能力：IBKR 最强，但小额月投不一定最便宜。** 定投只适用于可碎股交易的美国、加拿大和欧洲股票/ETF，标准佣金照收；欧洲 ETF Tiered 通常为成交额 0.05%、每单最低 €1.25，另有交易场所费用。每月只买 €100 时，€1.25 已等于 1.25%。见 [IBKR 定投规则](https://www.interactivebrokers.com/campus/glossary-terms/dollar-cost-averaging-dca/)和[欧洲股票/ETF 佣金](https://www.interactivebrokers.ie/en/pricing/commissions-stocks-europe.php?re=europe)。
- **DEGIRO 适合愿意手动下单的人，不适合“设好后不管”的定投。** 官方明确不提供 ETF 自动直接投资；Core Selection 每笔 €1，其他 ETF 通常为 €2 佣金加 €1 handling fee。见[自动投资说明](https://www.degiro.ie/helpcenter/faq/%20trading/1127)和[爱尔兰费率表](https://www.degiro.ie/fees)。

因此，没有脱离使用方式的唯一第一名：**组合自动化选 Trading 212；免费储蓄计划与大目录选 Trade Republic；界面与费用透明度选 Lightyear；已有 Revolut 生态且目标 ETF 合资格时选 Revolut；大额、多市场和专业功能选 IBKR。**

## 爱尔兰零售客户通常不能直接定投 VOO 与 QQQ

VOO 和 QQQ 是美国注册、美国上市的 ETF。欧盟 PRIIPs 规则要求向零售投资者销售基金等 packaged products 前提供 KID；欧盟委员会对 [PRIIPs KID](https://finance.ec.europa.eu/consumer-finance-and-payments/retail-financial-services/key-information-documents-packaged-retail-and-insurance-based-investment-products-priips_en) 的说明和法规第 5 条都明确了这一前置信息义务。

美国 ETF 发行人通常不制作符合 EU 要求的 KID，所以爱尔兰普通零售账户一般不能新买 VOO、QQQ、SPY 或 VTI。IBKR 明确说明 EEA/UK 零售客户在没有 KID 时会被阻止买入美国 ETF，并建议使用欧洲发行的等价 ETF；DEGIRO Ireland 也说明产品还必须获准在客户所在国销售并具有适用语言的 KID。参见 [IBKR 的 PRIIPs 说明](https://www.interactivebrokers.com/campus/trading-lessons/trading-overseas-with-ibkr/)与 [DEGIRO Ireland 的产品限制说明](https://www.degiro.ie/helpdesk/trading-possibilities/why-certain-products-are-not-available-degiro-ireland)。

**券商公共网页能搜到 VOO/QQQ，不代表你的爱尔兰账户可下买单。** 公共目录可能覆盖多个账户实体、国家和客户类别；真正应核对的是登录后的 Buy 按钮、KID、ISIN 与订单预览。专业客户等特殊身份可能有不同结果，本文不把它当作普通定投路径。

实际操作中，应把“定投 VOO/QQQ”翻译成“定投跟踪相同指数、可在爱尔兰销售的 UCITS ETF”：

| 想要的指数 | 美国 ETF（通常不可新买） | 爱尔兰零售客户可研究的 UCITS 版本 | 年度基金费用 | €10,000 平均持仓的年费 |
|---|---|---|---:|---:|
| S&P 500 | VOO | **SPYL**，ISIN IE000XZSV718，累积 | **0.03% TER** | €3 |
| S&P 500 | VOO | **VUAA**，ISIN IE00BFMXXD54，累积 | 0.07% OCF | €7 |
| S&P 500 | VOO | **CSPX/SXR8**，ISIN IE00B5BMR087，累积 | 0.07% TER | €7 |
| Nasdaq-100 | QQQ | **ANAU**，ISIN IE000QDFFK00，累积 | **0.14% TER** | €14 |
| Nasdaq-100 | QQQ | **CNDX/SXRV**，ISIN IE00B53SZB19，累积 | 0.30% TER | €30 |
| Nasdaq-100 | QQQ | **EQQQ**（分配）/ **EQAC**（累积） | 0.30% ongoing charge | €30 |
| 全球股票（含新兴市场） | VT 类思路 | **VWCE/VWRP**，ISIN IE00BK5BQT80，累积 | 0.19% OCF | €19 |
| 发达市场股票 | — | **IWDA/SWDA/EUNL**，ISIN IE00B4L5Y983，累积 | 0.20% TER | €20 |
| 新兴市场股票 | VWO/IEMG 类思路 | **EIMI/IS3N**，ISIN IE00BKM4GZ66，累积 | 0.18% TER | €18 |
| 全球投资级债券、EUR 对冲 | BNDW 类思路 | **AGGH/EUNA**，ISIN IE00BDBRDM35，累积 | 0.10% TER | €10 |

基金费用来自发行人的最新资料：State Street 的 [SPYL 产品页](https://www.ssga.com/uk/en_gb/institutional/etfs/state-street-spdr-sp-500-ucits-etf-acc-spyl-gy)、Vanguard 的 [VUAA factsheet](https://fund-docs.vanguard.com/SandP_500_UCITS_ETF_USD_Accumulating_9694_EU_INT_UK_EN.pdf)、iShares 的 [CSPX](https://www.ishares.com/uk/individual/en/products/253743/CSSPX?siteEntryPassthrough=true&switchLocale=y)、[CNDX](https://www.ishares.com/uk/individual/en/products/253741/ishares-nasdaq-100-ucits-etf?siteEntryPassthrough=true&switchLocale=y)、[IWDA](https://www.ishares.com/uk/individual/en/products/251882/ishares-msci-world-ucits-etf-acc-fund?siteEntryPassthrough=true)、[EIMI](https://www.ishares.com/uk/individual/en/products/264659/ishares-core-msci-em-imi-ucits-etf?siteEntryPassthrough=true&switchLocale=y)与 [AGGH](https://www.ishares.com/uk/individual/en/products/291770/ishares-global-aggregate-bond-ucits-etf-fund?siteEntryPassthrough=true)，以及 AXA IM 的 [ANAU 说明](https://core.axa-im.com/etf/insights/axa-ims-etf-platform-turns-three-flagship-nasdaq-100-ucits-etf-reaches-key-anniversary-milestone)、Invesco 的 [EQQQ KIID](https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/kiid/IE0032077012_kiid_en-uk.pdf)和 Vanguard 的[全市场 ETF 降费公告](https://www.vanguard.co.uk/professional/insights/we-have-lowered-our-etf-costs-again)。

代码会因交易所与交易币种不同而改变，同一个 ISIN 才代表同一份基金权益。例如 VUAA 在 Xetra 和 Borsa Italiana 都可用 EUR 交易；IWDA、SWDA、EUNL 虽然代码不同，也可能是同一 ISIN 的不同上市。选平台时应先用 **ISIN 搜索**，再挑 EUR 交易代码。

## 六个平台的定投能力与 ETF 覆盖

| 平台 | 真正自动定投 | 定投买入平台费 | EUR ETF 的 FX | 官方披露的产品广度 | 主要限制 |
|---|---|---:|---:|---|---|
| **Trading 212** | 是；单只或 Pie，可日/周/双周/月 | €0 | €0 | 公共 Invest 目录含 13,000+ 全球股票与 ETF | Pie 只能用主货币；外币 slice 每次收 0.15% FX |
| **Trade Republic** | 是；每周、每月两次、每月、每季 | €0 | 通常无单列 FX | 2,000+ ETF | 计划日内批量执行，不能指定成交时点或限价；卖出 €1 |
| **Lightyear** | 是；每周、双周、每月 | €0 | €0 | 公开筛选器 482 只 ETF/MMF | 目录小于 IBKR、Trading 212 与 Trade Republic |
| **Revolut** | 是；仅合资格 Investment Plan ETP | €0 | EUR 产品为 €0；跨币种按套餐规则 | 2024 年官方称 500+ ETF；计划清单以 app 为准 | 不是所有 ETF 都进入免佣计划 |
| **IBKR Ireland** | 是；日/周/双周/月/季/年等 | 欧洲 ETF Tiered 最低 €1.25/单，另有外部费 | EUR 产品为 €0 | 2026-07-23 有 24,047 只可碎股的美/加/欧股票或 ETF | 只有可碎股产品能定投；标准佣金照收 |
| **DEGIRO** | **否**；只能自动入金后手动下单 | Core 每笔 €1；其他 ETF 通常 €3 | 取决于上市币种 | 19 个主要交易所；Tradegate Core 超过 1,000 个产品 | 无自动买入，通常也不能按固定欧元金额买碎股 |

上述产品广度不是完全同口径：有的平台披露 ETF 数，有的平台披露股票与 ETF 合计，且“能交易”也不等于“能碎股定投”。Trade Republic 的 [ETF 页面](https://support.traderepublic.com/en-gr/1350-Which-ETFs-can-I-trade-at-Trade-Republic)列出 2,000+ ETF；Revolut 在 2024 年公告中称有 [500+ ETF](https://www.revolut.com/en-IE/news/revolut_unlocks_bonds_investing_market_to_customers_in_eea/)；IBKR 公布的是 [24,047 只可碎股股票或 ETF](https://www.interactivebrokers.com/en/general/about/ibkr-fact-sheet.php)；DEGIRO 称其覆盖 [19 个主要交易所、Core 超过 1,000 个产品](https://www.degiro.ie/investing/buying-etfs)。所以“齐全度”应落实为：你要买的 ISIN 是否存在、是否对爱尔兰账户开放、是否支持碎股、是否能加入定投。

## 每月买一次，平台一年收多少钱

以下只算券商侧买入费用，假定每月定投**一只 EUR 计价 UCITS ETF，共 12 次**；不含基金 TER、买卖价差、未来卖出费与税。金额是当前费率下的最低明确成本，不是成交价格保证。

| 平台/方式 | 12 次买入的年度明确平台成本 | 两只 ETF 每月各买一次 |
|---|---:|---:|
| Trading 212，EUR ETF AutoInvest | **€0** | **€0** |
| Trade Republic Savings Plan | **€0** | **€0** |
| Lightyear，EUR ETF Plan | **€0** | **€0** |
| Revolut 合资格 Investment Plan | **€0** | **€0** |
| IBKR，欧洲 ETF Tiered 最低费 | **至少 €15 + 外部费** | **至少 €30 + 外部费** |
| DEGIRO Core，手动买 | **€12** | **€24** |
| DEGIRO 非 Core，手动买 | **€36** | **€72** |

固定最低费会对小额订单造成不成比例的影响。IBKR 每单 €1.25 意味着：每月 €100 的买入成本下限为 1.25%，€500 为 0.25%，€1,000 为 0.125%。若你坚持使用 IBKR，小额投资者可以考虑减少频率、合并成较大的双月或季度订单；这会偏离严格的月度定投节奏，但能降低最低佣金占比。

基金 TER 则与平台无关，而且随持仓规模持续发生。持有 €100,000 时，0.03%、0.14% 与 0.30% 分别约为每年 €30、€140 与 €300。因此长期持仓变大后，**选对基金 share class 和 TER 往往比零佣金平台之间的差异更重要**。

## QQQ + VOO 定投的三种可执行方案

下面只是把指数目标翻译成可执行结构，不是对任何人的个性化投资建议。Nasdaq-100 与 S&P 500 持仓高度重叠，前者还明显集中于大型非金融 Nasdaq 上市公司；把两者各买一半不是“美国 + 科技”两块互不相关的资产，而是在 S&P 500 基础上进一步超配同一批大型成长股。

### 方案 A：最低基金费

- 70% SPYL（S&P 500，TER 0.03%）
- 30% ANAU（Nasdaq-100，TER 0.14%）

加权基金费约 **0.063%/年**。先逐个平台按 ISIN 检查 ANAU 是否存在并支持定投；较新的低费基金可能不如 CNDX/EQQQ 普及。

### 方案 B：优先选大基金与跨平台可获得性

- 70% CSPX 或 VUAA（S&P 500，0.07%）
- 30% CNDX 或 EQQQ/EQAC（Nasdaq-100，0.30%）

加权基金费约 **0.139%/年**。费用高于方案 A，但这些产品历史更长、规模更大，并更常出现在平台目录中。最终仍要核对具体 ISIN、累积/分配方式和 EUR 上市代码。

### 方案 C：只买一只更广的全球 ETF

- 100% VWCE（发达市场 + 新兴市场，OCF 0.19%）

这不是 QQQ/VOO 的一比一替代，而是减少美国大盘与科技集中、用一只基金覆盖全球股票的简化方案。另一种做法是 IWDA + EIMI，自行决定发达市场与新兴市场比例；两只基金会增加记账行数，但在零平台费的自动组合中不会增加显性买入费。

## 容易漏算的五种成本

1. **换汇。** EUR 交易代码只消除了下单时的货币转换，不会把基金底层的美元资产变成 EUR 对冲。没有 “EUR Hedged” 字样时，EUR 报价与 USD 报价通常只是同一基金的不同交易货币，经济上的美元资产敞口仍然存在。
2. **买卖价差与自动成交时点。** 零佣金平台仍按市场价格成交。Trade Republic 说明储蓄计划按标准化流程在执行日的 Xetra 时段内完成，但不保证当天最有利价格；IBKR 定投在开盘附近按聚合 VWAP 流程执行。不要把 €0 佣金理解为 €0 执行成本。
3. **入金方式。** Trading 212 的银行卡、Apple Pay 与 Google Pay 累计入金超过 €2,000 后可能收 0.7%，银行转账免费；若每月用收费入金方式，0.7% 会远大于 ETF TER。应使用免费银行转账或可用的直接扣款路径。
4. **卖出与转户。** Trade Republic 计划买入免费，但卖出每笔 €1；平台的证券转出能力、碎股份额处理与收费也不同。长达十年以上的定投不应只看第一年的买入费。
5. **爱尔兰税务与记录。** 多数 UCITS ETF 对爱尔兰税务居民通常涉及 38% 基金税率和每八年视同处置；券商一般不会替你完成爱尔兰申报。详见本站[爱尔兰投资税务指南](/research/ireland-investment-tax)。平台费用差 €10–€30 很重要，但不能掩盖税制与逐笔成本基础记录的长期影响。

## 最终选择清单

开户前不要只问“有没有 S&P 500”，而要逐项确认：

- 目标基金的 **ISIN**，而不是只看 ticker 或名称
- 该 ISIN 是否对**爱尔兰零售账户**开放买入
- 是真实 UCITS ETF，还是 CFD、ETN 或 Token
- 是累积还是分配 share class
- 是否有 EUR 交易代码；是否为 currency hedged
- 能否买碎股、能否加入自动定投、最低金额是多少
- 每次买入、卖出、换汇、入金与转户分别收费多少
- KID 中的 TER/OCF、交易成本估算、风险等级与建议持有期
- 平台能否导出完整年度报表，方便计算爱尔兰税务

对大多数每月领欧元工资、只想长期自动定投一到三只主流 UCITS ETF 的爱尔兰投资者，**Trading 212、Trade Republic 与 Lightyear 构成第一梯队**；Revolut 是方便但产品计划范围更窄的选择；IBKR 是功能和市场覆盖优先、不是小额最低费优先；DEGIRO 则适合接受手动执行的人。

## 研究方法与资料范围

本报告把问题拆成四部分：爱尔兰零售客户的产品可买性、平台自动化与收费、目标指数的 UCITS 替代品、以及 12 次年度买入的成本情景。检索并交叉核对了欧盟法规说明、六个平台的官方费用与功能页面，以及 Vanguard、State Street、iShares、Invesco 和 AXA IM 的产品页、factsheet 或 KID。

共深读 **24 个官方页面或文件**。平台目录和产品资格是动态信息；无法从公开网页确认的精确合资格 ETF 清单，本文明确标为“以 app 为准”，没有把搜索结果页或第三方博客当作最终可交易证明。
`,
};
