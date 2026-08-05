import type { GlossaryTerm } from "@/types";

const SEC_ETF = {
  title: "SEC Investor.gov — Exchange-Traded Fund (ETF)",
  url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/exchange-traded-fund-etf",
};
const DTCC_NSCC = {
  title: "DTCC — NSCC 官方介绍",
  url: "https://www.dtcc.com/about/businesses-and-subsidiaries/nscc",
};
const SEC_T1 = {
  title: "SEC — Shortening the Securities Transaction Settlement Cycle（T+1 最终规则）",
  url: "https://www.sec.gov/rules-regulations/2023/02/s7-05-22",
};
const ISIN_ORG = {
  title: "ISIN.org — International Securities Identification Number",
  url: "https://www.isin.org/",
};
const CUSIP_ORG = {
  title: "CUSIP Global Services 官方站",
  url: "https://www.cusip.com/",
};
const T212_FEES = {
  title: "Trading 212 — Invest、ISA 与 SIPP 的费用",
  url: "https://helpcentre.trading212.com/hc/en-us/articles/11471996799517-What-are-the-fees-in-the-Invest-ISAs-and-SIPP",
};
const TR_FRACTIONS = {
  title: "Trade Republic — 如何交易碎股",
  url: "https://support.traderepublic.com/en-nl/1420-How-do-I-trade-fractions",
};
const RH_FAQ = {
  title: "Robinhood Europe — Stock Tokens FAQ",
  url: "https://robinhood.com/eu/en/support/articles/stock-tokens-faq/",
};
const SEC_ADR = {
  title: "SEC — Investor Bulletin: American Depositary Receipts",
  url: "https://www.sec.gov/investor/alerts/adr-bulletin.pdf",
};

export const securitiesTerms: GlossaryTerm[] = [
  {
    slug: "settlement",
    name: "Settlement",
    fullName: null,
    abbreviation: null,
    chineseName: "交收 / 结算",
    category: "证券与结算",
    definition: "成交之后证券与资金实际完成过户交割的过程。",
    explanation:
      "成交（trade）与交收（settlement）是两件事：成交确定价格与数量，交收才真正完成所有权与资金的转移。这一过程由中央对手方清算与中央证券存管机构完成，会产生实际成本——多数券商把它吸收或包含在佣金内，Trade Republic 则单列为每笔 €1 的外部结算费。交收周期还决定了资金何时可用：卖出后的款项须待交收完成才能提取。",
    whyExists:
      "买卖双方无法瞬时完成实物或簿记过户，需要标准化流程与专门机构确保券款对付、防止违约。",
    whenCharged: "成交后按周期完成；相关成本可能被单列或包含在佣金中",
    chargedBy: "清算与存管机构，经券商传导",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: null,
    formula: null,
    example:
      "周一买入 AAPL 后立即在账户看到持仓，但正式交收在 T+1（周二）完成；Trade Republic 会为这一环节收取 €1。",
    sources: [DTCC_NSCC, SEC_T1],
    updatedAt: "2026-08-05",
  },
  {
    slug: "t-plus-1",
    name: "T+1",
    fullName: "Trade date plus one business day",
    abbreviation: "T+1",
    chineseName: "T+1 交收",
    category: "证券与结算",
    definition: "交易日之后一个工作日完成交收的标准周期，美国证券市场自 2024 年 5 月起采用。",
    explanation:
      "美国、加拿大等市场已从 T+2 缩短至 T+1，把交收风险敞口减半，也降低了清算机构要求的保证金。对投资者的实际影响是：卖出后资金可用时间提前一天，跨市场交易时需注意与仍采用 T+2 的市场之间的时间差，跨币种交收也需要在更短时间内完成换汇。",
    whyExists:
      "更短的交收周期减少对手方违约风险与所需保证金，提升市场效率与资金使用效率。",
    whenCharged: "非费用；是交收时间标准",
    chargedBy: "不适用",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "周一卖出 VOO，交收日为周二（T+1），资金在周二可用于提取；在 T+2 制度下则要等到周三。",
    sources: [SEC_T1, DTCC_NSCC],
    updatedAt: "2026-08-05",
  },
  {
    slug: "t-plus-2",
    name: "T+2",
    fullName: "Trade date plus two business days",
    abbreviation: "T+2",
    chineseName: "T+2 交收",
    category: "证券与结算",
    definition: "交易日之后两个工作日完成交收的周期，仍为多个欧洲市场的标准。",
    explanation:
      "T+2 曾是全球主流标准，美国于 2024 年 5 月转为 T+1 后，欧洲多数市场仍维持 T+2。这一差异对跨市场交易有实际影响：同时买卖美股与欧洲 ETF 时，两笔交易的资金到位时间不同，可能产生短暂的资金缺口，跨币种情形下还需要额外考虑换汇时点。",
    whyExists:
      "T+2 是在风险控制与操作可行性之间的历史平衡点；缩短周期需要整个市场基础设施同步改造。",
    whenCharged: "非费用；是交收时间标准",
    chargedBy: "不适用",
    platforms: ["trade-republic", "revolut", "trading212"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "周一卖出某 UCITS ETF（T+2，周三交收）并想用这笔钱买美股（T+1）：资金到位时间存在一天错配，需提前规划。",
    sources: [SEC_T1],
    updatedAt: "2026-08-05",
  },
  {
    slug: "cusip",
    name: "CUSIP",
    fullName: "Committee on Uniform Securities Identification Procedures",
    abbreviation: "CUSIP",
    chineseName: "美国证券识别码",
    category: "证券与结算",
    definition: "由 9 位字符组成、用于唯一标识美国和加拿大证券的识别码。",
    explanation:
      "CUSIP 是北美证券的标准标识符，用于清算、交收与对账，避免因公司名称或代码相似而产生混淆。它也是 ISIN 的构成基础：美国证券的 ISIN 通常是在 CUSIP 前加 “US” 国家代码、后加校验位。查证某只 ETF 是否为美国本土产品时，CUSIP 与 ISIN 比名称或代码更可靠。",
    whyExists:
      "证券名称与交易代码可能重复或变更，清算与交收体系需要全球唯一且稳定的标识。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "确认某平台上的 “VOO” 是否为美国本土 ETF：核对其 CUSIP/ISIN 比核对名称可靠得多，因为欧洲存在多只名称相似的 S&P 500 UCITS ETF。",
    sources: [CUSIP_ORG],
    updatedAt: "2026-08-05",
  },
  {
    slug: "isin",
    name: "ISIN",
    fullName: "International Securities Identification Number",
    abbreviation: "ISIN",
    chineseName: "国际证券识别码",
    category: "证券与结算",
    definition: "12 位的全球统一证券识别码，前两位为发行国家/地区代码。",
    explanation:
      "ISIN 是判断证券注册地最直接的依据：以 “US” 开头为美国注册，以 “IE” 开头为爱尔兰注册（多数 UCITS ETF），以 “LU” 开头为卢森堡注册。这正是区分美国本土 ETF 与 UCITS 替代品的关键工具——两者可能跟踪同一指数、名称高度相似，但 ISIN 不同即为两只完全不同的证券，其费用率、分红方式与税务处理都可能不同。",
    whyExists:
      "跨境交易与清算需要不依赖本地代码体系的全球统一标识。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "Trading 212 官方产品页列出 QQQ 的 ISIN 为 US46090E1038——“US” 前缀确认它是美国注册的 ETF，而非欧洲 UCITS 替代品。",
    sources: [ISIN_ORG, T212_FEES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "ticker",
    name: "Ticker",
    fullName: "Ticker Symbol",
    abbreviation: null,
    chineseName: "股票代码",
    category: "证券与结算",
    definition: "交易所为证券分配的简短交易代码，同一代码在不同交易所可能指向不同证券。",
    explanation:
      "代码是最方便但最不可靠的标识方式：它由各交易所自行分配，因此同一串字母在不同市场可能对应完全不同的证券，公司改名或合并时代码也会变更。跨境投资时应以 ISIN 或 CUSIP 核对——尤其在欧洲平台上搜索 “VOO” 或 “S&P 500” 时，返回结果可能是名称相似的 UCITS 基金而非美国本土 ETF。",
    whyExists:
      "短代码便于报价显示与快速下单，是交易所时代沿用至今的实用约定。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "在欧洲平台搜索 “S&P 500 ETF” 可能出现 VUSA、VUAA 等 UCITS 产品；它们与美国上市的 VOO 是不同证券，需以 ISIN 确认。",
    sources: [ISIN_ORG],
    updatedAt: "2026-08-05",
  },
  {
    slug: "fractional-shares",
    name: "Fractional Shares",
    fullName: null,
    abbreviation: null,
    chineseName: "碎股",
    category: "证券与结算",
    definition: "以小于一股的份额买入证券的能力，使高价股票可用小额资金投资。",
    explanation:
      "碎股大幅降低了投资门槛，但费用结构会放大固定费用的影响。按比例收费的平台（如 Trading 212 的 0.15% FX）对碎股友好；按笔固定收费的平台则相反——Trade Republic 的碎股订单同样收取 €1，因此 €10 的碎股单相当于立即承担约 10% 的交易成本。各平台的碎股支持范围也不同：IBKR 支持多数合资格股票与 ETF，Schwab 的 Stock Slices 主要限于 S&P 500 成分股且 ETF 碎股能力有限。",
    whyExists:
      "单股价格高达数百甚至数千美元的证券对小额投资者构成门槛，碎股使定额定投成为可能。",
    whenCharged: "按各平台费率；固定费平台的碎股成本占比极高",
    chargedBy: "券商",
    platforms: ["ibkr", "schwab", "trading212", "trade-republic", "revolut", "robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "按订单金额比例或按笔固定费计算",
    formula: null,
    example:
      "用 €10 买碎股：在 Trade Republic 需付 €1（约 10%）；在 Trading 212 只需承担约 0.15% 的换汇成本（约 €0.015）。",
    sources: [TR_FRACTIONS, T212_FEES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "corporate-action",
    name: "Corporate Action",
    fullName: null,
    abbreviation: null,
    chineseName: "公司行动",
    category: "证券与结算",
    definition: "发行人发起的、影响其证券的事件，如分红、拆股、合并、配股等。",
    explanation:
      "公司行动需要券商代客户处理权利登记与分配，部分特殊情形（如自愿性公司行动）可能收费。Trade Republic 提到公司行动相关的托管服务成本属于其成本披露的组成部分。Token 产品的处理方式则不同：Robinhood 官方说明 “受影响的 Classic Stock Tokens 在公司行动处理期间通常会暂停交易”，且由于持有人并非股东，其权利来自合约条款而非公司法。",
    whyExists:
      "发行人的资本结构变动必须准确传导至每一位持有人，这需要托管与登记体系的协同处理。",
    whenCharged: "多数自动处理不收费；特殊公司行动可能产生托管服务费",
    chargedBy: "券商或托管机构",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "某股票 1 拆 4 时，持有实际股票的投资者持仓自动变为 4 倍、成本价相应调整；持有对应 Token 的用户则可能在处理期间无法交易。",
    sources: [RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "dividend-reinvestment",
    name: "Dividend Reinvestment",
    fullName: null,
    abbreviation: null,
    chineseName: "股息再投资",
    category: "证券与结算",
    definition: "把收到的现金股息自动买回同一证券的安排。",
    explanation:
      "再投资的成本取决于平台是否对再投资订单收费以及是否需要换汇。在零佣金平台上，再投资几乎无额外成本；在按笔固定收费的平台上，小额股息的再投资可能非常不划算——€5 的股息若产生 €1 费用，成本率高达 20%。跨币种情形还需注意：美股股息为美元，若平台自动换回欧元再买入，会产生两次换汇。",
    whyExists:
      "自动再投资让复利持续运作，避免现金闲置，是长期投资者的常用工具。",
    whenCharged: "按平台的再投资订单费率；可能涉及换汇成本",
    chargedBy: "券商",
    platforms: ["ibkr", "schwab", "trading212"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "VOO 每季度分红：在零佣金平台上再投资几乎无成本；若平台每笔收 €1 且股息仅 €5，则成本率达 20%，不如累积后手动买入。",
    sources: [T212_FEES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "drip",
    name: "DRIP",
    fullName: "Dividend Reinvestment Plan",
    abbreviation: "DRIP",
    chineseName: "股息再投资计划",
    category: "证券与结算",
    definition: "由券商或发行人提供的自动股息再投资服务。",
    explanation:
      "DRIP 通常支持碎股买入，使股息能被完整投入而不留下零头现金。判断是否值得开启，关键看三点：再投资订单是否免佣、是否触发换汇、以及是否支持碎股。在支持碎股且零佣金的平台上，DRIP 几乎没有摩擦成本；在按笔固定收费的平台上则应谨慎。",
    whyExists:
      "自动化的再投资降低了操作成本与决策摩擦，帮助投资者持续实现复利。",
    whenCharged: "取决于平台是否对 DRIP 订单收费",
    chargedBy: "券商",
    platforms: ["ibkr", "schwab", "trading212"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "收到 $50 股息且 VOO 价格为 $709.35 时，DRIP 可买入约 0.0705 股；若平台不支持碎股，这 $50 只能留作现金。",
    sources: [T212_FEES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "adr",
    name: "ADR",
    fullName: "American Depositary Receipt",
    abbreviation: "ADR",
    chineseName: "美国存托凭证",
    category: "证券与结算",
    definition: "由美国存托银行发行、代表外国公司股票的可转让凭证，在美国市场以美元交易。",
    explanation:
      "ADR 让美国投资者能像买美股一样投资外国公司，但会产生独立于交易佣金的持续成本：存托银行通常按年收取托管费（ADR pass-through fee），常见量级为每股 $0.01–$0.05，从股息中扣除或直接从账户扣收。Revolut 即列示了此类 ADR 转嫁费。此外，ADR 与其对应的本地股票是不同证券，两者可能存在价差。",
    whyExists:
      "外国证券的跨境持有与交收成本高昂，ADR 结构把它转化为在美国市场以美元交易的标准化产品。",
    whenCharged: "存托费通常按年从股息或账户中扣除；买卖时另按普通佣金计费",
    chargedBy: "存托银行，经券商转嫁",
    platforms: ["ibkr", "schwab", "revolut"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: "持有股数 × 每股年度存托费",
    formula: null,
    example:
      "持有 1,000 股某 ADR、存托费为每股 $0.02：每年产生 $20 的转嫁费，与是否交易无关。",
    sources: [SEC_ADR],
    updatedAt: "2026-08-05",
  },
  {
    slug: "depositary-receipt",
    name: "Depositary Receipt",
    fullName: null,
    abbreviation: "DR",
    chineseName: "存托凭证",
    category: "证券与结算",
    definition: "由存托银行发行、代表外国公司股票的可转让证券的统称，ADR 是其美国版本。",
    explanation:
      "存托凭证的通用结构是：存托银行在发行人本地市场持有实际股票，并在另一市场发行代表这些股票的凭证。持有人享有经济权益（股息经存托银行转付），但投票等权利的行使方式受存托协议约束。GDR（全球存托凭证）等变体服务于不同市场。共同点是都会产生存托银行的服务费用。",
    whyExists:
      "跨境直接持有外国证券涉及不同的交收体系、货币与法律环境，存托结构把这些复杂性集中由银行处理。",
    whenCharged: "存托费按年收取；交易时另按普通佣金计费",
    chargedBy: "存托银行，经券商转嫁",
    platforms: ["ibkr", "schwab", "revolut"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "买入某欧洲公司的 ADR 时支付普通美股佣金；但每年还会被扣除存托费，这部分成本不出现在交易成本比较表中。",
    sources: [SEC_ADR],
    updatedAt: "2026-08-05",
  },
];
