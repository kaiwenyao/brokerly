import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { EmptyState } from "@/components/empty-state";
import { Newsletter } from "@/components/newsletter";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Placeholder — about Brokerly and our methodology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <BreadcrumbNav items={[{ title: "About" }]} />
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">About Brokerly</h1>
        <p className="max-w-2xl text-muted-foreground">
          Placeholder — mission, team and editorial standards.
        </p>
      </header>

      <Section title="Our mission">
        <EmptyState title="Mission placeholder" />
      </Section>
      <Section title="Methodology">
        <EmptyState title="Methodology placeholder" description="How we collect and verify broker fee data." />
      </Section>
      <Section title="Contact">
        <EmptyState title="Contact placeholder" />
      </Section>
      <Section>
        <Newsletter />
      </Section>
    </div>
  );
}
