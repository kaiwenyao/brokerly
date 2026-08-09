import type { Article } from "@/types";

export const irelandEtfDcaPlatformComparison2026: Article = {
  slug: "ireland-etf-dca-platform-comparison-2026",
  title: "爱尔兰居民 ETF 定投平台对比：美国 IBKR Pro、嘉信与欧洲平台（2026）",
  description:
    "按美国版 IBKR Pro、美国版 Charles Schwab 与爱尔兰区 Trading 212、Trade Republic、Revolut，比较 VOO、QQQ、UCITS ETF 的交易费、自动定投和全成本。",
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
    "schwab",
    "degiro",
    "lightyear",
  ],
  author: {
    slug: "brokerly-research",
    name: "Brokerly 研究团队",
    role: "Research",
  },
  publishedAt: "2026-08-09",
  readingMinutes: 23,
  cover: "/images/research/ireland-etf-dca-platform-comparison-2026.jpg",
  body: `
## 账户区域与费用口径

比较基于以下账户区域与收费方案，费率与规则核对截至 **2026 年 8 月 9 日**：

| 平台 | 账户/区域 | 费用口径 |
|---|---|---|
| **Interactive Brokers** | 美国版账户；**IBKR Pro** | 直接购买美国版 VOO/QQQ，采用 Pro Fixed 与 Tiered 费率 |
| **Charles Schwab** | 美国版券商账户 | 直接购买美国版 VOO/QQQ，在线交易佣金 $0 |
| **Trading 212** | 爱尔兰 / 欧洲 Invest | 欧洲版 0.15% FX、Pie 与 AutoInvest |
| **Trade Republic** | 爱尔兰 / 欧洲账户 | 爱尔兰 Savings Plan 与 €1 普通交易费率 |
| **Revolut** | 爱尔兰投资账户 | 爱尔兰区 Investment Plan |
| Lightyear、DEGIRO | 爱尔兰账户，作为补充比较 | 各自爱尔兰费率 |

全文直接采用账户当前可用产品：美国版 IBKR Pro 与美国版 Schwab 都可买美国版 VOO、QQQ、QQQM、VTI 和 VT；爱尔兰区欧洲平台则使用相同指数的 UCITS ETF。比较重点只有交易佣金、自动定投、基金内部费用、换汇成本和产品覆盖。

## 核心结论

- **IBKR Pro 最适合自动定投美国版 VOO/QQQ。** VOO、QQQ 都在 IBKR 的[可碎股证券清单](https://www.interactivebrokers.com/download/fracshare_stk.csv)中，可按固定金额日/周/双周/月/季/年自动买入。Recurring Investments 采用 Standard Fixed commission；两只 ETF 每月各买一次、每笔至少 $100 时，显性佣金约 **$24/年**。
- **Schwab 最适合零佣金手动买美国版 VOO/QQQ。** 美国上市股票与 ETF 在线交易佣金为 **$0**；每周手动买一只 ETF，一年 52 笔的交易佣金仍是 $0。Schwab 公开的 Automatic Investment Plan 主要覆盖共同基金，因此 VOO/QQQ 按手动执行计算。
- **爱尔兰区自动定投 UCITS ETF，Trading 212 与 Trade Republic 是第一梯队。** Trading 212 适合用 Pie 按比例投入多只基金；Trade Republic 合资格 Savings Plan 买入执行费为 €0。Revolut 也可用，但只有带 Investment Plan 标记的 ETP 才免佣，准确清单要在 app 内确认。
- **Lightyear 是很强的补充选项；DEGIRO 不适合全自动。** Lightyear 的 EUR ETF Plan 可零交易费、零 FX 自动投入；DEGIRO 官方不提供 ETF 自动买入，只能自动入金后手动交易。

一句话：**自动买美国版 VOO/QQQ 选 IBKR Pro；零佣金手动买美国版 VOO/QQQ 选 Schwab；需要用 EUR 自动定投同指数 UCITS ETF，则选 Trading 212、Trade Republic、Revolut 或 Lightyear。**

## VOO、QQQ 与其他美国指数 ETF 的基金费用

美国版 IBKR Pro 与 Schwab 直接购买的基金费用如下：

| 目标 | 美国 ETF | 年度费用率 | $10,000 平均持仓的年费 | 定投备注 |
|---|---|---:|---:|---|
| S&P 500 | **VOO** | **0.03%** | $3 | 低费核心仓位 |
| Nasdaq-100 | **QQQ** | **0.18%** | $18 | 流动性强，但长期持有费高于 QQQM |
| Nasdaq-100 | **QQQM** | **0.15%** | $15 | 跟踪同一指数，更适合长期买入持有 |
| 美国全市场 | **VTI** | **0.03%** | $3 | 含美国大、中、小盘 |
| 全球股票 | **VT** | **0.06%** | $6 | 同时覆盖美国与非美国市场 |

VOO、VTI 与 VT 的费率来自 Vanguard 的 [VOO](https://investor.vanguard.com/investment-products/etfs/profile/voo)、[VTI](https://investor.vanguard.com/investment-products/etfs/profile/vti)和 [VT](https://investor.vanguard.com/investment-products/etfs/profile/vt)产品页。QQQ 已在 2025 年底重组并把费率从 0.20% 降到 **0.18%**；Invesco 当前的 [QQQ 产品说明](https://www.invesco.com/qqq-etf/en/home.html)及 [Innovation Suite](https://www.invesco.com/us/en/solutions/innovation-suite.html)列出 QQQ 0.18%、QQQM 0.15%。

因此，如果目标是长期定投 Nasdaq-100，而不是利用 QQQ 的期权深度或极高盘中流动性，**QQQM 的年度费用更低**。70% VOO + 30% QQQM 的加权基金费用约为 **0.066%/年**；若用 QQQ 则约为 **0.075%/年**。

## 欧洲平台的 UCITS 对标产品

| 想要的指数 | 美国 ETF | 可研究的 UCITS 版本 | ISIN | 年度基金费用 |
|---|---|---|---|---:|
| S&P 500 | VOO | **SPYL**（累积） | IE000XZSV718 | **0.03%** |
| S&P 500 | VOO | **VUAA**（累积） | IE00BFMXXD54 | 0.07% |
| S&P 500 | VOO | **CSPX/SXR8**（累积） | IE00B5BMR087 | 0.07% |
| Nasdaq-100 | QQQ/QQQM | **ANAU**（累积） | IE000QDFFK00 | **0.14%** |
| Nasdaq-100 | QQQ/QQQM | **CNDX/SXRV**（累积） | IE00B53SZB19 | 0.30% |
| Nasdaq-100 | QQQ/QQQM | **EQQQ**（分配）/ **EQAC**（累积） | 按 share class 核对 | 0.30% |
| 全球股票 | VT | **VWCE/VWRP**（累积） | IE00BK5BQT80 | 0.19% |
| 发达市场 | — | **IWDA/SWDA/EUNL**（累积） | IE00B4L5Y983 | 0.20% |
| 新兴市场 | VWO/IEMG 类思路 | **EIMI/IS3N**（累积） | IE00BKM4GZ66 | 0.18% |
| 全球投资级债券、EUR 对冲 | BNDW 类思路 | **AGGH/EUNA**（累积） | IE00BDBRDM35 | 0.10% |

费率来自发行人的官方资料：State Street [SPYL](https://www.ssga.com/uk/en_gb/institutional/etfs/state-street-spdr-sp-500-ucits-etf-acc-spyl-gy)、Vanguard [VUAA](https://fund-docs.vanguard.com/SandP_500_UCITS_ETF_USD_Accumulating_9694_EU_INT_UK_EN.pdf)、iShares [CSPX](https://www.ishares.com/uk/individual/en/products/253743/CSSPX?siteEntryPassthrough=true&switchLocale=y)、[CNDX](https://www.ishares.com/uk/individual/en/products/253741/ishares-nasdaq-100-ucits-etf?siteEntryPassthrough=true&switchLocale=y)、[IWDA](https://www.ishares.com/uk/individual/en/products/251882/ishares-msci-world-ucits-etf-acc-fund?siteEntryPassthrough=true)、[EIMI](https://www.ishares.com/uk/individual/en/products/264659/ishares-core-msci-em-imi-ucits-etf?siteEntryPassthrough=true&switchLocale=y)与 [AGGH](https://www.ishares.com/uk/individual/en/products/291770/ishares-global-aggregate-bond-ucits-etf-fund?siteEntryPassthrough=true)，以及 AXA IM [ANAU](https://core.axa-im.com/etf/insights/axa-ims-etf-platform-turns-three-flagship-nasdaq-100-ucits-etf-reaches-key-anniversary-milestone)、Invesco [EQQQ 产品文件](https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/kiid/IE0032077012_kiid_en-uk.pdf)和 Vanguard [全市场 ETF 降费公告](https://www.vanguard.co.uk/professional/insights/we-have-lowered-our-etf-costs-again)。

同一基金在不同交易所可能有不同 ticker 与交易币种；应先按 **ISIN** 确认基金，再选择 EUR 上市代码。EUR 交易代码只避免订单层面的换汇，并不自动把底层美元资产变成 EUR 对冲。

## 各平台的自动定投、费用与产品覆盖

| 平台与区域 | 指数定投路径 | 自动定投 | 两只 ETF 每月各买一次 | 产品覆盖与主要说明 |
|---|---|---|---:|---|
| **IBKR 美国账户 / Pro** | 直接买美国版 VOO/QQQ/QQQM | 是；仅可碎股产品，日/周/双周/月/季/年 | Recurring 约 **$24/年** | 24,047 只美/加/欧可碎股股票或 ETF；费用以预览/成交单为准 |
| **Charles Schwab 美国账户** | 直接买美国版 VOO/QQQ/QQQM | 自选 ETF 按手动买入计算 | 在线交易 **$0/年** | 2,000+ 美国 ETF；每月两只共 24 笔仍为 $0 |
| **Trading 212 爱尔兰** | 使用 UCITS 对标：SPYL/VUAA/CSPX、ANAU/CNDX/EQQQ | 是；单品日/周/双周/月，Pie 另有更长周期 | EUR UCITS **€0** | 公共 Invest 目录 13,000+ 股票与 ETF 合计；Pie 外币 slice 每次收 0.15% FX |
| **Trade Republic 爱尔兰** | 使用平台合资格的 S&P 500 与 Nasdaq-100 UCITS ETF | 是；周/月两次/月/季 | Savings Plan **€0** | 爱尔兰当前准确 ETF 数未公开；产品与计划资格以 app 为准 |
| **Revolut 爱尔兰** | 使用带 Investment Plan 标记的欧洲 UCITS 对标产品 | 是；合资格产品可日/周/月 | 合资格计划 **€0** | 2024 年官方曾披露 500+ ETF；准确合资格清单以 app 为准 |
| **Lightyear 爱尔兰** | 使用平台提供的欧洲 UCITS 对标产品 | 是；周/双周/月 | EUR ETF Plan **€0** | 公开筛选器 482 只 ETF/MMF；目录较小 |
| **DEGIRO 爱尔兰** | 使用爱尔兰账户开放的 S&P 500 与 Nasdaq-100 UCITS ETF | **否** | Core 手动约 €24；非 Core 约 €72 | Core 1,000+ 产品；不能设自动 ETF 买单 |

IBKR 的[定投功能说明](https://www.interactivebrokers.com/campus/trading-lessons/using-ibkrs-recurring-investments-feature/)确认可按固定金额与多种频率执行，且只有可碎股证券合资格；[Fact Sheet](https://www.interactivebrokers.com/en/general/about/ibkr-fact-sheet.php)列出 24,047 只可碎股股票或 ETF。Trading 212 规则见 [Pies & AutoInvest](https://helpcentre.trading212.com/hc/en-us/articles/30661163244317-Pies-AutoInvest-Introduction)与[主货币限制](https://helpcentre.trading212.com/hc/en-us/articles/34159237080861-Can-I-choose-the-currency-in-which-to-buy-sell-assets-for-Invest-accounts)。Trade Republic 规则见[创建 Savings Plan](https://support.traderepublic.com/en-ie/768)与[费用说明](https://support.traderepublic.com/en-ie/760-What-are-savings-plans)。Revolut 规则见[Investment Plans](https://help.revolut.com/en-IE/help/wealth/stocks/getting-started-with-etf-s/etfs-investment-plans/)。

欧洲平台的产品与计划资格如下：

- Trading 212 公开目录能查到 [SPYL](https://www.trading212.com/trading-instruments/invest/SPYL.NL)、[CSPX](https://www.trading212.com/trading-instruments/invest/CSPX.GB)和 [EQQQ](https://www.trading212.com/trading-instruments/invest/EQQQ.IT)；具体 share class 能否加入计划以 app 为准。
- Trade Republic 爱尔兰区域的公开信息以 en-IE 页面为准；其他国家帮助页出现的 1,500、1,800 或 2,000+ ETF 不代表爱尔兰当前数量。定投资格应在爱尔兰 app 中通过 Save 标记确认。
- Revolut 的两只 ETF 都有 Investment Plan 标记时，年度买入佣金为 €0；如果产品不在计划内，则按套餐免费额度与普通佣金规则计算。

## IBKR Pro 的费用要分自动与手动

按美国版 IBKR Pro 账户直接购买 VOO/QQQ，全年两只 ETF 各买 12 次，不含 ETF 费用率、价差、换汇与卖出费用：

| IBKR Pro 下单方式 | 公开费用口径 | 24 笔年度估算 |
|---|---|---:|
| Recurring Investments | 官方功能页明确答复使用 Standard Fixed；每单取 $1 与成交额 1% 较低者 | 每笔 ≥$100 时约 **$24** |
| 手动 Pro Fixed | $0.005/股，最低 $1，最高成交额 1% | 小额订单通常约 **$24** |
| 手动 Pro Tiered | ≤30 万股/月为 $0.0035/股，最低 $0.35；另计场所、清算与 pass-through | 基础最低 **$8.40 + 外部费** |

自动定投不能直接套用 Tiered 的 $0.35 最低费。通用估算公式是：

**12 × [min($1, VOO 月投入 × 1%) + min($1, QQQ/QQQM 月投入 × 1%)]**

IBKR 当前美国股票/ETF 费率见[官方佣金表](https://www.interactivebrokers.com/en/pricing/commissions-stocks.php)。Recurring 的年度成本按 Standard Fixed 口径估算，最终以计划预览和 statement 为准。

还有一个容易漏掉的现金问题：如果 IBKR 是 margin account、账户只有 EUR 而没有足够 USD，官方在 Recurring Investments 页面说明可能建立 USD margin loan，而不是自动换汇。更稳妥的做法是提前把 EUR 合并换成 USD；IBKR 手动现货 FX 为 0.20 个基点起、最低约 $2/单，频繁小额换汇会被最低费主导。

## Schwab：美国 ETF 零佣金，但按手动定投计算

Schwab 的[个人价格指南](https://www.schwab.com/legal/schwab-pricing-guide-for-individual-investors)列明，美国交易所上市证券在线交易佣金为 **$0**。直接买美国版 VOO、QQQ 或 QQQM 时：

- 每月买一只，一年 12 笔：**$0**
- 每月各买 VOO 与 QQQ，一年 24 笔：**$0**
- 每周买一只，一年 52 笔：**$0**
- 每周各买 VOO 与 QQQ，一年 104 笔：**$0**

Schwab 公开的 Automatic Investment Plan 主要覆盖共同基金，本文没有把自选 ETF 计为自动执行。因此，Schwab 的优势是零佣金，代价是需要按计划手动下单。若订单页支持按金额或碎股买入，可以精确投入 $100；否则需要按整股数量调整每次金额。

Schwab One 以 USD 运作。若资金原本是 EUR，还需把实际换汇成本计入总费用；买入佣金为 $0 不代表换汇与买卖价差也为零。

## 四种可执行方案

### 方案 A：用 IBKR 自动定投美国 ETF

- 70% VOO，费用率 0.03%
- 30% QQQM，费用率 0.15%
- 用 IBKR Recurring Investments 每月自动投入
- 预先准备 USD，避免意外形成 margin loan
- 两只每月各一笔，平台佣金按公开 Fixed 口径约 $24/年

该组合的基金费用略低于使用 QQQ。需要 QQQ 的期权与极高盘中流动性时再选择 QQQ；纯长期定投优先比较 QQQM。

### 方案 B：用 Schwab 手动定投美国 ETF

- 70% VOO，费用率 0.03%
- 30% QQQM，费用率 0.15%
- 按月或按周手动买入
- 美国上市 ETF 在线佣金 $0
- 用日历提醒固定执行日期

Schwab 的显性交易费低于 IBKR Pro Recurring，但没有相同的自选 ETF 自动执行便利性。

### 方案 C：在欧洲平台自动定投 UCITS ETF

- 70% SPYL / VUAA / CSPX
- 30% ANAU / CNDX / EQQQ / EQAC
- 在 Trading 212 Pie 或 Trade Republic Savings Plan 用 EUR 自动投入
- 按 ISIN 核对爱尔兰账户可买性与定投资格

最低费组合 SPYL 70% + ANAU 30% 的加权基金费用约 **0.063%/年**，但 ANAU 较新、平台覆盖可能不如 CNDX/EQQQ，必须先在 app 内确认。

### 方案 D：用一只全球基金简化

- 美国直投权限存在：VT，费用率 0.06%
- 欧洲平台：VWCE/VWRP，费用率 0.19%

这不是 VOO+QQQ 的一比一替代，而是减少美国大型科技股重复权重，并把记账、再平衡和定投计划简化为一只基金。

## 最后执行清单

1. 在 IBKR 为 VOO、QQQ 或 QQQM 建立 Recurring Investment，确认金额、频率与费用预览。
2. 确认 IBKR fractional shares 已开启，并为 margin account 预先准备 USD。
3. 在 Schwab 确认按金额或碎股下单功能；若只能买整股，则按当日价格调整投入金额。
4. 为 Schwab 设置固定的周投或月投提醒，避免手动计划漏单。
5. 对 Trading 212、Trade Republic、Revolut，逐只按 ISIN 核对 EUR 上市代码与计划资格。
6. 记录每批买入日期、金额、ticker、ISIN、费用与汇率，定期比较实际成本与本文估算。

## 资料口径

研究覆盖美国版 IBKR Pro 与 Schwab 的交易费用、各平台自动定投功能、爱尔兰区欧洲平台费率，以及美国 ETF 与 UCITS ETF 内部费用。平台级费用以官方价格页为准；具体产品和计划资格以实际订单预览或 app 为准。

## 定投成本算例

以下算例统一采用 52 周或 12 个月，不考虑市场涨跌、买卖价差、税费与卖出成本。基金内部费用不是另行扣款，而是持续反映在基金净值中。为便于估算，假设每次在期初投入、基金价格全年不变：每周投入 100，一年投入 5,200，第一年平均在场资金约为 **2,650**。

### 例 1：每周投入一次——美国平台 $100，欧洲平台 €100

IBKR 与 Schwab 按每周 $100 直接买美国版 VOO 或 QQQ；爱尔兰区欧洲平台只能选择相同指数的 UCITS 对标产品，因此按每周 €100 计算。这里采用两组低费对标：**SPYL 对标 VOO 的 S&P 500**，**ANAU 对标 QQQ 的 Nasdaq-100**。如果平台没有这两个 share class，则按同一指数选择 VUAA/CSPX 或 CNDX/EQQQ。

| 平台与账户区域 | S&P 500 每周投入 | Nasdaq-100 每周投入 | 年平台买入费 | 含首年基金费用的估算 |
|---|---|---|---:|---:|
| **IBKR 美国账户 / Pro** | $100 VOO | $100 QQQ | 每只 **$52** | VOO 约 **$52.80**；QQQ 约 **$56.77** |
| **Charles Schwab 美国账户** | $100 VOO，手动买入 | $100 QQQ，手动买入 | 每只 **$0** | VOO 约 **$0.80**；QQQ 约 **$4.77** |
| **Trading 212 爱尔兰** | €100 SPYL 或其他合资格对标 | €100 ANAU 或其他合资格对标 | **€0** | SPYL 约 **€0.80**；ANAU 约 **€3.71** |
| **Trade Republic 爱尔兰** | €100 合资格 S&P 500 UCITS ETF | €100 合资格 Nasdaq-100 UCITS ETF | **€0** | SPYL 费率口径约 **€0.80**；ANAU 费率口径约 **€3.71** |
| **Revolut 爱尔兰** | €100 带计划标记的 S&P 500 UCITS ETF | €100 带计划标记的 Nasdaq-100 UCITS ETF | 合资格计划 **€0** | SPYL 费率口径约 **€0.80**；ANAU 费率口径约 **€3.71** |
| **Lightyear 爱尔兰** | €100 合资格碎股 S&P 500 UCITS ETF | €100 合资格碎股 Nasdaq-100 UCITS ETF | **€0** | SPYL 费率口径约 **€0.80**；ANAU 费率口径约 **€3.71** |
| **DEGIRO Core Selection** | €100 Core S&P 500 UCITS ETF | €100 Core Nasdaq-100 UCITS ETF | 每只 **€52** | SPYL 费率口径约 **€52.80**；ANAU 费率口径约 **€55.71** |
| **DEGIRO 非 Core ETF** | €100 S&P 500 UCITS ETF | €100 Nasdaq-100 UCITS ETF | 每只 **€156** | SPYL 费率口径约 **€156.80**；ANAU 费率口径约 **€159.71** |

IBKR Recurring Investments 使用 Standard Fixed 佣金；美国 ETF 每单费用取 **$1 与成交额 1% 中较低者**。因此，$100 的订单刚好是 $1，一年 52 笔就是 **$52**。VOO 的 0.03% 费率作用于约 $2,650 的首年平均资金，约为 **$0.80**；QQQ 的 0.18% 对应约 **$4.77**。该佣金口径来自 IBKR 的[定投功能答复](https://www.interactivebrokers.com/campus/trading-lessons/using-ibkrs-recurring-investments-feature/)和[美国股票/ETF 佣金表](https://www.interactivebrokers.com/en/pricing/commissions-stocks.php)。

欧洲对标中，SPYL 的 0.03% 对应首年基金费用约 **€0.80**，ANAU 的 0.14% 对应约 **€3.71**。若改用 VUAA/CSPX（0.07%），首年基金费用约 **€1.86**；若改用 CNDX/EQQQ（0.30%），约为 **€7.95**。实际金额会随成交日期、基金价格和持仓变化。

### 例 2：每周同时买 $100 VOO 和 $100 QQQ

- 年投入：$100 × 52 × 2 = **$10,400**
- 首年基金内部费用：VOO 约 $0.80，QQQ 约 $4.77
- **IBKR Pro Recurring：**104 笔佣金 $104；加基金内部费用后约 **$109.57**
- **Schwab 手动买入：**104 笔在线佣金 $0；加基金内部费用后约 **$5.57**

若把 QQQ 换成费率 0.15% 的 QQQM，首年 QQQM 内部费用约 $3.98。VOO + QQQM 的首年合计在 IBKR 约为 **$108.77**，在 Schwab 约为 **$4.77**。Schwab 成本更低，但需要手动完成 104 笔订单。

### 例 3：每月投入 €100，买 EUR 上市的 UCITS ETF

这一组把频率改成每月一次：全年投入 €1,200，第一年平均在场资金约 €650。仍以 **SPYL（S&P 500，0.03%）**和 **ANAU（Nasdaq-100，0.14%）**作为费用示例。两者都按 EUR 上市代码买入，因此不计订单层面的换汇费。

| 爱尔兰可用平台 | 每月买入的年度平台费 | SPYL 首年总成本估算 | ANAU 首年总成本估算 | 自动执行 |
|---|---:|---:|---:|---|
| **Trading 212** | **€0** | 约 **€0.20** | 约 **€0.91** | 是；Pie / AutoInvest |
| **Trade Republic** | **€0** | 约 **€0.20** | 约 **€0.91** | 是；合资格 Savings Plan |
| **Revolut** | 合资格 Investment Plan 为 **€0** | 约 **€0.20** | 约 **€0.91** | 以产品的计划标记为准 |
| **Lightyear** | **€0** | 约 **€0.20** | 约 **€0.91** | 是；合资格碎股 ETF |
| **DEGIRO Core Selection** | **€12** | 约 **€12.20** | 约 **€12.91** | 否；需手动下 12 笔订单 |
| **DEGIRO 非 Core ETF** | **€36** | 约 **€36.20** | 约 **€36.91** | 否；未计可能的连接费 |

Trading 212 的[费用页](https://helpcentre.trading212.com/hc/en-us/articles/11471996799517-What-are-the-fees-in-the-Invest-ISAs-and-SIPP)与 [AutoInvest 页面](https://helpcentre.trading212.com/hc/en-us/articles/30661163244317-Pies-AutoInvest-Introduction)确认交易佣金为零并支持每周计划；Trade Republic 的[爱尔兰 Savings Plan 页面](https://support.traderepublic.com/en-ie/760-What-are-savings-plans)确认执行费为零。Revolut 只对[合资格 Investment Plan 产品](https://help.revolut.com/en-IE/help/wealth/stocks/getting-started-with-etf-s/etfs-investment-plans/)免佣。Lightyear 的[价格表](https://lightyear.com/en-eu/pricing)列明 ETF 无执行费，其[计划页](https://lightyear.com/en-ie/plans)支持每周、双周和每月自动投入。DEGIRO 的[爱尔兰价格表](https://www.degiro.ie/fees)列明 Core ETF 每笔 €1、其他 ETF 每笔 €3，并明确[不提供自动投资](https://www.degiro.ie/helpdesk/money-transfers-and-handling/can-i-set-automatic-investing-or-automatic-monthly-deposits)。

### 例 4：同样一年投入 $5,200，改变 IBKR 买入频率

| 频率 | 每次投入 | 年订单数 | 年平台佣金 | 占年投入比例 |
|---|---:|---:|---:|---:|
| 每周 | $100 | 52 | **$52** | **1.00%** |
| 每两周 | $200 | 26 | **$26** | **0.50%** |
| 每月 | $433.33 | 12 | **$12** | **0.23%** |
| 每季度 | $1,300 | 4 | **$4** | **0.08%** |

投入总额相同，IBKR Pro 的 Fixed 最低费会让高频小单更贵。每周买入可以把入场时间分散得更细；每月买入则把显性佣金从 $52 降到 $12。选择频率时需要在现金到位时间、执行便利性和佣金之间取舍。

### 例 5：IBKR 每周小额定投的费用拖累

| 每周投入一只美国 ETF | 年投入 | 年佣金 | 佣金占投入比例 |
|---|---:|---:|---:|
| $25 | $1,300 | **$13** | **1.00%** |
| $50 | $2,600 | **$26** | **1.00%** |
| $100 | $5,200 | **$52** | **1.00%** |
| $250 | $13,000 | **$52** | **0.40%** |
| $1,000 | $52,000 | **$52** | **0.10%** |

$100 以下的订单因“$1 与成交额 1% 取低”而基本承受 1% 佣金；超过 $100 后，每单 $1 的固定费用开始被更大的投入摊薄。对小额账户，合并成月投通常比坚持周投更省钱。

### 例 6：每月 $500，按 70%/30% 买两只 ETF

每月买 $350 VOO 与 $150 QQQM，一年共 24 笔订单：

| 平台与组合 | 年投入 | 年佣金 | 首年平均资金 | 加权基金费率 | 首年佣金加基金费用 |
|---|---:|---:|---:|---:|---:|
| IBKR：70% VOO + 30% QQQM | $6,000 | **$24** | 约 $3,250 | **0.066%** | 约 **$26.15** |
| IBKR：70% VOO + 30% QQQ | $6,000 | **$24** | 约 $3,250 | **0.075%** | 约 **$26.44** |
| Schwab：70% VOO + 30% QQQM | $6,000 | **$0** | 约 $3,250 | **0.066%** | 约 **$2.15** |
| Schwab：70% VOO + 30% QQQ | $6,000 | **$0** | 约 $3,250 | **0.075%** | 约 **$2.44** |

基金费率差异在第一年只有约 $0.29，因为资金是逐月进入；随着多年持仓余额增加，QQQM 相比 QQQ 的累计费用优势会更明显。

### 例 7：换汇频率如何改变成本

以下只计算明确的换汇手续费，并假设全年需要把等值 €5,200 换成目标交易币种：

| 场景 | 年换汇成本估算 | 与本币 ETF 的差异 |
|---|---:|---|
| **IBKR：年初手动换一次 EUR→USD** | 受最低费影响，约 **$2** | 再加每周美国 ETF 买入佣金 $52，合计约 $54 |
| **IBKR：每周手动换一次 EUR→USD** | 52 × $2 = **$104** | 再加买入佣金 $52，合计约 $156 |
| **Trading 212 Pie：EUR 买外币 UCITS，FX 0.15%** | 约 **€7.80** | 买 EUR 上市代码则订单 FX 为 €0 |
| **Lightyear：EUR 买外币 UCITS，FX 0.35%** | 约 **€18.20** | 买 EUR 上市代码则订单 FX 为 €0 |
| **DEGIRO Auto FX：EUR 买外币 ETF，FX 0.25%** | 约 **€13.00** | 另加 ETF 交易费；EUR 产品无需该项换汇 |

IBKR 的现货 FX 最低约 $2/单，因此频繁小额换汇会被最低费主导。Trading 212 的 Pie 会对外币 slice 自动换汇并收取标准 FX 费；Lightyear 与 DEGIRO 的比例费用则直接随换汇总额增长。Revolut 的换汇成本受套餐、月度额度和交易时间影响，不能在不指定套餐的情况下给出单一年度数字。

### 例 8：Schwab 手动买美国版 VOO/QQQ

Schwab 在线买美国版 VOO、QQQ 或 QQQM 的佣金为 $0。以下假设订单支持按金额投入，并继续使用期初投入、价格不变的简化口径：

| 手动计划 | 年订单数 | 年平台佣金 | 首年基金费用估算 |
|---|---:|---:|---:|
| 每月 $100 买 VOO | 12 | **$0** | 约 **$0.20** |
| 每月 $100 买 QQQ | 12 | **$0** | 约 **$1.17** |
| 每月各买 $100 VOO 与 QQQ | 24 | **$0** | 合计约 **$1.37** |
| 每周 $100 买 VOO | 52 | **$0** | 约 **$0.80** |
| 每周 $100 买 QQQ | 52 | **$0** | 约 **$4.77** |
| 每周各买 $100 VOO 与 QQQ | 104 | **$0** | 合计约 **$5.57** |

这组成本低于 IBKR Pro Recurring，差别来自 Schwab 的 $0 在线交易佣金；操作上的取舍是 Schwab 需要手动执行，IBKR 可以自动执行。
`,
};
