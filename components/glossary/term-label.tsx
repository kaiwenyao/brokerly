import { GlossaryTip } from "./glossary-tip";

/** Table labels that have a glossary entry — auto-wrapped with a tooltip. */
const LABEL_TO_SLUG: Record<string, string> = {
  美股佣金: "commission",
  "ETF 佣金": "etf",
  "FX 换汇": "fx-markup",
  托管费: "custody-fee",
  账户闲置费: "inactivity-fee",
  佣金: "commission",
  "FX / 备注": "fx",
};

/** Renders the label with a glossary tooltip when a matching term exists. */
export function TermLabel({ label }: { label: string }) {
  const slug = LABEL_TO_SLUG[label];
  if (!slug) return <>{label}</>;
  return <GlossaryTip slug={slug}>{label}</GlossaryTip>;
}
