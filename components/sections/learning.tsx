"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LearningRow } from "@/components/ui/learning-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, certificates } from "@/lib/data/learning";
import { useI18n } from "@/lib/i18n/use-i18n";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function PanelHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-chip bg-accent-tint text-accent-2"
      >
        {icon}
      </span>
      <h3 className="font-display text-lg font-semibold text-head">{title}</h3>
    </div>
  );
}

const certificateIcon = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="18"
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" />
  </svg>
);

const achievementIcon = (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="18"
  >
    <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21l2.3-7.4-6-4.6h7.6z" />
  </svg>
);

export function Learning() {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: "easeOut" };

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-b border-border"
      id="learning"
    >
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
        initial="hidden"
        transition={reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 }}
        viewport={{ amount: 0.16, once: true }}
        whileInView="show"
      >
        <motion.div transition={transition} variants={reveal}>
          <SectionHeading eyebrow={t("cert_label")} title={t("cert_h2")} />
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-[17px]">
            {t("cert_sub")}
          </p>
        </motion.div>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          <motion.div transition={transition} variants={reveal}>
            <Card className="h-full p-6 sm:p-7">
              <PanelHeader icon={certificateIcon} title={t("cert_left")} />
              <div className="flex flex-col">
                {certificates.map((certificate, index) => (
                  <LearningRow
                    isLast={index === certificates.length - 1}
                    item={certificate}
                    key={`${certificate.issuer}-${certificate.name.pt}`}
                    kind="certificate"
                    locale={locale}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div transition={transition} variants={reveal}>
            <Card className="h-full p-6 sm:p-7">
              <PanelHeader icon={achievementIcon} title={t("cert_right")} />
              <div className="flex flex-col">
                {achievements.map((achievement, index) => (
                  <LearningRow
                    isLast={index === achievements.length - 1}
                    item={achievement}
                    key={`${achievement.title.pt}-${achievement.tag.pt}`}
                    kind="achievement"
                    locale={locale}
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
