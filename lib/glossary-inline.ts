/**
 * Inline glossary linking for article prose.
 *
 * Only the jargon listed here is auto-linked — matching every glossary term
 * would bury readable text under dotted underlines. Callers annotate the first
 * occurrence per section (see components/markdown.tsx).
 */

/** Matched literal → glossary slug. Longest match wins. */
export const INLINE_TERM_TO_SLUG: Record<string, string> = {
  // 税种与税率
  CGT: "capital-gains-tax",
  资本利得税: "capital-gains-tax",
  年度免税额: "cgt-annual-exemption",
  基金退出税: "exit-tax",
  退出税: "exit-tax",
  视同处置: "deemed-disposal",
  USC: "usc",
  PRSI: "prsi",
  DWT: "dwt",
  股息预扣税: "dwt",
  DIRT: "dirt",
  标准税率带: "standard-rate-band",
  四周规则: "four-week-rule",
  FIFO: "fifo",
  先进先出: "fifo",
  交易标志: "badges-of-trade",
  "badges of trade": "badges-of-trade",

  // 申报与合规
  税务居民: "tax-residence",
  住所: "domicile",
  domicile: "domicile",
  汇入制: "remittance-basis",
  "remittance basis": "remittance-basis",
  应自行评税人员: "chargeable-person",
  "chargeable person": "chargeable-person",
  "Form 11": "form-11",
  "Form 12": "form-12",
  "Form CG1": "form-cg1",
  CG1: "form-cg1",
  初步税: "preliminary-tax",
  "preliminary tax": "preliminary-tax",
  PAYE: "paye",
  CRS: "crs",
  PPSN: "ppsn",
  ROS: "ros",
  "W-8BEN": "w-8ben",

  // 已有词条
  UCITS: "ucits-etf",
  ISIN: "isin",
  CFD: "cfd-account",
  TER: "expense-ratio",
  "SEC Section 31": "section-31-fee",
  "Section 31": "section-31-fee",
  SEC: "sec-fee",
  "FINRA TAF": "trading-activity-fee",
  FINRA: "finra",
  TAF: "trading-activity-fee",
  PFOF: "payment-for-order-flow",
  订单流付款: "payment-for-order-flow",
  受益所有人: "beneficial-ownership",
  碎股: "fractional-shares",
  KIID: "kiid",
  KID: "kid",
  PRIIPs: "priips",
  ADR: "adr",
  NAV: "nav",
  "T+1": "t-plus-1",
  "T+2": "t-plus-2",

  // 本轮新增词条
  ETP: "etp",
  ECB: "ecb",
  NBBO: "nbbo",
  TIN: "tin",
  TR1: "tr1",
  myAccount: "myaccount",
  "Pay and File": "pay-and-file",
  自行评税: "self-assessment",
  "self-assessment": "self-assessment",
  预扣税: "withholding-tax",
  亏损收割: "loss-harvesting",
  EEA: "eea",
};

export interface TermSegment {
  text: string;
  /** Present when this segment matched a glossary term. */
  slug?: string;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Latin terms need boundaries so "ROS" doesn't match inside "CROSS". */
const LATIN_ONLY = /^[\x20-\x7E]+$/;

function toPattern(term: string): string {
  const escaped = escapeRegExp(term);
  return LATIN_ONLY.test(term)
    ? `(?<![A-Za-z0-9])${escaped}(?![A-Za-z0-9])`
    : escaped;
}

function buildPattern(): RegExp {
  const source = Object.keys(INLINE_TERM_TO_SLUG)
    .sort((a, b) => b.length - a.length)
    .map(toPattern)
    .join("|");
  return new RegExp(source, "gi");
}

const TERM_PATTERN = buildPattern();

/** Case-insensitive lookup so "Domicile" and "domicile" both resolve. */
const SLUG_BY_LOWER_TERM = new Map(
  Object.entries(INLINE_TERM_TO_SLUG).map(([term, slug]) => [
    term.toLowerCase(),
    slug,
  ]),
);

/**
 * Split text into plain and term segments. Every occurrence is reported;
 * the caller decides which ones to actually link.
 */
export function splitByGlossaryTerms(text: string): TermSegment[] {
  const segments: TermSegment[] = [];
  let cursor = 0;

  for (const match of text.matchAll(TERM_PATTERN)) {
    const start = match.index;
    if (start === undefined) continue;

    const slug = SLUG_BY_LOWER_TERM.get(match[0].toLowerCase());
    if (!slug) continue;

    if (start > cursor) segments.push({ text: text.slice(cursor, start) });
    segments.push({ text: match[0], slug });
    cursor = start + match[0].length;
  }

  if (segments.length === 0) return [{ text }];
  if (cursor < text.length) segments.push({ text: text.slice(cursor) });
  return segments;
}
