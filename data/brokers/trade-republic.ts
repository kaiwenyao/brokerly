import type { Broker } from "@/types";

/** Trade Republic 欧洲版账户。费率核对：2026-08-08 */
export const tradeRepublic: Broker = {
  slug: "trade-republic",
  name: "Trade Republic",
  website: "https://traderepublic.com",
  regions: ["EU"],
  summary:
    "欧洲版账户。合资格股票与 ETF Savings Plan 买入执行费为 €0；普通手动交易和未来卖出通常每笔收 €1 外部结算费。支持每周、每月两次、每月或每季自动投入。",
  feeSummary: {
    usStock: "€1/笔",
    usEtf: "计划买入 €0；手动 €1",
    fx: "EUR 结算",
    custody: "未单列",
    inactivity: "未单列",
  },
  fees: {
    usStockCommission: {
      amount: 1,
      currency: "EUR",
      per: "trade",
      note: "普通手动交易的外部结算费；Savings Plan 买入执行费为 €0，另有价差和第三方费用",
    },
    usEtfCommission: { amount: 1, currency: "EUR", per: "trade", note: "手动交易 €1；合资格 Savings Plan 买入 €0" },
    extra: [
      { label: "Savings Plan 买入", value: "€0", note: "可设每周、每月两次、每月或每季；未来卖出通常 €1/笔" },
      { label: "手动碎股订单", value: "€1/笔", note: "€10 手动碎股单≈立即承担 10% 固定费" },
      { label: "换汇", value: "无独立 USD 余额", note: "外币收入自动换成 EUR，成本反映于报价" },
      { label: "SEC/FINRA 费用", value: "未单列", note: "经欧洲执行场所交易；选择其他全球场所以订单预览为准" },
      { label: "基础货币差异", value: "欧元区 €1", note: "部分国家以当地货币收取相近固定费（如波兰 4 PLN）" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true, note: "真实证券；碎股由特定执行机制处理" },
    { key: "us-etf", label: "美国本土 ETF", supported: false, note: "EEA 零售客户通常因缺少 PRIIPs KID 不能买 VOO、QQQ 等" },
    { key: "ucits", label: "UCITS ETF", supported: true, note: "核心产品范围，超过 2,000 只，准确清单以 app 为准" },
    { key: "fractional", label: "碎股", supported: true, note: "部分股票和 ETF 最低 €1" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: false },
    { key: "margin", label: "保证金融资", supported: false, note: "按现金证券账户处理" },
  ],
  pros: [
    "合资格 Savings Plan 买入执行费为 €0，适合小额定投",
    "可设每周、每月两次、每月或每季自动执行",
    "无一般证券账户月费",
    "UCITS ETF 选择丰富，官方披露超过 2,000 只",
  ],
  cons: [
    "普通手动交易和卖出通常仍收 €1——大量 €10–€50 手动小单成本高",
    "无 USD 现金余额，不能作为 EUR→USD 兑换工具",
    "爱尔兰零售账户通常不能直接买 VOO、QQQ，需选择 UCITS 替代品",
    "€1 之外仍有价差、第三方成本和执行场所经济利益",
  ],
  lastUpdated: "2026-08-08",
};
