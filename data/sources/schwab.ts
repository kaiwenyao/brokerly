import type { Source } from "@/types";

export const schwabSources: Source[] = [
  {
    brokerSlug: "schwab",
    entity: "美国版",
    topic: "股票、ETF 和账户费用总页",
    url: "https://www.schwab.com/pricing",
    usedFor: "核实美国上市股票和 ETF 的网上交易佣金",
    quotedRate: "网上交易 $0",
    checkedAt: "2026-08-09",
  },
  {
    brokerSlug: "schwab",
    entity: "美国版",
    topic: "完整个人投资者价格指南",
    url: "https://www.schwab.com/legal/schwab-pricing-guide-for-individual-investors",
    usedFor: "外币转换、人工经纪、转账和其他附加服务费",
    notes: "当前页面将部分外币转换描述为最高可达本金的 3%，实际换汇路径必须结合具体账户和交易方式判断",
    checkedAt: "2026-08-09",
  },
  {
    brokerSlug: "schwab",
    entity: "国际版",
    topic: "Schwab International 价格页",
    url: "https://international.schwab.com/pricing",
    usedFor: "核实国际账户的网上美股佣金及 FINRA 等监管费用",
    checkedAt: "2026-08-09",
  },
  {
    brokerSlug: "schwab",
    entity: "美国券商 / EEA 居民",
    topic: "PRIIPs 与美国注册 ETF 权限",
    url: "https://international.schwab.com/investment-products/etf-trading/how-do-etfs-work",
    usedFor: "核实 EEA 居民只能持有或卖出现有美国 ETP、不能首次买入或追加，以及 UCITS 电话单费用",
    quotedRate: "美国 ETP 不可新增；UCITS ETF 电话下单 $50/笔",
    checkedAt: "2026-08-09",
  },
  {
    brokerSlug: "schwab",
    entity: "美国版 / 国际账户",
    topic: "Automatic Investment Plan",
    url: "https://www.schwab.com/legal/financial-and-other-relationships",
    usedFor: "确认公开 AIP 说明针对共同基金，未确认自选 ETF 自动定投",
    checkedAt: "2026-08-09",
  },
];
