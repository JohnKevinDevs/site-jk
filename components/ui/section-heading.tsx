import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  className?: string;
  eyebrow: string;
  title: ReactNode;
};

export function SectionHeading({
  className,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-0.5 w-8 rounded-pill bg-linear-to-r from-accent to-accent-2 shadow-blue" />
        <p className="font-mono text-xs uppercase tracking-[0.26em] text-accent-soft">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-6 break-words text-pretty font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-head">
        {title}
      </h2>
    </div>
  );
}
