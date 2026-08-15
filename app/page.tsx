import type { Metadata } from "next";
import { Hero } from "@/features/home/hero";
import { FeatureCards } from "@/features/home/feature-cards";
import { ComparisonEntry } from "@/features/home/comparison-entry";
import { LatestResearch } from "@/features/home/latest-research";
import { PopularBrokers } from "@/features/home/popular-brokers";
import { Faq } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Brokerly — Compare Global Broker Trading Fees",
  description:
    "Placeholder — compare US stock, ETF and FX trading costs across global brokers.",
  path: "/",
});

const HOME_FAQ: FaqItem[] = [
  {
    question: "已经有美元，买美股哪家最便宜？",
    answer:
      "Schwab 网上美股/ETF 交易佣金为 $0，且买入不产生 SEC/FINRA 卖方监管费，显性成本最低；Trading 212 在使用 USD 余额时同样为 $0。IBKR Pro 每笔最低 $0.35（Tiered）或 $1（Fixed）。",
  },
  {
    question: "欧元资金想买真正的 VOO，应该选哪家？",
    answer:
      "Trading 212 Invest：官方目录明确列有美国本土 VOO/VTI/SPY/QQQ，佣金 $0，FX 仅 0.15%，且可先换成 USD 余额长期交易，避免每笔重复换汇。",
  },
  {
    question: "Robinhood Europe 的 0.10% 费用是不是最低？",
    answer:
      "不能这样横向比较。Robinhood Europe 销售的是 Stock Token 衍生合约而非真实股票/ETF，买入和卖出各收一次 0.10% FX，且不可转户、无投票权。",
  },
  {
    question: "€1,000 换美元，哪条路径最划算？",
    answer:
      "工作日且在月度额度内，Revolut 无明确换汇手续费；IBKR 自动换汇约 0.03%（≈€0.30）次之；Schwab 小额换汇约 1%（≈€10）最贵。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero is full-bleed so the immersive gradient reaches the viewport edges. */}
      <Hero />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FeatureCards />
        <ComparisonEntry />
        <LatestResearch />
        <PopularBrokers />
        <Section title="Frequently asked questions">
          <Faq items={HOME_FAQ} />
        </Section>
        <Section>
          <Newsletter />
        </Section>
      </div>
    </>
  );
}
