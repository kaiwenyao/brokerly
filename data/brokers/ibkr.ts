import type { Broker } from "@/types";

/** Interactive Brokers 美国版账户（Lite / Pro）。费率核对：2026-08-05 */
export const ibkr: Broker = {
  slug: "ibkr",
  name: "Interactive Brokers",
  website: "https://www.interactivebrokers.com",
  regions: ["US"],
  summary:
    "美国版账户。Lite 方案美股/ETF 零佣金，自动换汇加点约 0.03% 为六家最低；Pro 方案每笔最低 $0.35（Tiered）或 $1（Fixed）。",
  feeSummary: {
    usStock: "$0（Lite）",
    usEtf: "$0（Lite）",
    fx: "≈0.03%",
    custody: "$0",
    inactivity: "$0",
  },
  fees: {
    usStockCommission: {
      amount: 0,
      currency: "USD",
      per: "trade",
      note: "Lite $0；Pro Fixed $0.005/股（最低 $1、最高成交额 1%）；Pro Tiered $0.0005–0.0035/股（最低 $0.35，另加外部费用）",
    },
    usEtfCommission: {
      amount: 0,
      currency: "USD",
      per: "trade",
      note: "与美股相同",
    },
    fxMarkupPercent: 0.03,
    custodyFee: { amount: 0, currency: "USD" },
    inactivityFee: { amount: 0, currency: "USD" },
    extra: [
      { label: "自动换汇", value: "汇率 ±0.03%", note: "无另收佣金，主要用于覆盖交易所需货币" },
      { label: "手动现货 FX", value: "0.20 个基点起", note: "最低 $2/单" },
      { label: "SEC Section 31（卖出）", value: "$0.0000206 × 卖出金额", note: "每百万美元 $20.60；Fixed 已含，Tiered 转嫁" },
      { label: "FINRA TAF（卖出）", value: "按 FINRA 当期费率/股", note: "FINRA 规则手册列 $0.000166/股、上限 $8.30；券商费率页多列 $0.000195/股、上限 $9.79，以成交单为准" },
      { label: "清算/CAT（Tiered）", value: "约 $0.00020/股 + $0.000003/股", note: "Fixed 已包含" },
      { label: "市场数据", value: "Cboe One / IEX 免费", note: "完整 NBBO 或专业数据包需订阅" },
      { label: "股票融资利率", value: "基准 +1.5%–2.5%", note: "Lite 约 +2.5%，Pro 起步约 +1.5%" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true },
    { key: "us-etf", label: "美国本土 ETF（VOO/VTI/SPY/QQQ）", supported: true },
    { key: "ucits", label: "UCITS ETF", supported: true, note: "支持欧洲市场产品" },
    { key: "fractional", label: "碎股", supported: true, note: "多数合资格股票和 ETF" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: true },
    { key: "margin", label: "保证金融资", supported: true },
  ],
  pros: [
    "自动换汇加点约 0.03%，六家中最低",
    "Lite 方案普通美股/ETF 网上交易零佣金",
    "VOO、VTI、SPY、QQQ 等美国本土 ETF 全支持",
    "无最低余额、无维护费、无 inactivity fee",
    "Pro Tiered 提供透明的交易所路由与流动性返佣",
  ],
  cons: [
    "Lite 的夜盘、部分竞价、低价股等特殊订单可能转为 Fixed 费率",
    "Pro 每笔最低 $0.35–$1，对小额订单比例偏高",
    "Lite 官方说明通过订单流付款（PFOF）支持零佣金",
    "完整 NBBO/整合行情需付费订阅",
  ],
  lastUpdated: "2026-08-05",
};
