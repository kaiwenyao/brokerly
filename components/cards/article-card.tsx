import Image from "next/image";
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
    <Card className="h-full overflow-hidden transition-colors hover:border-foreground/20">
      {article.cover ? (
        <div className="relative aspect-[16/9] bg-muted">
          <Image
            src={article.cover}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-muted" aria-hidden />
      )}
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
