import type { Broker } from "@/types";

/**
 * Interactive Brokers 美国版账户 —— 本站统一采用 **IBKR Pro** 口径。
 * Pro 提供 Fixed 与 Tiered 两种定价，不依赖订单流付款。
 * 费率核对：2026-08-05
 */
export const ibkr: Broker = {
  slug: "ibkr",
  name: "Interactive Brokers（Pro）",
  website: "https://www.interactivebrokers.com",
  regions: ["US"],
  summary:
    "美国版 Pro 方案。Tiered 每笔最低 $0.35 并透传交易所费用与返佣，Fixed 每笔最低 $1 但费用全包；自动换汇加点约 0.03%，为六家最低。",
  feeSummary: {
    usStock: "$0.35 起（Tiered）",
    usEtf: "$0.35 起（Tiered）",
    fx: "≈0.03%",
    custody: "$0",
    inactivity: "$0",
  },
  fees: {
    usStockCommission: {
      amount: 0.35,
      currency: "USD",
      per: "trade",
      note: "Tiered：$0.0005–0.0035/股，每笔最低 $0.35，另加外部费用与返佣；Fixed：$0.005/股，每笔最低 $1、最高成交额 1%，费用全包",
    },
    usEtfCommission: {
      amount: 0.35,
      currency: "USD",
      per: "trade",
      note: "与美股相同",
    },
    fxMarkupPercent: 0.03,
    custodyFee: { amount: 0, currency: "USD" },
    inactivityFee: { amount: 0, currency: "USD" },
    extra: [
      { label: "Pro Tiered 佣金", value: "$0.0005–0.0035/股", note: "每笔最低 $0.35，按月成交量分层递减，另行透传外部费用与返佣" },
      { label: "Pro Fixed 佣金", value: "$0.005/股", note: "每笔最低 $1、最高为成交额的 1%，已包含监管与交易所费用" },
      { label: "自动换汇", value: "汇率 ±0.03%", note: "无另收佣金，主要用于覆盖交易所需货币" },
      { label: "手动现货 FX", value: "0.20 个基点起", note: "最低 $2/单；大额换汇的边际费率优于自动换汇" },
      { label: "SEC Section 31（卖出）", value: "$0.0000206 × 卖出金额", note: "每百万美元 $20.60；Fixed 已含，Tiered 转嫁" },
      { label: "FINRA TAF（卖出）", value: "按 FINRA 当期费率/股", note: "FINRA 规则手册列 $0.000166/股、上限 $8.30；券商费率页多列 $0.000195/股、上限 $9.79，以成交单为准" },
      { label: "清算 / CAT（Tiered）", value: "约 $0.00020/股 + $0.000003/股", note: "Fixed 方案已包含，不单列" },
      { label: "交易所费用与返佣（Tiered）", value: "按实际场所费率透传", note: "被动成交可能获得返佣，主动吃单则支付 taker 费用" },
      { label: "市场数据", value: "Cboe One / IEX 免费", note: "完整 NBBO 或专业数据包需订阅" },
      { label: "股票融资利率", value: "基准 +1.5% 起", note: "Pro 起步约为基准加 1.5%，借款越大加点越低" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true },
    { key: "us-etf", label: "美国本土 ETF（VOO/VTI/SPY/QQQ）", supported: true },
    { key: "ucits", label: "UCITS ETF", supported: true, note: "支持欧洲市场产品" },
    { key: "fractional", label: "碎股", supported: true, note: "多数合资格股票和 ETF" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: true },
    { key: "margin", label: "保证金融资", supported: true, note: "Pro 起步约为基准利率加 1.5%" },
  ],
  pros: [
    "自动换汇加点约 0.03%，六家中最低",
    "Tiered 透传交易所费用与返佣，被动挂单可降低净成本",
    "不依赖订单流付款，提供完整的 SmartRouting 与直连场所能力",
    "VOO、VTI、SPY、QQQ 等美国本土 ETF 全支持",
    "无最低余额、无维护费、无 inactivity fee；融资利率起步为基准加 1.5%",
  ],
  cons: [
    "每笔最低佣金 $0.35（Tiered）或 $1（Fixed），小额订单成本占比偏高",
    "Tiered 的外部费用逐笔变动，下单前难以精确预估总成本",
    "完整 NBBO / 整合行情需付费订阅",
    "平台功能复杂，学习成本高于移动端券商",
  ],
  lastUpdated: "2026-08-05",
};
