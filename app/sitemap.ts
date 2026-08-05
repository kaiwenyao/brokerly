import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getBrokerSlugs } from "@/data/brokers";
import { getInstrumentSymbols } from "@/data/stocks";
import { getArticleSlugs } from "@/data/research";
import { getTermSlugs } from "@/data/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/brokers",
    "/stocks",
    "/etf",
    "/fx",
    "/research",
    "/sources",
    "/glossary",
    "/reviews",
    "/about",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const brokerRoutes = getBrokerSlugs().flatMap((slug) => [
    { url: `${siteConfig.url}/brokers/${slug}` },
    { url: `${siteConfig.url}/reviews/${slug}` },
  ]);

  const stockRoutes = getInstrumentSymbols().map((symbol) => ({
    url: `${siteConfig.url}/stocks/${symbol.toLowerCase()}`,
  }));

  const articleRoutes = getArticleSlugs().map((slug) => ({
    url: `${siteConfig.url}/research/${slug}`,
  }));

  const glossaryRoutes = getTermSlugs().map((slug) => ({
    url: `${siteConfig.url}/glossary/${slug}`,
  }));

  return [
    ...staticRoutes,
    ...brokerRoutes,
    ...stockRoutes,
    ...articleRoutes,
    ...glossaryRoutes,
  ];
}
