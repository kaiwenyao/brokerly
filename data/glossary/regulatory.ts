import type { GlossaryTerm } from "@/types";

const SEC_ADVISORY = {
  title: "SEC — Section 31 Transaction Fee Rate Advisory for Fiscal Year 2026",
  url: "https://www.sec.gov/rules-regulations/fee-rate-advisories/2026-2",
};
const FINRA_SCHEDULE_A = {
  title: "FINRA — Section 1, Member Regulatory Fees（Schedule A to FINRA By-Laws）",
  url: "https://www.finra.org/rules-guidance/rulebooks/corporate-organization/section-1-member-regulatory-fees",
};
const FINRA_TAF = {
  title: "FINRA — Trading Activity Fee",
  url: "https://www.finra.org/rules-guidance/guidance/trading-activity-fee",
};
const FINRA_S31_NOTICE = {
  title: "FINRA Information Notice（2026-03-17）— New Rate for Fees Paid Under Section 31",
  url: "https://www.finra.org/rules-guidance/notices/information-notice-20260317",
};
const CAT_PLAN = {
  title: "CAT NMS Plan — Consolidated Audit Trail 官方站",
  url: "https://www.catnmsplan.com/",
};

export const regulatoryTerms: GlossaryTerm[] = [
  {
    slug: "sec-fee",
    name: "SEC Fee",
    fullName: "Securities and Exchange Commission Fee",
    abbreviation: "SEC Fee",
    chineseName: "美国证监会规费",
    category: "美国监管与清算",
    definition:
      "美国证监会依《证券交易法》第 31 条向自律组织收取、并最终转嫁给卖方的证券交易监管费，业内通称 SEC Fee。",
    explanation:
      "严格来说 SEC 并不直接向散户收费：第 31 条要求全国性证券交易所和证券业协会按其成员的证券卖出金额向 SEC 缴费，交易所和 FINRA 再向券商收取，券商通常在卖出成交单上按同一费率转嫁给客户。因此你在美股卖出确认单上看到的 “SEC Fee” 实质是这条转嫁链条的末端。该费用只针对卖出，买入不收；金额极小但会随成交金额线性增长。",
    whyExists:
      "《证券交易法》第 31 条要求 SEC 通过交易费用回收其年度运作经费，费率每年随国会拨款调整，使监管成本由市场参与者而非纳税人承担。",
    whenCharged: "卖出美国证券时按成交金额收取；以交易日（trade date）而非交收日为准",
    chargedBy: "券商代交易所/FINRA 向 SEC 转缴",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: true,
    calculation: "按卖出成交金额乘以当期法定费率；不足一分通常向上取整",
    formula: "卖出金额 × $0.0000206（即每 $1,000,000 收 $20.60）",
    example:
      "2026 年 8 月卖出 $10,000 的 AAPL：$10,000 × 0.0000206 = $0.206，成交单上约显示 $0.21。买入同样金额的 AAPL 则不收此费。",
    sources: [SEC_ADVISORY, FINRA_S31_NOTICE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "section-31-fee",
    name: "Section 31 Fee",
    fullName: "Section 31 Transaction Fee under the Securities Exchange Act of 1934",
    abbreviation: null,
    chineseName: "第 31 条交易费",
    category: "美国监管与清算",
    definition:
      "《1934 年证券交易法》第 31 条规定的证券交易费，是 “SEC Fee” 的法律名称，现行费率为每百万美元卖出金额 $20.60。",
    explanation:
      "SEC 每财年发布费率通知（Fee Rate Advisory）确定该费率。2026 财年的通知规定：自 2026 年 4 月 4 日起，适用于多数证券交易的费率为每百万美元 $20.60；在此之前的记费日费率为 $0.00。FINRA 同步发出通知，明确 “记费日为交易日而非交收日”。该费率在国会通过下一财年拨款法案后 60 天继续有效，因此可能年中变动。",
    whyExists:
      "第 31 条把 SEC 的运作经费与市场交易量挂钩，SEC 每年据实际拨款重设费率，使收入与预算匹配。",
    whenCharged: "卖出美国证券时按成交金额收取（记费日 = 交易日）",
    chargedBy: "SEC，经由交易所/FINRA 与券商逐级转嫁",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: true,
    calculation: "卖出金额 ÷ 1,000,000 × 当期每百万费率",
    formula: "卖出金额 × 0.0000206",
    example:
      "卖出 100 股 VOO（$709.35/股，合计 $70,935）：$70,935 × 0.0000206 ≈ $1.46。注意部分券商帮助页仍列示旧费率 $0.0000278，应以成交单和 SEC 当期通知为准。",
    sources: [SEC_ADVISORY, FINRA_S31_NOTICE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "finra",
    name: "FINRA",
    fullName: "Financial Industry Regulatory Authority",
    abbreviation: "FINRA",
    chineseName: "美国金融业监管局",
    category: "美国监管与清算",
    definition:
      "受 SEC 监督的非政府自律组织，负责监管在美国经营的证券经纪商，并向会员收取多项监管费。",
    explanation:
      "FINRA 通过《公司组织规则》Schedule A 向会员券商收取一系列监管费，其中与散户成本最直接相关的是 Trading Activity Fee（TAF）。FINRA 官方说明这些费用用于 “监督和监管会员，包括开展检查、财务监控、政策制定、规则解释和执法活动”。FINRA 还代 SEC 向会员收缴第 31 条费用，并就费率变动发布 Information Notice。",
    whyExists:
      "美国采取分层监管：SEC 负责法定监管，FINRA 作为自律组织承担日常会员检查与执法，其经费主要来自向会员收取的监管费。",
    whenCharged: "非单笔费用；其下属的 TAF 等具体费用在卖出时按笔收取",
    chargedBy: "不适用（FINRA 向会员券商收费，非直接向投资者）",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "IBKR、Schwab 等美国券商都是 FINRA 会员，其成交单上的 “FINRA TAF” 一栏即为 FINRA 监管费的转嫁；Trading 212 在美股卖出时也列示 “NYSE FINRA Fee”。",
    sources: [FINRA_SCHEDULE_A, FINRA_TAF],
    updatedAt: "2026-08-05",
  },
  {
    slug: "trading-activity-fee",
    name: "Trading Activity Fee",
    fullName: "FINRA Trading Activity Fee",
    abbreviation: "TAF",
    chineseName: "交易活动费",
    category: "美国监管与清算",
    definition:
      "FINRA 按卖出股数向会员券商收取的监管费，券商通常在卖出美股/ETF 时转嫁给客户。",
    explanation:
      "FINRA Schedule A 规定：“会员应就每一笔受涵盖股本证券的卖出按股数向 FINRA 缴费。” 与 SEC Fee 按金额计算不同，TAF 按股数计算并设每笔上限，因此低价股的大额股数订单更容易触及上限。需要注意的是费率口径存在差异：FINRA 规则手册当前列示每股 $0.000166、每笔上限 $8.30，而 IBKR、Schwab、Trading 212 等券商费率页目前普遍列示每股 $0.000195、每笔上限 $9.79。实际扣费应以成交确认单为准。",
    whyExists:
      "TAF 用于回收 FINRA 对会员的监督与监管成本，包括检查、财务监控、规则制定与执法。",
    whenCharged: "卖出受涵盖的美国股本证券时按股数收取；买入不收",
    chargedBy: "券商代 FINRA 收取",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: true,
    calculation: "卖出股数 × 每股费率，超过每笔上限则按上限收取",
    formula: "min(卖出股数 × 每股费率, 每笔上限)",
    example:
      "卖出 1,000 股某股票：按 FINRA 规则手册费率为 1,000 × $0.000166 = $0.166；按券商页面常见费率为 1,000 × $0.000195 = $0.195。卖出 100,000 股低价股时会触及每笔上限（$8.30 或 $9.79）。",
    sources: [FINRA_SCHEDULE_A, FINRA_TAF],
    updatedAt: "2026-08-05",
  },
  {
    slug: "cat-fee",
    name: "CAT Fee",
    fullName: "Consolidated Audit Trail Fee",
    abbreviation: "CAT",
    chineseName: "统一审计跟踪系统费",
    category: "美国监管与清算",
    definition:
      "为建设和运行美国统一审计跟踪系统（CAT）而由自律组织向券商分摊、并可能转嫁到成交单上的费用。",
    explanation:
      "CAT 官方说明其 “跟踪订单在整个生命周期中的流转，并识别处理这些订单的券商，从而使监管者能够高效追踪全美市场上合资格证券的活动”。SEC 依 Rule 613 要求各全国性证券交易所和证券业协会建设并维护 CAT，FINRA 运营申报门户和帮助台。系统的建设与运行成本通过 CAT 计费机制向券商分摊；部分券商（如 IBKR 的 Tiered 方案）会把这部分成本作为独立项目转嫁给客户，费率极低（每股千分之几美分量级）。",
    whyExists:
      "2010 年 “闪电崩盘” 后，监管者发现缺乏跨市场、跨券商的完整订单审计能力，SEC 因此要求建设 CAT 以还原订单全生命周期。",
    whenCharged: "买入和卖出均可能分摊，取决于券商的费率方案是否单列该项",
    chargedBy: "券商，代自律组织分摊 CAT 运行成本",
    platforms: ["ibkr"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "通常按成交股数计算，费率由 CAT 计费机制确定",
    formula: "成交股数 × CAT 每股费率",
    example:
      "IBKR Pro Tiered 方案会把 CAT 费用作为外部费用之一转嫁，量级约为每股 $0.000003；交易 1,000 股约合 $0.003。IBKR Lite 与 Pro Fixed 方案则不单列此项。",
    sources: [CAT_PLAN],
    updatedAt: "2026-08-05",
  },
  {
    slug: "nscc",
    name: "NSCC",
    fullName: "National Securities Clearing Corporation",
    abbreviation: "NSCC",
    chineseName: "美国全国证券清算公司",
    category: "美国监管与清算",
    definition:
      "美国股票、ETF 等股本证券交易的中央对手方清算机构，隶属 DTCC，负责多边净额结算。",
    explanation:
      "NSCC 作为中央对手方（CCP）介入买卖双方之间，成为 “买方的卖方、卖方的买方”，并通过连续净额结算（CNS）把海量交易轧差成极少数净头寸，大幅降低实际交收笔数与对手方风险。券商向 NSCC 缴纳的清算费构成其成本的一部分：在零佣金方案中通常被券商吸收，在 IBKR Pro Tiered 等 “成本透传” 方案中则可能作为清算费单列。",
    whyExists:
      "若每笔股票交易都逐笔全额交收，市场将面临巨大的结算量和对手方违约风险；中央对手方与净额结算机制是现代证券市场的基础设施。",
    whenCharged: "买入和卖出均可能产生清算成本，是否单列取决于券商费率方案",
    chargedBy: "NSCC 向清算会员券商收取，券商可能转嫁",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "按成交股数或笔数计算，具体费率见 NSCC 费率表",
    formula: null,
    example:
      "IBKR Pro Tiered 费率表列出的典型清算相关成本量级约为每股 $0.00020；Lite 与 Fixed 方案已把该成本包含在佣金内，客户看不到单独条目。",
    sources: [
      { title: "DTCC — NSCC 官方介绍", url: "https://www.dtcc.com/about/businesses-and-subsidiaries/nscc" },
    ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "dtcc",
    name: "DTCC",
    fullName: "The Depository Trust & Clearing Corporation",
    abbreviation: "DTCC",
    chineseName: "美国存托与清算公司",
    category: "美国监管与清算",
    definition:
      "美国证券市场的核心后台基础设施集团，旗下 NSCC 负责清算、DTC 负责证券存管与交收。",
    explanation:
      "DTCC 是控股公司，两家关键子公司分工明确：NSCC 承担股本证券的中央对手方清算与净额结算；DTC（The Depository Trust Company）作为中央证券存管机构，以簿记形式持有绝大多数美国证券，并完成券款对付的最终交收。散户在券商账户中持有的美股，法律上通常登记在 DTC 的代名人 Cede & Co. 名下，这正是 “Street Name（街名持有）” 制度的技术基础。",
    whyExists:
      "纸质股票时代的实物交割在 1960 年代造成严重的 “文件危机”，美国因此建立中央存管与清算体系，用簿记记账取代实物交付。",
    whenCharged: "非单笔费用；其下属机构的存管与清算费可能被券商转嫁",
    chargedBy: "不适用（向会员券商收费）",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "你在 IBKR 买入 10 股 AAPL 后，账户显示持有 10 股，但登记层面这些股票由 DTC 的 Cede & Co. 统一持有，券商在其账簿上记录你的权益。",
    sources: [
      { title: "DTCC 官方站", url: "https://www.dtcc.com/" },
      { title: "DTCC — NSCC 官方介绍", url: "https://www.dtcc.com/about/businesses-and-subsidiaries/nscc" },
    ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "occ",
    name: "OCC",
    fullName: "The Options Clearing Corporation",
    abbreviation: "OCC",
    chineseName: "期权清算公司",
    category: "美国监管与清算",
    definition:
      "美国上市期权的中央对手方清算机构，为所有美国期权交易提供发行与担保。",
    explanation:
      "OCC 是全球规模最大的股本衍生品清算机构，对每一份在美国交易所成交的期权合约充当中央对手方，保证行权与履约。期权交易的成交单上通常会看到 OCC 清算费（Clearing Fee）以及交易所费用。本站的费用比较口径限定于股票与 ETF，因此期权相关费用不纳入主表，但 IBKR 等平台的期权费率页会单列该项。",
    whyExists:
      "期权是有履约义务的合约，需要中央对手方担保履约、统一行权与指派流程，否则买方将直接承担每一个卖方的信用风险。",
    whenCharged: "期权开仓与平仓时按合约张数收取（本站股票/ETF 口径不涉及）",
    chargedBy: "券商代 OCC 收取",
    platforms: ["ibkr", "schwab"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "按期权合约张数计算",
    formula: null,
    example:
      "买入 10 张 AAPL 看涨期权时，成交单上除券商佣金外还会出现 OCC 清算费与交易所费用；买卖股票则不涉及 OCC。",
    sources: [{ title: "OCC 官方站", url: "https://www.theocc.com/" }],
    updatedAt: "2026-08-05",
  },
  {
    slug: "finra-trace",
    name: "FINRA TRACE",
    fullName: "Trade Reporting and Compliance Engine",
    abbreviation: "TRACE",
    chineseName: "债券交易报告与合规引擎",
    category: "美国监管与清算",
    definition:
      "FINRA 运营的场外债券交易报告系统，会员须在规定时限内报告合资格债券交易并缴纳相应费用。",
    explanation:
      "TRACE 使原本高度不透明的美国场外债券市场获得成交价格与成交量的公开披露。FINRA 会员在交易合资格债券后必须向 TRACE 报告，并按 Schedule A 缴纳报告费与数据费。对只交易股票和 ETF 的投资者而言，TRACE 不会出现在成交单上；它主要影响债券交易成本，本站费用口径不涵盖债券。",
    whyExists:
      "股票有集中交易所形成公开价格，而债券多为场外一对一议价；TRACE 通过强制报告提升债券市场的价格透明度与投资者保护。",
    whenCharged: "债券交易报告时向会员收取（股票/ETF 交易不适用）",
    chargedBy: "FINRA 向会员券商收取",
    platforms: ["all-us"],
    usOnly: true,
    appliesToEurope: false,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "买卖 AAPL 或 VOO 不会产生 TRACE 费用；若在美国券商买卖公司债，券商成本中则包含 TRACE 报告相关费用。",
    sources: [FINRA_SCHEDULE_A],
    updatedAt: "2026-08-05",
  },
];
