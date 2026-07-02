import { cn } from "@/lib/utils";
import React from "react";
import { FloatingShapes } from "./ui/floating-shapes";

export default function GridSmallBackgroundDemo({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative flex min-h-screen w-full flex-col items-center justify-start", className)}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 opacity-40 dark:opacity-25",
          "[background-size:24px_24px]",
          "[background-image:linear-gradient(to_right,oklch(0.68_0.28_330_/_8%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.68_0.28_330_/_8%)_1px,transparent_1px)]",
        )}
        aria-hidden
      />
      <FloatingShapes />
      {children}
    </div>
  );
}
