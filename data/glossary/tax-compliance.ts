import type { GlossaryTerm } from "@/types";

const REV_RESIDENCE = {
  title: "Revenue — 税务居民身份（Tax Residence）",
  url: "https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/tax-residence/index.aspx",
};
const REV_DOMICILE = {
  title: "Revenue — 什么是住所（Domicile）",
  url: "https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/tax-residence/what-is-domicile.aspx",
};
const REV_REMITTANCE = {
  title: "Revenue — 汇入制课税（Remittance Basis of Assessment）",
  url: "https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/tax-residence/remittance-basis-of-assessment.aspx",
};
const REV_SELF = {
  title: "Revenue — 自行评税与自雇",
  url: "https://www.revenue.ie/en/self-assessment-and-self-employment/index.aspx",
};
const REV_SELF_GUIDE = {
  title: "Revenue — 自行评税指南",
  url: "https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/index.aspx",
};
const REV_SELF_WHO = {
  title: "Revenue — 谁需要注册所得税自行评税",
  url: "https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/who-should-register-for-income-tax-self-assessment.aspx",
};
const REV_FILING = {
  title: "Revenue — 提交年度所得税申报表",
  url: "https://www.revenue.ie/en/self-assessment-and-self-employment/filing-your-tax-return/index.aspx",
};
const REV_PAY_FILE = {
  title: "Revenue — Pay and File 申报缴税期限",
  url: "https://www.revenue.ie/en/self-assessment-and-self-employment/filing-your-tax-return/pay-and-file-deadline.aspx",
};
const REV_PRELIM = {
  title: "Revenue — 初步税（Preliminary Tax）",
  url: "https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/preliminary-tax.aspx",
};
const REV_CGT_PAY = {
  title: "Revenue — 何时以及如何缴纳和申报 CGT",
  url: "https://www.revenue.ie/en/gains-gifts-and-inheritance/transfering-an-asset/when-and-how-do-you-pay-and-file-cgt.aspx",
};
const REV_PAYE = {
  title: "Revenue — PAYE 所得税代扣代缴制度",
  url: "https://www.revenue.ie/en/jobs-and-pensions/paye/index.aspx",
};
const REV_CRS = {
  title: "Revenue — 共同申报准则（CRS）与自动信息交换",
  url: "https://www.revenue.ie/en/companies-and-charities/international-tax/aeoi/crs/index.aspx",
};
const REV_PPSN = {
  title: "Revenue — 个人公共服务号（PPSN）",
  url: "https://www.revenue.ie/en/jobs-and-pensions/personal-public-service-number/index.aspx",
};
const REV_ONLINE = {
  title: "Revenue — 在线服务（myAccount 与 ROS）",
  url: "https://www.revenue.ie/en/online-services/index.aspx",
};
const REV_ROS_REG = {
  title: "Revenue — ROS 注册流程",
  url: "https://www.revenue.ie/en/online-services/services/manage-your-record/ros-registration.aspx",
};
const REV_REGISTER = {
  title: "Revenue — 税务登记（eRegistration 与 TR1）",
  url: "https://www.revenue.ie/en/starting-a-business/registering-for-tax/index.aspx",
};
const REV_OFFSHORE = {
  title: "Revenue — 离岸基金（Offshore Funds）",
  url: "https://www.revenue.ie/en/additional-incomes/investments/offshore-funds.aspx",
};
const IRS_W8BEN = {
  title: "IRS — About Form W-8 BEN",
  url: "https://www.irs.gov/forms-pubs/about-form-w-8-ben",
};

/** Irish filing, registration and information-reporting concepts. */
export const taxComplianceTerms: GlossaryTerm[] = [
  {
    slug: "tax-residence",
    name: "Tax Residence",
    fullName: "Tax Residence",
    abbreviation: null,
    chineseName: "税务居民",
    category: "申报与合规",
    definition:
      "按停留天数判定的纳税身份：一个税年在爱尔兰停留至少 183 天，或本年与上一年合计至少 280 天，通常即为该税年的爱尔兰税务居民。",
    explanation:
      "爱尔兰税年为 1 月 1 日至 12 月 31 日。两年合计 280 天的标准还要求本税年至少停留 31 天；一天中的任何时间人在爱尔兰通常都计作一天。留学生没有独立的豁免，仍按天数判断。税务居民身份决定你是否要向 Revenue 申报，而申报范围有多大则取决于住所（domicile）。要注意的是，爱尔兰的分年度处理（split-year treatment）主要针对就业收入，并不普遍延伸到股票、ETF、股息或资本利得。",
    whyExists:
      "各国需要一个客观可验证的标准来划分谁应就全球所得纳税，停留天数是国际上最通行的量化测试。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属身份判定）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "单年 ≥ 183 天，或本年与上一年合计 ≥ 280 天（且本年 ≥ 31 天）",
    formula: null,
    example:
      "某年在爱尔兰停留 200 天：单年标准已满足，该税年即为爱尔兰税务居民，需就相应范围的投资收入向 Revenue 申报。",
    sources: [REV_RESIDENCE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "domicile",
    name: "Domicile",
    fullName: "Domicile",
    abbreviation: null,
    chineseName: "住所",
    category: "申报与合规",
    definition:
      "法律上视为永久归属地的概念，不等于国籍、签证或现居地址，决定爱尔兰税务居民是全球课税还是适用汇入制。",
    explanation:
      "住所通常在出生时取得（原始住所），只有在另一国长期定居并具有永久居住意图时才可能取得选择住所。仅因在爱尔兰读书、租房或居住数年，通常不足以自动取得爱尔兰住所。它的税务意义很直接：爱尔兰居民且爱尔兰住所者，全球股息、利息和资本利得都要申报；爱尔兰居民但非爱尔兰住所者，境外投资收入和境外资本利得可按汇入制只就汇入部分课税。判断需结合家庭联系、长期住房、永久居留意图和未来计划逐案分析。",
    whyExists:
      "税法需要区分与一国有永久联系的人和只是暂时居住的人，以决定其全球所得是否全部落入该国税网。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属身份判定）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "综合事实认定，无固定公式",
    formula: null,
    example:
      "在爱尔兰工作三年、家庭与长期住房仍在原籍国并计划回国：通常仍属非爱尔兰住所，境外投资收益可能适用汇入制而非全球课税。",
    sources: [REV_DOMICILE, REV_RESIDENCE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "remittance-basis",
    name: "Remittance Basis",
    fullName: "Remittance Basis of Assessment",
    abbreviation: null,
    chineseName: "汇入制",
    category: "申报与合规",
    definition:
      "爱尔兰居民但非爱尔兰住所者可适用的课税方式：境外投资收入和境外资本利得只就汇入或用于爱尔兰的部分课税。",
    explanation:
      "汇入远不止把钱转到爱尔兰银行账户。用境外券商或银行卡支付爱尔兰房租、学费、生活费，把投资收益转给爱尔兰境内的人，或以其他方式在爱尔兰使用这笔钱，都可能构成汇入。最大的实务风险是混合账户：当本金、股息、利息和资本利得混在同一个账户里时，很难证明汇入的究竟是哪一类资金。依赖汇入制的人应当从一开始就把入境前本金、境外收入、境外资本利得分账保管。爱尔兰来源所得（如爱尔兰公司股息、爱尔兰银行利息）始终全额课税，不能因为钱留在券商账户就排除。",
    whyExists:
      "为与爱尔兰无永久联系的居民设置的安排，使其境外财富只在实际带入爱尔兰使用时才产生爱尔兰税负。",
    whenCharged: "境外收入或境外资本利得被汇入、带入或在爱尔兰使用时",
    chargedBy: "爱尔兰税务局（Revenue）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "就汇入爱尔兰的境外收入或利得金额，按相应税种的税率课税",
    formula: null,
    example:
      "境外券商账户实现 €10,000 资本利得，当年只把 €3,000 转入爱尔兰账户支付房租：适用汇入制时，通常只有这 €3,000 落入爱尔兰课税范围。",
    sources: [REV_REMITTANCE, REV_DOMICILE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "chargeable-person",
    name: "Chargeable Person",
    fullName: "Chargeable Person",
    abbreviation: null,
    chineseName: "应自行评税人员",
    category: "申报与合规",
    definition:
      "须注册所得税自行评税并提交 Form 11 的纳税人；净应税非 PAYE 收入超过 €5,000 或毛额超过 €30,000 通常即触发。",
    explanation:
      "这是决定你用哪张申报表的分水岭。低于门槛的 PAYE 纳税人通常可以通过 myAccount 提交 Form 12；超过门槛就要注册自行评税并经 ROS 提交 Form 11。注册为应自行评税人员并不等于 Revenue 认定你是职业交易者——纯被动的投资者也可能仅因投资收入超过门槛，或因持有需自行申报的离岸基金而落入这一范畴。注册可通过 Revenue 的 eRegistration 服务或提交 Form TR1 完成。",
    whyExists:
      "PAYE 制度只能自动处理工资所得，收入结构较复杂的纳税人必须自行申报，税务机关据此划出适用范围。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属申报身份）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "净应税非 PAYE 收入 > €5,000，或非 PAYE 收入毛额 > €30,000",
    formula: null,
    example:
      "有正常工资并另有股息与基金收益净额 €6,200：超过 €5,000 门槛，通常需注册自行评税并提交 Form 11，而不能只用 Form 12。",
    sources: [REV_SELF_WHO, REV_SELF, REV_REGISTER],
    updatedAt: "2026-08-05",
  },
  {
    slug: "form-11",
    name: "Form 11",
    fullName: "Form 11 Income Tax Return",
    abbreviation: null,
    chineseName: "自行评税所得税申报表",
    category: "申报与合规",
    definition:
      "应自行评税人员经 ROS 提交的完整年度所得税申报表，资本利得和离岸基金收益也在其中一并申报。",
    explanation:
      "Form 11 是最完整的一张表：投资收入、资本利得、离岸基金的取得与处置、视同处置都有对应栏目。已经提交 Form 11 的人无需再单独提交 Form CG1。它的 Pay and File 通常一次包含三件事——提交上一税年申报表、缴纳上一税年余额税、缴纳本税年的初步税，因此首次进入自行评税时的实际付款金额往往明显高于单纯的上一年度税款。法定期限为税年次年的 10 月 31 日；同时经 ROS 在线提交并在线缴款的纳税人通常可获得每年公布的 ROS 延长期限。",
    whyExists:
      "为收入来源多样、需自行计算税额的纳税人提供统一的年度申报载体，同时完成申报与缴款两项义务。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属申报表格）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "申报期限为税年次年 10 月 31 日（ROS 在线提交并缴款可适用当年公布的延长期限）",
    formula: null,
    example:
      "2025 税年的 Form 11 法定期限为 2026 年 10 月 31 日；经 ROS 在线提交并同时缴纳 2025 年余额税和 2026 年初步税的纳税人，2026 年的延长期限为 11 月 18 日。",
    sources: [REV_FILING, REV_PAY_FILE, REV_OFFSHORE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "form-12",
    name: "Form 12",
    fullName: "Form 12 Income Tax Return",
    abbreviation: null,
    chineseName: "简易所得税申报表",
    category: "申报与合规",
    definition:
      "主要收入为 PAYE 工资、非 PAYE 收入未超过门槛的纳税人通过 myAccount 提交的简化年度申报表。",
    explanation:
      "适用于净应税非 PAYE 收入不超过 €5,000 且毛额不超过 €30,000 的情形。它比 Form 11 简单得多，但并不是所有投资情形都能用：一旦超过门槛，或持有需自行申报的爱尔兰及等同境外基金，通常就要改用 Form 11。它同样在 myAccount 中在线完成，法定期限与 Form 11 一致，为税年次年的 10 月 31 日。",
    whyExists:
      "多数受雇者的税款已通过 PAYE 扣缴完毕，只需就少量额外收入做补充申报，无需动用完整的自行评税流程。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属申报表格）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "适用门槛：非 PAYE 净收入 ≤ €5,000 且毛额 ≤ €30,000",
    formula: null,
    example:
      "全年工资之外仅有股息 €800、银行利息 €150：远低于门槛，通常通过 myAccount 提交 Form 12 即可。",
    sources: [REV_FILING, REV_SELF_WHO],
    updatedAt: "2026-08-05",
  },
  {
    slug: "form-cg1",
    name: "Form CG1",
    fullName: "Form CG1 Capital Gains Tax Return",
    abbreviation: "CG1",
    chineseName: "资本利得税申报表",
    category: "申报与合规",
    definition:
      "仅有资本资产处置、且不属于 Form 11 申报人时使用的资本利得税年度申报表。",
    explanation:
      "如果你本年只是卖出了股票等资产，没有触发自行评税的其他条件，就用这张表申报资本利得。已经提交 Form 11 的人不需要重复提交 CG1，因为 Form 11 中已含资本利得栏目。关键提醒：即使因资本亏损或 €1,270 年度免税额而最终无税可缴，只要发生了应报告的处置，通常仍有申报义务；而且缴款期限（12 月 15 日 / 次年 1 月 31 日）远早于这张表的申报期限。",
    whyExists:
      "为只有偶发资产处置的纳税人提供独立的资本利得申报渠道，避免要求他们提交完整的所得税自行评税申报表。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属申报表格）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "申报期限为处置次年 10 月 31 日；税款须按 CGT 缴款期限提前缴纳",
    formula: null,
    example:
      "2025 年卖出股票实现净利得 €3,000：CGT 应在 2025 年 12 月 15 日前缴纳，而 CG1 申报表在 2026 年 10 月 31 日前提交。",
    sources: [REV_CGT_PAY, REV_FILING],
    updatedAt: "2026-08-05",
  },
  {
    slug: "preliminary-tax",
    name: "Preliminary Tax",
    fullName: "Preliminary Tax",
    abbreviation: null,
    chineseName: "初步税",
    category: "申报与合规",
    definition:
      "自行评税纳税人对当前税年应纳税额的预缴，与上一税年的余额税在同一个 Pay and File 期限一并缴纳。",
    explanation:
      "这是首次进入自行评税时最常见的现金流意外：10 月 31 日那天你不只是补缴上一年的税，还要预缴本年的税，两笔叠加可能接近上一年税额的两倍。预缴金额通常可按上一税年应纳税额的一定比例或本年预估额计算，具体规则以 Revenue 指引为准。预缴不足可能产生利息，因此在有大额资本利得或基金收益的年份需要提前测算。",
    whyExists:
      "使国家税收在纳税年度内均衡入库，而不是等到次年申报后才一次性收取，与受雇者按月被 PAYE 扣缴的节奏保持一致。",
    whenCharged: "与上一税年余额税同时缴纳，通常为税年次年的 10 月 31 日或 ROS 延长期限",
    chargedBy: "爱尔兰税务局（Revenue）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "按上一税年应纳税额的规定比例或本税年预估应纳税额计算",
    formula: null,
    example:
      "首次提交 Form 11 时，除缴纳上一税年应补的税款外，通常还需同时缴纳本税年的初步税，实际付款金额可能接近前者的两倍。",
    sources: [REV_PRELIM, REV_SELF_GUIDE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "paye",
    name: "PAYE",
    fullName: "Pay As You Earn",
    abbreviation: "PAYE",
    chineseName: "所得税代扣代缴制度",
    category: "申报与合规",
    definition:
      "雇主在发放工资时代扣所得税、USC 和 PRSI 的制度；投资收入不在其覆盖范围内，需另行申报。",
    explanation:
      "受雇者的工资税款已由雇主按月扣缴，因此很多人从未接触过申报表。但 PAYE 不覆盖股息、利息、基金收益和资本利得——这些属于非 PAYE 收入，必须由你自己申报。判断用 Form 12 还是 Form 11，正是看这部分非 PAYE 收入是否超过 €5,000 净额或 €30,000 毛额的门槛。换句话说，工资已扣税不代表投资收益也已完税。",
    whyExists:
      "工资收入稳定可预测，由雇主在支付环节代扣是效率最高的征收方式，也避免受雇者年底面临大额一次性税单。",
    whenCharged: "雇主每次发放工资时",
    chargedBy: "雇主代爱尔兰税务局（Revenue）扣缴",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "按累进税率对工资代扣所得税、USC 与 PRSI",
    formula: null,
    example:
      "月薪已由雇主按 PAYE 扣缴全部税款，但同年券商账户产生的 €4,000 股息与基金收益不在其中，仍需自行通过 Form 12 或 Form 11 申报。",
    sources: [REV_PAYE, REV_SELF_WHO],
    updatedAt: "2026-08-05",
  },
  {
    slug: "crs",
    name: "CRS",
    fullName: "Common Reporting Standard",
    abbreviation: "CRS",
    chineseName: "共同申报准则",
    category: "申报与合规",
    definition:
      "金融账户涉税信息自动交换的国际标准：券商与银行按此收集并报告客户的税务居民身份与账户数据。",
    explanation:
      "在 CRS 框架下，金融机构通常报告税务居民国、税号（TIN）、年末账户余额或价值、股息、利息，以及出售或赎回金融资产的总收入。对爱尔兰客户而言，信息可能先报送券商实体所在地的税务机关，再自动交换给 Revenue。这意味着钱一直放在券商、从未转回爱尔兰，并不等于 Revenue 无法获得账户资料。开户时填写的税务居住国和 TIN 是否准确，直接决定这些信息被送往哪个国家。",
    whyExists:
      "各国税务机关无法直接看到境外账户，CRS 通过统一格式的自动交换机制填补这一信息缺口，遏制跨境隐匿资产。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属信息报告制度）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "报告项目：税务居民国、TIN、年末余额、股息、利息、处置总收入",
    formula: null,
    example:
      "在某欧盟券商开户并申报爱尔兰税务居民身份：该券商会把你的账户余额与年度股息、卖出总额报送其本国税务机关，再交换给爱尔兰 Revenue。",
    sources: [REV_CRS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "ppsn",
    name: "PPSN",
    fullName: "Personal Public Service Number",
    abbreviation: "PPSN",
    chineseName: "个人公共服务号",
    category: "申报与合规",
    definition:
      "爱尔兰的个人税号与公共服务识别号，用于税务登记、申报，以及券商开户时的税务居民身份申报。",
    explanation:
      "PPSN 在跨境场景中同时充当爱尔兰的纳税人识别号（TIN）。券商在 CRS 下收集的正是这个号码，它决定你的账户信息被交换到哪个税务机关。注册 myAccount、ROS，以及提交 Form 11、Form 12 或 CG1 都需要它。开户资料中的税务居住国与 PPSN 若填写有误，可能导致信息被送往错误的国家，事后更正相当麻烦。",
    whyExists:
      "统一的个人识别号使税务与社会保障记录能够准确归集到同一个人，也是国际信息交换所需的标准标识。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属身份标识）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "不适用",
    formula: null,
    example:
      "在券商的税务资料页填写税务居住国为爱尔兰并提供 PPSN 作为 TIN，该账户的 CRS 信息才会正确交换给 Revenue。",
    sources: [REV_PPSN, REV_CRS],
    updatedAt: "2026-08-05",
  },
  {
    slug: "ros",
    name: "ROS",
    fullName: "Revenue Online Service",
    abbreviation: "ROS",
    chineseName: "税务在线服务系统",
    category: "申报与合规",
    definition:
      "Revenue 面向自行评税纳税人的在线申报与缴税系统，Form 11 通过它提交，并可适用每年公布的延长期限。",
    explanation:
      "ROS 与面向一般 PAYE 纳税人的 myAccount 是两套不同的入口：Form 12 在 myAccount 中提交，Form 11 则需要 ROS。同时通过 ROS 在线提交申报表并在线缴款的纳税人，通常可享受晚于 10 月 31 日的 ROS 延长期限，但该日期每年由 Revenue 单独公布，不能永久套用。爱尔兰税务居民也可通过 myAccount 申请居住证明（Letter of Residence），用于在境外申请协定优惠。",
    whyExists:
      "电子申报与电子缴款降低了征纳双方的处理成本与差错率，因此税务机关以延长期限作为使用在线渠道的激励。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用（属申报渠道）",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "在线提交且在线缴款可适用当年公布的 ROS 延长期限",
    formula: null,
    example:
      "2025 税年的法定期限为 2026 年 10 月 31 日；通过 ROS 在线提交 Form 11 并同时在线缴纳余额税与初步税的纳税人，2026 年可延至 11 月 18 日。",
    sources: [REV_ONLINE, REV_ROS_REG, REV_PAY_FILE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "w-8ben",
    name: "W-8BEN",
    fullName: "Form W-8BEN (Certificate of Foreign Status of Beneficial Owner)",
    abbreviation: "W-8BEN",
    chineseName: "美国预扣税身份声明表",
    category: "申报与合规",
    definition:
      "向美国申报非美国身份与税务居民国的表格，决定你的美股股息适用哪一档美国预扣税率。",
    explanation:
      "券商在开户时通常会要求填写，有效期一般为签署当年及其后三个完整日历年。填写的税务居民国决定适用哪份税收协定：以爱尔兰税务居民身份持有美股，适用的是美国与爱尔兰之间的规则，而不是你国籍所属国家与美国之间的协定。未提交或已过期时，美国股息可能按最高档预扣。被扣的美国预扣税在爱尔兰申报时通常可申请外国税收抵免，因此凭证要保存好。",
    whyExists:
      "美国要求付款方对非居民的美国来源所得预扣税款，需要由收款人自行声明身份与适用协定，才能适用较低的协定税率。",
    whenCharged: "美国来源股息等所得支付时按声明的税率预扣",
    chargedBy: "美国国税局（IRS），由券商或托管方代扣",
    platforms: ["ibkr", "schwab", "trading212", "trade-republic", "revolut"],
    usOnly: true,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "按声明的税务居民国及适用协定确定美国股息预扣税率",
    formula: null,
    example:
      "以爱尔兰税务居民身份提交有效 W-8BEN 后收到美股股息：美国按协定税率预扣，剩余部分入账，被扣税款在爱尔兰申报时可申请抵免。",
    sources: [IRS_W8BEN],
    updatedAt: "2026-08-05",
  },
];
