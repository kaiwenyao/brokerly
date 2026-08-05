import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * GFM markdown renderer styled with the design system.
 * Heading ids are positional and match lib/toc.ts extractToc ordering —
 * article bodies must only use ## and ### headings.
 */
function createComponents(): Components {
  let headingIndex = 0;
  return {
    h2: ({ children }) => (
      <h2
        id={`h-${headingIndex++}`}
        className="mb-4 mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={`h-${headingIndex++}`}
        className="mb-3 mt-8 scroll-mt-24 text-xl font-semibold tracking-tight"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
    ul: ({ children }) => (
      <ul className="my-4 list-disc space-y-1.5 pl-6">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-decimal space-y-1.5 pl-6">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    a: ({ children, href }) => (
      <a href={href} className="font-medium text-primary underline underline-offset-4">
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-2 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-lg border">
        <Table>{children}</Table>
      </div>
    ),
    thead: ({ children }) => <TableHeader>{children}</TableHeader>,
    tbody: ({ children }) => <TableBody>{children}</TableBody>,
    tr: ({ children }) => <TableRow>{children}</TableRow>,
    th: ({ children }) => <TableHead className="whitespace-nowrap">{children}</TableHead>,
    td: ({ children }) => <TableCell className="align-top">{children}</TableCell>,
  };
}

export function Markdown({ body }: { body: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={createComponents()}>
      {body}
    </ReactMarkdown>
  );
}
