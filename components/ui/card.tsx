import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card-lg border border-border bg-surface shadow-soft transition duration-300 ease-[var(--ease-premium)]",
        className,
      )}
      {...props}
    />
  );
}
