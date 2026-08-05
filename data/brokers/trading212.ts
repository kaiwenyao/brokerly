import type { Broker } from "@/types";

/** Trading 212 欧洲版 Invest 账户。费率核对：2026-08-05 */
export const trading212: Broker = {
  slug: "trading212",
  name: "Trading 212",
  website: "https://www.trading212.com",
  regions: ["EU", "GB"],
  summary:
    "欧洲版 Invest 账户。佣金 $0 + FX 仅 0.15%，官方目录明确列有美国本土 VOO、VTI、SPY、QQQ；多币种账户可预先换成 USD 后长期免重复换汇交易。",
  feeSummary: {
    usStock: "$0",
    usEtf: "$0",
    fx: "0.15%",
    custody: "$0",
    inactivity: "$0",
  },
  fees: {
    usStockCommission: {
      amount: 0,
      currency: "USD",
      per: "trade",
      note: "Invest 账户佣金 $0；主要平台收费为 FX",
    },
    usEtfCommission: { amount: 0, currency: "USD", per: "trade" },
    fxMarkupPercent: 0.15,
    custodyFee: { amount: 0, currency: "EUR" },
    inactivityFee: { amount: 0, currency: "EUR" },
    extra: [
      { label: "EUR→USD 换汇", value: "现货汇率 +0.15%", note: "可持有 EUR 与 USD，预先换汇后不再每笔重复转换" },
      { label: "银行卡/Apple Pay/Google Pay 入金", value: "累计前 €2,000 免费", note: "超过后收 0.7%；银行转账免费" },
      { label: "SEC Section 31（卖出）", value: "以订单预览为准", note: "官方帮助页仍显示旧值 $0.0000278，与 2026-04 起现行 $0.0000206 不一致" },
      { label: "FINRA TAF（卖出）", value: "$0.000195 × 卖出股数" },
      { label: "收入来源", value: "0.15% FX + 股票出借", note: "CFD 点差属于另一产品，不纳入本站口径" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true, note: "Invest 账户为真实股票" },
    { key: "us-etf", label: "美国本土 ETF（VOO/VTI/SPY/QQQ）", supported: true, note: "官方产品目录明确列示" },
    { key: "ucits", label: "UCITS ETF", supported: true },
    { key: "fractional", label: "碎股", supported: true, note: "股票和 ETF 可从低金额购买" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: true },
    { key: "margin", label: "保证金融资", supported: false, note: "Invest 账户不提供" },
  ],
  pros: [
    "零佣金 + 0.15% FX，欧元资金买真实美国 ETF 的最优组合",
    "官方目录明确支持 VOO、VTI、SPY、QQQ 等美国本土 ETF",
    "多币种账户：一次换汇后可用 USD 余额长期交易",
    "无平台费、托管费、inactivity fee",
    "股票和 ETF 支持低金额碎股",
  ],
  cons: [
    "银行卡等渠道累计入金超 €2,000 后收 0.7%",
    "澳大利亚实体 FX 为 0.40%，不同账户实体费率与产品清单不同",
    "帮助页 SEC 费率仍为旧值，实际以订单预览/成交单为准",
    "Invest 收入主要来自 FX 和股票出借",
  ],
  lastUpdated: "2026-08-05",
};
