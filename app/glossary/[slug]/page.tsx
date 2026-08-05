import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { getBrokerBySlug } from "@/data/brokers";
import { getAllTerms, getTermBySlug, getTermSlugs } from "@/data/glossary";
import type { GlossaryTerm } from "@/types";

interface TermPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getTermSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TermPageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};
  return buildMetadata({
    title: `${term.name}（${term.chineseName}）是什么？`,
    description: term.definition,
    path: `/glossary/${slug}`,
  });
}

function definedTermJsonLd(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.name,
    alternateName: [term.chineseName, term.abbreviation].filter(Boolean),
    description: term.definition,
    inDefinedTermSet: "https://brokerly.example.com/glossary",
  };
}

function boolLabel(value: boolean | null): string {
  if (value === null) return "不适用";
  return value ? "是" : "否";
}

export default async function TermPage({ params }: TermPageProps) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const all = getAllTerms();
  const related = all
    .filter((t) => t.slug !== term.slug && t.category === term.category)
    .slice(0, 6);

  const platformNames =
    term.platforms.includes("all") || term.platforms.includes("all-us")
      ? [term.platforms.includes("all-us") ? "所有提供美国证券的平台" : "全部平台"]
      : term.platforms.map((p) => getBrokerBySlug(p)?.name ?? p);

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "什么时候收取", value: term.whenCharged },
    { label: "谁收取", value: term.chargedBy },
    { label: "适用平台", value: platformNames.join("、") },
    { label: "只适用于美国", value: boolLabel(term.usOnly) },
    { label: "适用于欧洲", value: boolLabel(term.appliesToEurope) },
    { label: "买入收费", value: boolLabel(term.chargedOnBuy) },
    { label: "卖出收费", value: boolLabel(term.chargedOnSell) },
  ];
  if (term.calculation) facts.push({ label: "如何计算", value: term.calculation });
  if (term.formula) facts.push({ label: "计算公式", value: term.formula });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <JsonLd data={definedTermJsonLd(term)} />
      <BreadcrumbNav
        items={[
          { title: "Glossary", href: "/glossary" },
          { title: term.name },
        ]}
      />

      <header className="mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{term.category}</Badge>
          <span className="text-xs text-muted-foreground">更新：{term.updatedAt}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{term.name}</h1>
        <div className="space-y-1 text-muted-foreground">
          {term.fullName && <p className="text-sm">英文全称：{term.fullName}</p>}
          {term.abbreviation && <p className="text-sm">英文缩写：{term.abbreviation}</p>}
          <p className="text-sm">中文名称：{term.chineseName}</p>
        </div>
        <p className="text-lg leading-8">{term.definition}</p>
      </header>

      <Separator className="my-8" />

      <section className="space-y-8">
        <div>
          <h2 className="mb-3 text-xl font-semibold">详细解释</h2>
          <p className="leading-7 text-foreground/90">{term.explanation}</p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold">为什么会产生</h2>
          <p className="leading-7 text-foreground/90">{term.whyExists}</p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold">收费方式</h2>
          <div className="rounded-lg border">
            <Table>
              <TableBody>
                {facts.map((fact) => (
                  <TableRow key={fact.label}>
                    <TableCell className="w-36 font-medium text-muted-foreground">
                      {fact.label}
                    </TableCell>
                    <TableCell>{fact.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {term.example && (
          <div>
            <h2 className="mb-3 text-xl font-semibold">真实交易例子</h2>
            <p className="rounded-lg border bg-muted/40 p-4 leading-7">{term.example}</p>
          </div>
        )}

        <div>
          <h2 className="mb-3 text-xl font-semibold">官方来源</h2>
          <ul className="space-y-2">
            {term.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                >
                  <ExternalLink className="size-3.5" />
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="mb-3 text-xl font-semibold">相关术语</h2>
            <div className="flex flex-wrap gap-2">
              {related.map((t) => (
                <Badge key={t.slug} variant="outline" asChild>
                  <Link href={`/glossary/${t.slug}`}>{t.name}</Link>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
