"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/lib/data/contact";
import { featuredProject, secondaryProjects } from "@/lib/data/projects";
import { useI18n } from "@/lib/i18n/use-i18n";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: "easeOut" };

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-b border-border"
      id="projects"
    >
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
        initial="hidden"
        transition={reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 }}
        viewport={{ amount: 0.18, once: true }}
        whileInView="show"
      >
        <motion.div transition={transition} variants={reveal}>
          <SectionHeading eyebrow={t("proj_label")} title={t("proj_h2")} />
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-[17px]">
            {t("proj_sub")}
          </p>
        </motion.div>

        <motion.div className="mt-8" transition={transition} variants={reveal}>
          <Card className="relative overflow-hidden border-blue-border bg-linear-to-br from-accent-tint to-surface p-5 shadow-blue sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--ambient-a),transparent_70%)]" />
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-pill border border-gold-border bg-chip-bg px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-gold">
                  {t("flux_badge1")}
                </span>
                <span className="rounded-pill border border-blue-border bg-chip-bg px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-accent-soft">
                  {t("flux_badge2")}
                </span>
              </div>

              <p className="mt-6 text-sm font-medium text-accent-soft">
                {featuredProject.category[locale]}
              </p>
              <h3 className="mt-3 break-words font-display text-[clamp(34px,5vw,56px)] font-semibold leading-none text-head">
                {featuredProject.name}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {featuredProject.description[locale]}
              </p>

              <div className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-2">
                <div className="h-full rounded-card border border-border bg-surface-2 p-4 transition hover:border-blue-border">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-red">
                    {t("flux_problem_l")}
                  </p>
                  <p className="mt-3 leading-7 text-soft">{t("flux_problem")}</p>
                </div>
                <div className="h-full rounded-card border border-border bg-surface-2 p-4 transition hover:border-blue-border">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-green">
                    {t("flux_solution_l")}
                  </p>
                  <p className="mt-3 leading-7 text-soft">
                    {t("flux_solution")}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <span
                    className="rounded-pill border border-border bg-chip-bg px-3 py-1 text-xs text-chip"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 inline-flex min-h-11 items-center justify-center rounded-pill border border-blue-border bg-chip-bg px-4 py-2 text-sm font-semibold text-accent-soft">
                {t("project_flux_state")}
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="mt-4 grid auto-rows-fr gap-4 md:grid-cols-2"
          transition={transition}
          variants={reveal}
        >
          {secondaryProjects.map((project) => (
            <ProjectCard
              ctaLabel={t("project_link_label")}
              key={project.id}
              locale={locale}
              project={project}
              todoLabel={t("project_link_todo")}
            />
          ))}
        </motion.div>

        <motion.div className="mt-4" transition={transition} variants={reveal}>
          <Card className="flex flex-col gap-4 border-dashed border-border-strong p-5 hover:border-blue-border hover:bg-chip-bg sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-chip bg-accent-tint text-2xl font-light leading-none text-accent-2"
              >
                +
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-head sm:text-2xl">
                  {t("proj_more_t")}
                </h3>
                <p className="mt-2 max-w-2xl leading-7 text-muted">
                  {t("proj_more_s")}
                </p>
              </div>
            </div>
            <Button
              className="w-full shrink-0 sm:w-auto"
              href={contact.github}
              rel="noopener noreferrer"
              target="_blank"
              variant="secondary"
            >
              {t("proj_more_btn")}
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
