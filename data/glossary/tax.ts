import type { GlossaryTerm } from "@/types";

const REV_CGT = {
  title: "Revenue — 资本利得税（Capital Gains Tax）",
  url: "https://www.revenue.ie/en/gains-gifts-and-inheritance/index.aspx",
};
const REV_CGT_CALC = {
  title: "Revenue — 如何计算资本利得税",
  url: "https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/how-to-calculate-cgt.aspx",
};
const REV_CGT_PAY = {
  title: "Revenue — 何时以及如何缴纳和申报 CGT",
  url: "https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/when-and-how-do-you-pay-and-file-cgt.aspx",
};
const REV_CGT_EXEMPT = {
  title: "Revenue — 资本利得税的豁免与减免",
  url: "https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/cgt-exemptions.aspx",
};
const REV_USC = {
  title: "Revenue — 普遍社会费（USC）",
  url: "https://www.revenue.ie/en/jobs-and-pensions/usc/index.aspx",
};
const REV_PRSI = {
  title: "Revenue — 薪资相关社会保险（PRSI）",
  url: "https://www.revenue.ie/en/jobs-and-pensions/prsi/index.aspx",
};
const REV_PRSI_SELF = {
  title: "Revenue — 自行评税指南中的 PRSI",
  url: "https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/prsi.aspx",
};
const REV_DWT = {
  title: "Revenue — 股息预扣税（DWT）",
  url: "https://www.revenue.ie/en/companies-and-charities/dividend-withholding-tax/index.aspx",
};
const REV_DIRT = {
  title: "Revenue — 存款利息预扣税（DIRT）",
  url: "https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/income-and-employment/dirt/index.aspx",
};
const REV_DEPOSIT = {
  title: "Revenue — 存款利息如何课税",
  url: "https://www.revenue.ie/en/additional-incomes/investments/how-are-deposit-interest-payments-taxed.aspx",
};
const REV_IUT = {
  title: "Revenue — 投资机构（Investment Undertakings）课税",
  url: "https://www.revenue.ie/en/additional-incomes/investments/investment-undertakings.aspx",
};
const REV_OFFSHORE = {
  title: "Revenue — 离岸基金（Offshore Funds）",
  url: "https://www.revenue.ie/en/additional-incomes/investments/offshore-funds.aspx",
};
const REV_OFFSHORE_TDM = {
  title: "Revenue — 离岸基金税务与关税手册 Part 27-04-01",
  url: "https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-27/27-04-01.pdf",
};
const REV_SHARES = {
  title: "Revenue — 股份与投资的课税",
  url: "https://www.revenue.ie/en/additional-incomes/investments/shares-and-investments.aspx",
};
const REV_SHARES_TDM = {
  title: "Revenue — 股份处置的成本配对规则（TDM Part 19-02-06）",
  url: "https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-19/19-02-06.pdf",
};
const REV_TRADE_TDM = {
  title: "Revenue — 交易认定与交易标志（TDM Part 04-01-06）",
  url: "https://www.revenue.ie/en/tax-professionals/tdm/income-tax-capital-gains-tax-corporation-tax/part-04/04-01-06.pdf",
};
const REV_PAYE = {
  title: "Revenue — PAYE 所得税代扣代缴制度",
  url: "https://www.revenue.ie/en/jobs-and-pensions/paye/index.aspx",
};

/** Irish tax types and rates that apply to broker investing. */
export const taxTerms: GlossaryTerm[] = [
  {
    slug: "capital-gains-tax",
    name: "Capital Gains Tax",
    fullName: "Capital Gains Tax",
    abbreviation: "CGT",
    chineseName: "资本利得税",
    category: "税务",
    definition:
      "对处置资产所实现的净利得征收的税，爱尔兰标准税率为 33%，适用于直接持有的普通股票等资产。",
    explanation:
      "CGT 针对的是净利得而不是成交总额：出售价款减去购买成本和可扣除的交易费用，才是应税基数。爱尔兰标准税率为 33%，个人每年另有 €1,270 的年度免税额。持有时间长短本身不改变税率——爱尔兰没有单独的短期资本利得税率。资本亏损可抵减同年度其他资本利得并向以后年度结转，但不能用来抵减股息、利息或工资。需要特别注意的是，基金和多数 UCITS ETF 走的是完全独立的基金退出税制度，不适用 CGT 税率，也不能使用 €1,270 免税额。",
    whyExists:
      "资产增值属于纳税人的经济所得，但在处置前并未实现，因此各国普遍在处置环节单设一道资本利得税，与经常性的工资、股息所得分开计算。",
    whenCharged:
      "处置资产实现净利得时；1 至 11 月的处置在当年 12 月 15 日前缴纳，12 月的处置在次年 1 月 31 日前缴纳",
    chargedBy: "爱尔兰税务局（Revenue）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: true,
    calculation: "（出售价款 − 购买成本 − 可扣除费用 − 可用亏损 − 年度免税额）× 33%",
    formula: "CGT = max(0, 净利得 − €1,270) × 33%",
    example:
      "以 €5,000 买入某美国公司股票，一年后以 €8,000 卖出，两次佣金合计 €10：净利得 €2,990，扣除 €1,270 年度免税额后应税 €1,720，CGT 约 €567.60。",
    sources: [REV_CGT, REV_CGT_CALC, REV_CGT_PAY],
    updatedAt: "2026-08-05",
  },
  {
    slug: "cgt-annual-exemption",
    name: "CGT Annual Exemption",
    fullName: "Personal Annual Exemption for Capital Gains Tax",
    abbreviation: null,
    chineseName: "资本利得税年度免税额",
    category: "税务",
    definition:
      "爱尔兰个人每个税年可免征资本利得税的前 €1,270 净利得，不能结转到下一年，也不能在配偶之间转让。",
    explanation:
      "这是每个个人自动享有的额度，无需申请。关键限制有三条：当年不用即作废，不能累积；不能转让给配偶或民事伴侣；只对走 CGT 制度的资产有效——爱尔兰基金、等同境外基金和多数 UCITS ETF 走 38% 退出税制度，完全用不上这 €1,270。另外，即使净利得低于 €1,270、最终无税可缴，只要发生了应报告的处置，通常仍有申报义务。",
    whyExists:
      "为小额投资者设置的免征门槛，避免为极小金额的资本利得动用完整的申报与征收流程。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（由 Revenue 在计算 CGT 时给予）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "应税利得 = 当年净利得 − 可用亏损 − €1,270（不足部分不结转）",
    formula: null,
    example:
      "某年净利得 €900，全部落入免税额，CGT 为 €0，剩余的 €370 额度作废，不能带到下一年使用。",
    sources: [REV_CGT_EXEMPT, REV_CGT_CALC],
    updatedAt: "2026-08-05",
  },
  {
    slug: "exit-tax",
    name: "Exit Tax",
    fullName: "Investment Undertaking Exit Tax",
    abbreviation: null,
    chineseName: "基金退出税",
    category: "税务",
    definition:
      "对爱尔兰基金及等同境外基金的分配和处置收益单独征收的税，自 2026 年起个人通常适用 38%，且不适用 CGT 年度免税额。",
    explanation:
      "爱尔兰注册基金，以及与之等同的欧盟、EEA 或合格协定国基金（涵盖多数 UCITS ETF），不走 33% CGT，而走这套独立的退出税制度。自 2026 年 1 月 1 日起，个人的应税分配、实际处置收益以及每满八年的视同处置收益通常按 38% 征税，通常不加 USC 或 PRSI。三条最容易踩坑的限制：不能使用 €1,270 年度免税额；通常不能用普通股票的资本亏损去抵减；交易所交易的 ETF 通常不会由券商代扣，必须自行申报。判断某只 ETF 是否适用，要看它的 ISIN、注册地、法律形式和基金文件，不能凭交易所或交易币种推断。",
    whyExists:
      "爱尔兰基金在基金层面通常免税，税负被推迟到投资者取得分配或处置份额的退出环节，因此需要一套与 CGT 平行的征收机制。",
    whenCharged: "取得应税分配、实际处置基金份额，或持有满八年触发视同处置时",
    chargedBy: "爱尔兰基金由基金或其代理代扣；境外 ETF 通常由投资者自行申报缴纳",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: true,
    calculation: "（分配金额或处置收益）× 38%",
    formula: null,
    example:
      "以 €10,000 买入一只爱尔兰注册的 UCITS ETF，若干年后以 €16,000 卖出：收益 €6,000 按 38% 计约 €2,280，且不能扣除 €1,270 年度免税额。同样金额若是直接持有的普通股票，按 33% 并扣除免税额后约为 €1,562。",
    sources: [REV_IUT, REV_OFFSHORE, REV_OFFSHORE_TDM],
    updatedAt: "2026-08-05",
  },
  {
    slug: "deemed-disposal",
    name: "Deemed Disposal",
    fullName: "Eight-Year Deemed Disposal",
    abbreviation: null,
    chineseName: "视同处置（八年规则）",
    category: "税务",
    definition:
      "适用基金税制的持仓每满八年被视为按市价卖出并立即买回，即使你一股未卖，也会产生纳税和缴款义务。",
    explanation:
      "这是长期持有 UCITS ETF 最容易被忽略的成本。八周年要从每一批买入的实际日期分别起算——同一只 ETF 分十次买入，就有十个不同的八周年日期。到期时按当时市值与成本的差额计算收益并按 38% 缴税，缴过的税在真正卖出时可以抵减，避免重复征税；若后续价格下跌，多缴部分可申请退还。券商通常不会提醒，也不会代扣，日期必须自己记录。",
    whyExists:
      "如果没有这条规则，投资者可以通过长期不卖出基金份额无限期递延税负；八年视同处置强制税负定期实现。",
    whenCharged: "每一批基金份额买入满八年之日，以及其后每八年",
    chargedBy: "爱尔兰税务局（Revenue），通常需投资者自行申报",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: "（八周年当日市值 − 该批份额成本）× 38%",
    formula: null,
    example:
      "2018 年 3 月以 €10,000 买入某爱尔兰注册 UCITS ETF，2026 年 3 月市值 €18,000：即使完全没有卖出，也需就 €8,000 的账面收益按 38% 缴约 €3,040，并在申报表中列示。",
    sources: [REV_IUT, REV_OFFSHORE_TDM],
    updatedAt: "2026-08-05",
  },
  {
    slug: "usc",
    name: "USC",
    fullName: "Universal Social Charge",
    abbreviation: "USC",
    chineseName: "普遍社会费",
    category: "税务",
    definition:
      "在所得税之外对总收入另行征收的一道税，2026 年标准档次为 0.5%、2%、3% 和 8%，股息等投资收入通常计入。",
    explanation:
      "USC 是与所得税并行的独立税种，按总收入分档累进计算，几乎没有所得税那样的税收抵免可以抵扣。总收入不超过 €13,000 时通常可全额豁免，一旦超过则全部收入按各档税率计算，而不只是超出的部分。对投资者而言的要点是：股息通常计入 USC，而 DIRT 利息通常不缴 USC，基金 38% 退出税和 33% CGT 也不加 USC。这就是为什么同样是投资收益，实际税负差别很大。",
    whyExists:
      "2011 年取代原有的所得税附加费与健康捐，为国家财政提供税基更宽、抵免更少的稳定收入来源。",
    whenCharged: "按税年就总收入计算，通过 PAYE 代扣或年度申报缴纳",
    chargedBy: "爱尔兰税务局（Revenue）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "总收入按 0.5% / 2% / 3% / 8% 分档累进计算（2026 年标准档次）",
    formula: null,
    example:
      "收到某美国公司股息毛额 €1,000：这 €1,000 除按 20% 或 40% 计所得税外，通常还计入 USC 总收入，按你所处的档次另行计费。",
    sources: [REV_USC],
    updatedAt: "2026-08-05",
  },
  {
    slug: "prsi",
    name: "PRSI",
    fullName: "Pay Related Social Insurance",
    abbreviation: "PRSI",
    chineseName: "薪资相关社会保险",
    category: "税务",
    definition:
      "爱尔兰的社会保险缴费，投资收入达到条件时按 Class S 缴纳，2026 年 9 月 30 日前为 4.2%，10 月 1 日起为 4.35%。",
    explanation:
      "很多人以为 PRSI 只和工资有关，但股息、租金等非工资收入在满足条件时也会产生 Class S PRSI，这是投资者常见的漏算项。它与所得税、USC 是三道独立计算的负担，叠加后股息的实际税负可能远高于表面的 20% 或 40%。反过来，基金 38% 退出税和 33% CGT 通常不加 PRSI，DIRT 利息一般不缴 USC 但某些情形仍可能涉及 PRSI——具体取决于收入构成和你的保险类别。",
    whyExists:
      "PRSI 缴费与养老金、失业金等社会保险给付资格挂钩，因此对有独立收入来源的人也要求缴纳，而不仅限于受雇者。",
    whenCharged: "按税年就应缴的非工资收入计算，通常随年度申报缴纳",
    chargedBy: "爱尔兰税务局（Revenue）代社会保护部收取",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "应缴收入 × Class S 税率（2026 年为 4.2%，10 月 1 日起 4.35%）",
    formula: null,
    example:
      "股息毛额 €2,000 若属应缴 Class S PRSI 的收入，在 2026 年 9 月 30 日前按 4.2% 约为 €84，此外还有所得税和 USC。",
    sources: [REV_PRSI, REV_PRSI_SELF],
    updatedAt: "2026-08-05",
  },
  {
    slug: "dwt",
    name: "DWT",
    fullName: "Dividend Withholding Tax",
    abbreviation: "DWT",
    chineseName: "股息预扣税",
    category: "税务",
    definition:
      "爱尔兰公司派发股息时通常先行扣缴的 25% 税款，性质是预缴而非最终税率，可在年度申报时抵免。",
    explanation:
      "最常见的误解是把 25% 当成股息的最终税率。实际上它只是付款环节的预扣：申报时你要按扣税前的毛额计入所得，按 20% 或 40% 计算所得税（可能另加 USC 和 PRSI），然后把已被扣走的 25% 作为已缴税款抵减。标准税率纳税人可能因此获得退税，高税率纳税人则需要补缴差额。持有爱尔兰公司股票时，券商托管链通常会自动完成这一步扣缴。",
    whyExists:
      "在付款环节预先扣缴可确保税款不因投资者不申报而流失，同时把核对与清算工作留到年度申报阶段。",
    whenCharged: "爱尔兰公司派发股息时由付款方扣除",
    chargedBy: "派息公司、合格中介或授权扣缴代理",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "股息毛额 × 25%，申报时作为已缴税款抵免",
    formula: null,
    example:
      "某爱尔兰公司宣布股息 €100，扣 25% DWT 后你实收 €75。申报时仍按 €100 毛额计入所得，并把 €25 列为已缴税款抵扣最终应纳税额。",
    sources: [REV_DWT, REV_SHARES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "dirt",
    name: "DIRT",
    fullName: "Deposit Interest Retention Tax",
    abbreviation: "DIRT",
    chineseName: "存款利息预扣税",
    category: "税务",
    definition:
      "爱尔兰银行在支付存款利息时按 33% 扣缴的税，通常不缴 USC，但欧盟以外来源的利息可能适用更高税率。",
    explanation:
      "爱尔兰银行存款利息由银行直接按 33% 扣走，账户看到的是税后金额。欧盟银行的存款利息通常按相同的 33% 处理，但境外机构不会代扣爱尔兰税，需要自行申报；英国及其他非欧盟来源的存款利息，在及时正确申报时通常按 33% 与个人边际税率中的较高者课税，高税率纳税人实际可能是 40%。券商账户里的现金利息必须查条款判断性质：若法律上是欧盟银行支付的存款利息，可能按 33%；若现金实际投放于货币市场基金，则可能落入 38% 基金退出税和视同处置规则。",
    whyExists:
      "存款利息笔数多、金额分散，由付息机构统一代扣比要求每个储户逐笔申报更有效率。",
    whenCharged: "银行支付或贷记利息时",
    chargedBy: "付息的银行或金融机构；境外来源需自行申报",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "利息毛额 × 33%（非欧盟来源可能按 33% 与边际税率中的较高者）",
    formula: null,
    example:
      "爱尔兰银行账户产生利息 €200，银行扣 33% DIRT 约 €66，实际入账约 €134，通常不再另缴 USC。",
    sources: [REV_DIRT, REV_DEPOSIT],
    updatedAt: "2026-08-05",
  },
  {
    slug: "standard-rate-band",
    name: "Standard Rate Band",
    fullName: "Standard Rate Band",
    abbreviation: null,
    chineseName: "标准税率带",
    category: "税务",
    definition:
      "所得税按 20% 计征的收入区间，2026 年单身个人为前 €44,000，超出部分按 40% 计征。",
    explanation:
      "股息等投资所得会叠加在工资收入之上一起计算，因此它落在 20% 还是 40% 档取决于你的总收入，而不是投资收入本身的大小。已经用满标准税率带的人，新增的每一欧元股息通常直接按 40% 计税，再加 USC 和可能的 PRSI。税率带因婚姻状况和是否为单亲而不同，具体额度以申报年度 Revenue 公布的数字为准。",
    whyExists:
      "累进税制通过设置分档区间，使较低收入适用较低税率，同时对超出部分适用较高税率。",
    whenCharged: "按税年计算所得税时",
    chargedBy: "爱尔兰税务局（Revenue）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "标准税率带内 × 20%，超出部分 × 40%（2026 年单身个人为 €44,000）",
    formula: null,
    example:
      "工资已达 €44,000 的单身纳税人再取得 €1,000 股息：这 €1,000 通常按 40% 计所得税约 €400，另加 USC 和可能的 PRSI。",
    sources: [REV_PAYE, REV_USC],
    updatedAt: "2026-08-05",
  },
  {
    slug: "four-week-rule",
    name: "Four-Week Rule",
    fullName: "Four-Week Rule (Bed and Breakfast Rule)",
    abbreviation: null,
    chineseName: "四周规则",
    category: "税务",
    definition:
      "卖出股票后四周内买回同类股票时适用的特殊配对规则，会限制以此制造的资本亏损被立即用于抵税。",
    explanation:
      "爱尔兰的股份成本配对通常适用先进先出（FIFO），但有这条例外：卖出后四周内重新买入同类股票，可能触发后进先出式配对，使卖出所产生的亏损只能抵减该股票后续的利得，而不能立刻抵减其他资本利得。它的目标是阻断年底卖出制造亏损、几天后原价买回的套利。年底做亏损收割前必须先算清这条，否则可能白白锁定一笔当年无法使用的亏损。",
    whyExists:
      "防止投资者在不改变实际持仓的情况下人为实现亏损，从而在年底突击减少应纳资本利得税。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属计算规则）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "四周内回购的股份按后进先出与该次卖出配对，亏损用途受限",
    formula: null,
    example:
      "12 月 20 日卖出某股票实现 €2,000 亏损，12 月 30 日又按相近价格买回同一股票：这笔亏损通常不能用来抵减当年其他股票的利得，只能留待该股票后续处置时使用。",
    sources: [REV_SHARES_TDM, REV_CGT_CALC],
    updatedAt: "2026-08-05",
  },
  {
    slug: "fifo",
    name: "FIFO",
    fullName: "First In, First Out",
    abbreviation: "FIFO",
    chineseName: "先进先出",
    category: "税务",
    definition:
      "计算资本利得时的成本配对原则：卖出同一证券的部分持仓时，视为先卖出最早买入的那一批。",
    explanation:
      "这直接决定你的应税利得数字，而且与券商 App 上显示的平均成本不是一回事。同一只股票分多次买入后卖出一部分时，爱尔兰税务上通常按最早买入的批次配对成本，因此在长期上涨的持仓中，FIFO 往往意味着更高的应税利得。券商的平均成本和 return 数字只是平台展示口径，申报时应按欧元逐笔重建税务成本，并注意四周规则这一例外。",
    whyExists:
      "同一证券的多批持仓在市场上无法区分，需要一条统一的配对规则来确定卖出部分对应的取得成本。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属计算规则）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "卖出份额依买入时间先后顺序配对成本",
    formula: null,
    example:
      "先后以 €50 和 €90 各买入 10 股，之后以 €100 卖出 10 股：税务上视为卖出最早那一批，成本 €500、利得 €500，而不是按平均成本 €700 计算的 €300。",
    sources: [REV_SHARES_TDM, REV_CGT_CALC],
    updatedAt: "2026-08-05",
  },
  {
    slug: "badges-of-trade",
    name: "Badges of Trade",
    fullName: "Badges of Trade",
    abbreviation: null,
    chineseName: "交易标志",
    category: "税务",
    definition:
      "Revenue 用来判断某项活动属于投资还是经营性交易业务的一组事实特征，结论决定按 CGT 还是按所得税课税。",
    explanation:
      "这套标准考察购买目的、持有时间、重复性、组织程度、是否依赖融资和杠杆、是否以商业方式持续经营等因素，是综合认定而非按交易次数一刀切。若整体活动被认定构成 trade，净利润改按所得税 20%/40% 加 USC 和 PRSI 计算，亏损也改用交易亏损规则，税负结构与 33% CGT 完全不同。频繁交易本身不会自动变成交易业务，但会提高被这样认定的风险；反过来，也不应仅因为交易频繁就主动去注册某种自雇身份。",
    whyExists:
      "税法需要区分偶发的资产处置与以营利为目的持续经营的商业活动，两者适用完全不同的课税规则。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属认定标准）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "综合事实认定，无固定公式",
    formula: null,
    example:
      "以自有资金每年买卖几十次股票、以长期持有为主，通常仍属资本投资适用 33% CGT；而以杠杆、系统化策略持续高频周转并以交易为主要收入来源，则可能被认定为 trade，改按所得税加 USC、PRSI 课税。",
    sources: [REV_TRADE_TDM, REV_SHARES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "withholding-tax",
    name: "Withholding Tax",
    fullName: "Withholding Tax",
    abbreviation: null,
    chineseName: "预扣税",
    category: "税务",
    definition:
      "在付款环节由付款方先行扣缴的征税机制，股息和利息最常见；被扣的税通常可在年度申报时抵免或退税。",
    explanation:
      "预扣税不是一种独立的税种，而是一种征收方式：在你收到钱之前，付款方（派息公司、银行或托管链）按规则先扣下一部分交给税务机关。你的最终税负仍以年度申报为准——申报时按扣税前的毛额计入所得，再把已扣税款作为抵免。跨境投资中可能同时涉及两层预扣：来源国预扣（如美国股息依 W-8BEN 适用协定税率）与爱尔兰的 DWT；前者通常可按税收协定在爱尔兰申报时申请外国税收抵免，因此扣缴凭证要保存好。",
    whyExists:
      "在资金流动环节扣税可确保税款不因收款人不申报而流失，是跨境所得最常见的征收保障。",
    whenCharged: "股息、利息等款项支付时",
    chargedBy: "派息公司、银行或托管链代相应税务机关扣缴",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "付款毛额 × 适用预扣率（国内法或税收协定税率）",
    formula: null,
    example:
      "某美国公司派发股息 $100，按协定预扣 15% 即 $15，实收 $85；爱尔兰申报时按 $100 毛额计入所得，被扣的 $15 可申请外国税收抵免。",
    sources: [REV_DWT, REV_SHARES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "loss-harvesting",
    name: "Tax-Loss Harvesting",
    fullName: "Tax-Loss Harvesting",
    abbreviation: null,
    chineseName: "亏损收割",
    category: "税务",
    definition:
      "在年底前卖出已亏损的持仓以实现资本亏损、用于抵减当年其他资本利得的合规操作。",
    explanation:
      "爱尔兰的资本亏损可抵减同年度其他资本利得并向以后年度结转，因此在年底前盘点浮亏持仓并卖出，是降低当年 CGT 的合法手段。两条纪律：一是亏损只能抵减资本利得，不能抵减股息、利息或工资；二是受四周规则限制——卖出后四周内买回同类股票，该亏损可能无法立即使用。此外，基金税制持仓的收益通常也不能用普通资本亏损抵减，亏损收割只对走 CGT 的资产有意义。",
    whyExists:
      "税制允许亏损抵减利得以反映真实的净收益，年底的亏损收割只是把这条规则应用到持仓管理上。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属税务筹划操作）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "已实现的资本亏损先抵减当年资本利得，余额向以后年度结转",
    formula: null,
    example:
      "某年股票 A 盈利 €4,000、股票 B 浮亏 €3,000：年底前卖出 B 实现亏损，应税利得从 €4,000 降至 €1,000，扣除 €1,270 免税额后当年 CGT 为 €0；但卖出后四周内不能买回 B。",
    sources: [REV_CGT_CALC, REV_SHARES_TDM],
    updatedAt: "2026-08-05",
  },
];
