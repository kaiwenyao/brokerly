import type { GlossaryTerm } from "@/types";

const ECB_RATES = {
  title: "European Central Bank — Euro foreign exchange reference rates",
  url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
};
const IBKR_FX = {
  title: "Interactive Brokers — 现货外汇佣金",
  url: "https://www.interactivebrokers.com/en/pricing/commissions-spot-currencies.php",
};
const T212_FX = {
  title: "Trading 212 — 什么是 FX 费用",
  url: "https://helpcentre.trading212.com/hc/en-us/articles/360018909758-What-is-the-FX-fee-Invest-Stocks-ISA",
};
const T212_MULTI = {
  title: "Trading 212 — 什么是多币种账户",
  url: "https://helpcentre.trading212.com/hc/en-us/articles/11669719976093-What-is-a-multi-currency-account",
};
const T212_FEES = {
  title: "Trading 212 — Invest、ISA 与 SIPP 的费用",
  url: "https://helpcentre.trading212.com/hc/en-us/articles/11471996799517-What-are-the-fees-in-the-Invest-ISAs-and-SIPP",
};
const RH_TOKENS = {
  title: "Robinhood Europe — About Stock Tokens",
  url: "https://robinhood.com/eu/en/support/articles/about-stock-tokens/",
};
const REVOLUT_STANDARD = {
  title: "Revolut — Standard 套餐费用（爱尔兰版）",
  url: "https://www.revolut.com/en-IE/legal/standard-fees/",
};
const SCHWAB_GUIDE = {
  title: "Charles Schwab — 个人投资者价格指南",
  url: "https://www.schwab.com/legal/schwab-pricing-guide-for-individual-investors",
};

export const fxTerms: GlossaryTerm[] = [
  {
    slug: "fx",
    name: "FX",
    fullName: "Foreign Exchange",
    abbreviation: "FX",
    chineseName: "外汇",
    category: "外汇",
    definition: "一种货币兑换成另一种货币的行为与市场，在跨境投资中是仅次于佣金的主要成本来源。",
    explanation:
      "以欧元资金买美股时，资金必须先变成美元。这一步产生的成本经常被忽视，却可能远超佣金：Schwab 的小额换汇档位约 1%，相当于一笔 $1,000 交易付出约 $10，而同一笔交易的佣金是 $0。本站六家平台的换汇成本差距可达 30 倍以上——从 IBKR 自动换汇的约 0.03% 到 Schwab 小额档位的约 1%。因此比较跨境券商时，FX 往往比佣金更重要。",
    whyExists:
      "各国证券以本币计价交易与交收，跨境投资者必须完成货币转换，而提供转换服务的机构会通过加点或手续费获利。",
    whenCharged: "买入外币证券前换汇时，或券商自动换汇时",
    chargedBy: "券商或其合作的外汇服务方",
    platforms: ["ibkr", "schwab", "trading212", "robinhood", "revolut"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "换汇金额 × 加点百分比，或按固定手续费计算",
    formula: null,
    example:
      "把 €1,000 换成美元（ECB 参考汇率 €1 = $1.1554，理论上限 $1,155.40）：IBKR 自动换汇约得 $1,155.05；Trading 212 约得 $1,153.67；Schwab 小额档位约得 $1,143.85。",
    sources: [ECB_RATES, IBKR_FX, T212_FX],
    updatedAt: "2026-08-05",
  },
  {
    slug: "fx-conversion",
    name: "FX Conversion",
    fullName: "Foreign Exchange Conversion",
    abbreviation: null,
    chineseName: "外汇转换",
    category: "外汇",
    definition: "把账户中一种货币的余额实际转换为另一种货币的操作。",
    explanation:
      "换汇的执行方式决定成本结构，主要有两种模式。一是**自动换汇**：下单时系统自动换取所需货币，方便但每笔都可能重复发生，Robinhood Europe 即属此类（买入和卖出各收 0.10%）。二是**预先换汇 + 多币种余额**：先一次性把欧元换成美元并持有，之后所有美元交易都不再换汇，Trading 212 与 IBKR 支持这种模式。对频繁交易者而言，第二种可以把换汇成本从 “每笔” 降为 “一次”。",
    whyExists:
      "券商需要在客户下单时确保有足额的计价货币完成交收，自动换汇解决了这个问题，但代价是重复计费。",
    whenCharged: "执行换汇时；自动换汇模式下每笔交易都可能触发",
    chargedBy: "券商",
    platforms: ["ibkr", "trading212", "robinhood", "revolut", "schwab"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "换汇金额 × 加点百分比（+ 可能的最低手续费）",
    formula: null,
    example:
      "在 Trading 212 一次性把 €10,000 换成美元只付一次 0.15%（约 €15），此后 50 笔美元交易不再产生换汇成本；同样 50 笔交易在 Robinhood Europe 则会触发 100 次 0.10% 的 FX（买卖各一次）。",
    sources: [T212_MULTI, RH_TOKENS, IBKR_FX],
    updatedAt: "2026-08-05",
  },
  {
    slug: "fx-markup",
    name: "FX Markup",
    fullName: "Foreign Exchange Markup",
    abbreviation: null,
    chineseName: "换汇加点",
    category: "外汇",
    definition: "券商在市场汇率基础上叠加的价差百分比，是最常见的换汇收费方式。",
    explanation:
      "加点不以独立手续费的形式出现在账单上，而是直接体现在你拿到的汇率里——因此比佣金更隐蔽。计算方法是把市场中间价按加点比例调整后再成交：买入美元时你拿到的汇率比中间价差一个加点。本站六家平台的加点差异极大：IBKR 自动换汇约 0.03%、Robinhood Europe 每次 0.10%、Trading 212 0.15%、Schwab 小额档位约 1%（其价格指南对部分外币转换列示最高可达本金 3%）。",
    whyExists:
      "以加点方式收费既能覆盖券商的外汇获取成本与风险，也比单列手续费更不易被直接比较。",
    whenCharged: "每次换汇时自动包含在成交汇率中",
    chargedBy: "券商",
    platforms: ["ibkr", "trading212", "robinhood", "schwab"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "以市场中间价为基准，按加点比例向不利方向调整成交汇率",
    formula: "实际得到金额 = 换汇金额 × 中间价 × (1 − 加点%)",
    example:
      "€1,000 按中间价 1.1554 换汇：无加点为 $1,155.40；IBKR 0.03% 加点后约 $1,155.05（损失约 €0.30）；Trading 212 0.15% 后约 $1,153.67（损失约 €1.50）；Schwab 约 1% 后约 $1,143.85（损失约 €10）。",
    sources: [IBKR_FX, T212_FX, RH_TOKENS, SCHWAB_GUIDE],
    updatedAt: "2026-08-05",
  },
  {
    slug: "fx-spread",
    name: "FX Spread",
    fullName: "Foreign Exchange Spread",
    abbreviation: null,
    chineseName: "外汇点差",
    category: "外汇",
    definition: "买入价与卖出价之间的差额，是换汇成本的另一种表现形式。",
    explanation:
      "点差与加点本质相同、表述不同：加点用百分比描述偏离中间价的程度，点差用买卖两个报价之间的绝对差额描述。中间价（mid-market rate）正是买价与卖价的中点。使用自有浮动汇率而不披露具体加点的平台需要特别注意——Revolut 在工作日、额度内不收明确的换汇手续费，但成交使用其自有汇率，实际点差不保证等同 ECB 中间价，因此 “零手续费” 不等于 “零成本”。",
    whyExists:
      "做市商需要通过买卖报价之差补偿其持有货币头寸的风险与运营成本。",
    whenCharged: "每次换汇时隐含于成交汇率中",
    chargedBy: "券商或做市商",
    platforms: ["revolut", "trade-republic", "all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "(卖出价 − 买入价) ÷ 中间价",
    formula: "点差成本 ≈ 换汇金额 × (卖价 − 买价) ÷ 2 ÷ 中间价",
    example:
      "某平台 EUR/USD 报价为买入 1.1548 / 卖出 1.1560，中间价 1.1554，点差 0.0012 约合 0.10%。即使平台声称 “零手续费”，换汇 €1,000 仍隐含约 €0.5–1 的点差成本。",
    sources: [REVOLUT_STANDARD, ECB_RATES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "fx-rate",
    name: "FX Rate",
    fullName: "Foreign Exchange Rate",
    abbreviation: null,
    chineseName: "汇率",
    category: "外汇",
    definition: "两种货币之间的兑换比率，随市场供求持续波动。",
    explanation:
      "比较换汇成本时必须先确定一个共同基准，否则不同时点的报价无法比较。本站统一采用 ECB 欧元参考汇率作为理论基准（2026 年 8 月 5 日为 €1 = $1.1554），再叠加各平台明确列出的加点。需要强调的是，ECB 明确声明其参考汇率 “仅供参考发布，强烈不建议用于交易目的”，因此基准价只是可比口径，不是任何人可以成交的价格。",
    whyExists:
      "浮动汇率制下，各国货币价值由市场决定，跨境投资者的成本与收益都会受汇率波动影响。",
    whenCharged: "非费用；是换汇成本的计算基准",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "以 €1 = $1.1554 计，一股 VOO（$709.35）的无成本理论欧元价格约为 €614.03；各平台的实际欧元支出高于此数，差额即为换汇成本。",
    sources: [ECB_RATES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "interbank-rate",
    name: "Interbank Rate",
    fullName: "Interbank Exchange Rate",
    abbreviation: null,
    chineseName: "银行间汇率",
    category: "外汇",
    definition: "大型金融机构之间进行大额外汇交易时使用的批发汇率。",
    explanation:
      "银行间汇率是外汇市场的批发价，通常只在数百万美元级别的交易中可得，零售客户无法直接以此成交。零售平台的报价都是在银行间汇率基础上加点后形成的。市面上宣传 “按银行间汇率换汇” 的服务，实际含义通常是加点极低，而非真的零加点——判断时应看实际到手金额而非宣传口径。",
    whyExists:
      "银行间市场集中了最大的流动性，为整个外汇市场提供价格发现的基准。",
    whenCharged: "非费用；是零售汇率的定价基础",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "IBKR 的手动现货 FX 起步约 0.20 个基点（0.002%），非常接近银行间水平，但每单最低收 $2；换 €1,000 时最低佣金主导成本，实际约得 $1,153.40。",
    sources: [IBKR_FX, ECB_RATES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "mid-market-rate",
    name: "Mid-market Rate",
    fullName: null,
    abbreviation: null,
    chineseName: "中间价",
    category: "外汇",
    definition: "买入价与卖出价的中点，是衡量换汇成本最公平的参照基准。",
    explanation:
      "中间价本身不是可成交价格，而是评估工具：把实际到手金额与按中间价计算的理论金额相比，差额就是换汇的全部成本，无论平台以手续费、加点还是点差的形式收取。本站采用 ECB 欧元参考汇率作为中间价基准，因为它由欧洲各国央行每个工作日约 14:10 CET 通过协调程序确定并在约 16:00 CET 发布，公开、可复现且与任何单一平台无关。",
    whyExists:
      "各平台的收费形式不同，只有统一到中间价基准才能横向比较真实成本。",
    whenCharged: "非费用；是成本比较的基准",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: "成本 = 按中间价的理论金额 − 实际到手金额",
    formula: "中间价 = (买入价 + 卖出价) ÷ 2",
    example:
      "€1,000 按 ECB 中间价 1.1554 理论上得 $1,155.40。若某平台实际给出 $1,148.00，则换汇成本为 $7.40（约 0.64%），无论其账单上是否显示 “手续费”。",
    sources: [ECB_RATES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "currency-conversion",
    name: "Currency Conversion",
    fullName: null,
    abbreviation: null,
    chineseName: "货币转换",
    category: "外汇",
    definition: "在账户内把一种货币余额转为另一种货币的服务，收费方式因平台而异。",
    explanation:
      "各平台的货币转换在三个维度上差异很大：一是收费方式（百分比加点、固定最低费或额度内免费）；二是是否形成可自由支配的目标货币余额；三是是否受额度与时间限制。" +
      "本站 Revolut 口径为爱尔兰官方页面：对比表「0% 工作日*」指工作日且在套餐公平使用额度内不收明确换汇手续费（Standard €1,000/月、Plus €3,000/月；Premium/Metal/Ultra 无限额），但仍使用 Revolut 自有浮动汇率，不等于 ECB 中间价；周末（周五 17:00–周日 18:00 ET）Standard 收 1%、Plus 收 0.5%。" +
      "Robinhood Europe 的换汇只形成 Token 购买力，不产生可提取的美元现金；Trade Republic 则完全没有独立的美元余额，股票与 ETF 以欧元报价结算。",
    whyExists:
      "跨币种投资必须完成货币转换，平台据此设计出差异极大的定价与产品结构。",
    whenCharged: "执行转换时，具体规则依平台、国家与套餐而定",
    chargedBy: "券商或支付机构",
    platforms: ["ibkr", "trading212", "revolut", "robinhood", "schwab"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "依平台规则：百分比加点、固定最低费，或额度内免费、超额收费",
    formula: null,
    example:
      "Revolut Standard 工作日换 €1,000（未超当月额度）无明确手续费；同样金额在周末换汇则收 1%（约 €10）。转换时点本身就是成本变量。",
    sources: [REVOLUT_STANDARD, RH_TOKENS, T212_FX],
    updatedAt: "2026-08-05",
  },
  {
    slug: "multi-currency-account",
    name: "Multi-currency Account",
    fullName: null,
    abbreviation: null,
    chineseName: "多币种账户",
    category: "外汇",
    definition: "可同时持有多种货币余额、并选择订单结算货币的证券账户。",
    explanation:
      "多币种账户是降低跨境交易成本最有效的结构性工具：先一次性把欧元换成美元并持有，之后所有美元计价的交易都直接从美元余额扣款，不再触发换汇。Trading 212 官方说明其多币种账户可持有 EUR、USD 等余额并选择订单结算货币；IBKR 同样支持持有多币种现金。相反，Trade Republic 的股票与 ETF 通常以欧元报价与结算，没有可单独提取的美元余额，外币收入会自动换回欧元。",
    whyExists:
      "让频繁交易外币证券的客户避免每笔重复换汇，是券商的重要竞争力，也符合成本透明化的监管方向。",
    whenCharged: "非费用；是一种账户结构",
    chargedBy: "不适用",
    platforms: ["trading212", "ibkr", "revolut"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "在 Trading 212 用 0.15% 一次性把 €10,000 换成 $11,537，之后买卖 VOO、AAPL 全部以美元结算：无论交易 5 次还是 50 次，换汇成本都只发生过一次。",
    sources: [T212_MULTI, T212_FEES],
    updatedAt: "2026-08-05",
  },
  {
    slug: "foreign-exchange",
    name: "Foreign Exchange",
    fullName: null,
    abbreviation: "Forex / FX",
    chineseName: "外汇市场",
    category: "外汇",
    definition: "全球货币交易的场外市场，是世界上流动性最高的金融市场。",
    explanation:
      "外汇市场没有集中交易所，由银行、经纪商与机构通过场外网络连续交易，每周五天、每天近 24 小时运作。这一结构解释了两件事：其一，不存在唯一 “正确” 的汇率，各平台报价可以合法地不同；其二，周末市场关闭，因此周末换汇的平台需要承担隔夜风险，Revolut 等平台在周末加收 1% 正源于此。本站不涉及外汇投机交易，只关注证券投资中必需的货币转换成本。",
    whyExists:
      "国际贸易、跨境投资与储备管理都需要货币兑换，外汇市场为此提供连续的价格发现与流动性。",
    whenCharged: "非费用；是市场本身",
    chargedBy: "不适用",
    platforms: ["all"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "因外汇市场周末休市，Revolut Standard 的周末换汇收 1%，工作日额度内则无明确手续费——同样 €1,000，换汇时点差异即造成约 €10 的成本差。",
    sources: [ECB_RATES, REVOLUT_STANDARD],
    updatedAt: "2026-08-05",
  },
];
