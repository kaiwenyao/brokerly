import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

export interface Crumb {
  title: string;
  href?: string;
}

export function BreadcrumbNav({ items }: { items: Crumb[] }) {
  const jsonLdItems = [
    { name: "Home", path: "/" },
    ...items.map((item) => ({ name: item.title, path: item.href ?? "#" })),
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(jsonLdItems)} />
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <Fragment key={item.title}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast || !item.href ? (
                    <BreadcrumbPage>{item.title}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
