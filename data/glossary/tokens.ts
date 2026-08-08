import type { GlossaryTerm } from "@/types";

const RH_ABOUT = {
  title: "Robinhood Europe — About Stock Tokens",
  url: "https://robinhood.com/eu/en/support/articles/about-stock-tokens/",
};
const RH_FAQ = {
  title: "Robinhood Europe — Stock Tokens FAQ",
  url: "https://robinhood.com/eu/en/support/articles/stock-tokens-faq/",
};
const RH_BUYSELL = {
  title: "Robinhood Europe — Buy and sell Stock Tokens",
  url: "https://robinhood.com/eu/en/support/articles/buy-and-sell-stock-tokens/",
};
const RH_HUB = {
  title: "Robinhood Europe — Stock Tokens 支持文档入口",
  url: "https://robinhood.com/eu/en/support/stock-tokens/",
};

/** Shared facts verified on Robinhood Europe's official support pages. */
const OWNERSHIP_NOTE =
  "官方明确：购买时 “你买到的不是实际股票，而是跟踪其价格、记录在区块链上的代币化合约”，并且 “Classic Stock Tokens 是你与 Robinhood 之间的衍生合约，其定价参照标的证券价格，但不授予对这些证券的权利”。";

export const tokenTerms: GlossaryTerm[] = [
  {
    slug: "stock-token",
    name: "Stock Token",
    fullName: "Classic Stock Token",
    abbreviation: "Token",
    chineseName: "股票代币",
    category: "Token 与数字资产",
    definition:
      "Robinhood Europe 发行的、跟踪某股票或 ETF 价格的衍生合约，不是该证券本身；对比表里标 “Token” 即提醒产品不可与真实美股/ETF 佣金直接比较。",
    explanation:
      `${OWNERSHIP_NOTE}与真正股票的区别在于：你不持有标的证券的任何权益，交易对手是 Robinhood 而非市场；与 ETF 的区别在于：ETF 份额背后有基金实际持有的一篮子资产，而 Token 背后只有一份合约债权。官方说明 Token 依 MiFID II 作为衍生合约提供，无股东投票权，且 “不能发送到其他钱包或平台”。公司行动处理期间，相关 Token 的交易通常会被暂停。` +
      "本站对比表中的写法含义如下：" +
      "「$0（Token）」= 交易本身不收佣金，但买到的是 Stock Token，不是真实美股；" +
      "「—（仅 Token）」= 不提供可对比的美国本土 ETF 份额，因此 ETF 佣金栏不适用（即便 app 有跟踪 ETF 价格的 Token，仍不是 ETF）；" +
      "「Token 记录」= 没有传统证券托管，持仓只是平台上的合约记录。真正成本主要在买卖各收一次的 0.10% FX。",
    whyExists:
      "Token 结构让欧洲用户能以极低门槛获得美国股票的价格敞口，同时规避了跨境证券持有与交收的复杂性；对发行方而言则是可控的合约负债。",
    whenCharged: "买入和卖出时各自动换汇一次并收取 0.10% FX 费",
    chargedBy: "Robinhood Europe",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: "每次交易按成交金额收取 0.10% 的换汇费，无单独佣金",
    formula: "单次成本 = 成交金额 × 0.10%；完整买卖一轮约 0.20%",
    example:
      "对比表写 “$0（Token）” 时：买入 €1,000 的 AAPL Token 佣金为 €0，但仍付约 €1 的 FX；卖出再付约 €1。整轮约 0.20% FX，且从未持有过一股 AAPL。写 “—（仅 Token）” 时：不能把它当成 VOO 等真实 ETF 的 $0 佣金。",
    sources: [RH_ABOUT, RH_FAQ, RH_BUYSELL],
    updatedAt: "2026-08-05",
  },
  {
    slug: "tokenized-security",
    name: "Tokenized Security",
    fullName: null,
    abbreviation: null,
    chineseName: "代币化证券",
    category: "Token 与数字资产",
    definition: "以区块链或分布式账本形式表示证券权益或其价格敞口的数字化产品。",
    explanation:
      "代币化产品在法律性质上差异极大，必须逐个查看发行文件：有的代表对真实证券的实际权益，有的只是跟踪价格的合约。Robinhood Europe 的 Classic Stock Tokens 属于后者——官方明确其为衍生合约，依 MiFID II 提供，不授予对标的证券的权利。因此 “代币化” 描述的是技术记录形式，而不是法律权利的性质，两者不能混为一谈。",
    whyExists:
      "分布式账本技术使 24/7 交易、碎片化持有和快速结算成为可能，机构因此探索用代币形式承载金融产品。",
    whenCharged: "取决于具体产品；Robinhood Stock Token 为每次交易 0.10% FX",
    chargedBy: "发行平台",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: true,
    chargedOnSell: true,
    calculation: null,
    formula: null,
    example:
      "同样名为 “代币化的 AAPL”，一种可能是持有真实 AAPL 并以代币记录权益，另一种（如 Robinhood 的实现）只是与发行方的价格挂钩合约——投资者权利完全不同。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "token",
    name: "Token",
    fullName: null,
    abbreviation: null,
    chineseName: "代币",
    category: "Token 与数字资产",
    definition: "在区块链或分布式账本上记录的数字单位，可代表多种不同性质的权利或合约。",
    explanation:
      "代币本身只是记账单位，其法律含义完全由发行条款决定：可能是加密资产、可能是对某实体的债权、也可能是衍生合约。因此看到 “Token” 时，唯一可靠的判断方法是阅读发行方的官方条款。在本站语境下，Robinhood Europe 的 Stock Token 被官方定义为客户与 Robinhood 之间的衍生合约，而非证券或传统意义上的加密资产。",
    whyExists:
      "区块链提供了可编程、可分割、可即时转移的记账单位，被用于承载各类金融与非金融权利。",
    whenCharged: "取决于具体产品",
    chargedBy: "发行平台",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "“持有 AAPL Token” 与 “持有 AAPL 股票” 在券商 App 的界面上可能看起来几乎一样，但前者在破产清偿、投票权和转户能力上与后者完全不同。",
    sources: [RH_ABOUT, RH_HUB],
    updatedAt: "2026-08-05",
  },
  {
    slug: "asset-backed-token",
    name: "Asset-backed Token",
    fullName: null,
    abbreviation: null,
    chineseName: "资产支持型代币",
    category: "Token 与数字资产",
    definition: "声称由发行方实际持有的标的资产提供支持的代币。",
    explanation:
      "关键问题有三个：标的资产是否真实存在、由谁托管、投资者对其是否享有直接的法律请求权。即使发行方确实持有对冲头寸，投资者的权利仍可能只是对发行方的合约债权，而非对资产的所有权。Robinhood 官方对 Classic Stock Tokens 的表述是 “衍生合约……不授予对标的证券的权利”，因此不应把它理解为投资者对某篮子股票享有权利的资产支持产品。",
    whyExists:
      "以真实资产背书可以提升代币的可信度与定价锚定，但支持关系的法律强度需要逐案确认。",
    whenCharged: "取决于具体产品",
    chargedBy: "发行平台",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "若发行方破产，持有真实 ETF 份额的投资者对基金资产享有权益；而持有价格挂钩型 Token 的投资者只能作为普通债权人向发行方主张合约权利。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "blockchain-token",
    name: "Blockchain Token",
    fullName: null,
    abbreviation: null,
    chineseName: "区块链代币",
    category: "Token 与数字资产",
    definition: "在区块链上发行和记录的代币，其可转移性取决于发行方的具体设计。",
    explanation:
      "很多人默认 “上链＝可自由转移”，但这并不成立。Robinhood 官方明确 Classic Stock Tokens 虽 “记录在区块链上”，但 “你可以买入、卖出或持有，但目前不能把它们发送到其他钱包或平台”。也就是说，区块链在这里是内部记账技术，而非赋予用户自主保管与转移能力的开放网络。官方文档亦未指明具体使用的是哪一条区块链。",
    whyExists:
      "分布式账本可提升发行方的记账效率与可审计性，但发行方可以在合约层面限制转移权限。",
    whenCharged: "取决于具体产品",
    chargedBy: "发行平台",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "你无法把 Robinhood 的 AAPL Token 提取到自己的加密钱包，也无法转到另一家券商——这与真正的自托管加密资产有本质区别。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "underlying-asset",
    name: "Underlying Asset",
    fullName: null,
    abbreviation: null,
    chineseName: "标的资产",
    category: "Token 与数字资产",
    definition: "衍生品价格所参照的基础资产，例如某只股票或 ETF。",
    explanation:
      "标的资产决定衍生品的价格走势，但持有衍生品不等于持有标的。Robinhood 的 Classic Stock Tokens 以标的证券价格定价，官方同时明确其 “不授予对这些证券的权利”。这一区分决定了三件事：破产时的清偿顺位、公司行动中的权利，以及能否转出至其他机构。",
    whyExists:
      "衍生品结构让投资者能在不实际持有资产的情况下获得价格敞口，代价是引入了发行方信用风险。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "AAPL Token 的标的资产是 AAPL 股票：AAPL 涨 1%，Token 大致同步上涨，但你在股东名册上不会出现，也无法参与股东投票。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "beneficial-ownership",
    name: "Beneficial Ownership",
    fullName: null,
    abbreviation: null,
    chineseName: "受益所有权",
    category: "Token 与数字资产",
    definition: "虽不在登记名册上署名、但实际享有证券经济利益与权利的所有权形式。",
    explanation:
      "在街名持有制度下，证券登记在券商或存管机构的代名人名下，投资者是受益所有人，享有股息、投票（经券商传递）和处分权，并在券商破产时对该证券享有权益。Revolut 官方即表示其客户为所持证券的受益所有人。相比之下，Robinhood 的 Classic Stock Tokens 不构成对标的证券的受益所有权——官方明确其为不授予证券权利的衍生合约。",
    whyExists:
      "集中存管与代名人制度大幅提升了交收效率，受益所有权概念用以保障投资者在这一结构下的实质权利。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["revolut", "trading212", "ibkr", "schwab", "trade-republic"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "在 Revolut 买入 AAPL：你是受益所有人，可获得股息并在平台出问题时对该持仓主张权益；在 Robinhood Europe 买入 AAPL Token：你只是合约对手方，权利来自合约而非证券。",
    sources: [RH_FAQ, RH_ABOUT],
    updatedAt: "2026-08-05",
  },
  {
    slug: "legal-ownership",
    name: "Legal Ownership",
    fullName: null,
    abbreviation: null,
    chineseName: "法律所有权",
    category: "Token 与数字资产",
    definition: "在证券登记册上被记录为持有人的所有权形式。",
    explanation:
      "法律所有权与受益所有权可以分离：在美股街名持有制度下，法律所有人通常是 DTC 的代名人 Cede & Co.，而散户是受益所有人。这种分离是现代证券交收体系的常态，并不削弱投资者权利。真正的差别在于 Token：持有人既非法律所有人也非受益所有人，只是衍生合约的一方。",
    whyExists:
      "簿记化交收要求证券集中登记在少数代名人名下，法律所有权与实际权益因此分离。",
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
      "你在 Schwab 持有 100 股 AAPL：登记册上的法律所有人是 Cede & Co.，你是受益所有人，可正常收息、投票和转户。",
    sources: [RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "crypto-asset",
    name: "Crypto Asset",
    fullName: null,
    abbreviation: null,
    chineseName: "加密资产",
    category: "Token 与数字资产",
    definition: "使用分布式账本技术发行和转移的数字资产，其监管归属取决于法律性质。",
    explanation:
      "在欧盟，纯加密资产受 MiCA 规制，而具备金融工具性质的产品仍适用 MiFID II。Robinhood 官方说明其 Classic Stock Tokens 依 MiFID II 作为衍生合约提供，因此不应简单归入 “加密资产” 类别。分类的实际意义在于：适用哪套投资者保护规则、是否纳入投资者赔偿计划、以及信息披露要求的强度。",
    whyExists:
      "数字资产的形态多样，监管按经济实质而非技术形式分类，以避免同类风险适用不同规则。",
    whenCharged: "取决于具体产品",
    chargedBy: "不适用",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "购买比特币（加密资产，MiCA 框架）与购买 AAPL Token（MiFID II 衍生合约）适用完全不同的监管规则与保护水平，尽管两者都记录在区块链上。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "ledger",
    name: "Ledger",
    fullName: "Distributed Ledger",
    abbreviation: "DLT",
    chineseName: "账本 / 分布式账本",
    category: "Token 与数字资产",
    definition: "记录资产归属与交易历史的账簿，可以是机构内部账簿或分布式账本。",
    explanation:
      "无论技术形式如何，账本回答的都是同一个问题：谁拥有什么。传统证券的权属由券商账簿与中央存管机构记录；Robinhood 的 Stock Tokens 记录在区块链上，但由于不能转出至外部钱包或平台，其账本在功能上仍是发行方控制的封闭记录，而非开放的公共账本。",
    whyExists:
      "任何金融资产都需要权威的权属记录；分布式账本提供了新的记账实现方式，但不自动改变权利性质。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "Robinhood 官方说明 Token “记录在区块链上”，但未指明具体链，且用户无法把 Token 发送至外部钱包——上链并未带来自主保管能力。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-05",
  },
  {
    slug: "custody",
    name: "Custody",
    fullName: null,
    abbreviation: null,
    chineseName: "托管",
    category: "Token 与数字资产",
    definition: "由受监管机构代客户保管证券或资产、并维护权属记录的服务。",
    explanation:
      "传统证券托管有成熟的法律框架：客户资产须与券商自有资产分离，破产时不属于破产财产，并可能受投资者赔偿计划保护。Token 产品则不涉及传统证券托管——Robinhood 官方将 Classic Stock Tokens 定义为与自身订立的衍生合约，客户对标的证券没有权利，因此不存在 “被托管的股票”。这是评估平台风险时最需要区分的一点。",
    whyExists:
      "资产隔离与专业保管是投资者保护的基石，防止券商挪用客户资产或在破产时混同。",
    whenCharged: "多数平台不收托管费；Revolut 转出证券收 $35/持仓",
    chargedBy: "券商或托管机构",
    platforms: ["ibkr", "schwab", "trading212", "revolut", "trade-republic"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: false,
    chargedOnSell: false,
    calculation: null,
    formula: null,
    example:
      "在 Trading 212 Invest 持有的合资格 UCITS ETF 由证券托管安排保管；在 Robinhood Europe 持有的 Token 则没有对应的被托管 ETF 份额。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-08",
  },
  {
    slug: "wallet",
    name: "Wallet",
    fullName: "Crypto Wallet",
    abbreviation: null,
    chineseName: "钱包",
    category: "Token 与数字资产",
    definition: "持有并管理区块链资产私钥的工具，决定用户能否自主控制资产。",
    explanation:
      "自托管钱包意味着用户直接掌握私钥、可随时把资产转移到任何地址。Robinhood 的 Classic Stock Tokens 不具备这一能力——官方明确 “不能把它们发送到其他钱包或平台”。因此，尽管产品使用了区块链技术，用户获得的仍是平台内的封闭持仓，而非可自主保管、可跨平台转移的链上资产。",
    whyExists:
      "私钥控制权是加密资产自托管的核心；但受监管的金融产品往往出于合规与风控考虑限制自由转移。",
    whenCharged: "非费用，不适用",
    chargedBy: "不适用",
    platforms: ["robinhood"],
    usOnly: false,
    appliesToEurope: true,
    chargedOnBuy: null,
    chargedOnSell: null,
    calculation: null,
    formula: null,
    example:
      "持有真正的加密资产可提到自有钱包并在链上转移；持有 Robinhood Stock Token 则只能在 Robinhood 内部买卖，无法提取。",
    sources: [RH_ABOUT, RH_FAQ],
    updatedAt: "2026-08-05",
  },
];
