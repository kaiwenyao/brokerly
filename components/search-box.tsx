"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

/** Controlled search input — parent owns filtering logic. */
export function SearchBox({
  placeholder = "Search…",
  value,
  onChange,
}: SearchBoxProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="pl-9"
        aria-label={placeholder}
      />
    </div>
  );
}
