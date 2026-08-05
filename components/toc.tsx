"use client";

import type { TocItem } from "@/types";
import { cn } from "@/lib/utils";

interface TocProps {
  items: TocItem[];
}

/** Article table of contents — sticky on desktop. */
export function TableOfContents({ items }: TocProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="space-y-2">
      <p className="text-sm font-medium">On this page</p>
      <ul className="space-y-1.5 border-l">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block border-l-2 border-transparent py-0.5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground",
                item.depth === 3 ? "pl-6" : "pl-3",
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
