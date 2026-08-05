import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { buildMetadata } from "@/lib/seo";
import { getSourceGroups } from "@/data/sources";

export const metadata: Metadata = buildMetadata({
  title: "信息来源",
  description:
    "本站所有费率数据均来自券商官方定价页与监管机构公告。每条来源标注账户实体、核实用途与检查日期。",
  path: "/sources",
});

export default function SourcesPage() {
  const groups = getSourceGroups();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "信息来源" }]} />

      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">信息来源</h1>
        <p className="max-w-2xl text-muted-foreground">
          所有费率均核对自券商官方说明页与监管机构公告，链接于 2026 年 8 月 5
          日重新检查。欧洲平台的费率可能因账户所属国家或实体不同而变化，因此每条来源都标注了账户实体。
        </p>
      </header>

      <div className="mb-10 rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
        注意：Revolut、Trade Republic、Trading 212
        的费率随国家和账户实体变化，本站不会把不同国家页面的数字混用；每条数据都以对应国家/实体页面为准。
      </div>

      {groups.map((group) => (
        <Section
          key={group.name}
          id={group.brokerSlug ?? "regulators"}
          title={group.name}
        >
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="secondary">{group.entity}</Badge>
            {group.brokerSlug && (
              <Link
                href={`/brokers/${group.brokerSlug}`}
                className="text-sm text-primary hover:underline"
              >
                查看券商详情 →
              </Link>
            )}
          </div>
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-48">页面</TableHead>
                  <TableHead className="min-w-64">核实内容</TableHead>
                  <TableHead>引用费率</TableHead>
                  <TableHead>备注</TableHead>
                  <TableHead>链接</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.sources.map((source) => (
                  <TableRow key={source.url}>
                    <TableCell className="font-medium">
                      {source.topic}
                      {source.accountType && (
                        <span className="block text-xs font-normal text-muted-foreground">
                          {source.accountType}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {source.usedFor}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {source.quotedRate ?? "—"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {source.notes ?? "—"}
                    </TableCell>
                    <TableCell>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                        aria-label={`打开 ${source.topic}`}
                      >
                        <ExternalLink className="size-3.5" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Section>
      ))}
    </div>
  );
}
