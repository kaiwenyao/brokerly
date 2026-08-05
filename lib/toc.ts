import type { TocItem } from "@/types";

/**
 * Extract TOC entries from markdown ## / ### headings.
 * Ids are positional (`h-0`, `h-1`, …) and must match the heading
 * renderer in components/markdown.tsx, which counts in render order.
 */
export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  let index = 0;
  for (const line of markdown.split("\n")) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    items.push({
      id: `h-${index++}`,
      title: match[2].replace(/\*\*/g, "").trim(),
      depth: match[1].length as 2 | 3,
    });
  }
  return items;
}
