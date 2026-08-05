"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-32 text-center">
      <p className="text-2xl font-semibold">Something went wrong</p>
      <p className="text-muted-foreground">Please try again.</p>
      <Button onClick={reset}>Retry</Button>
    </div>
  );
}
