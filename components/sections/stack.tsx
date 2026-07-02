"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechTile } from "@/components/ui/tech-tile";
import { stackCategories } from "@/lib/data/stack";
import { useI18n } from "@/lib/i18n/use-i18n";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Stack() {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: "easeOut" };

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-b border-border"
      id="stack"
    >
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
        initial="hidden"
        transition={reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 }}
        viewport={{ amount: 0.16, once: true }}
        whileInView="show"
      >
        <motion.div transition={transition} variants={reveal}>
          <SectionHeading eyebrow={t("stack_label")} title={t("stack_h2")} />
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-[17px]">
            {t("stack_sub")}
          </p>
        </motion.div>

        <div className="mt-9 flex flex-col gap-8">
          {stackCategories.map((category) => (
            <motion.div
              key={category.title.pt}
              transition={transition}
              variants={reveal}
            >
              <div className="flex items-center gap-3">
                <h3 className="shrink-0 font-display text-[15px] font-semibold text-accent-soft">
                  {category.title[locale]}
                </h3>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <TechTile item={item} key={item.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
