import type { Article } from "@/types";

export const irelandEtfDcaPlatformComparison2026: Article = {
  slug: "ireland-etf-dca-platform-comparison-2026",
  title: "爱尔兰居民 ETF 定投平台对比：美国 IBKR Pro、嘉信与欧洲平台（2026）",
  description:
    "按美国区 IBKR Pro、Charles Schwab 与爱尔兰区 Trading 212、Trade Republic、Revolut 的真实账户区域，比较 VOO、QQQ、UCITS ETF 的权限、自动定投和全成本。",
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
  readingMinutes: 16,
  cover: "/images/research/ireland-etf-dca-platform-comparison-2026.jpg",
  body: `
## 账户区域与费用口径

比较基于以下账户区域与收费方案，费率与规则核对截至 **2026 年 8 月 9 日**：

| 平台 | 账户/区域 | 费用口径 |
|---|---|---|
| **Interactive Brokers** | 美国账户；**IBKR Pro** | 美国上市股票/ETF 的 Pro Fixed 与 Tiered 费率 |
| **Charles Schwab** | 美国券商账户 / Schwab International | 美国上市 ETF 的在线费率，并叠加爱尔兰居住地产品限制 |
| **Trading 212** | 爱尔兰 / 欧洲 Invest | 欧洲版 0.15% FX、Pie 与 AutoInvest |
| **Trade Republic** | 爱尔兰 / 欧洲账户 | 爱尔兰 Savings Plan 与 €1 普通交易费率 |
| **Revolut** | 爱尔兰投资账户 | Revolut Securities Europe UAB 的 Investment Plan |
| Lightyear、DEGIRO | 爱尔兰账户，作为补充比较 | 各自爱尔兰费率 |

判断产品权限与交易成本时，需要区分以下四个概念：

1. **IBKR Pro 是收费方案**，不是监管意义上的 Professional Client。
2. **IBKR LLC / IBIE 是签约法律实体**，应以当前 Customer Agreement 或账户确认信为准。
3. **美国股票交易权限是市场权限**，不自动包含所有美国 ETF。
4. **Retail / Professional Client 是监管分类**，它会影响 PRIIPs KID 限制。

IBKR 的 [Pro 与 Lite 费用说明](https://www.interactivebrokers.com/en/pricing/commissions-home.php?menu=A)把 Pro 定义为可选 Fixed/Tiered 的定价方案；IBKR 的 [PRIIPs 说明](https://www.interactivebrokers.com/campus/trading-lessons/trading-overseas-with-ibkr/)则按 EEA/UK Retail Client 判断 KID 限制。两者不是同一件事。

## 核心结论

- **IBKR 账户实际允许 VOO/QQQ 时，IBKR Pro 是最适合自动定投美国 ETF 的平台。** VOO、QQQ 都在 IBKR 的[可碎股证券清单](https://www.interactivebrokers.com/download/fracshare_stk.csv)中，可按固定金额日/周/双周/月/季/年自动买入。IBKR 官方对 Recurring Investments 的明确答复采用 Standard Fixed commission；两只 ETF 每月各买一次、每笔至少 $100 时，显性佣金约 **$24/年**，最终以创建计划时预览和成交单为准。
- **IBKR Pro 不等于 PRIIPs 豁免。** IBKR 官方同时写明：EEA/UK 零售客户在美国 ETF 没有 KID 时会被阻止买入。账户能够创建并成交 VOO/QQQ 计划时，费用按该账户的实际权限计算；若出现 KID/PRIIPs 报错，则需改用 UCITS ETF。不能仅凭“美国账户”或“Pro”推断产品权限。
- **Charles Schwab 不适合爱尔兰居民新增定投 VOO/QQQ。** Schwab 官方明确写：居住在 EEA/UK 的客户只能持有或卖出现有美国注册 ETP，不能首次买入或追加；限制按居住地，不按券商总部。UCITS ETF 需由 Schwab Global specialist 电话下单，每笔 **$50**，也没有自选 ETF 自动定投的公开支持。见 [Schwab ETF FAQ](https://international.schwab.com/investment-products/etf-trading/how-do-etfs-work)。
- **爱尔兰区自动定投 UCITS ETF，Trading 212 与 Trade Republic 是第一梯队。** Trading 212 适合用 Pie 按比例投入多只基金；Trade Republic 合资格 Savings Plan 买入执行费为 €0。Revolut 也可用，但只有带 Investment Plan 标记的 ETP 才免佣，准确清单要在 app 内确认。
- **Lightyear 是很强的补充选项；DEGIRO 不适合全自动。** Lightyear 的 EUR ETF Plan 可零交易费、零 FX 自动投入；DEGIRO 官方不提供 ETF 自动买入，只能自动入金后手动交易。

一句话：**真实能买 VOO/QQQ 时，用 IBKR Pro 自动定投；如果 IBKR 权限受 KID 限制，就在 Trading 212 或 Trade Republic 定投对应 UCITS ETF；Schwab 保留既有美国 ETF 可以，但不应作为爱尔兰居民新增 ETF 月投平台。**

## 美国券商账户也会受到爱尔兰居住地影响

VOO、QQQ、VTI、VT 都是美国注册基金。欧盟 PRIIPs 规则要求向 EEA 零售客户销售 packaged products 前提供 KID；美国发行人通常不制作符合 EU 要求的 KID。

IBKR 的官方答复使用的是 **EEA and UK Retail clients**，并没有把限制缩小为“只有 IBIE 客户”。其可行替代是购买有 KID 的欧洲 UCITS ETF，或成功重分类为监管意义上的 Professional Client。IBKR Ireland 的 [MiFID 客户分类说明](https://www.ibkrguides.com/kb/en-us/article-3783.htm?Highlight=mifid)还表明，申请 Professional Client 通常要满足交易频率、超过 €500,000 的金融资产组合、相关金融行业经验三项中的至少两项。

Schwab 的说法更直接：其[国际 ETF 页面](https://international.schwab.com/investment-products/etf-trading/how-do-etfs-work)明确指出，EEA/UK 居民只能持有或清算既有美国 ETP，**initial or additional purchases are not permitted**。因此：

- 美国券商账户不等于美国居民产品权限
- 已经持有 VOO/QQQ 不等于可以继续加仓
- $0 commission 不等于该订单有购买资格
- IBKR Pro 不等于 MiFID Professional Client

IBKR 账户能够建立并成交 VOO/QQQ Recurring Investment 时，应保存订单预览、成交单、当前 Customer Agreement 与 Client Category。该结果只代表该账户的实际权限，不能泛化为所有爱尔兰居民的标准权限。

## VOO、QQQ 与其他美国指数 ETF 的基金费用

若 IBKR 实际允许直接购买，美国基金本身的费用如下：

| 目标 | 美国 ETF | 年度费用率 | $10,000 平均持仓的年费 | 定投备注 |
|---|---|---:|---:|---|
| S&P 500 | **VOO** | **0.03%** | $3 | 低费核心仓位 |
| Nasdaq-100 | **QQQ** | **0.18%** | $18 | 流动性强，但长期持有费高于 QQQM |
| Nasdaq-100 | **QQQM** | **0.15%** | $15 | 跟踪同一指数，更适合长期买入持有 |
| 美国全市场 | **VTI** | **0.03%** | $3 | 含美国大、中、小盘 |
| 全球股票 | **VT** | **0.06%** | $6 | 同时覆盖美国与非美国市场 |

VOO、VTI 与 VT 的费率来自 Vanguard 的 [VOO](https://investor.vanguard.com/investment-products/etfs/profile/voo)、[VTI](https://investor.vanguard.com/investment-products/etfs/profile/vti)和 [VT](https://investor.vanguard.com/investment-products/etfs/profile/vt)产品页。QQQ 已在 2025 年底重组并把费率从 0.20% 降到 **0.18%**；Invesco 当前的 [QQQ 产品说明](https://www.invesco.com/qqq-etf/en/home.html)及 [Innovation Suite](https://www.invesco.com/us/en/solutions/innovation-suite.html)列出 QQQ 0.18%、QQQM 0.15%。

因此，如果目标是长期定投 Nasdaq-100，而不是利用 QQQ 的期权深度或极高盘中流动性，**QQQM 的年度费用更低**。70% VOO + 30% QQQM 的加权基金费用约为 **0.066%/年**；若用 QQQ 则约为 **0.075%/年**。

## 受 KID 限制时的 UCITS 替代品

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

费率来自发行人的官方资料：State Street [SPYL](https://www.ssga.com/uk/en_gb/institutional/etfs/state-street-spdr-sp-500-ucits-etf-acc-spyl-gy)、Vanguard [VUAA](https://fund-docs.vanguard.com/SandP_500_UCITS_ETF_USD_Accumulating_9694_EU_INT_UK_EN.pdf)、iShares [CSPX](https://www.ishares.com/uk/individual/en/products/253743/CSSPX?siteEntryPassthrough=true&switchLocale=y)、[CNDX](https://www.ishares.com/uk/individual/en/products/253741/ishares-nasdaq-100-ucits-etf?siteEntryPassthrough=true&switchLocale=y)、[IWDA](https://www.ishares.com/uk/individual/en/products/251882/ishares-msci-world-ucits-etf-acc-fund?siteEntryPassthrough=true)、[EIMI](https://www.ishares.com/uk/individual/en/products/264659/ishares-core-msci-em-imi-ucits-etf?siteEntryPassthrough=true&switchLocale=y)与 [AGGH](https://www.ishares.com/uk/individual/en/products/291770/ishares-global-aggregate-bond-ucits-etf-fund?siteEntryPassthrough=true)，以及 AXA IM [ANAU](https://core.axa-im.com/etf/insights/axa-ims-etf-platform-turns-three-flagship-nasdaq-100-ucits-etf-reaches-key-anniversary-milestone)、Invesco [EQQQ KIID](https://www.invesco.com/content/dam/invesco/uk/en/product-documents/etf/share-class/kiid/IE0032077012_kiid_en-uk.pdf)和 Vanguard [全市场 ETF 降费公告](https://www.vanguard.co.uk/professional/insights/we-have-lowered-our-etf-costs-again)。

同一基金在不同交易所可能有不同 ticker 与交易币种；应先按 **ISIN** 确认基金，再选择 EUR 上市代码。EUR 交易代码只避免订单层面的换汇，并不自动把底层美元资产变成 EUR 对冲。

## 各平台的自动定投、费用与产品覆盖

| 平台与区域 | VOO/QQQ 新买权限 | 自动定投 | 两只 ETF 每月各买一次 | 产品覆盖与主要限制 |
|---|---|---|---:|---|
| **IBKR 美国账户 / Pro** | 以账户实际权限为准；EEA Retail 公开规则可能拦截 | 是；仅可碎股产品，日/周/双周/月/季/年 | 若允许美国 ETF，Recurring 约 **$24/年** | 24,047 只美/加/欧可碎股股票或 ETF；Pro 自动定投费以预览/成交单为准 |
| **Charles Schwab 美国券商账户** | 爱尔兰居民只能持有/卖出现有美国 ETP，不能追加 | 未发现自选 ETF AIP；需手动 | VOO/QQQ **不可执行**；UCITS 电话单约 **$1,200/年** | 2,000+ 美国 ETF；UCITS 每笔 $50 且需 specialist |
| **Trading 212 爱尔兰** | 美国 ETF 公共页不代表可买；用 UCITS | 是；单品日/周/双周/月，Pie 另有更长周期 | EUR UCITS **€0** | 公共 Invest 目录 13,000+ 股票与 ETF 合计；Pie 外币 slice 每次收 0.15% FX |
| **Trade Republic 爱尔兰** | 用 UCITS | 是；周/月两次/月/季 | Savings Plan **€0** | 爱尔兰当前准确 ETF 数未公开；产品与计划资格以 app 为准 |
| **Revolut 爱尔兰** | 只提供合资格欧洲 ETP 路径 | 是；合资格产品可日/周/月 | 合资格计划 **€0** | 2024 年官方曾披露 500+ ETF；准确合资格清单以 app 为准 |
| **Lightyear 爱尔兰** | 用 UCITS | 是；周/双周/月 | EUR ETF Plan **€0** | 公开筛选器 482 只 ETF/MMF；目录较小 |
| **DEGIRO 爱尔兰** | 用 UCITS | **否** | Core 手动约 €24；非 Core 约 €72 | Core 1,000+ 产品；不能设自动 ETF 买单 |

IBKR 的[定投功能说明](https://www.interactivebrokers.com/campus/trading-lessons/using-ibkrs-recurring-investments-feature/)确认可按固定金额与多种频率执行，且只有可碎股证券合资格；[Fact Sheet](https://www.interactivebrokers.com/en/general/about/ibkr-fact-sheet.php)列出 24,047 只可碎股股票或 ETF。Trading 212 规则见 [Pies & AutoInvest](https://helpcentre.trading212.com/hc/en-us/articles/30661163244317-Pies-AutoInvest-Introduction)与[主货币限制](https://helpcentre.trading212.com/hc/en-us/articles/34159237080861-Can-I-choose-the-currency-in-which-to-buy-sell-assets-for-Invest-accounts)。Trade Republic 规则见[创建 Savings Plan](https://support.traderepublic.com/en-ie/768)与[费用说明](https://support.traderepublic.com/en-ie/760-What-are-savings-plans)。Revolut 规则见[Investment Plans](https://help.revolut.com/en-IE/help/wealth/stocks/getting-started-with-etf-s/etfs-investment-plans/)。

三家欧洲平台的账户实体与产品范围如下：

- Trading 212 的账户实体应按其[官方指引](https://helpcentre.trading212.com/hc/en-us/articles/4403189221649-Where-can-I-see-which-entity-my-account-is-registered-under)在 app 菜单底部确认。公开目录能查到 [SPYL](https://www.trading212.com/trading-instruments/invest/SPYL.NL)、[CSPX](https://www.trading212.com/trading-instruments/invest/CSPX.GB)和 [EQQQ](https://www.trading212.com/trading-instruments/invest/EQQQ.IT)，但是否对对应实体开放、是否能加入计划仍以登录后的 app 为准。
- Trade Republic 爱尔兰区域的公开信息以 en-IE 页面为准；其他国家帮助页出现的 1,500、1,800 或 2,000+ ETF 不代表爱尔兰当前数量。定投资格应在爱尔兰 app 中通过 Save 标记确认。
- Revolut 爱尔兰投资账户由 Revolut Securities Europe UAB 提供。两只 ETF 都有 Investment Plan 标记时年度买入佣金为 €0；如果产品不合资格，则回到套餐免费额度与普通佣金规则，不能继续假设 €0。

## IBKR Pro 的费用要分自动与手动

假设账户确实允许购买 VOO/QQQ，全年两只 ETF 各买 12 次，不含 ETF 费用率、价差、换汇与卖出监管费：

| IBKR Pro 下单方式 | 公开费用口径 | 24 笔年度估算 |
|---|---|---:|
| Recurring Investments | 官方功能页明确答复使用 Standard Fixed；每单取 $1 与成交额 1% 较低者 | 每笔 ≥$100 时约 **$24** |
| 手动 Pro Fixed | $0.005/股，最低 $1，最高成交额 1% | 小额订单通常约 **$24** |
| 手动 Pro Tiered | ≤30 万股/月为 $0.0035/股，最低 $0.35；另计场所、清算与 pass-through | 基础最低 **$8.40 + 外部费** |

自动定投不能直接套用 Tiered 的 $0.35 最低费。通用估算公式是：

**12 × [min($1, VOO 月投入 × 1%) + min($1, QQQ/QQQM 月投入 × 1%)]**

IBKR 当前美国股票/ETF 费率见[官方佣金表](https://www.interactivebrokers.com/en/pricing/commissions-stocks.php)。Recurring 的年度成本按 Standard Fixed 口径估算，最终以计划预览和 statement 为准。

还有一个容易漏掉的现金问题：如果 IBKR 是 margin account、账户只有 EUR 而没有足够 USD，官方在 Recurring Investments 页面说明可能建立 USD margin loan，而不是自动换汇。更稳妥的做法是提前把 EUR 合并换成 USD；IBKR 手动现货 FX 为 0.20 个基点起、最低约 $2/单，频繁小额换汇会被最低费主导。

## 为什么不建议用 Schwab 买 UCITS 定投

Schwab 的美国上市股票/ETF 在线佣金是 $0，但爱尔兰居住地限制会先阻止 VOO/QQQ 的新增购买。

Schwab 给 EEA 居民的替代路径是 UCITS ETF，但官方要求通过 Global Investing specialist 电话下单，每笔收 **$50 foreign transaction fee**。两只 ETF 每月各买一次就是：

**24 × $50 = $1,200/年**

这还不含基金 TER、价差和换汇。Schwab 的 Automatic Investment Plan 官方资料只覆盖共同基金，没有公开支持 VOO、QQQ 或自选 UCITS ETF 自动定投。已有 VOO/QQQ 可继续由 Schwab 持有或卖出；新增月投没有成本优势。

Schwab One 以 USD 运作。其[个人价格指南](https://www.schwab.com/legal/schwab-pricing-guide-for-individual-investors)显示 incoming wire 不收费，但非美元转换可能有较高加点；Schwab Global Account 单次换汇低于 $100,000 的公开档位为 1%。平台总成本还需计入入金与换汇费用。

## 三种可执行方案

### 方案 A：IBKR 实际允许美国 ETF

- 70% VOO，费用率 0.03%
- 30% QQQM，费用率 0.15%
- 用 IBKR Recurring Investments 每月自动投入
- 预先准备 USD，避免意外形成 margin loan
- 两只每月各一笔，平台佣金按公开 Fixed 口径约 $24/年

该组合的基金费用略低于使用 QQQ。需要 QQQ 的期权与极高盘中流动性时再选择 QQQ；纯长期定投优先比较 QQQM。

### 方案 B：IBKR 出现 KID/PRIIPs 拒单

- 70% SPYL / VUAA / CSPX
- 30% ANAU / CNDX / EQQQ / EQAC
- 在 Trading 212 Pie 或 Trade Republic Savings Plan 用 EUR 自动投入
- 按 ISIN 核对爱尔兰账户可买性与定投资格

最低费组合 SPYL 70% + ANAU 30% 的加权基金费用约 **0.063%/年**，但 ANAU 较新、平台覆盖可能不如 CNDX/EQQQ，必须先在 app 内确认。

### 方案 C：用一只全球基金简化

- 美国直投权限存在：VT，费用率 0.06%
- UCITS 路径：VWCE/VWRP，费用率 0.19%

这不是 VOO+QQQ 的一比一替代，而是减少美国大型科技股重复权重，并把记账、再平衡和定投计划简化为一只基金。

## 最后执行清单

1. 在 IBKR 保存当前 Customer Agreement、Client Category 与账户确认信，确认法律实体；不要用“Pro”代替实体。
2. 在 Client Portal 搜 VOO、QQQ、QQQM，尝试进入 Recurring Investment 创建页，查看是否出现 KID/PRIIPs 拒单与费用预览。
3. 如果可买，确认 fractional shares 已开启，并为 margin account 预先准备 USD。
4. Schwab 只把既有美国 ETF 当作持有/卖出仓位；不要按 $0 commission 设计新增定投。
5. 对 Trading 212、Trade Republic、Revolut，使用爱尔兰账户逐只按 ISIN 核对真实 ETF、EUR 上市代码与计划资格。
6. 记录每批买入日期、金额、ISIN、费用与汇率。爱尔兰税务居民仍按爱尔兰税法申报，券商位于美国不会改变税务居住地；详见本站[爱尔兰投资税务指南](/research/ireland-investment-tax)。

## 资料口径

研究覆盖账户实体与监管分类、美国券商的产品权限、IBKR Pro 自动/手动费用、三家爱尔兰平台的定投费率，以及美国 ETF 与 UCITS ETF 内部费用。事实依据限于监管机构、券商与基金发行人的官方资料；无法从公开网页确认的账户级权限统一标为“以实际订单预览/app 为准”。
`,
};
