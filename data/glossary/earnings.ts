import type { GlossaryTerm } from "@/types";

const SEC_FINANCIAL_STATEMENTS = {
  title: "SEC — Beginners' Guide to Financial Statements",
  url: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
};
const SEC_GLOSSARY = {
  title: "SEC — Glossary: Earnings per share",
  url: "https://www.sec.gov/resources-small-businesses/glossary",
};
const SEC_NON_GAAP = {
  title: "SEC — Non-GAAP Financial Measures",
  url: "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures",
};
const LSEG_IBES = {
  title: "LSEG — I/B/E/S Estimates",
  url: "https://www.lseg.com/en/data-analytics/financial-data/company-data/ibes-estimates",
};
const LSEG_GUIDANCE = {
  title: "LSEG — Company Guidance Data",
  url: "https://www.lseg.com/en/data-catalogue/company-data/ibes-estimates/guidance",
};
const TRADINGVIEW_ESTIMATES = {
  title: "TradingView — Estimates",
  url: "https://www.tradingview.com/support/solutions/43000785292-estimates/",
};
const NASDAQ_WHISPER = {
  title: "Nasdaq — Whisper number or forecast",
  url: "https://www.nasdaq.com/glossary/w/whisper-number-or-forecast",
};

export const earningsTerms: GlossaryTerm[] = [
  {
    slug: "consensus-estimate",
    name: "Consensus Estimate",
    fullName: "Analyst Consensus Estimate",
    abbreviation: null,
    chineseName: "分析师一致预期",
    category: "公司财报与预期",
    definition:
      "数据商把多位覆盖同一家公司的分析师预测按统一口径汇总后得到的市场基准。",
    explanation:
      "卖方分析师会各自预测下一季度或下一财年的营收、EPS、利润率和业务指标；LSEG I/B/E/S、FactSet 等数据商再对预测做口径匹配、时效筛选和汇总。媒体所说的“华尔街预期”通常指某一家数据商在某个时间点的 consensus，而不是公司自己给出的数字。不同平台的分析师样本、更新时间以及 GAAP 或 adjusted 口径可能不同，所以 consensus 可能略有差异。",
    whyExists:
      "单个分析师的预测噪声很大，汇总值为财报前后的 Actual vs Estimate 比较提供了一个可重复使用的基准。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "常见口径为合资格分析师预测的平均值或中位数，具体以数据商方法为准",
    formula: "Consensus = 合资格分析师预测的汇总值",
    example:
      "四位分析师预测 EPS 分别为 $1.20、$1.25、$1.22、$1.28，简单平均值为 $1.2375，页面可能四舍五入显示为 $1.24。",
    sources: [LSEG_IBES, TRADINGVIEW_ESTIMATES],
    updatedAt: "2026-08-09",
  },
  {
    slug: "company-guidance",
    name: "Company Guidance",
    fullName: "Management Guidance / Company Outlook",
    abbreviation: null,
    chineseName: "公司指引 / 管理层展望",
    category: "公司财报与预期",
    definition:
      "公司管理层对未来季度或财年的营收、利润、费用、资本开支等指标给出的预测或区间。",
    explanation:
      "Guidance 来自公司，不来自分析师。它可以是一个明确区间，也可以只是“增长加快”之类的定性表述。分析师通常会把 guidance、管理层口径和自己的行业判断放进模型，再形成新的 estimate；因此 guidance 会影响 consensus，但两者不会天然相等。判断 guidance 是 beat 还是 miss，应把公司给出的同一期间、同一指标和同一会计口径与财报发布前的 consensus 比较。",
    whyExists:
      "历史财报只描述已经过去的期间，投资者还需要管理层对未来经营环境和资源投入的最新判断。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "通常比较公司指引区间的中点与发布前分析师一致预期",
    formula: "Guidance midpoint =（区间下限 + 区间上限）÷ 2",
    example:
      "公司给出下一季营收指引 $98B–$102B，中点为 $100B；若发布前 consensus 是 $105B，新闻通常会称 guidance miss。",
    sources: [LSEG_GUIDANCE, LSEG_IBES],
    updatedAt: "2026-08-09",
  },
  {
    slug: "earnings-surprise",
    name: "Earnings Surprise",
    fullName: "Actual-versus-Estimate Surprise",
    abbreviation: null,
    chineseName: "财报超预期 / 不及预期",
    category: "公司财报与预期",
    definition:
      "公司实际公布数字与财报发布前一致预期之间的差额；高于预期为 beat，低于预期为 miss。",
    explanation:
      "Surprise 不是同比增长率。它回答的是“实际数字比预测高或低多少”，而同比回答“实际数字比去年同期增长或下降多少”。一份财报还可能在不同项目上同时出现 beat 和 miss，例如营收与 EPS 超预期，但关键业务指标和下一季 guidance 不及预期。",
    whyExists:
      "证券价格会在财报前消化已有信息，发布后的新增信息主要来自实际结果与事前预期之间的差异。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "先确保 Actual 与 Estimate 属于同一期间、同一指标和同一会计口径",
    formula: "Surprise % =（Actual − Consensus）÷ |Consensus| × 100%",
    example:
      "Consensus EPS 为 $1.24，实际 EPS 为 $1.30：每股 beat $0.06，按绝对预期作分母约 beat 4.8%。",
    sources: [TRADINGVIEW_ESTIMATES, LSEG_IBES],
    updatedAt: "2026-08-09",
  },
  {
    slug: "earnings-per-share",
    name: "Earnings per Share",
    fullName: "Earnings per Share",
    abbreviation: "EPS",
    chineseName: "每股收益",
    category: "公司财报与预期",
    definition: "公司归属于普通股股东的利润分摊到每股后的金额。",
    explanation:
      "EPS 把公司的净利润与股本数量联系起来。Basic EPS 只使用已发行在外普通股的加权平均股数；Diluted EPS 还把期权、可转换证券等潜在普通股的稀释影响纳入分母。财报新闻常拿 diluted EPS 与分析师 consensus 比较，但还必须确认比较的是 GAAP EPS 还是 adjusted EPS。",
    whyExists:
      "同样的总利润在不同股本规模下代表的每股价值不同，EPS 让投资者可以按每股口径比较盈利。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "使用归属于普通股股东的净利润和期间加权平均股数",
    formula: "Basic EPS = 归属于普通股股东的净利润 ÷ 加权平均普通股股数",
    example:
      "公司当季归属于普通股股东的净利润为 $10B，加权平均股数为 5B 股，则 Basic EPS 为 $2.00。",
    sources: [SEC_GLOSSARY, SEC_FINANCIAL_STATEMENTS],
    updatedAt: "2026-08-09",
  },
  {
    slug: "revenue",
    name: "Revenue",
    fullName: "Revenue / Sales",
    abbreviation: null,
    chineseName: "营收 / 销售收入",
    category: "公司财报与预期",
    definition: "公司在一个报告期间通过销售商品或提供服务取得的收入。",
    explanation:
      "Revenue 位于利润表靠上位置，尚未扣除生产、研发、销售、管理、利息和税项等成本。它反映业务规模，但不等于利润或现金流。财报中的 revenue beat 只表示实际营收高于同口径的分析师预期，不能单独证明公司盈利能力改善。",
    whyExists: "营收是利润表计算毛利、营业利润和净利润的起点。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "按适用会计准则确认报告期间的商品和服务收入",
    formula: null,
    example:
      "市场预计季度营收 $50.2B，公司实际公布 $51.0B，则 revenue beat $0.8B；是否更赚钱还要看成本和利润率。",
    sources: [SEC_FINANCIAL_STATEMENTS],
    updatedAt: "2026-08-09",
  },
  {
    slug: "top-line",
    name: "Top Line",
    fullName: null,
    abbreviation: null,
    chineseName: "顶线 / 营收",
    category: "公司财报与预期",
    definition: "对利润表顶部营收或销售收入的市场简称。",
    explanation:
      "新闻所说的 top-line beat 通常就是 actual revenue 高于 revenue consensus。它描述的是收入端，不代表利润率、EPS、现金流或 guidance 也超预期。",
    whyExists: "营收通常位于利润表顶部，因此形成了 top line 这一市场用语。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "比较 Actual Revenue 与 Consensus Revenue",
    formula: null,
    example:
      "新闻写“the company beat on the top line”，通常表示营收高于分析师一致预期。",
    sources: [SEC_FINANCIAL_STATEMENTS],
    updatedAt: "2026-08-09",
  },
  {
    slug: "bottom-line",
    name: "Bottom Line",
    fullName: null,
    abbreviation: null,
    chineseName: "底线 / 净利润或每股收益",
    category: "公司财报与预期",
    definition: "对利润表底部净利润的市场简称；财报新闻中常用 EPS 代表这一层。",
    explanation:
      "严格说，利润表的 bottom line 是净利润或净亏损；在财报快讯里，bottom-line beat 往往指 EPS 高于分析师预期。阅读时要确认新闻比较的是净利润、GAAP EPS 还是 adjusted EPS，不能只看“bottom line”四个字。",
    whyExists: "净利润通常位于利润表底部，因此形成了 bottom line 这一市场用语。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "比较 Actual EPS 或净利润与同口径 Consensus",
    formula: null,
    example:
      "“Beat on the top and bottom line”通常表示营收和 EPS 都高于预期，但并未说明 guidance 或业务 KPI。",
    sources: [SEC_FINANCIAL_STATEMENTS, SEC_GLOSSARY],
    updatedAt: "2026-08-09",
  },
  {
    slug: "gaap-vs-non-gaap",
    name: "GAAP vs Non-GAAP",
    fullName: "GAAP and Adjusted Financial Measures",
    abbreviation: null,
    chineseName: "GAAP 与调整后指标",
    category: "公司财报与预期",
    definition:
      "GAAP 指按通用会计准则编制的指标；Non-GAAP 或 adjusted 指公司在 GAAP 数字基础上排除或调整部分项目后的补充指标。",
    explanation:
      "公司可能从 GAAP 利润中剔除股权激励、重组费用、收购摊销或其他项目，得到 adjusted EPS。分析师 consensus 也可能采用这一调整后口径。SEC 要求允许披露的 non-GAAP 指标与最接近的 GAAP 指标进行调节，并不能把 non-GAAP 当作 GAAP 的替代品。比较 beat/miss 时最常见的错误，就是拿 adjusted consensus 对比 GAAP actual。",
    whyExists:
      "管理层与分析师希望补充展示其认为更能反映持续经营表现的指标，但不同公司的调整项目不完全一致。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "从 GAAP 指标出发，逐项加入或剔除公司披露的调整项目",
    formula: "Adjusted measure = GAAP measure ± 已披露调整项目",
    example:
      "媒体列出的 EPS consensus 是 adjusted $2.10，而公司新闻稿首页首先显示 GAAP EPS $1.70；两者不能直接判断 miss，必须找到 adjusted actual。",
    sources: [SEC_NON_GAAP],
    updatedAt: "2026-08-09",
  },
  {
    slug: "whisper-number",
    name: "Whisper Number",
    fullName: "Whisper Earnings Estimate",
    abbreviation: null,
    chineseName: "非正式市场预期 / 小道数字",
    category: "公司财报与预期",
    definition:
      "没有进入公开一致预期、但交易者私下认为公司真正需要达到的非正式业绩门槛。",
    explanation:
      "Whisper number 可能来自近期渠道调查、订单信息、管理层语气、头部分析师最新判断或市场仓位。它没有统一来源，也不一定能被可靠观察。热门股票即使超过公开 consensus，若没有达到更高的非正式预期，股价仍可能下跌；这就是 consensus beat 与市场反应之间经常出现偏差的原因之一。",
    whyExists:
      "公开 consensus 可能包含较旧预测或对所有分析师等权，而交易者会继续根据新信息形成自己的实时门槛。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "没有统一公式，也不是标准化公开数据",
    formula: null,
    example:
      "公开 EPS consensus 为 $1.24，但交易者普遍按 $1.30 定价；公司公布 $1.27，新闻口径是 beat，股价仍可能按“低于 whisper number”反应。",
    sources: [NASDAQ_WHISPER, LSEG_IBES],
    updatedAt: "2026-08-09",
  },
];
