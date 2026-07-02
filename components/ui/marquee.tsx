import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  groupClassName?: string;
  ariaLabel?: string;
};

export function Marquee({
  children,
  className,
  trackClassName,
  groupClassName = "gap-3",
  ariaLabel,
}: MarqueeProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden border-y border-border bg-surface/70 py-5",
        className,
      )}
      role={ariaLabel ? "region" : undefined}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-28" />

      <div
        className={cn(
          "tech-marquee-track flex w-max",
          groupClassName,
          trackClassName,
        )}
      >
        <div className={cn("flex shrink-0", groupClassName)}>{children}</div>
        <div aria-hidden="true" className={cn("flex shrink-0", groupClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}
