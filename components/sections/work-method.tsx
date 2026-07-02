"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { DictionaryKey } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils/cn";

const workCards = [
  ["work_card1_t", "work_card1_b"],
  ["work_card2_t", "work_card2_b"],
  ["work_card3_t", "work_card3_b"],
  ["work_card4_t", "work_card4_b"],
] satisfies Array<[DictionaryKey, DictionaryKey]>;

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function WorkMethod() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: "easeOut" };

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-b border-border"
      id="work-method"
    >
      <motion.div
        className="mx-auto grid w-full max-w-7xl gap-7 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch lg:py-20"
        initial="hidden"
        transition={reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 }}
        viewport={{ amount: 0.22, once: true }}
        whileInView="show"
      >
        <motion.div
          className="relative min-w-0 overflow-hidden rounded-card-lg border border-blue-border bg-surface p-5 shadow-blue sm:p-6 lg:p-7"
          transition={transition}
          variants={reveal}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,var(--ambient-a),transparent_24rem)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
          <div className="relative">
            <SectionHeading eyebrow={t("work_label")} title={t("work_h2")} />
            <p className="mt-4 max-w-xl font-display text-xl font-semibold leading-8 text-head sm:text-2xl">
              {t("work_sub")}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-[17px]">
              {t("work_intro")}
            </p>
            <div
              className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft"
            >
              <span className="rounded-pill border border-border bg-chip-bg px-3 py-1">
                {t("work_chip_product")}
              </span>
              <span className="rounded-pill border border-border bg-chip-bg px-3 py-1">
                {t("work_chip_communication")}
              </span>
              <span className="rounded-pill border border-border bg-chip-bg px-3 py-1">
                {t("work_chip_execution")}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid min-w-0 auto-rows-fr gap-3 sm:grid-cols-2"
          transition={transition}
          variants={reveal}
        >
          {workCards.map(([titleKey, bodyKey], index) => {
            const emphasized = index === 0 || index === workCards.length - 1;

            return (
              <Card
                className={cn(
                  "group relative flex h-full min-h-[188px] flex-col overflow-hidden rounded-card p-5 hover:-translate-y-1 hover:border-blue-border hover:bg-accent-tint-soft hover:shadow-blue sm:p-6",
                  emphasized && "border-border-strong bg-surface-2",
                )}
                key={titleKey}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[radial-gradient(circle,var(--ambient-a),transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-blue-border bg-chip-bg font-mono text-xs text-accent-soft transition duration-300 group-hover:bg-accent group-hover:text-white"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="relative max-w-[13rem] pr-10 font-display text-xl font-semibold leading-7 tracking-[-0.02em] text-head">
                  {t(titleKey)}
                </h3>
                <p className="relative mt-4 text-sm leading-6 text-muted sm:text-[15px]">
                  {t(bodyKey)}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-auto block pt-5"
                >
                  <span className="block h-px w-full bg-linear-to-r from-blue-border via-border to-transparent" />
                </span>
              </Card>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
