"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SORT_OPTIONS = [
  { value: "rating", label: "Highest rated" },
  { value: "stockFee", label: "Lowest stock fee" },
  { value: "etfFee", label: "Lowest ETF fee" },
  { value: "fx", label: "Lowest FX markup" },
  { value: "name", label: "Name (A–Z)" },
];

export function SortSelect() {
  return (
    <Select defaultValue="rating">
      <SelectTrigger className="w-44" aria-label="Sort brokers">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {SORT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
