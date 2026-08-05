"use client";

import { useCallback, useState } from "react";

const MAX_COMPARE = 4;

/** Client state for the broker compare drawer (selected broker slugs). */
export function useCompareSelection() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = useCallback((slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, slug];
    });
  }, []);

  const clear = useCallback(() => setSelected([]), []);

  return { selected, toggle, clear, max: MAX_COMPARE };
}
