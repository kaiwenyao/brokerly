import { Section } from "@/components/section";
import { ArticleCard } from "@/components/cards/article-card";
import { EmptyState } from "@/components/empty-state";
import { getAllArticles } from "@/data/research";

export function LatestResearch() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <Section
      title="Latest research"
      description="Placeholder — newest analysis and guides."
    >
      {articles.length === 0 ? (
        <EmptyState
          title="No research yet"
          description="Research articles will appear here once published."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </Section>
  );
}
