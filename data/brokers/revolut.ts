import type { Broker } from "@/types";

/** Revolut Trading 欧洲版（以爱尔兰/欧元区页面为代表）。费率核对：2026-08-05 */
export const revolut: Broker = {
  slug: "revolut",
  name: "Revolut",
  website: "https://www.revolut.com",
  regions: ["EU"],
  summary:
    "欧洲版（欧元区）。每月 1–10 笔免费订单（按计划），工作日额度内换汇无明确手续费；ETF 仅限欧盟注册产品，不提供美国本土 VOO。",
  feeSummary: {
    usStock: "每月 1–10 笔免费",
    usEtf: "同左（EU ETF）",
    fx: "0% 工作日*",
    custody: "$0",
    inactivity: "$0",
  },
  fees: {
    usStockCommission: {
      amount: 0,
      currency: "EUR",
      per: "trade",
      note: "每月免佣额度：Standard 1 笔、Plus 3 笔、Premium 5 笔、Metal/Ultra 10 笔；超额后 Standard–Metal 为 0.25% 或 €1 取高，Ultra/Trading Pro 为 0.12% 或 €1 取高",
    },
    usEtfCommission: {
      amount: 0,
      currency: "EUR",
      per: "trade",
      note: "仅限欧盟注册非复杂 ETF；部分 ETP 投资计划买单免佣",
    },
    custodyFee: { amount: 0, currency: "EUR" },
    inactivityFee: { amount: 0, currency: "EUR" },
    extra: [
      { label: "工作日换汇", value: "额度内无明确手续费", note: "使用 Revolut 自有浮动汇率，不保证等同 ECB 中间价" },
      { label: "周末换汇", value: "1%", note: "超过计划公平使用额度也可能收费" },
      { label: "付费计划（爱尔兰示例）", value: "Plus €3.99 / Premium €8.99 / Metal €15.99 / Ultra 约 €55 每月" },
      { label: "证券转出", value: "$35/持仓" },
      { label: "ADR 转嫁费", value: "$0.01–$0.05/股/年" },
      { label: "卖出监管费", value: "从卖出款中扣除", note: "美国上市股票适用 SEC/TAF" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true, note: "客户为受益所有人" },
    { key: "us-etf", label: "美国本土 ETF", supported: false, note: "ETF 范围限定为欧盟注册非复杂 ETF" },
    { key: "ucits", label: "UCITS ETF", supported: true },
    { key: "fractional", label: "碎股", supported: true, note: "支持部分股票和 ETF" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: true },
    { key: "margin", label: "保证金融资", supported: false, note: "按现金交易处理" },
  ],
  pros: [
    "工作日、额度内换汇无明确手续费，€1,000 内接近零显性 FX 成本",
    "每月免费订单对低频用户有价值",
    "符合条件的 ETP 投资计划买单可免佣",
    "欧洲本地化、小额与 UCITS ETF 使用体验好",
  ],
  cons: [
    "不提供美国本土 VOO——只能买独立的 UCITS 替代品",
    "免费额度用完后 0.25% 或最低 €1，高频交易迅速变贵",
    "周末换汇收 1%；实际汇率为其自有浮动报价",
    "证券转出收 $35/持仓",
  ],
  lastUpdated: "2026-08-05",
};
