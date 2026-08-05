import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  /** Base path; page is appended as ?page=N */
  basePath: string;
}

export function Pagination({ page, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1">
      <Button variant="ghost" size="icon" asChild disabled={page <= 1}>
        <Link href={`${basePath}?page=${page - 1}`} aria-label="Previous page">
          <ChevronLeft className="size-4" />
        </Link>
      </Button>
      {pages.map((p) => (
        <Button
          key={p}
          variant={p === page ? "default" : "ghost"}
          size="icon"
          asChild
        >
          <Link
            href={`${basePath}?page=${p}`}
            aria-current={p === page ? "page" : undefined}
            className={cn(p === page && "pointer-events-none")}
          >
            {p}
          </Link>
        </Button>
      ))}
      <Button variant="ghost" size="icon" asChild disabled={page >= totalPages}>
        <Link href={`${basePath}?page=${page + 1}`} aria-label="Next page">
          <ChevronRight className="size-4" />
        </Link>
      </Button>
    </nav>
  );
}
