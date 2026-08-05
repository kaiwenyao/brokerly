import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** Page section with generous whitespace (Apple/Linear-style rhythm). */
export function Section({
  title,
  description,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      {(title || description) && (
        <div className="mb-8 max-w-2xl space-y-2">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
