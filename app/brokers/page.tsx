import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ComparisonTable } from "@/components/compare/comparison-table";
import { FilterSidebar } from "@/components/compare/filter-sidebar";
import { SortSelect } from "@/components/compare/sort-select";
import { CompareDrawer } from "@/components/compare/compare-drawer";
import { SearchBox } from "@/components/search-box";
import { buildMetadata } from "@/lib/seo";
import { getAllBrokers } from "@/data/brokers";

export const metadata: Metadata = buildMetadata({
  title: "Compare Brokers",
  description: "Placeholder — side-by-side broker fee comparison.",
  path: "/brokers",
});

export default function BrokersPage() {
  const brokers = getAllBrokers();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "Compare Brokers" }]} />

      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Compare Brokers</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — filter, sort and compare broker trading fees side by side.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <FilterSidebar />

        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="sm:w-72">
              <SearchBox placeholder="Search brokers…" />
            </div>
            <SortSelect />
          </div>

          <ComparisonTable brokers={brokers} />
        </div>
      </div>

      <CompareDrawer />
    </div>
  );
}
