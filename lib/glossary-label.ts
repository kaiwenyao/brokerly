import { getAllTerms } from "@/data/glossary";

/** Stable broker feature keys → glossary slugs. */
export const FEATURE_KEY_TO_SLUG: Record<string, string> = {
  "us-stocks": "beneficial-ownership",
  "us-etf": "us-listed-etf",
  ucits: "ucits-etf",
  fractional: "fractional-shares",
  "usd-balance": "multi-currency-account",
  margin: "margin",
};

/**
 * UI label aliases that don't exact-match glossary name/chineseName.
 * Exact name / chineseName / abbreviation matching is handled separately.
 */
export const LABEL_TO_SLUG: Record<string, string> = {
  // Compare table + stock cost columns
  美股佣金: "commission",
  "ETF 佣金": "etf",
  "FX 换汇": "fx-markup",
  托管费: "custody-fee",
  账户闲置费: "inactivity-fee",
  佣金: "commission",
  "FX / 备注": "fx",

  // Broker fee rows (wording differs from compare table)
  "美国 ETF 佣金": "etf",
  "FX 换汇加点": "fx-markup",

  // FeeBadge short labels
  美股: "commission",
  ETF: "etf",
  FX: "fx",

  // Compare-table feeSummary values (Robinhood Token caveats)
  "$0（Token）": "stock-token",
  "—（仅 Token）": "stock-token",
  "Token 记录": "stock-token",
  Token: "stock-token",

  // Feature labels (also covered by FEATURE_KEY_TO_SLUG)
  真实美股: "beneficial-ownership",
  "美国本土 ETF": "us-listed-etf",
  "UCITS ETF": "ucits-etf",
  碎股: "fractional-shares",
  碎片敞口: "fractional-shares",
  保证金融资: "margin",
  "可持有 USD 余额": "multi-currency-account",
  "可提取 USD 余额": "multi-currency-account",

  // fees.extra rows
  "FX（买入）": "fx-markup",
  "FX（卖出）": "fx-markup",
  "EUR→USD 换汇": "fx-conversion",
  换汇: "fx-conversion",
  工作日换汇: "fx-conversion",
  周末换汇: "fx-conversion",
  小额换汇档位: "fx-markup",
  自动换汇: "ibkr-fx-conversion",
  "手动现货 FX": "ibkr-fx-conversion",
  "SEC Section 31（卖出）": "section-31-fee",
  "FINRA TAF（卖出）": "trading-activity-fee",
  "SEC/FINRA 费用": "sec-fee",
  卖出监管费: "sec-fee",
  碎股订单: "fractional-shares",
  "ADR 转嫁费": "adr",
  股票融资利率: "margin-interest",
  "Pro Fixed 佣金": "fixed-pricing",
  "Pro Tiered 佣金": "tiered-pricing",
  "清算 / CAT（Tiered）": "cat-fee",
  "交易所费用与返佣（Tiered）": "exchange-fee",
  市场数据: "market-data-fee",
  产品性质: "stock-token",
};

/** Strip trailing parenthetical notes: "美国本土 ETF（VOO…）" → "美国本土 ETF". */
function stripParenthetical(label: string): string {
  return label
    .replace(/（[^）]*）\s*$/u, "")
    .replace(/\([^)]*\)\s*$/u, "")
    .trim();
}

function findTermByExactLabel(label: string): string | undefined {
  const normalized = label.trim().toLowerCase();
  if (!normalized) return undefined;

  for (const term of getAllTerms()) {
    if (term.name.toLowerCase() === normalized) return term.slug;
    if (term.chineseName.toLowerCase() === normalized) return term.slug;
    if (term.abbreviation?.toLowerCase() === normalized) return term.slug;
  }
  return undefined;
}

/**
 * Resolve a UI label (and optional feature key) to a glossary slug.
 * Order: feature key → exact alias map → stripped alias → glossary name match.
 */
export function resolveGlossarySlug(
  label: string,
  termKey?: string,
): string | undefined {
  if (termKey && FEATURE_KEY_TO_SLUG[termKey]) {
    return FEATURE_KEY_TO_SLUG[termKey];
  }

  if (LABEL_TO_SLUG[label]) return LABEL_TO_SLUG[label];

  const base = stripParenthetical(label);
  if (base !== label && LABEL_TO_SLUG[base]) return LABEL_TO_SLUG[base];

  return findTermByExactLabel(label) ?? findTermByExactLabel(base);
}
