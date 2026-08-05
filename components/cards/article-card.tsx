import Link from "next/link";
import type { Article } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="h-full transition-colors hover:border-foreground/20">
      <div className="aspect-[16/9] rounded-t-xl bg-muted" aria-hidden />
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{article.category}</Badge>
          {article.readingMinutes && (
            <span className="text-xs text-muted-foreground">
              {article.readingMinutes} min read
            </span>
          )}
        </div>
        <CardTitle className="text-base leading-snug">
          <Link href={`/research/${article.slug}`} className="hover:underline">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {article.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          {article.author.name} · {article.publishedAt}
        </p>
      </CardContent>
    </Card>
  );
}
