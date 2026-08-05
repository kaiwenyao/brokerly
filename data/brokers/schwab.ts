import type { Broker } from "@/types";

/** Charles Schwab 美国版账户。费率核对：2026-08-05 */
export const schwab: Broker = {
  slug: "schwab",
  name: "Charles Schwab",
  website: "https://www.schwab.com",
  regions: ["US"],
  summary:
    "美国版账户。网上交易美国上市股票和 ETF 佣金 $0，是美元余额下最便宜的选择之一；但小额 EUR→USD 换汇档位约 1%，明显偏贵。",
  feeSummary: {
    usStock: "$0",
    usEtf: "$0",
    fx: "≈1%（小额）",
    custody: "$0",
    inactivity: "$0",
  },
  fees: {
    usStockCommission: {
      amount: 0,
      currency: "USD",
      per: "trade",
      note: "网上交易 $0；人工经纪通常另加 $25，自动电话约 $5",
    },
    usEtfCommission: { amount: 0, currency: "USD", per: "trade" },
    custodyFee: { amount: 0, currency: "USD" },
    inactivityFee: { amount: 0, currency: "USD" },
    extra: [
      { label: "小额换汇档位", value: "约 1%", note: "Schwab Global Account 公布档位；其他路径依交易而异" },
      { label: "SEC Section 31（卖出）", value: "按现行费率转嫁", note: "买入不收" },
      { label: "FINRA TAF（卖出）", value: "按 FINRA 当期费率/股", note: "FINRA 规则手册列 $0.000166/股、上限 $8.30；券商费率页多列 $0.000195/股，以成交单为准" },
      { label: "人工经纪下单", value: "$25", note: "自动电话约 $5" },
      { label: "股票融资利率", value: "约 10.075%–11.825%", note: "按借款金额分档" },
      { label: "其他", value: "ADR、外国证券另计", note: "特殊服务可能另收费" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true },
    { key: "us-etf", label: "美国本土 ETF（VOO/VTI/SPY/QQQ）", supported: true },
    { key: "ucits", label: "UCITS ETF", supported: false, note: "Schwab Global 等渠道可提供外国证券，但非同一执行路径" },
    { key: "fractional", label: "碎股", supported: true, note: "Stock Slices 主要针对 S&P 500 股票，ETF 碎股能力有限" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: true },
    { key: "margin", label: "保证金融资", supported: true },
  ],
  pros: [
    "美国上市股票和 ETF 网上交易佣金 $0",
    "无账户最低额、无维护费",
    "个人非专业客户通常可获实时行情",
    "美元余额下低频与中高频交易的显性费用均为最低档",
  ],
  cons: [
    "小额 EUR→USD 换汇约 1%，远不如 IBKR/Trading 212/Revolut",
    "碎股（Stock Slices）主要限 S&P 500 股票",
    "人工经纪下单 $25",
    "官方承认从订单流付款/交易场所返佣获得收入",
  ],
  lastUpdated: "2026-08-05",
};
