"use client";

import type { CSSProperties, MouseEvent } from "react";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/data/projects";
import type { Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils/cn";

type ProjectCardProps = {
  className?: string;
  ctaLabel: string;
  project: Project;
  todoLabel: string;
  locale: Locale;
};

type GlowStyle = CSSProperties & {
  "--mx"?: string;
  "--my"?: string;
};

const statusClasses: Record<Project["statusKind"], string> = {
  "awarded-wip": "border-gold-border text-gold",
  "full-stack": "border-blue-border text-accent-soft",
  "live-ai": "border-green-border text-green",
  live: "border-green-border text-green",
  wip: "border-gold-border text-gold",
};

export function ProjectCard({
  className,
  ctaLabel,
  project,
  todoLabel,
  locale,
}: ProjectCardProps) {
  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Card
      className={cn(
        "group relative flex h-full min-h-[280px] flex-col overflow-hidden p-5 hover:-translate-y-1 hover:border-blue-border hover:shadow-blue",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100",
        "before:bg-[radial-gradient(260px_circle_at_var(--mx)_var(--my),var(--ambient-a),transparent_70%)]",
        className,
      )}
      onMouseMove={handlePointerMove}
      style={{ "--mx": "50%", "--my": "20%" } as GlowStyle}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span
            className={cn(
              "rounded-pill border bg-chip-bg px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em]",
              statusClasses[project.statusKind],
            )}
          >
            {project.status[locale]}
          </span>
          {project.screenshot ? (
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {project.screenshot}
            </span>
          ) : null}
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium text-accent-soft">
            {project.category[locale]}
          </p>
          <h3 className="mt-3 break-words font-display text-2xl font-semibold tracking-[-0.02em] text-head">
            {project.name}
          </h3>
          <p className="mt-3 min-h-14 leading-7 text-muted">
            {project.description[locale]}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="rounded-pill border border-border bg-chip-bg px-3 py-1 text-xs text-chip"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {project.link ? (
            <a
              className="inline-flex min-h-11 min-w-0 items-center justify-center rounded-pill border border-border-strong bg-surface px-4 py-2 text-center text-sm font-semibold leading-5 text-strong shadow-soft transition duration-300 hover:border-blue-border hover:bg-chip-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href={project.link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.link.label[locale]}
            </a>
          ) : (
            <button
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-pill border border-border bg-transparent px-4 py-2 text-sm font-semibold text-faint"
              disabled
              type="button"
            >
              {todoLabel}
            </button>
          )}
          {project.link ? <span className="sr-only">{ctaLabel}</span> : null}
        </div>
      </div>
    </Card>
  );
}
