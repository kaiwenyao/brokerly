import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { getAllTerms, getGlossaryGroups } from "@/data/glossary";

export const metadata: Metadata = buildMetadata({
  title: "金融术语库",
  description:
    "券商交易、ETF、税务和公司财报中的专业术语：佣金、换汇、Consensus、Guidance、EPS、Beat/Miss 等，每个词条均引用官方来源。",
  path: "/glossary",
});

export default function GlossaryPage() {
  const groups = getGlossaryGroups();
  const total = getAllTerms().length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "Glossary" }]} />

      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">金融术语库</h1>
        <p className="max-w-2xl text-muted-foreground">
          共 {total} 个词条。每个术语的定义均以券商、公司、数据商、交易所或监管机构的官方资料为准，并标注来源与核对日期。
        </p>
      </header>

      <nav className="mb-10 flex flex-wrap gap-2" aria-label="术语分类">
        {groups.map((group) => (
          <Badge key={group.category} variant="outline" asChild>
            <a href={`#${encodeURIComponent(group.category)}`}>
              {group.category}（{group.terms.length}）
            </a>
          </Badge>
        ))}
      </nav>

      {groups.map((group) => (
        <Section
          key={group.category}
          id={group.category}
          title={group.category}
        >
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.terms.map((term) => (
              <li key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="block h-full rounded-lg border p-4 transition-colors hover:border-foreground/20"
                >
                  <span className="font-medium">
                    {term.name}
                    {term.abbreviation && (
                      <span className="ml-1.5 text-sm text-muted-foreground">
                        ({term.abbreviation})
                      </span>
                    )}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {term.chineseName}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground line-clamp-2">
                    {term.definition}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </div>
  );
}
