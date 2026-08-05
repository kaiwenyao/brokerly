import type { Author } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex items-start gap-4 rounded-lg border p-4">
      <Avatar className="size-12">
        {author.avatar && <AvatarImage src={author.avatar} alt={author.name} />}
        <AvatarFallback>
          {author.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <p className="font-medium">{author.name}</p>
        {author.role && (
          <p className="text-sm text-muted-foreground">{author.role}</p>
        )}
        <p className="text-sm text-muted-foreground">
          {author.bio ?? "Placeholder author bio."}
        </p>
      </div>
    </div>
  );
}
