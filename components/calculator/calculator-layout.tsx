import type { LucideIcon } from "lucide-react";
import { Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/empty-state";

const CALCULATORS = [
  { value: "us-stock", label: "US Stock" },
  { value: "us-etf", label: "US ETF" },
  { value: "fx", label: "FX Conversion" },
];

interface CalculatorLayoutProps {
  icon?: LucideIcon;
}

/** Tabbed calculator shell — each tab hosts one calculator form later. */
export function CalculatorLayout({ icon: Icon = Calculator }: CalculatorLayoutProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
            <Icon className="size-5" />
          </div>
          <div>
            <CardTitle>Fee calculator</CardTitle>
            <CardDescription>
              Estimate total trading cost across brokers.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="us-stock">
          <TabsList>
            {CALCULATORS.map((calc) => (
              <TabsTrigger key={calc.value} value={calc.value}>
                {calc.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {CALCULATORS.map((calc) => (
            <TabsContent key={calc.value} value={calc.value} className="pt-4">
              <EmptyState
                title={`${calc.label} calculator`}
                description="Input form and cost breakdown will render here. Logic is driven by the data layer."
              />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
