"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ConstellationCanvas } from "@/components/effects/constellation-canvas";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/data/contact";
import { profile } from "@/lib/data/profile";
import { useI18n } from "@/lib/i18n/use-i18n";

const motionItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate min-h-[calc(100svh-4rem)] scroll-mt-16 overflow-hidden border-b border-border"
      id="hero"
    >
      <ConstellationCanvas />

      <div
        aria-hidden="true"
        className="aurora pointer-events-none absolute -right-[6%] -top-[10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,var(--ambient-a),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="aurora-reverse pointer-events-none absolute -bottom-[16%] -left-[8%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,var(--ambient-b),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-50"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

      <motion.div
        animate="show"
        className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:py-12"
        initial="hidden"
        transition={
          reduceMotion
            ? { duration: 0 }
            : { staggerChildren: 0.08, delayChildren: 0.08 }
        }
      >
        <motion.p
          className="mb-5 inline-flex w-fit max-w-full items-center gap-2.5 rounded-pill border border-blue-border bg-chip-bg px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft shadow-soft sm:mb-6 sm:text-xs sm:tracking-[0.18em]"
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          variants={motionItem}
        >
          <span
            aria-hidden="true"
            className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
          />
          {t("hero_pill")}
        </motion.p>

        <motion.div className="max-w-5xl" variants={motionItem}>
          <h1 className="break-words font-display text-[clamp(34px,9vw,60px)] font-bold leading-[0.98] tracking-[-0.03em] text-head sm:text-[clamp(42px,5.2vw,72px)]">
            <span>{t("hero_title_line1")}</span>
            <br />
            <span className="grad-word">{t("hero_title_line2")}</span>
          </h1>
        </motion.div>

        <motion.p
          className="mt-5 max-w-[640px] text-base leading-7 text-soft sm:mt-6 sm:text-lg sm:leading-8 lg:text-[21px]"
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          variants={motionItem}
        >
          {t("hero_sub_prefix")}{" "}
          <strong className="font-semibold text-strong">{profile.name}</strong>{" "}
          — {t("hero_sub_suffix")}
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap gap-3 sm:mt-8"
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          variants={motionItem}
        >
          <Button href="#projects">{t("hero_btn1")}</Button>
          <Button
            href={contact.github}
            rel="noopener noreferrer"
            target="_blank"
            variant="secondary"
          >
            {t("hero_github")}
          </Button>
          <Button href="#contact" variant="secondary">
            {t("hero_btn3")}
          </Button>
        </motion.div>

        <p className="sr-only">
          {profile.name} · {profile.positioning[locale]}
        </p>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-faint sm:flex"
      >
        {t("hero_scroll")}
        <span className="h-8 w-px bg-linear-to-b from-accent-2 to-transparent" />
      </div>
    </section>
  );
}
