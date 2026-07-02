"use client";

import { useState } from "react";
import type { StackItem } from "@/lib/data/stack";
import { cn } from "@/lib/utils/cn";

type TechTileProps = {
  item: StackItem;
};

function fallbackLabel(item: StackItem) {
  if (item.monogram) {
    return item.monogram;
  }

  return item.name
    .split(/\s|\.|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TechTile({ item }: TechTileProps) {
  const [iconFailed, setIconFailed] = useState(false);
  const showIcon = item.icon && !iconFailed;

  return (
    <div
      className={cn(
        "group inline-flex min-w-0 items-center gap-3 rounded-card border p-2.5 pr-4 transition duration-300 ease-premium hover:-translate-y-1 hover:border-blue-border hover:shadow-blue",
        item.highlight
          ? "border-blue-border bg-accent-tint-soft"
          : "border-border bg-surface hover:bg-accent-tint-soft",
      )}
    >
      <div
        className={cn(
          "grid h-[42px] w-[42px] shrink-0 place-items-center rounded-chip transition duration-300 ease-premium group-hover:-rotate-3 group-hover:scale-110",
          showIcon
            ? "bg-white shadow-soft ring-1 ring-black/5"
            : "bg-linear-to-br from-accent to-accent-deep shadow-blue",
        )}
      >
        {showIcon ? (
          // eslint-disable-next-line @next/next/no-img-element -- Devicon CDN icons are intentionally rendered as plain img per handoff.
          <img
            alt=""
            className="h-[26px] w-[26px] object-contain"
            loading="lazy"
            onError={() => setIconFailed(true)}
            src={item.icon}
          />
        ) : (
          <span
            className={cn(
              "font-mono text-xs font-semibold text-white",
              fallbackLabel(item).length > 2 && "text-[10px]",
            )}
          >
            {fallbackLabel(item)}
          </span>
        )}
      </div>

      <span
        className={cn(
          "min-w-0 break-words font-display text-sm font-medium leading-5",
          item.highlight ? "text-accent-soft" : "text-head",
        )}
      >
        {item.name}
      </span>
    </div>
  );
}
