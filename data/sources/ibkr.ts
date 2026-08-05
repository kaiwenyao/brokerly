import type { Source } from "@/types";

export const ibkrSources: Source[] = [
  {
    brokerSlug: "ibkr",
    entity: "美国版",
    topic: "美股与 ETF 佣金（Lite / Pro）",
    url: "https://www.interactivebrokers.com/en/pricing/commissions-stocks.php",
    usedFor: "核实 Lite 零佣金、Pro Fixed、Pro Tiered，以及 SEC、FINRA TAF、CAT、清算费",
    quotedRate: "Lite $0；Fixed $0.005/股（最低 $1）；Tiered $0.0005–0.0035/股（最低 $0.35）",
    checkedAt: "2026-08-05",
  },
  {
    brokerSlug: "ibkr",
    entity: "美国版",
    topic: "现货外汇佣金",
    url: "https://www.interactivebrokers.com/en/pricing/commissions-spot-currencies.php",
    usedFor: "核实手动现货换汇的基点费率和最低每单 2 美元",
    quotedRate: "0.20 个基点起，最低 $2/单",
    checkedAt: "2026-08-05",
  },
  {
    brokerSlug: "ibkr",
    entity: "美国版",
    topic: "佣金与费用总入口",
    url: "https://www.interactivebrokers.com/en/pricing/commissions-home.php",
    usedFor: "IBKR 费用资料总索引",
    checkedAt: "2026-08-05",
  },
];
