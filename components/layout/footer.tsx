import Link from "next/link";
import { Landmark } from "lucide-react";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Landmark className="size-5" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Placeholder footer —
          disclaimer and legal links to be added.
        </p>
      </div>
    </footer>
  );
}
