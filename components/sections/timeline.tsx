"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  timeline,
  timelineYears,
  type TimelineYear,
} from "@/lib/data/timeline";
import { cn } from "@/lib/utils/cn";
import { useI18n } from "@/lib/i18n/use-i18n";

type TimelineFilter = "all" | TimelineYear;

const itemReveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Timeline() {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<TimelineFilter>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return timeline;
    }

    return timeline.filter((item) => item.year === activeFilter);
  }, [activeFilter]);

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: "easeOut" };

  const filters: TimelineFilter[] = ["all", ...timelineYears];

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-b border-border"
      id="journey"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(420px,1.24fr)] lg:items-start">
          <motion.div
            initial="hidden"
            transition={
              reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 }
            }
            viewport={{ amount: 0.28, once: true }}
            whileInView="show"
          >
            <motion.div transition={transition} variants={itemReveal}>
              <SectionHeading eyebrow={t("path_label")} title={t("path_h2")} />
            </motion.div>
            <motion.p
              className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-[17px]"
              transition={transition}
              variants={itemReveal}
            >
              {t("path_sub")}
            </motion.p>

            <motion.div
              aria-label={t("timeline_filter_label")}
              className="mt-6 flex flex-wrap gap-2"
              role="tablist"
              transition={transition}
              variants={itemReveal}
            >
              {filters.map((filter) => {
                const active = activeFilter === filter;
                const label =
                  filter === "all" ? t("timeline_filter_all") : filter;

                return (
                  <button
                    aria-selected={active}
                    className={cn(
                      "rounded-pill border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition duration-300 ease-[var(--ease-premium)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      active
                        ? "border-blue-border bg-accent text-white shadow-blue"
                        : "border-border bg-surface text-muted hover:border-blue-border hover:bg-chip-bg hover:text-strong",
                    )}
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    role="tab"
                    type="button"
                  >
                    {label}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-2 hidden h-[calc(100%-2rem)] w-px bg-linear-to-b from-accent via-blue-border to-transparent sm:block" />

            <div className="space-y-5">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.article
                    animate={{ opacity: 1, y: 0 }}
                    className="relative sm:pl-14"
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                    key={item.year}
                    layout={!reduceMotion}
                    transition={transition}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-6 hidden h-8 w-8 rounded-full border bg-background sm:grid sm:place-items-center",
                        item.highlight
                          ? "border-blue-border shadow-[0_0_16px_var(--blue-bd)]"
                          : "border-border-strong",
                      )}
                    >
                      <span
                        className={cn(
                          "h-2.5 w-2.5 rounded-full",
                          item.highlight
                            ? "pulse-dot bg-accent"
                            : "bg-border-strong",
                        )}
                      />
                    </span>

                    <Card
                      className={cn(
                        "group relative overflow-hidden p-5 hover:-translate-y-1 hover:border-blue-border hover:shadow-blue sm:p-6",
                        item.highlight
                          ? "border-blue-border bg-linear-to-br from-accent-tint to-surface shadow-blue"
                          : "hover:bg-chip-bg",
                      )}
                    >
                      {item.highlight ? (
                        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[radial-gradient(circle,var(--ambient-a),transparent_70%)]" />
                      ) : null}

                      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="rounded-pill border border-blue-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
                              {item.year}
                            </p>
                            {item.highlight ? (
                              <p className="rounded-pill border border-gold-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                                {t("hero_now_label")}
                              </p>
                            ) : null}
                          </div>
                          <h3 className="mt-3 break-words font-display text-2xl font-semibold tracking-[-0.02em] text-head">
                            {item.title[locale]}
                          </h3>
                        </div>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "pointer-events-none select-none font-display text-6xl font-bold leading-none tracking-[-0.03em] sm:text-7xl",
                            item.highlight
                              ? "text-blue-border"
                              : "text-border-strong",
                          )}
                        >
                          {item.year.slice(2)}
                        </span>
                      </div>

                      <p className="mt-4 max-w-2xl leading-7 text-muted">
                        {item.body[locale]}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.chips.map((chip) => (
                          <span
                            className="rounded-pill border border-border bg-chip-bg px-3 py-1 text-xs font-medium text-chip"
                            key={chip[locale]}
                          >
                            {chip[locale]}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 grid auto-rows-fr gap-3 md:grid-cols-2">
                        {item.cards.map((card) => (
                          <div
                            className={cn(
                              "flex h-full flex-col rounded-card border border-border bg-surface-2 p-4 transition duration-300 hover:border-blue-border hover:bg-surface",
                              card.emphasis &&
                                "border-dashed border-blue-border bg-chip-bg",
                            )}
                            key={card.title[locale]}
                          >
                            <h4 className="break-words text-base font-semibold text-head">
                              {card.title[locale]}
                            </h4>
                            <p className="mt-2 leading-6 text-muted">
                              {card.body[locale]}
                            </p>
                            <div className="mt-auto flex flex-wrap gap-2 pt-4">
                              {card.chips.map((chip) => (
                                <span
                                  className="rounded-pill border border-border bg-chip-bg px-2.5 py-1 text-[11px] font-medium text-chip"
                                  key={chip[locale]}
                                >
                                  {chip[locale]}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.article>
                ))}
              </AnimatePresence>

              <div className="relative sm:pl-14">
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-1 hidden h-4 w-4 rounded-full border-2 border-dashed border-accent-2 bg-background sm:block"
                />
                <p className="font-display text-base font-semibold text-accent-soft">
                  {t("timeline_next_title")}
                </p>
                <p className="mt-1 max-w-xl text-sm leading-6 text-muted">
                  {t("timeline_next_body")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
