export interface Author {
  slug: string;
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string; // ISO 8601 date
  updatedAt?: string;
  readingMinutes?: number;
  cover?: string;
  /** MDX body lives in data/research/<slug>.mdx */
}

export interface TocItem {
  id: string;
  title: string;
  depth: 2 | 3;
}
