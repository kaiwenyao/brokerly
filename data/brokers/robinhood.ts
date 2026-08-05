import type { Broker } from "@/types";

/** Robinhood 欧洲版（Stock Tokens）。费率核对：2026-08-05 */
export const robinhood: Broker = {
  slug: "robinhood",
  name: "Robinhood Europe",
  website: "https://robinhood.com/eu",
  regions: ["EU"],
  summary:
    "欧洲版。销售的是 Stock Token 衍生合约而非真实股票/ETF：不持有 AAPL、VOO 等基础证券，不可转户、无投票权；每单明确收 0.10% EUR/USD FX，买入卖出各收一次。",
  feeSummary: {
    usStock: "$0（Token）",
    usEtf: "—（仅 Token）",
    fx: "0.10%/次",
    custody: "Token 记录",
    inactivity: "$0",
  },
  fees: {
    usStockCommission: {
      amount: 0,
      currency: "EUR",
      per: "trade",
      note: "Stock Tokens 不收交易佣金；但产品是衍生品而非实际股票",
    },
    fxMarkupPercent: 0.1,
    inactivityFee: { amount: 0, currency: "EUR", note: "官方称除 0.10% FX 外无其他 Robinhood 费用" },
    extra: [
      { label: "FX（买入）", value: "0.10%", note: "每次买入自动 EUR/USD 转换" },
      { label: "FX（卖出）", value: "0.10%", note: "完整买卖一轮名义 FX 成本约 0.20%" },
      { label: "产品性质", value: "Stock Token 衍生合约", note: "与 Robinhood Europe 订立，不拥有基础证券" },
      { label: "转户/投票", value: "不支持", note: "不能转至其他证券账户或链上钱包，无传统股东投票权" },
      { label: "SEC/FINRA 费用", value: "不单列", note: "客户不直接购买美国证券" },
    ],
  },
  features: [
    { key: "us-stocks", label: "真实美股", supported: false, note: "仅 Stock Token 衍生品" },
    { key: "us-etf", label: "美国本土 ETF", supported: false, note: "即使 app 有相应 Token，也只是跟踪衍生合约" },
    { key: "ucits", label: "UCITS ETF", supported: false, note: "不提供传统 UCITS ETF 持仓" },
    { key: "fractional", label: "碎片敞口", supported: true, note: "Token 碎片最低约 €1" },
    { key: "usd-balance", label: "可提取 USD 余额", supported: false },
    { key: "margin", label: "保证金融资", supported: false, note: "按全额预付 Token 处理" },
  ],
  pros: [
    "显性费用简单：每单仅 0.10% FX",
    "最低约 €1 即可获得美国市场价格敞口",
    "适合不要求证券所有权的小额价格敞口",
  ],
  cons: [
    "Token 是衍生合约，不是 AAPL、VOO 等实际证券",
    "买入和卖出各收 0.10% FX，高频换手成本重复累积",
    "不可证券转户、无投票权、承担发行人风险",
    "0.10% 不能与传统券商股票佣金直接横向比较",
  ],
  lastUpdated: "2026-08-05",
};
