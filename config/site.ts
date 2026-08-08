export const siteConfig = {
  name: "Brokerly",
  description:
    "Compare global broker trading fees — US stocks, ETFs, FX costs and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brokerly.example.com",
  ogImage: "/images/og.png",
  links: {
    twitter: "",
    github: "https://github.com/kaiwenyao/brokerly",
  },
} as const;

export type SiteConfig = typeof siteConfig;
