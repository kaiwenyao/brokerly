import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function FeatureCard({ icon: Icon, title, description, href }: FeatureCardProps) {
  return (
    <Card className="h-full transition-colors hover:border-foreground/20">
      <CardHeader>
        <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted">
          <Icon className="size-5" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Explore <ArrowRight className="size-3.5" />
        </Link>
      </CardContent>
    </Card>
  );
}
