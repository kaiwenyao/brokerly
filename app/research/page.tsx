import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { ArticleCard } from "@/components/cards/article-card";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/pagination";
import { buildMetadata } from "@/lib/seo";
import { getAllArticles } from "@/data/research";

export const metadata: Metadata = buildMetadata({
  title: "Research",
  description: "Placeholder — broker fee research, guides and analysis.",
  path: "/research",
});

const PAGE_SIZE = 9;

interface ResearchPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function ResearchPage({ searchParams }: ResearchPageProps) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam ?? "1") || 1);

  const articles = getAllArticles();
  const categories = ["All", ...new Set(articles.map((a) => a.category))];
  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const visible = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "Research" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — in-depth analysis of broker fees and trading costs.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer"
          >
            {category}
          </Badge>
        ))}
      </div>

      {visible.length === 0 ? (
        <EmptyState
          title="No articles yet"
          description="Research articles will appear here once published."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      <div className="mt-10">
        <Pagination page={page} totalPages={totalPages} basePath="/research" />
      </div>
    </div>
  );
}
