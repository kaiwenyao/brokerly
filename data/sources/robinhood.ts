import type { Source } from "@/types";

export const robinhoodSources: Source[] = [
  {
    brokerSlug: "robinhood",
    entity: "欧洲版",
    topic: "Stock Tokens 的性质和费用",
    url: "https://robinhood.com/eu/en/support/articles/about-stock-tokens/",
    usedFor: "核实用户购买的并非实际股票或 ETF，而是追踪其价格的衍生合约；每次交易自动换汇并收取 0.10% FX 费",
    quotedRate: "0.10% FX/次",
    notes: "最关键的来源：Token 是衍生合约，不是证券",
    checkedAt: "2026-08-05",
  },
  {
    brokerSlug: "robinhood",
    entity: "欧洲版",
    topic: "Stock Tokens FAQ",
    url: "https://robinhood.com/eu/en/support/articles/stock-tokens-faq/",
    usedFor: "核实没有基础证券所有权、没有传统股东投票权、不能转移到其他平台",
    checkedAt: "2026-08-05",
  },
  {
    brokerSlug: "robinhood",
    entity: "欧洲版",
    topic: "买卖 Stock Tokens 及成本计算",
    url: "https://robinhood.com/eu/en/support/articles/buy-and-sell-stock-tokens/",
    usedFor: "核实买入和卖出时的 0.10% FX 费用及订单预估成本",
    checkedAt: "2026-08-05",
  },
  {
    brokerSlug: "robinhood",
    entity: "欧洲版",
    topic: "Stock Token 产品目录入口",
    url: "https://robinhood.com/eu/en/support/stock-tokens/",
    usedFor: "Stock Token 支持文档总入口",
    checkedAt: "2026-08-05",
  },
];
