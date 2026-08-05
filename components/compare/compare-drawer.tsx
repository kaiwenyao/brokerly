"use client";

import { GitCompareArrows, X } from "lucide-react";
import { useCompareSelection } from "@/hooks/use-compare-selection";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

/**
 * Floating "compare tray": collects brokers the user ticks, opens a sheet
 * with a side-by-side view. Content is placeholder until data lands.
 */
export function CompareDrawer() {
  const { selected, clear, max } = useCompareSelection();

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="gap-2 shadow-lg">
            <GitCompareArrows className="size-4" />
            Compare
            <Badge variant="secondary">{selected.length}/{max}</Badge>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[60vh]">
          <SheetHeader className="flex-row items-center justify-between">
            <SheetTitle>Compare brokers</SheetTitle>
            <Button variant="ghost" size="sm" onClick={clear}>
              <X className="mr-1 size-4" /> Clear
            </Button>
          </SheetHeader>
          <div className="p-4 text-sm text-muted-foreground">
            {selected.length === 0
              ? "Select brokers from the table to compare them side by side."
              : `Selected: ${selected.join(", ")} — side-by-side table renders here once data is available.`}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
