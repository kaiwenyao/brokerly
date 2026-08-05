import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  BookOpen,
  BookMarked,
  BookA,
  Calculator,
  CandlestickChart,
  Home,
  Info,
  Landmark,
  PieChart,
  Star,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export const mainNav: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Compare Brokers", href: "/brokers", icon: Landmark },
  { title: "US Stocks", href: "/stocks", icon: CandlestickChart },
  { title: "US ETFs", href: "/etf", icon: PieChart },
  { title: "FX Cost", href: "/fx", icon: ArrowLeftRight },
  { title: "Calculator", href: "/calculator", icon: Calculator },
  { title: "Research", href: "/research", icon: BookOpen },
  { title: "Glossary", href: "/glossary", icon: BookA },
  { title: "Sources", href: "/sources", icon: BookMarked },
  { title: "Reviews", href: "/reviews", icon: Star },
  { title: "About", href: "/about", icon: Info },
];

export const footerNav: { title: string; items: { title: string; href: string }[] }[] = [
  {
    title: "Compare",
    items: [
      { title: "Brokers", href: "/brokers" },
      { title: "US Stocks", href: "/stocks" },
      { title: "US ETFs", href: "/etf" },
      { title: "FX Cost", href: "/fx" },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Fee Calculator", href: "/calculator" },
      { title: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Content",
    items: [
      { title: "Research", href: "/research" },
      { title: "Glossary", href: "/glossary" },
      { title: "Sources", href: "/sources" },
      { title: "About", href: "/about" },
    ],
  },
];
