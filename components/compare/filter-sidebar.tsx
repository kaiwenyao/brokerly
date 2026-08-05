"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

/**
 * Compare-page filter sidebar. Filters are declarative placeholders —
 * wire them to URL search params when real broker data lands.
 */
const FILTER_GROUPS: { title: string; options: string[] }[] = [
  { title: "Region", options: ["United States", "Europe", "Asia", "Global"] },
  { title: "Account type", options: ["Individual", "Joint", "ISA", "SIPP"] },
  { title: "Features", options: ["Fractional shares", "Options", "Margin", "API access"] },
];

export function FilterSidebar() {
  return (
    <aside className="space-y-6">
      <p className="text-sm font-medium">Filters</p>
      {FILTER_GROUPS.map((group, gi) => (
        <div key={group.title} className="space-y-3">
          {gi > 0 && <Separator />}
          <p className="text-sm text-muted-foreground">{group.title}</p>
          <div className="space-y-2">
            {group.options.map((option) => (
              <div key={option} className="flex items-center gap-2">
                <Checkbox id={`${group.title}-${option}`} />
                <Label
                  htmlFor={`${group.title}-${option}`}
                  className="text-sm font-normal"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
