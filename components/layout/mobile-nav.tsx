"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/config/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {mainNav.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="justify-start"
              asChild
              onClick={() => setOpen(false)}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 size-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
