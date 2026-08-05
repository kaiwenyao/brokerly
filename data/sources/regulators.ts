import type { Source } from "@/types";

/** 非券商来源：监管费与汇率基准 */
export const regulatorSources: Source[] = [
  {
    entity: "美国 SEC",
    topic: "Section 31 当前费率通知",
    url: "https://www.sec.gov/rules-regulations/fee-rate-advisories/2026-2",
    usedFor: "核实 SEC Section 31 卖出监管费的现行法定费率",
    quotedRate: "$0.0000206 × 卖出金额（每百万美元 $20.60）",
    checkedAt: "2026-08-05",
  },
  {
    entity: "美国 FINRA",
    topic: "Trading Activity Fee 规则",
    url: "https://www.finra.org/rules-guidance/rulebooks/corporate-organization/section-1-member-regulatory-fees",
    usedFor: "核实 FINRA TAF 的费率与上限",
    quotedRate: "$0.000195/股，每笔最高 $9.79",
    checkedAt: "2026-08-05",
  },
  {
    entity: "欧洲央行",
    topic: "EUR 参考汇率",
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
    usedFor: "提供 EUR/USD 基准汇率（2026-08-05：€1 = $1.1554）",
    notes: "ECB 明确说明参考汇率用于信息和估值，并非可保证成交的交易汇率",
    checkedAt: "2026-08-05",
  },
];
