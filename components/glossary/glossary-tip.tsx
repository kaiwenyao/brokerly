"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getTermBySlug } from "@/data/glossary";

interface GlossaryTipProps {
  /** Glossary term slug, e.g. "fx-markup" */
  slug: string;
  children: React.ReactNode;
}

/**
 * Hover/tap a table label to see the term's definition inline,
 * with a link to the full glossary entry.
 */
export function GlossaryTip({ slug, children }: GlossaryTipProps) {
  const term = getTermBySlug(slug);

  if (!term) return <>{children}</>;

  return (
    <HoverCard openDelay={150}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className="cursor-help underline decoration-dotted decoration-muted-foreground/50 underline-offset-4"
        >
          {children}
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 space-y-2" align="start">
        <div>
          <p className="font-medium">
            {term.name}
            {term.abbreviation && (
              <span className="ml-1 text-sm text-muted-foreground">
                ({term.abbreviation})
              </span>
            )}
          </p>
          <p className="text-xs text-muted-foreground">{term.chineseName}</p>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{term.definition}</p>
        {term.whenCharged !== "非费用，不适用" && (
          <p className="text-xs text-muted-foreground">收取时机：{term.whenCharged}</p>
        )}
        <Link
          href={`/glossary/${term.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Learn more <ArrowRight className="size-3.5" />
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}
