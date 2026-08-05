import type { GlossaryTerm } from "@/types";

const SEC_MARGIN = {
  title: "SEC Investor.gov — Margin Account",
  url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/margin-account",
};
const SEC_MARGIN_BULLETIN = {
  title: "SEC — Investor Bulletin: Understanding Margin Accounts",
  url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/margin",
};
const IBKR_STOCKS = {
  title: "Interactive Brokers — 美股与 ETF 佣金（含融资利率）",
  url: "https://www.interactivebrokers.com/en/pricing/commissions-stocks.php",
};
const SCHWAB_GUIDE = {
  title: "Charles Schwab — 个人投资者价格指南",
  url: "https://www.schwab.com/legal/schwab-pricing-guide-for-individual-investors",
};
const T212_FEES = {
  title: "Trading 212 — Invest、ISA 与 SIPP 的费用",
  url: "https://helpcentre.trading212.com/hc/en-us/articles/11471996799517-What-are-the-fees-in-the-Invest-ISAs-and-SIPP",
};

export const marginTerms: GlossaryTerm[] = [
  {
    slug: "margin",
    name: "Margin",
    fullName: null,
    abbreviation: null,
    chineseName: "保证金 / 融资",
    category: "保证金与融资融券",
    definition: "以账户内证券为抵押向券商借入资金买入更多证券的机制。",
    explanation:
      "SEC 把保证金账户定义为 “券商以账户作为抵押向投资者出借现金以购买证券” 的账户类型，并明确提示保证金 “提高购买力，但也使投资者面临更大的潜在损失”。使用融资的成本是利息，而非一次性费用，因此持有时间越长成本越高。本站六家平台中只有 IBKR 与 Schwab 提供保证金融资，Trading 212 的 Invest 账户明确不提供。",
    whyExists:
      "杠杆能提升资本效率，同时融资利息是券商的核心收入来源之一。",
    whenCharged: "使用借款期间按日计息",
    chargedBy: "券商",
    platforms: ["ibkr", "schwab"],
    usOnly: false,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: "借款金额 × 年利率 × 天数 ÷ 360 或 365",
    formula: null,
    example:
      "账户有 $10,000 现金并融资 $10,000 买入 $20,000 证券：证券跌 10% 时你的权益损失 20%，同时仍需支付这段期间的融资利息。",
    sources: [SEC_MARGIN, SEC_MARGIN_BULLETIN],
    updatedAt: "2026-08-05",
  },
  {
    slug: "margin-interest",
    name: "Margin Interest",
    fullName: null,
    abbreviation: null,
    chineseName: "融资利息",
    category: "保证金与融资融券",
    definition: "使用保证金借款期间按日计算的利息，通常按借款规模分档定价。",
    explanation:
      "融资利息是持有型成本，会随时间线性累积，因此对长期杠杆头寸的影响远超一次性佣金。两家平台的定价方式不同：IBKR 采用 “基准利率 + 加点” 模式，Lite 约为基准加 2.5%、Pro 起步约加 1.5%，借款越大加点越低；Schwab 采用固定分档，当前美元融资利率从低于 $25,000 的约 11.825% 递减至 $250,000–499,999 的约 10.075%，更大金额可协商。",
    whyExists:
      "券商需要为出借资金的成本与风险取得补偿，同时用阶梯定价吸引大额客户。",
    whenCharged: "按日计息，通常按月结算",
    chargedBy: "券商",
    platforms: ["ibkr", "schwab"],
    usOnly: false,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: "借款金额 × 年利率 × 实际天数 ÷ 360 或 365",
    formula: null,
    example:
      "在 Schwab 借入 $20,000（约 11.825% 档位）持有一年：利息约 $2,365。相比之下同期的佣金差异通常只有几美元——杠杆成本是完全不同量级的问题。",
    sources: [IBKR_STOCKS, SCHWAB_GUIDE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "borrow-fee",
    name: "Borrow Fee",
    fullName: null,
    abbreviation: null,
    chineseName: "借券费",
    category: "保证金与融资融券",
    definition: "为借入证券（通常用于卖空）而支付的费用，按年化利率逐日计收。",
    explanation:
      "借券费率完全由供求决定：流动性充裕的大盘股借券成本可能低至年化 0.25%，而供给紧张的热门做空标的可达年化数十甚至上百个百分点，且费率可能每日变动。这与融资利息是两回事——融资利息针对借入的现金，借券费针对借入的股票。另一面是股票出借收益：Trading 212 官方说明其 Invest 账户的收入来源之一即为股票出借。",
    whyExists:
      "卖空必须先借入股票才能卖出，持有股票的一方通过出借获得额外收益，费率反映该股票的稀缺程度。",
    whenCharged: "持有借入证券期间按日计收",
    chargedBy: "券商或证券出借方",
    platforms: ["ibkr", "schwab"],
    usOnly: false,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: "借入证券市值 × 年化借券费率 × 天数 ÷ 360",
    formula: null,
    example:
      "做空市值 $10,000 的某股票、借券费率为年化 20%：持有 30 天的借券成本约 $167，远超任何佣金差异。",
    sources: [IBKR_STOCKS, T212_FEES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "stock-borrow-fee",
    name: "Stock Borrow Fee",
    fullName: null,
    abbreviation: null,
    chineseName: "股票借入费",
    category: "保证金与融资融券",
    definition: "借券费在股票场景下的具体表述，费率随该股票的可借数量动态变化。",
    explanation:
      "股票借入费率由证券借贷市场实时决定，可借数量越少费率越高。对做空者而言，这带来一个结构性风险：费率可能在持仓期间大幅上升，甚至出现被强制召回（recall）而被迫平仓的情况。因此判断做空成本时，借券费率的波动性与佣金相比是完全不同量级的变量。",
    whyExists:
      "证券出借是一个真实的供求市场，稀缺标的的出借方要求更高补偿。",
    whenCharged: "持有借入股票期间按日计收",
    chargedBy: "券商或证券出借方",
    platforms: ["ibkr", "schwab"],
    usOnly: false,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: "借入股票市值 × 当日年化费率 ÷ 360",
    formula: null,
    example:
      "做空某流动性充足的大盘股，借券费率可能仅年化 0.25%；做空热门小盘股则可能超过年化 50%，且费率每日重定。",
    sources: [IBKR_STOCKS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "short-selling-fee",
    name: "Short Selling Fee",
    fullName: null,
    abbreviation: null,
    chineseName: "卖空费用",
    category: "保证金与融资融券",
    definition: "卖空操作产生的全部成本统称，包括借券费、保证金利息与卖出监管费。",
    explanation:
      "卖空的总成本由三部分构成：借券费（按日累积、费率浮动）、保证金账户相关的利息成本，以及卖出时的 SEC 与 FINRA 监管费。此外还需承担股息补偿义务——做空期间标的派息时，卖空方须向出借方补付相应金额。本站六家平台中，只有 IBKR 与 Schwab 支持常规卖空；Trading 212 的 Invest 账户、Trade Republic、Robinhood Europe 与 Revolut 的股票业务均按现金交易处理。",
    whyExists:
      "卖空涉及借入他人证券并承担无限的理论亏损风险，因此在费用与监管上都比买入复杂得多。",
    whenCharged: "开仓时收监管费，持仓期间按日累积借券费与利息",
    chargedBy: "券商、证券出借方与监管机构",
    platforms: ["ibkr", "schwab"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: true,
    calculation: "借券费 + 保证金利息 + 卖出监管费（+ 股息补偿）",
    formula: null,
    example:
      "卖空 $10,000 某股票并持有 30 天（借券费年化 20%）：借券费约 $167 + SEC 费约 $0.21 + TAF + 期间利息，若标的派息还需补付股息。",
    sources: [IBKR_STOCKS, SEC_MARGIN_BULLETIN],
    updatedAt: "2026-08-05",
  },
];
