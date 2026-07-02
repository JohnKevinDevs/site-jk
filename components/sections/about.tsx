"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/lib/data/contact";
import { profile } from "@/lib/data/profile";
import type { DictionaryKey } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils/cn";

const aboutParagraphKeys = [
  "about_p1",
  "about_p2",
  "about_p3",
] satisfies DictionaryKey[];

const philosophyKeys = [
  ["phil1_t", "phil1_b"],
  ["phil2_t", "phil2_b"],
  ["phil3_t", "phil3_b"],
  ["phil4_t", "phil4_b"],
] satisfies Array<[DictionaryKey, DictionaryKey]>;

const miniCardKeys = [
  ["snap1_t", "snap1"],
  ["snap2_t", "snap2"],
  ["snap3_t", "snap3"],
  ["snap4_t", "snap4"],
] satisfies Array<[DictionaryKey, DictionaryKey]>;

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const githubHandle = new URL(contact.github).pathname.replace(/^\//, "");

export function About() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: "easeOut" };

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-b border-border"
      id="about"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-stretch lg:gap-10 lg:py-20">
        <motion.div
          className="min-w-0"
          initial="hidden"
          transition={
            reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 }
          }
          viewport={{ amount: 0.22, once: true }}
          whileInView="show"
        >
          <motion.div transition={transition} variants={reveal}>
            <SectionHeading
              eyebrow={t("about_label")}
              title={
                <>
                  {t("about_h2_prefix")}{" "}
                  <span className="text-accent-soft">
                    {t("about_h2_highlight")}
                  </span>{" "}
                  — {t("about_h2_suffix")}
                </>
              }
            />
          </motion.div>

          <motion.div
            className="mt-6 space-y-4 text-base leading-7 text-muted sm:text-[17px]"
            transition={transition}
            variants={reveal}
          >
            {aboutParagraphKeys.map((key) => (
              <p key={key}>{t(key)}</p>
            ))}
          </motion.div>

          <motion.div
            className="mt-7 grid auto-rows-fr gap-3 sm:grid-cols-2"
            transition={transition}
            variants={reveal}
          >
            {philosophyKeys.map(([titleKey, bodyKey], index) => {
              const emphasized = index === philosophyKeys.length - 1;

              return (
                <Card
                  className={cn(
                    "group relative h-full overflow-hidden rounded-card p-5 hover:-translate-y-1 hover:border-blue-border hover:bg-accent-tint-soft",
                    emphasized && "border-blue-border bg-accent-tint-soft",
                  )}
                  key={titleKey}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute right-4 top-3 font-display text-[32px] font-bold leading-none",
                      emphasized ? "text-blue-border" : "text-border-strong",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={cn(
                      "relative pr-10 font-display text-base font-semibold",
                      emphasized ? "text-accent-soft" : "text-head",
                    )}
                  >
                    {t(titleKey)}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-muted">
                    {t(bodyKey)}
                  </p>
                </Card>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.aside
          aria-label={t("about_photo_label")}
          className="relative mx-auto flex h-full w-full max-w-[420px] flex-col lg:max-w-none"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          transition={transition}
          viewport={{ amount: 0.24, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_50%_18%,var(--ambient-a),transparent_22rem)] opacity-80" />

          <div className="relative overflow-hidden rounded-card-lg border border-border-strong bg-surface-2 shadow-blue">
            <div className="relative aspect-[4/5] overflow-hidden">
              {!imageFailed ? (
                <Image
                  alt={t("about_photo_alt")}
                  className="object-cover"
                  fill
                  onError={() => setImageFailed(true)}
                  priority={false}
                  sizes="(min-width: 1024px) 420px, min(100vw - 40px, 420px)"
                  src={profile.assets.photo}
                  style={{ objectPosition: "50% 22%" }}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(145deg,var(--surface2),var(--chip-bg))] p-8 text-center">
                  <span className="font-display text-6xl font-semibold text-accent-soft">
                    {profile.initials}
                  </span>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                    Imagem indisponível
                  </p>
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-55% to-background/60" />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3.5 font-mono text-[11.5px]">
              <span className="truncate text-muted">@{githubHandle}</span>
              <span className="shrink-0 text-accent-soft">
                {t("about_photo_tag")}
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-card-lg ring-1 ring-inset ring-white/10" />
          </div>

          <div className="relative mt-4 grid auto-rows-fr grid-cols-2 gap-3">
            {miniCardKeys.map(([titleKey, bodyKey], index) => {
              const emphasized = index === 0;

              return (
                <Card
                  className={cn(
                    "h-full rounded-card p-4 hover:-translate-y-0.5 hover:border-blue-border hover:bg-accent-tint-soft",
                    emphasized && "border-blue-border bg-accent-tint-soft",
                  )}
                  key={titleKey}
                >
                  <p
                    className={cn(
                      "font-display text-lg font-bold leading-6",
                      emphasized ? "text-accent-soft" : "text-head",
                    )}
                  >
                    {t(titleKey)}
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-muted">
                    {t(bodyKey)}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
