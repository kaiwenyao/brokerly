import type { Broker } from "@/types";

/** Charles Schwab 美国版 / 国际账户。费率核对：2026-08-09 */
export const schwab: Broker = {
  slug: "schwab",
  name: "Charles Schwab",
  website: "https://www.schwab.com",
  regions: ["US"],
  summary:
    "美国券商账户。合资格客户在线交易美国上市股票和 ETF 为 $0，但 Schwab 明确禁止 EEA/UK 居民首次买入或追加美国注册 ETF；既有仓位只能持有或卖出。UCITS ETF 需电话下单，每笔 $50。",
  feeSummary: {
    usStock: "$0",
    usEtf: "$0（爱尔兰居民不可新增）",
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
    usEtfCommission: { amount: 0, currency: "USD", per: "trade", note: "合资格账户在线 $0；爱尔兰居民不能首次买入或追加美国注册 ETF" },
    custodyFee: { amount: 0, currency: "USD" },
    inactivityFee: { amount: 0, currency: "USD" },
    extra: [
      { label: "小额换汇档位", value: "约 1%", note: "Schwab Global Account 公布档位；其他路径依交易而异" },
      { label: "SEC Section 31（卖出）", value: "按现行费率转嫁", note: "买入不收" },
      { label: "FINRA TAF（卖出）", value: "按 FINRA 当期费率/股", note: "FINRA 规则手册列 $0.000166/股、上限 $8.30；券商费率页多列 $0.000195/股，以成交单为准" },
      { label: "人工经纪下单", value: "$25", note: "自动电话约 $5" },
      { label: "UCITS ETF", value: "$50/笔", note: "EEA 居民需通过 Schwab Global Investing specialist 电话下单" },
      { label: "股票融资利率", value: "约 10.075%–11.825%", note: "按借款金额分档" },
      { label: "其他", value: "ADR、外国证券另计", note: "特殊服务可能另收费" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: true },
    { key: "us-etf", label: "美国本土 ETF（VOO/VTI/SPY/QQQ）", supported: false, note: "爱尔兰居民只能持有/卖出现有仓位，不能首次买入或追加" },
    { key: "ucits", label: "UCITS ETF", supported: true, note: "仅经 Schwab Global specialist 电话下单，每笔 $50" },
    { key: "fractional", label: "碎股", supported: true, note: "功能范围取决于合资格账户；爱尔兰居民不能借此新增美国 ETF" },
    { key: "usd-balance", label: "可持有 USD 余额", supported: true },
    { key: "margin", label: "保证金融资", supported: true },
  ],
  pros: [
    "合资格美国上市股票和 ETF 网上交易佣金 $0",
    "无账户最低额、无维护费",
    "个人非专业客户通常可获实时行情",
    "对仍获准交易的美国股票，美元余额下显性佣金很低",
  ],
  cons: [
    "小额 EUR→USD 换汇约 1%，远不如 IBKR/Trading 212/Revolut",
    "碎股与产品资格受账户和居住国家限制",
    "人工经纪下单 $25",
    "官方承认从订单流付款/交易场所返佣获得收入",
    "爱尔兰居住地触发 PRIIPs：VOO、QQQ 等美国 ETF 不能新增或加仓",
    "UCITS ETF 需电话下单且每笔 $50，不适合小额月投",
  ],
  lastUpdated: "2026-08-09",
};
