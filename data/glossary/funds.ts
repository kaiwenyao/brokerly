import type { GlossaryTerm } from "@/types";

const SEC_ETF = {
  title: "SEC Investor.gov — Exchange-Traded Fund (ETF)",
  url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/exchange-traded-fund-etf",
};
const SEC_MUTUAL = {
  title: "SEC — Investor Bulletin: Mutual Funds and ETFs",
  url: "https://www.sec.gov/investor/pubs/sec-guide-to-mutual-funds.pdf",
};
const ESMA_PRIIPS = {
  title: "ESMA — PRIIPs（Packaged Retail and Insurance-based Investment Products）",
  url: "https://www.esma.europa.eu/esmas-activities/investor-protection/priips",
};
const ESMA_UCITS = {
  title: "ESMA — UCITS 指令与投资者信息",
  url: "https://www.esma.europa.eu/esmas-activities/investor-protection/ucits",
};
const T212_FEES = {
  title: "Trading 212 — Invest、ISA 与 SIPP 的费用",
  url: "https://helpcentre.trading212.com/hc/en-us/articles/11471996799517-What-are-the-fees-in-the-Invest-ISAs-and-SIPP",
};
const TR_EXPOST = {
  title: "Trade Republic — 交易后成本信息（Ex-post）",
  url: "https://support.traderepublic.com/en-fi/809-What-is-the-ex_post-cost-information",
};
const REVOLUT_SECURITIES = {
  title: "Revolut — 可交易产品与工具（爱尔兰版）",
  url: "https://help.revolut.com/en-IE/help/wealth/available-securities-and-instruments/",
};
const INVESTOR_ETP = {
  title: "SEC Investor.gov — Exchange-Traded Products (ETPs)",
  url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/exchange-traded-products-etps",
};

export const fundTerms: GlossaryTerm[] = [
  {
    slug: "etf",
    name: "ETF",
    fullName: "Exchange-Traded Fund",
    abbreviation: "ETF",
    chineseName: "交易所交易基金",
    category: "基金与 ETF",
    definition:
      "SEC 定义为 “必须在 SEC 注册为开放式投资公司（有时为单位投资信托）的交易所交易投资产品”。",
    explanation:
      "ETF 像共同基金一样把投资者资金汇集起来投资于 “股票、债券、短期货币市场工具、其他证券或资产，或这些投资的组合”，但 SEC 特别强调其区别：“与共同基金不同，投资者在全国性证券交易所按市场价格买卖 ETF 份额。” 这意味着 ETF 的交易成本结构与股票相同——佣金、价差、换汇——同时还有基金内部的年度费用率。ETF 相比共同基金通常还具有税务效率优势。",
    whyExists:
      "ETF 结合了共同基金的分散化与股票的交易灵活性，使指数投资能以低成本、可日内交易的形式实现。",
    whenCharged: "交易时按券商费率；持有期间按费用率从基金净值中扣除",
    chargedBy: "券商（交易成本）+ 基金管理人（费用率）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "交易成本按券商费率；持有成本 = 持仓市值 × 年费用率",
    formula: null,
    example:
      "买入 10 股 VOO（$7,093.50）：在 Schwab 或 IBKR Lite 佣金为 $0；但持有期间仍按基金费用率从净值中扣除管理费，这部分不出现在账单上。",
    sources: [SEC_ETF, SEC_MUTUAL],
    updatedAt: "2026-08-05",
  },
  {
    slug: "us-listed-etf",
    name: "US-listed ETF",
    fullName: null,
    abbreviation: null,
    chineseName: "美国上市 ETF",
    category: "基金与 ETF",
    definition: "在美国注册并在美国交易所上市的 ETF，如 VOO、VTI、SPY、QQQ。",
    explanation:
      "美国本土 ETF 具有美国 ISIN（US 开头）、美国基金法律实体，以美元在 NYSE Arca 或 Nasdaq 交易，投资者持有的是该基金的实际份额。本站六家平台中，IBKR、Schwab 与 Trading 212 明确支持这类产品——Trading 212 官方产品目录列有 VOO、VTI、QQQ（ISIN US46090E1038）等；Revolut 不提供美国本土 ETF；Trade Republic 的公开目录未确认；Robinhood Europe 只可能提供跟踪其价格的 Token。",
    whyExists:
      "美国是全球规模最大、费用率最低的 ETF 市场，许多投资者因此明确要求持有美国本土产品。",
    whenCharged: "交易时按券商费率；持有期间按费用率",
    chargedBy: "券商 + 基金管理人",
    platforms: ["ibkr", "schwab", "trading212"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: null,
    formula: null,
    example:
      "欧元资金买真实 VOO 的最优组合是 Trading 212：佣金 $0 + 一次性 0.15% 换汇；Revolut 则完全不提供该产品，只能选择 UCITS 替代品。",
    sources: [SEC_ETF, T212_FEES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "ucits-etf",
    name: "UCITS ETF",
    fullName: "Undertakings for Collective Investment in Transferable Securities ETF",
    abbreviation: "UCITS",
    chineseName: "UCITS 交易所交易基金",
    category: "基金与 ETF",
    definition: "在欧盟框架下注册的 ETF，通常设立于爱尔兰或卢森堡，可在欧盟范围内跨境销售。",
    explanation:
      "UCITS 是欧盟的基金监管框架，规定了分散化、流动性与投资者披露要求。关键认知是：跟踪同一指数的 UCITS ETF 与美国本土 ETF 是**两只不同的证券**——ISIN、基金法律实体、费用率、分红或累积方式、交易币种与交易场所都可能不同。Revolut 官方把其 ETF 范围限定为欧盟注册的非复杂 ETF；Trade Republic 的核心 ETF 产品也是 UCITS 范围。因此 “买标普 500” 在不同平台上买到的可能是完全不同的法律实体。",
    whyExists:
      "UCITS 框架为欧盟散户提供统一的投资者保护标准，并使基金能够在成员国之间自由销售。",
    whenCharged: "交易时按券商费率；持有期间按 TER 从净值扣除",
    chargedBy: "券商 + 基金管理人",
    platforms: ["trading212", "trade-republic", "revolut", "ibkr"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: null,
    formula: null,
    example:
      "在 Revolut 买 €1,000 的 S&P 500 UCITS ETF：免费额度内佣金 €0；但所持证券是独立的欧盟注册基金，不是 VOO，其 ISIN、TER 与分红方式均不同。",
    sources: [ESMA_UCITS, REVOLUT_SECURITIES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "physical-etf",
    name: "Physical ETF",
    fullName: null,
    abbreviation: null,
    chineseName: "实物复制型 ETF",
    category: "基金与 ETF",
    definition: "通过实际买入并持有指数成分证券来复制指数表现的 ETF。",
    explanation:
      "实物复制分为完全复制（买入全部成分股）与抽样复制（买入代表性子集以降低成本）。其优势是结构透明、无交易对手信用风险：基金真实持有资产，投资者的权益有实际证券支持。绝大多数主流指数 ETF（包括 VOO）采用实物复制。",
    whyExists:
      "直接持有成分证券最符合投资者对 “拥有一篮子股票” 的直觉预期，也避免了衍生品带来的对手方风险。",
    whenCharged: "持有期间按费用率从净值扣除",
    chargedBy: "基金管理人",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "VOO 实际持有标普 500 的成分股，因此其净值直接由这些股票的市值决定，不依赖任何互换协议对手方。",
    sources: [SEC_ETF, ESMA_UCITS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "synthetic-etf",
    name: "Synthetic ETF",
    fullName: null,
    abbreviation: null,
    chineseName: "合成复制型 ETF",
    category: "基金与 ETF",
    definition: "通过互换等衍生合约获得指数收益、而非直接持有成分证券的 ETF。",
    explanation:
      "合成 ETF 仍然是真实的基金份额，投资者持有基金权益，这一点与 Token 有本质区别；但其指数敞口来自与交易对手（通常是投资银行）的互换协议，因此引入了对手方风险，UCITS 框架对此设有抵押品与风险敞口限制。需要澄清的常见误解是：并非所有 UCITS ETF 都是合成的，绝大多数主流 UCITS ETF 采用实物复制。",
    whyExists:
      "对于难以直接持有的市场或资产类别，合成复制可以降低跟踪误差与运作成本。",
    whenCharged: "持有期间按费用率从净值扣除；互换成本隐含在跟踪表现中",
    chargedBy: "基金管理人",
    platforms: ["trading212", "trade-republic", "revolut"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "购买合成型 S&P 500 UCITS ETF：你仍是基金份额持有人，但基金的指数收益来自互换协议，需关注抵押品安排与对手方风险。",
    sources: [ESMA_UCITS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "nav",
    name: "NAV",
    fullName: "Net Asset Value",
    abbreviation: "NAV",
    chineseName: "资产净值",
    category: "基金与 ETF",
    definition: "基金持有资产总值减去负债后除以流通份额数得出的每份额价值。",
    explanation:
      "NAV 是基金的 “内在价值”，通常每个交易日计算一次。ETF 的市场价格由供求决定，可能相对 NAV 出现溢价或折价；授权参与者通过申购赎回机制进行套利，使两者保持接近。理解 NAV 的实际意义在于：基金的管理费正是从资产中扣除、体现为 NAV 的缓慢下降，而不是从你的现金余额单独扣款。",
    whyExists:
      "投资者需要一个与市场情绪无关的基准来衡量基金的真实价值，并作为申购赎回的定价依据。",
    whenCharged: "非费用；但费用率通过 NAV 扣除",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "(总资产 − 总负债) ÷ 流通份额数",
    formula: "NAV = (总资产 − 总负债) ÷ 流通份额数",
    example:
      "某 ETF 的 NAV 为 $709.00 而市场价为 $709.35，溢价 $0.35（约 0.05%）；这个溢折价是交易成本的一部分，但不会出现在佣金账单上。",
    sources: [SEC_ETF, SEC_MUTUAL],
    updatedAt: "2026-08-05",
  },
  {
    slug: "expense-ratio",
    name: "Expense Ratio",
    fullName: "Total Expense Ratio",
    abbreviation: "TER",
    chineseName: "费用率 / 总费用率",
    category: "基金与 ETF",
    definition: "基金每年从资产中扣除的运营费用占资产净值的百分比。",
    explanation:
      "费用率是长期投资中最重要的成本，但它不会出现在任何账单上——费用按日从基金资产中计提，反映为 NAV 的相应下降。Trade Republic 官方即说明 ETF 的持续成本 “基于总费用率（TER）计算，已包含在 ETF 价格中”。本站的交易成本比较不纳入 TER，因为它取决于所选基金而非券商；但对持有多年的投资者而言，TER 的累积影响通常远超一次性的佣金与换汇成本。",
    whyExists:
      "基金管理、托管、审计与合规都有持续成本，费用率是覆盖这些成本的标准机制。",
    whenCharged: "按日计提、从基金资产中扣除，不从现金余额扣款",
    chargedBy: "基金管理人",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: "持仓市值 × 年费用率（按日摊分计提）",
    formula: "年成本 ≈ 平均持仓市值 × TER",
    example:
      "持有 $10,000 的 ETF、TER 为 0.03%：每年约 $3 从净值中扣除。若 TER 为 0.30%，则每年约 $30——十年下来的差距远超一次交易的佣金差异。",
    sources: [TR_EXPOST, SEC_ETF],
    updatedAt: "2026-08-05",
  },
  {
    slug: "priips",
    name: "PRIIPs",
    fullName: "Packaged Retail and Insurance-based Investment Products",
    abbreviation: "PRIIPs",
    chineseName: "打包式零售与保险投资产品法规",
    category: "基金与 ETF",
    definition: "欧盟法规，要求向散户销售的打包投资产品提供标准化的关键信息文件（KID）。",
    explanation:
      "PRIIPs 要求发行人以统一格式披露产品性质、风险等级、情景分析与成本，使散户能横向比较不同类型的产品。这一法规对跨境投资有一个重要的实务后果：许多美国 ETF 未编制符合 PRIIPs 要求的 KID，因此欧盟部分渠道无法向散户销售这些产品——这也是欧洲平台大量提供 UCITS 替代品的监管背景之一。",
    whyExists:
      "打包型投资产品结构复杂、成本不透明，欧盟以强制标准化披露提升散户的可比性与保护水平。",
    whenCharged: "非费用；是信息披露要求",
    chargedBy: "不适用",
    platforms: ["trading212", "trade-republic", "revolut", "robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "欧洲平台在下单页提供的 KID 文件会列出该产品的成本情景；比较 UCITS ETF 时，KID 中的成本部分比平台的佣金表更能反映长期持有成本。",
    sources: [ESMA_PRIIPS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "kid",
    name: "KID",
    fullName: "Key Information Document",
    abbreviation: "KID",
    chineseName: "关键信息文件",
    category: "基金与 ETF",
    definition: "PRIIPs 法规要求的标准化产品说明文件，通常不超过三页。",
    explanation:
      "KID 采用统一模板，涵盖产品性质、风险指标（1–7 级）、不同情景下的收益预测、成本明细（含一次性成本与持续成本）以及持有期建议。对比较交易成本的投资者而言，KID 的成本章节尤其有价值：它把交易成本与产品内部成本合并呈现，避免只看佣金而忽略持续费用。",
    whyExists:
      "统一模板使不同类型、不同发行人的产品可以直接横向比较，降低散户的信息处理负担。",
    whenCharged: "非费用；是披露文件",
    chargedBy: "不适用",
    platforms: ["trading212", "trade-republic", "revolut"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "买入某 UCITS ETF 前查看其 KID：可以看到该产品的年度持续成本与建议持有期，这些信息不会出现在券商的佣金表中。",
    sources: [ESMA_PRIIPS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "kiid",
    name: "KIID",
    fullName: "Key Investor Information Document",
    abbreviation: "KIID",
    chineseName: "关键投资者信息文件",
    category: "基金与 ETF",
    definition: "UCITS 框架下的两页式基金说明文件，是 PRIIPs KID 的前身与并行制度。",
    explanation:
      "KIID 是 UCITS 指令为基金设立的标准化披露文件，内容包括投资目标与政策、风险与收益概况、费用与历史业绩。它与 PRIIPs KID 的适用范围和格式存在差异，欧盟近年推动两者的统一。实务上投资者可能在不同渠道看到 KIID 或 KID，两者都应重点阅读费用章节。",
    whyExists:
      "在 PRIIPs 出台前，UCITS 已通过 KIID 建立基金披露标准，为散户提供简明的产品信息。",
    whenCharged: "非费用；是披露文件",
    chargedBy: "不适用",
    platforms: ["trading212", "trade-republic", "revolut"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "查看某 UCITS ETF 的 KIID：其 “费用” 章节列出的持续费用（ongoing charges）即该基金的年度成本，与券商佣金相互独立。",
    sources: [ESMA_UCITS, ESMA_PRIIPS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "etp",
    name: "ETP",
    fullName: "Exchange-Traded Product",
    abbreviation: "ETP",
    chineseName: "交易所交易产品",
    category: "基金与 ETF",
    definition:
      "在交易所上市交易的一类产品总称，涵盖 ETF、ETN 与 ETC；平台的 ETP 投资计划用的就是这个上位概念。",
    explanation:
      "ETP 是伞形术语：ETF（基金份额）只是其中最常见的一类，此外还有 ETN（发行人的无担保债务票据，带发行人信用风险）和 ETC（商品敞口）。平台宣传 ETP 免佣时，具体免的是哪一类要看条款——Revolut 的 ETP 投资计划即使用这一口径。下单前应在 KID 中确认买到的究竟是基金份额还是债务票据，两者的权利、风险和税务处理可能不同。",
    whyExists:
      "交易所上市的结构化敞口形式日益多样，监管与行业需要一个覆盖全部形态的上位概念。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["revolut", "trading212", "trade-republic"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "某平台 ETP 投资计划每月一笔免佣：计划内的 ETF 买单免佣；但若标的是 ETN，承担的还有发行人的信用风险，性质与基金份额不同。",
    sources: [INVESTOR_ETP, ESMA_PRIIPS],
    updatedAt: "2026-08-05",
  },
];
