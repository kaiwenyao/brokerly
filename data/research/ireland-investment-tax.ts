import type { Article } from "@/types";

export const irelandInvestmentTax: Article = {
  slug: "ireland-investment-tax",
  title: "爱尔兰税务居民的券商投资税务指南（2026）",
  description:
    "假定你已是爱尔兰税务居民：普通股票通常适用 33% CGT，合资格基金通常适用 38% 税率与八年视同处置，股息按 20%/40% 加 USC 及视情况适用的 PRSI，并说明券商通常不会替你完成的申报与缴款。",
  category: "税务",
  tags: [
    "tax",
    "ireland",
    "etf",
    "ucits",
    "trading212",
    "revolut",
    "trade-republic",
    "robinhood",
    "ibkr",
  ],
  author: {
    slug: "brokerly-research",
    name: "Brokerly 研究团队",
    role: "Research",
  },
  publishedAt: "2026-08-05",
  updatedAt: "2026-08-06",
  readingMinutes: 16,
  cover: "/images/research/ireland-investment-tax.jpg",
  body: `
## 本文口径

**本文只讨论一种情形：你已经是当年的爱尔兰税务居民，并且相关收益已落入爱尔兰征税范围。** 非税务居民的爱尔兰有限征税范围、离境后的过渡处理均不在讨论之列。费率与门槛核对截至 **2026 年 8 月 6 日**，具体金额以 Revenue 官方指引和你的实际申报年度为准。本文是费用与合规视角的通识说明，不构成税务意见。

作为税务居民，你的投资税负由三件事决定，而**不是**由持有天数或交易次数决定：

| 决定因素 | 为什么关键 |
|---|---|
| 资产的法律性质 | 直接持有普通股票通常走 CGT；基金要先判断注册地、法律结构和是否为“等同基金”，不能看到 ETF 就直接套税率 |
| 所得的类别 | 资本利得、股息、利息、基金分配分属不同税种和不同申报栏目 |
| 你是否在爱尔兰有住所（domicile） | 影响境外收入和境外资本利得是按全球范围征税，还是通常只对汇入爱尔兰的部分征税 |

## 住所（domicile）：税务居民内部的重要分叉

税务居民身份和住所共同决定爱尔兰可以对你的哪些境内、境外收入和利得征税；是否需要提交 Form 11、Form 12 或 CG1，则还要看收入金额、资产处置和持仓类型。住所不是国籍、签证或现在住在哪里。更口语地说，它是在法律上把哪里当作**长期、永久的家**：通常一出生就有“原始住所”（domicile of origin）；要改成“选择住所”（domicile of choice），一般需要在另一国家实际定居，并打算长期或永久留在那里。只是在爱尔兰读书、工作几年或租房，通常不会自动改变住所。Revenue 的[住所说明](https://www.revenue.ie/en/jobs-and-pensions/tax-residence/domicile-domicile-levy.aspx)也强调，判断取决于事实和长期意图。

| 身份组合（均为税务居民） | 投资所得的爱尔兰征税范围 |
|---|---|
| 爱尔兰税务居民 **且** 在爱尔兰有住所 | 通常按全球股息、利息和资本利得征税；同一笔收入在外国已纳税时，可按适用协定或规则申请抵免 |
| 爱尔兰税务居民 **但不在爱尔兰有住所** | 爱尔兰来源所得通常全额课税；境外收入和境外资本利得通常按**汇入爱尔兰的部分**课税 |

**“汇入”不只是把钱转到爱尔兰银行账户。** 用境外资金清偿爱尔兰的房租、学费或生活费，把钱转给爱尔兰境内的人，或以其他方式在爱尔兰使用，都可能产生汇入问题。混合账户里同时有本金、股息、利息和资本利得时，不能简单说“这次转的是本金”；Revenue 的规则通常先把混合资金中的收入视为已汇入。依赖汇入制的人应从一开始把**原有本金、境外收入、境外资本利得分开记录和保管**。Revenue 的 [Pay and File 指南](https://www.revenue.ie/en/self-assessment-and-self-employment/documents/guide-pay-file.pdf)在居民身份与 Remittances 部分说明了混合资金顺序。这部分事实判断很细，金额较大时应取得专业意见。

另外，爱尔兰的“分年度处理”（split-year treatment）**只适用于就业收入**，不会自动延伸到股票、ETF、股息或资本利得。因此，年中到达并不会自动把到达前的投资收益排除在爱尔兰税务范围之外，仍要结合全年居民身份、住所和汇入制判断。参见 Revenue 的[到达年度分年度处理说明](https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/moving-or-returning-to-ireland/split-year-treatment-in-your-year-of-arrival.aspx)。

## 股票、基金、利息与衍生品的税率

| 投资类型 | 2026 年通常处理 | 关键注意事项 |
|---|---|---|
| 直接持有普通股票的出售收益 | **33% CGT**，个人年度免税额 **€1,270** | 对净利得征税而非成交总额；短期持有本身不改变税率 |
| 爱尔兰公司股息 | 毛额按 **20%/40%** 所得税，并通常加 USC、PRSI；一般预扣 **25% DWT** | 25% DWT 是**预缴**，申报时抵免，不是最终税率 |
| 英国公司股息 | 按 Revenue 指引，以**实际收到的净额**计入爱尔兰应税收入，并通常加 USC、PRSI | 英国 domestic tax credit 不可在爱尔兰抵免；不要机械地倒算为毛额 |
| 其他外国公司股息 | 通常以毛额按 20%/40% 计所得税，并通常加 USC、PRSI | 外国预扣税能否抵免、抵免多少，要看适用的双重征税协定和限制 |
| 爱尔兰银行存款利息 | **33% DIRT**，银行代扣 | 通常不缴 USC；某些情形仍可能涉及 PRSI |
| 欧盟银行存款利息 | 通常按与 DIRT 相同的 **33%**，需自行申报 | 境外机构一般不会代扣爱尔兰税；不含英国账户 |
| 英国及其他非欧盟存款利息 | 按 33% 与个人边际所得税率中的**较高者** | 高税率纳税人通常按 40%；不加 USC，但 PRSI 可能适用 |
| 爱尔兰基金、等同境外基金、多数 UCITS ETF | 2026 年起通常 **38%**；每持有八年一次**视同处置** | **不适用 €1,270 免税额**，通常也不能用普通资本亏损抵减 |
| EU、EEA 或合格 OECD 协定国的非等同境外基金 | 按一般税务原则处理：分配通常按 20%/40%，处置收益通常进入 CGT | “是否等同”必须逐只基金判断；这类非等同基金没有八年视同处置规则 |
| 上述地区以外的离岸基金 | 不能直接套 33% 或 38%；要再判断 Revenue 是否把它认证为 distributing fund | 经认证的 distributing fund 处置收益通常按 40% CGT；未认证的 non-distributing fund 处置收益通常按所得税并可能加 USC、PRSI，亏损通常不能使用 |
| CFD、期权、期货等衍生品 | 没有仅凭产品名称即可套用的统一结论 | 可能涉及 CGT，也可能因活动构成 trade 而按所得征税；应结合合约条款和事实判断 |
| 高频短线交易 | **没有单独的"短期资本利得税率"** | 高频不自动变成自雇交易业务，但会提高被认定为 trade 的风险 |

这里的“合格 OECD 协定国”是指与爱尔兰签有双重征税协定的 OECD 成员国，并不是所有外国基金所在地。其他地区的离岸基金适用另一套 distributing / non-distributing fund 规则；Revenue 的[其他地区离岸基金手册 Part 27-02-01](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-02-01.pdf)列出了 40% CGT、所得税处理和亏损限制。Revenue 的[股息指引](https://www.revenue.ie/en/additional-incomes/dividend-income/index.aspx)确认了爱尔兰股息、英国股息和其他外国股息的不同申报口径；[外国存款利息指引](https://www.revenue.ie/en/additional-incomes/dirt/foreign-deposit-income.aspx)则区分欧盟与英国/其他非欧盟账户。

2026 年单身个人的所得税标准税率带为前 **€44,000 按 20%**、余额 40%；USC 标准档次为 0.5%、2%、3%、8%，总收入不超过 **€13,000** 时豁免。投资收入的 PRSI 类别取决于个人身份和其他收入：例如，标准 PAYE 雇员没有交易收入、只有额外投资收入时，Revenue 的计算示例使用 **Class K**；只有投资收入的人则可能落入 **Class S**。2026 年 PRSI 费率在 9 月 30 日前为 **4.2%**，10 月 1 日起为 **4.35%**；社会保障部的 Class S 页面公布年度自行评税混合费率为 **4.2375%**，下文的 Class K 示例也用相同的分段时间加权结果作估算。年龄、领取 State Pension (Contributory) 与原本的 PRSI 类别都会改变结果，最终数额以 Revenue 评税为准。基金 38% 制度下的收入和利得通常**不加** USC 或 PRSI。官方费率见社会保障部的 [Class K](https://www.gov.ie/en/department-of-social-protection/publications/prsi-class-k-rates/) 与 [Class S](https://www.gov.ie/en/department-of-social-protection/publications/prsi-class-s-rates/) 页面；所得税及 USC 档位见 Revenue 的 [Budget 2026 Summary](https://www.revenue.ie/en/corporate/press-office/budget-information/previous-years/2026/budget-summary.pdf)。

## 有工资收入时怎么算：五种典型场景

对上班族来说，最重要的一点是：**股息是叠在工资之上计算的**。工资先占用所得税率带和 USC 档次，股息落在剩余档位。以下场景只计算“新增投资收益带来的额外税款”，不重复列工资本身已经产生的税；场景中的股息金额是按照来源国规则确定后、应计入爱尔兰申报表的应税金额，未另算 DWT 或外国预扣税抵免。各场景均假定单身、普通 Class A PAYE 雇员、未满 66 岁、无医疗卡及其他收入或减免。2026 年 USC 各档边界为首 €12,012 按 0.5%、至 €28,700 按 2%、至 €70,044 按 3%、以上按 8%。PRSI 以 2026 年年度混合费率 4.2375% 作示意，最终以 Revenue 的实际评税为准。

**场景一：工资 €30,000 + 股息 €3,000（税率带没用完）**

| 税种 | 计算 | 税额 |
|---|---|---|
| 所得税 | €3,000 × 20%（税率带还剩 €14,000，全部落在 20% 档） | €600 |
| USC | €3,000 × 3%（总收入 €33,000，股息部分落在 3% 档） | €90 |
| Class K PRSI | €3,000 × 4.2375% | €127.13 |
| **合计** | | **€817.13，新增投资收益税负约 27.24%** |

非 PAYE 净收入不超过 €5,000，通常通过 myAccount 提交 **Form 12** 即可。

**场景二：工资 €50,000 + 同样股息 €3,000（税率带已用满）**

| 税种 | 计算 | 税额 |
|---|---|---|
| 所得税 | €3,000 × 40%（工资已占满 €44,000 税率带） | €1,200 |
| USC | €3,000 × 3%（总收入 €53,000，仍在 3% 档） | €90 |
| Class K PRSI | €3,000 × 4.2375% | €127.13 |
| **合计** | | **€1,417.13，新增投资收益税负约 47.24%** |

同样 €3,000 股息，工资 €50,000 的人比工资 €30,000 的人多缴 **€600**——在这些假设下，差额来自所得税档位。

**场景三：工资 €50,000 + 卖出股票盈利 €5,000（资本利得与工资完全分开算）**

| 税种 | 计算 | 税额 |
|---|---|---|
| CGT | （€5,000 − €1,270 免税额）× 33% | €1,230.90 |
| USC / PRSI | 不适用 | €0 |
| **合计** | | **€1,230.90，实际税负约 24.6%** |

在这个简单例子中，工资高低**不改变**标准 CGT 税率。若工资为 €50,000，同样 €5,000 投资收益作为股息，按 40% 所得税、3% USC 和示意的 4.2375% Class K PRSI 计算，税后约 €2,638；作为普通股票资本利得，税后约 €3,769，相差约 **€1,131**。这只是税种差异的直观比较，未考虑外国预扣税、特殊减免或交易被认定为 trade 的情形。

**场景四：工资 €30,000 + UCITS ETF 八年视同处置收益 €8,000（基金通道不看工资）**

| 税种 | 计算 | 税额 |
|---|---|---|
| 基金退出税 | €8,000 × 38% | €3,040 |
| USC / PRSI / €1,270 免税额 | 均不适用 | €0 |
| **合计** | | **€3,040，实际税负 38%** |

注意这里的现金流问题：**你一股未卖，却要掏出 €3,040 现金**，只能从工资或其他资金里预留。这类持仓通常还需提交 **Form 11**，不能用 Form 12。

**场景五：全年总收入 €12,500（兼职工资 €12,000 + 股息 €500）**

总收入不超过 €13,000，因此 USC **全额豁免**。按 2026 年标准单身个人税收抵免 €2,000，加最高 €2,000 的 Employee Tax Credit，这个例子的 €2,500 毛所得税会被抵免完全覆盖，所以新增股息的**实际所得税是 €0**，不是简单的 €500 × 20% = €100。按上述假设，股息仍可能产生约 **€21.19 的 Class K PRSI**（€500 × 4.2375%）。因此本例新增投资税款约 €21.19；若个人的年龄或 PRSI 身份不同，结果也可能不同。还要注意 USC 门槛的跳变：总收入一旦超过 €13,000，USC 是对**全部应计收入**征收，而不只是超出的部分。

**五个场景汇总：**

| 场景 | 投资收益 | 走的通道 | 税额 | 实际税负 | 申报表 |
|---|---|---|---|---|---|
| 一 | 股息 €3,000（工资 €30,000） | 所得税 20% + USC + Class K PRSI | €817.13 | 27.24% | Form 12 |
| 二 | 股息 €3,000（工资 €50,000） | 所得税 40% + USC + Class K PRSI | €1,417.13 | 47.24% | Form 12 |
| 三 | 股票利得 €5,000（工资 €50,000） | 33% CGT + 免税额 | €1,231 | 24.6% | CG1 或 Form 11 |
| 四 | ETF 视同处置 €8,000（工资 €30,000） | 38% 退出税 | €3,040 | 38% | Form 11 |
| 五 | 股息 €500（总收入 €12,500） | 所得税由抵免覆盖、USC 豁免、Class K PRSI | 约 €21.19 | 约 4.24% | Form 12 |

一句话总结：**股息与工资合并计算，会共同占用税率带和抵免；普通股票资本利得通常另走 CGT，等同基金另走基金税制，工资高低不会直接改变这两套制度的法定税率。**

## CGT 的两个技术细节：净额与四周规则

普通股票的资本利得 = 出售价款 − 购买成本 − 可扣除交易费用。资本亏损可抵减同年度其他资本利得并向后年度结转，但**不能**抵减股息、利息或工资；**€1,270 年度免税额不能结转**，当年不用即作废。

成本配对规则与券商 App 显示的“平均成本”不是一回事。普通股票通常适用先进先出（FIFO），但 Revenue 的**四周规则其实包含两件不同的事**：

- **先买后卖，间隔不超过四周：** 卖出的股票先与这四周内最近买入的同类股票配对，也就是后进先出（LIFO）；超出的数量再回到 FIFO。
- **先亏损卖出，再于四周内买回：** 这笔亏损不能随意抵减其他资本利得，只能在以后卖出这批买回股票产生的利得范围内使用。

因此，年底做亏损收割（loss harvesting）时不能只看券商的平均成本。Revenue 的[股票处置说明](https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/selling-or-disposing-of-shares.aspx)分别列出了这两条规则。

## ETF 的八年视同处置：最容易踩的坑

爱尔兰注册基金，以及与爱尔兰受监管基金“在所有重要方面相似”的欧盟、EEA 或合格 OECD 协定国基金，适用基金税制。自 2026 年 1 月 1 日起，个人取得的应税分配、实际处置收益，以及**每满八年的视同处置收益**通常按 38% 征税。Revenue 的 [eBrief 016/26](https://www.revenue.ie/en/tax-professionals/ebrief/2026/no-0162026.aspx)确认了 41% 降至 38% 的生效日和适用范围；[离岸基金手册 Part 27-04-01](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-04-01.pdf)说明了“等同基金”的判断标准、八年视同处置和亏损限制。

这套 38% + 八年规则并不覆盖所有外国基金。EU、EEA 或合格 OECD 协定国中的**非等同基金**按一般所得税和 CGT 原则处理；其他地区的离岸基金则要按 Part 27-02-01 再区分 Revenue 认证的 distributing fund 与默认的 non-distributing fund。口语地说，先看“基金住在哪里”，再看“它在爱尔兰税法里是哪一类”，最后才能谈税率。

这意味着：**你没有卖出任何东西，也可能产生纳税义务和缴款义务。** 交易所交易的 ETF 通常不会在券商端扣爱尔兰退出税，必须自行申报。除下文提到的旧指引过渡情形外，八周年要从**每一批**买入的实际日期分别起算，不要等待平台提醒——多数平台根本不会提醒。

视同处置并不是让同一段收益永久重复纳税。以后实际卖出时，要把此前视同处置已经缴过的税纳入计算；Revenue 的手册规定，视同处置和最终实际处置合计的税负不应超过按实际处置计算的税负。不过，在卖出之前仍然会有真实的现金缴税压力。

判断一只 ETF 的税制，要看它的 **ISIN、注册地、法律形式、监管状态和基金文件**，不能凭交易所、交易币种或“ETF”三个字母判断：

- 爱尔兰注册的 UCITS ETF（VUSA、VUAA 等）通常适用 38% + 八年视同处置
- 直接持有美国公司普通股（AAPL、MSFT）通常适用 33% CGT
- 美国注册 ETF（VOO、VTI、SPY、QQQ）也不能再沿用“与普通股票相同”的旧版概括规则，需要逐只判断是否属于等同离岸基金；Revenue 自 2022 年起撤回了那项概括处理

一般情况下，八周年要按每批单位的取得日期分别追踪。不过，美国、EEA 或其他合格 OECD 国家中曾受旧 ETF 指引覆盖、在 **2022 年以前**已经持有的 ETF 有一项过渡口径：如果重新分析后属于等同基金，八年从 **2022 年**开始计算，因此最早视同处置在 **2030 年**。参见 Revenue 的 [ETF 手册 Part 27-01A-03](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-01a-03.pdf)。交易所 ETF 因通过认可清算系统持有，基金通常不在源头扣退出税；投资者要自行评税，详见 Revenue 的[投资机构手册 Part 27-01A-02](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-01a-02.pdf)。

顺带说明，这正是 [美国本土 ETF、UCITS ETF 与 Stock Token](/research/us-etf-vs-ucits-vs-token) 的区别在税务上的延伸：**跟踪同一个标普 500 指数的三种产品，可能落入三套完全不同的税制。**

## 券商替你做什么、不替你做什么

无论用 Trading 212、Trade Republic、Revolut、Robinhood Europe 还是 IBKR，对爱尔兰税务居民而言，平台的角色高度一致：

| 项目 | 平台通常做法 |
|---|---|
| 爱尔兰 CGT | **不代扣、不代算**，投资者自行计算和缴纳 |
| 爱尔兰所得税、USC、PRSI | 通常不代扣 |
| 基金 38% 退出税与八年视同处置 | 交易所交易的 ETF 通常不代扣，需自行申报 |
| 股票来源国股息预扣税 | 可能按发行国规则扣除（美股依 W-8BEN 适用相应税率） |
| 爱尔兰 DWT | 投资爱尔兰公司时可能通过托管链扣 25% |
| 年度税表 | 提供年度报表，但**不保证**按爱尔兰税法完成分类和计算 |
| CRS 信息 | 收集税务居民国、TIN 等，报送后自动交换给 Revenue |

两点特别提醒：

**第一，平台为其他国家客户提供的自动代扣服务不适用于你。** 例如某平台为德国税务居民提供的德国资本利得税自动代缴服务，与仅为爱尔兰税务居民的客户无关；即使你的账户签约实体在德国，也不能假定爱尔兰税已经被缴过了。

**第二，“钱一直放在券商没转回爱尔兰”不等于 Revenue 不知道。** 对位于参与 CRS/DAC2 司法辖区且账户属于可报告范围的金融机构，通常报告税务居民身份、税号、年末账户余额或价值、股息、利息，以及出售或赎回金融资产的**总收入**；信息可能先报送平台实体所在地税务机关，再自动交换给 Revenue。Revenue 的 [FATCA/DAC2-CRS 信息清单](https://www.revenue.ie/en/companies-and-charities/international-tax/aeoi/fatca/info.aspx)列出了这些字段。CRS 报告的是信息，不等于平台已经替你算税或缴税。

**"现金利息"需要单独查条款。** 如果它法律上是欧盟银行支付的存款利息，可能按 33% 处理；如果现金实际投放于合格货币市场基金，则可能适用基金 38% 和视同处置规则；非欧盟来源利息则可能按 33% 与 40% 中的较高者。不能把所有 "Interest on cash" 一律当成 DIRT。

## 申报表、缴款期限与罚则

用哪张表取决于你是否属于"应自行评税人员（chargeable person）"：

| 情形 | 通常渠道与表格 |
|---|---|
| 有 PAYE 收入，净应税非 PAYE 收入 ≤ €5,000 且毛额 ≤ €30,000 | myAccount 在线提交 **Form 12** |
| 净应税非 PAYE 收入 > €5,000，或毛额 > €30,000 | 注册 Income Tax self-assessment，经 ROS 提交 **Form 11** |
| 只有资本资产处置，且不是 Form 11 申报人 | 提交 **Form CG1** |
| 已提交 Form 11 | 资本利得并入 Form 11，无需重复提交 CG1 |
| 买入税法所称离岸基金的 material interest（实质性权益） | 买入当年即成为 chargeable person，通常须提交 **Form 11** 并填报取得详情，即使当年尚无分配或处置；EU/EEA/OECD 协定国与其他地区均有对应规定 |
| 通过认可清算系统持有爱尔兰 ETF，并发生分配、实际处置或视同处置 | 基金通常不代扣，个人自行评税并在所得税申报表填报；实务上通常涉及 **Form 11** |

Revenue 的[自行评税注册说明](https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/register-it-self-assessment.aspx)列明 €5,000 净额和 €30,000 毛额门槛。需要注意，离岸基金的取得申报是另一项独立规则，不能因为收入低于这两个门槛就默认使用 Form 12；上述两份离岸基金手册都明确说明，买入税法所称的 material interest 会使个人在该期间成为 chargeable person。这里的 material interest 不是泛指“持有很多”，而是 Part 27 对可按基金净资产价值变现的权益所下的专门定义。

这张表适用于原本不因其他原因进入自行评税的普通 PAYE 纳税人。如果你已经注册 Form 11、Revenue 已要求你申报，或某一持续收入来源曾使你成为 chargeable person，不要仅因本年度金额降到门槛以下就自行改用 Form 12；应先在 ROS 办理停止注册或向 Revenue 确认。

**CGT 的缴款期限远早于申报期限**，这是最常见的逾期原因：

| 处置日期 | CGT 缴款期限 |
|---|---|
| 1 月 1 日 – 11 月 30 日 | **当年 12 月 15 日** |
| 12 月 1 日 – 12 月 31 日 | **次年 1 月 31 日** |
| CGT 年度申报 | 处置次年 **10 月 31 日** 前 |

即使因资本亏损或 €1,270 免税额而最终无税可缴，只要发生应报告的处置，通常仍有**申报义务**。

Revenue 的 [CGT 缴款与申报页面](https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/when-and-how-do-you-pay-and-file-cgt.aspx)确认了上述两个缴款窗口、次年 10 月 31 日申报，以及“无税可缴仍可能要申报”。

以当前可申报的 2025 税年为例，法定 Form 11、纸质 Form 12 和 CG1 申报日期为 **2026 年 10 月 31 日**；同时通过 ROS 在线提交 Form 11，并在线缴纳 2025 年余额税及 2026 年预缴税的自行评税人，2026 年 ROS 延长期限为 **2026 年 11 月 18 日**。延长期限的两个条件必须同时满足，而且日期每年不同，不能永久套用。Revenue 的 [2026 Pay and File 页面](https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/pay-file-system.aspx)列出了本年度日期和条件。未收到法定申报通知、只是通过 myAccount 主动提交 PAYE Income Tax Return 的一般时间限制可不同，不应把四年更正/退税期限与 10 月 31 日的法定申报期限混为一谈。

注意 Form 11 的 Pay and File 通常一次包含三件事：提交上一税年申报表、缴纳上一税年**余额税**、缴纳本税年**初步税（preliminary tax）**。首次进入自行评税时，实际付款金额往往明显高于单纯的上一年度税款。

逾期申报附加费：

| 情形 | 附加费 |
|---|---|
| 逾期不超过两个月 | 应纳税额的 **5%**，最高 €12,695 |
| 逾期超过两个月 | 应纳税额的 **10%**，最高 €63,485 |

迟缴还会产生法定利息；漏报、错误抵免或故意隐瞒账户可能进一步引起补税、罚款和审查。与所得税、CGT 计算相关的原始记录一般应保存至少 **六年**——平台账户关闭后可能无法补开文件，所以每年自行下载备份。Revenue 的[记录保存说明](https://www.revenue.ie/en/starting-a-business/starting-a-business/keeping-records.aspx)列明了六年要求。

## 长期持有 vs 频繁交易：真正的分水岭

爱尔兰税制里，长期与短期的差别**不在税率**，而在资产分类和活动性质：

- **长期持有普通股票**：收到股息时按股息规则纳税；通常在卖出、赠与或发生其他处置时才计算 CGT，单纯价格上涨但继续持有一般不产生 CGT
- **长期持有 UCITS ETF**：即使一股未卖，每满八年按 38% 视同处置缴税
- **频繁短线交易股票**：没有惩罚性的“短期 CGT 税率”，但是否仍属资本投资要看全部事实

Revenue 会参考“交易标志”（badges of trade）综合判断，例如资产本身的性质、持有时间、类似交易的次数、为了转售所做的加工或组织、出售原因，以及买入时是否已有转售获利目的。如果整体上构成 **trade**，净利润改按所得税 20%/40% 加 USC 和 PRSI，亏损也改用交易亏损规则。交易次数只是证据之一，不是自动切换税制的开关。Revenue 在[交易标志说明](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-02/02-02-06.pdf)附录中列出了完整判断因素。

反过来，**不要因为"我交易很频繁"就主动注册某种"投资自雇身份"**。是否需要注册 self-assessment 取决于门槛和持仓类型（非 PAYE 收入超门槛、持有需自行申报的离岸基金等），与是否是"职业交易者"是两个独立问题。

## 行动清单

1. **先分类，再交易。** 买入前确认这是普通股票、爱尔兰基金、EU/EEA/OECD 协定国的等同或非等同基金、其他地区离岸基金，还是别的产品——这通常决定适用 33% CGT、38% 基金税制、40% CGT 或所得税，能否用 €1,270 免税额，以及要不要记录八周年。
2. **建立持仓分类表。** 每个持仓标记为普通股票 / 爱尔兰基金 / 等同境外基金 / 非等同境外基金 / 其他地区离岸基金 / 债券 / 现金利息 / 衍生品；ETF 必须记录 ISIN、注册地、**每批**首次买入日期，以及是否属于 2022 年以前已持有的过渡批次。
3. **每年下载并备份全部报表。** 年度报表、交易 CSV、股息、现金利息、费用报告、W-8BEN，保存至少六年。
4. **自行重建爱尔兰税务成本。** 按交易日适用汇率把成本、售价和费用换算为欧元。普通股票使用 FIFO 和四周规则；基金则按相应基金制度的成本规则处理。**不要**直接使用平台的平均成本或 “return” 数字。
5. **先确认股息申报口径。** 爱尔兰公司股息和美国等多数外国股息通常按毛额申报，并记录来源国预扣税；英国公司股息按 Revenue 当前指引申报实际收到的净额，不能把所有国家一概而论。
6. **在日历上标三个日期。** 12 月 15 日（1–11 月处置的 CGT）、1 月 31 日（12 月处置的 CGT）、10 月 31 日（年度申报）。
7. **年底前检查两件事。** 可用的资本亏损，以及是否有 ETF 批次即将满八年。
8. **核对券商里的税务资料。** 税务居住国、PPSN/TIN、账户签约实体、W-8BEN 是否与实际情况一致。
9. **重大或不确定项目找爱尔兰本地专业意见。** 尤其是依赖汇入制、混合资金账户、美国注册 ETF、CFD、杠杆高频交易，或累计收益较大时。

## 政府官方来源

以下均为爱尔兰政府或 Revenue 官方页面，本文以这些材料截至 2026 年 8 月 6 日的版本为核验依据：

- [Revenue：Budget 2026 Summary（所得税率带、税收抵免、USC）](https://www.revenue.ie/en/corporate/press-office/budget-information/previous-years/2026/budget-summary.pdf)
- [Revenue：住所与汇入制](https://www.revenue.ie/en/jobs-and-pensions/tax-residence/domicile-domicile-levy.aspx)
- [Revenue：股息收入、DWT、英国及其他外国股息](https://www.revenue.ie/en/additional-incomes/dividend-income/index.aspx)
- [Revenue：爱尔兰、欧盟及非欧盟存款利息](https://www.revenue.ie/en/additional-incomes/dirt/foreign-deposit-income.aspx)
- [Revenue：CGT 缴款、申报和表格](https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/when-and-how-do-you-pay-and-file-cgt.aspx)
- [Revenue：股票 FIFO 与两种四周规则](https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/selling-or-disposing-of-shares.aspx)
- [Revenue：2026 年基金税率变更 eBrief 016/26](https://www.revenue.ie/en/tax-professionals/ebrief/2026/no-0162026.aspx)
- [Revenue：离岸基金 Part 27-04-01](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-04-01.pdf)
- [Revenue：其他地区离岸基金 Part 27-02-01](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-02-01.pdf)
- [Revenue：爱尔兰投资机构与 ETF 自行评税 Part 27-01A-02](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-01a-02.pdf)
- [Revenue：ETF 注册地与 2022 年过渡规则 Part 27-01A-03](https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-01a-03.pdf)
- [Revenue：自行评税门槛与 Form 11 / Form 12](https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/register-it-self-assessment.aspx)
- [Revenue：2026 Pay and File 日期与逾期附加费](https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/pay-file-system.aspx)
- [社会保障部：PRSI Class K 费率](https://www.gov.ie/en/department-of-social-protection/publications/prsi-class-k-rates/)
- [社会保障部：PRSI Class S 费率](https://www.gov.ie/en/department-of-social-protection/publications/prsi-class-s-rates/)
- [Revenue：FATCA / DAC2-CRS 报告信息](https://www.revenue.ie/en/companies-and-charities/international-tax/aeoi/fatca/info.aspx)
`,
};
