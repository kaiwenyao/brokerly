import type { FaqItem } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd } from "@/lib/seo";
import { EmptyState } from "@/components/empty-state";

interface FaqProps {
  items: FaqItem[];
  /** Set false on pages where FAQ schema is emitted elsewhere */
  withJsonLd?: boolean;
}

export function Faq({ items, withJsonLd = true }: FaqProps) {
  if (items.length === 0) {
    return <EmptyState title="No FAQ yet" description="FAQ entries will be added later." />;
  }

  return (
    <>
      {withJsonLd && <JsonLd data={faqJsonLd(items)} />}
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
