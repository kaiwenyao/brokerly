import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Article, TocItem } from "@/types";
import { TableOfContents } from "@/components/toc";
import { AuthorCard } from "@/components/author-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ArticleLayoutProps {
  article: Article;
  toc: TocItem[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
  children: React.ReactNode;
}

/** Research article shell: header, sticky TOC, body, author, prev/next. */
export function ArticleLayout({ article, toc, prev, next, children }: ArticleLayoutProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
      <article className="min-w-0">
        <header className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{article.category}</Badge>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {article.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {article.author.name} · {article.publishedAt}
            {article.readingMinutes && ` · ${article.readingMinutes} min read`}
          </p>
        </header>

        <div className="prose-neutral dark:prose-invert max-w-none">
          {children}
        </div>

        <Separator className="my-10" />
        <AuthorCard author={article.author} />

        <nav className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="More articles">
          {prev ? (
            <Link
              href={`/research/${prev.slug}`}
              className="group flex items-center gap-2 rounded-lg border p-4 transition-colors hover:border-foreground/20"
            >
              <ChevronLeft className="size-4 shrink-0" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Previous</span>
                <span className="block truncate text-sm font-medium group-hover:underline">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/research/${next.slug}`}
              className="group flex items-center justify-end gap-2 rounded-lg border p-4 text-right transition-colors hover:border-foreground/20"
            >
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Next</span>
                <span className="block truncate text-sm font-medium group-hover:underline">
                  {next.title}
                </span>
              </span>
              <ChevronRight className="size-4 shrink-0" />
            </Link>
          )}
        </nav>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <TableOfContents items={toc} />
        </div>
      </aside>
    </div>
  );
}
