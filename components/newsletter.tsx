import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/** Newsletter signup — wire to an email provider later. */
export function Newsletter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stay updated</CardTitle>
        <CardDescription>
          Placeholder — get new broker fee comparisons in your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  );
}
