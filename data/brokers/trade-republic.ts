import type { Broker } from "@/types";

/** Trade Republic 欧洲版账户。费率核对：2026-08-05 */
export const tradeRepublic: Broker = {
  slug: "trade-republic",
  name: "Trade Republic",
  website: "https://traderepublic.com",
  regions: ["EU"],
  summary:
    "欧洲版账户。不收订单佣金，每笔通常收 €1 外部结算费（碎股同样 €1）；以欧元报价结算，无独立 USD 余额，适合大额少笔的 UCITS ETF 定投。",
  feeSummary: {
    usStock: "€1/笔",
    usEtf: "€1/笔",
    fx: "EUR 结算",
    custody: "未单列",
    inactivity: "未单列",
  },
  fees: {
    usStockCommission: {
      amount: 1,
      currency: "EUR",
      per: "trade",
      note: "定义为外部结算费；碎股同样 €1；另有价差和第三方费用",
    },
    usEtfCommission: { amount: 1, currency: "EUR", per: "trade" },
    extra: [
      { label: "碎股订单", value: "€1/笔", note: "€10 碎股单≈立即承担 10% 固定费" },
      { label: "换汇", value: "无独立 USD 余额", note: "外币收入自动换成 EUR，成本反映于报价" },
      { label: "SEC/FINRA 费用", value: "未单列", note: "经欧洲执行场所交易；选择其他全球场所以订单预览为准" },
      { label: "基础货币差异", value: "欧元区 €1", note: "部分国家以当地货币收取相近固定费（如波兰 4 PLN）" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true, note: "真实证券；碎股由特定执行机制处理" },
    { key: "us-etf", label: "美国本土 ETF", supported: false, note: "公开官方目录未确认 VOO 等是否可交易" },
    { key: "ucits", label: "UCITS ETF", supported: true, note: "核心产品范围，超过 2,000 只，准确清单以 app 为准" },
    { key: "fractional", label: "碎股", supported: true, note: "部分股票和 ETF 最低 €1" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: false },
    { key: "margin", label: "保证金融资", supported: false, note: "按现金证券账户处理" },
  ],
  pros: [
    "€1 固定费简单透明，€1,000 订单固定费仅约 0.10%",
    "无一般证券账户月费",
    "UCITS ETF 选择丰富，适合大额少笔定投",
  ],
  cons: [
    "碎股同样收 €1——大量 €10–€50 小单成本极高",
    "无 USD 现金余额，不能作为 EUR→USD 兑换工具",
    "VOO 等美国本土 ETF 是否可交易，公开目录未确认",
    "€1 之外仍有价差、第三方成本和执行场所经济利益",
  ],
  lastUpdated: "2026-08-05",
};
