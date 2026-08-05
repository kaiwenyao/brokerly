import type { Source } from "@/types";

export const schwabSources: Source[] = [
  {
    brokerSlug: "schwab",
    entity: "美国版",
    topic: "股票、ETF 和账户费用总页",
    url: "https://www.schwab.com/pricing",
    usedFor: "核实美国上市股票和 ETF 的网上交易佣金",
    quotedRate: "网上交易 $0",
    checkedAt: "2026-08-05",
  },
  {
    brokerSlug: "schwab",
    entity: "美国版",
    topic: "完整个人投资者价格指南",
    url: "https://www.schwab.com/legal/schwab-pricing-guide-for-individual-investors",
    usedFor: "外币转换、人工经纪、转账和其他附加服务费",
    notes: "当前页面将部分外币转换描述为最高可达本金的 3%，实际换汇路径必须结合具体账户和交易方式判断",
    checkedAt: "2026-08-05",
  },
  {
    brokerSlug: "schwab",
    entity: "国际版",
    topic: "Schwab International 价格页",
    url: "https://international.schwab.com/pricing",
    usedFor: "核实国际账户的网上美股佣金及 FINRA 等监管费用",
    checkedAt: "2026-08-05",
  },
];
