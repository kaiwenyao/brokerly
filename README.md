# Brokerly

Compare global broker trading fees — US stocks, ETFs, FX costs and more.

**Status: framework only.** All pages render placeholders; no real broker
data, fees, articles, or rankings exist yet.

## Stack

Next.js 15 (App Router) · TypeScript · TailwindCSS v4 · shadcn/ui · Lucide ·
React Server Components · next-themes (dark mode)

## Architecture: Content / Presentation separation

Pages never hard-code content. They read from the **content layer** in
`data/` through accessor functions (`getAllBrokers`, `getArticleBySlug`, …).
To add content later you only add data files — or swap the accessors for a
database / Headless CMS / API — without touching any UI.

```
data/                    ← CONTENT (fill this in later)
  brokers/               one file per broker, registered in index.ts
  stocks/                stock & ETF instruments
  research/              articles (MDX + metadata registry)
  rankings/              ranking lists

app/                     ← PRESENTATION (routes, RSC pages)
  page.tsx               /            Home
  brokers/               /brokers + /brokers/[broker]
  stocks/                /stocks + /stocks/[symbol]
  etf/                   /etf
  fx/                    /fx
  calculator/            /calculator
  research/              /research + /research/[slug]
  reviews/               /reviews + /reviews/[broker]
  about/                 /about
  sitemap.ts robots.ts   SEO routes

components/              reusable UI (navbar, footer, tables, cards, badges,
                         FAQ, TOC, compare drawer, calculator shell, …)
components/ui/           shadcn/ui primitives
features/home/           page-level composed sections for the home page
config/                  site metadata + navigation
lib/seo.ts               Metadata builder + JSON-LD (Breadcrumb, Article,
                         FAQ, Organization) + <JsonLd> component
hooks/                   client hooks (compare selection, …)
types/                   domain models (Broker, Instrument, Article, Ranking)
```

## Routes & responsibilities

| Route | Purpose |
|---|---|
| `/` | Hero, feature cards, comparison teaser, latest research, popular brokers, FAQ |
| `/brokers` | Compare table + filter sidebar + search + sort + compare drawer (sticky header) |
| `/brokers/[broker]` | Unified broker template: summary, trading cost, ETF, FX, pros/cons, research, FAQ, related |
| `/stocks` | Symbol directory (search) |
| `/stocks/[symbol]` | Per-symbol cost across brokers + fee breakdown |
| `/etf` | ETF directory |
| `/fx` | FX markup comparison + currency pairs |
| `/calculator` | Tabbed calculator shell (US stock / ETF / FX) |
| `/research` | Blog index: categories, pagination |
| `/research/[slug]` | Article: TOC, author card, tags, prev/next, related posts |
| `/reviews` | Review index |
| `/reviews/[broker]` | Review template: verdict, fees tested, platform, FAQ |
| `/about` | Mission, methodology, contact |

## Adding content

1. Create `data/brokers/<slug>.ts` exporting a `Broker` (see `types/broker.ts`).
2. Register it in `data/brokers/index.ts`.
3. Done — list page, detail page (static params), sitemap, and reviews all
   pick it up automatically.

## Develop

```bash
npm install
npm run dev
```
