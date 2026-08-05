import { GlossaryTip } from "./glossary-tip";
import { resolveGlossarySlug } from "@/lib/glossary-label";

interface TermLabelProps {
  label: string;
  /** Optional stable key (e.g. broker feature.key) for more reliable slug lookup. */
  termKey?: string;
}

/** Renders the label with a glossary tooltip when a matching term exists. */
export function TermLabel({ label, termKey }: TermLabelProps) {
  const slug = resolveGlossarySlug(label, termKey);
  if (!slug) return <>{label}</>;
  return <GlossaryTip slug={slug}>{label}</GlossaryTip>;
}
