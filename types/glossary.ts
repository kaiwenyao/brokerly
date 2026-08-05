/** A researched glossary term. Every entry cites official sources. */
export interface GlossaryTerm {
  slug: string;
  /** Common English name, e.g. "Section 31 Fee" */
  name: string;
  fullName?: string | null;
  abbreviation?: string | null;
  chineseName: string;
  category: GlossaryCategory;
  /** One-sentence definition (Chinese) */
  definition: string;
  /** Detailed explanation (Chinese, a few sentences) */
  explanation: string;
  /** Why this fee/concept exists */
  whyExists: string;
  /** When it is charged, or "非费用，不适用" */
  whenCharged: string;
  /** Who collects it, or "不适用" */
  chargedBy: string;
  /** Broker slugs it applies to; ["all"] = every compared broker */
  platforms: string[];
  usOnly: boolean;
  appliesToEurope: boolean;
  /** null = not a fee / not transaction-bound */
  chargedOnBuy: boolean | null;
  chargedOnSell: boolean | null;
  calculation?: string | null;
  formula?: string | null;
  /** Concrete numeric example */
  example?: string | null;
  sources: GlossarySource[];
  /** ISO 8601 check date */
  updatedAt: string;
}

export interface GlossarySource {
  title: string;
  url: string;
}

export type GlossaryCategory =
  | "费用与佣金"
  | "外汇"
  | "美国监管与清算"
  | "交易执行"
  | "证券与结算"
  | "基金与 ETF"
  | "保证金与融资融券"
  | "券商账户与产品"
  | "Token 与数字资产";

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "费用与佣金",
  "外汇",
  "美国监管与清算",
  "交易执行",
  "证券与结算",
  "基金与 ETF",
  "保证金与融资融券",
  "券商账户与产品",
  "Token 与数字资产",
];
