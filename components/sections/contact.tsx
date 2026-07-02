"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ContactButton } from "@/components/ui/contact-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact, contactLinks, type ContactLink } from "@/lib/data/contact";
import { useI18n } from "@/lib/i18n/use-i18n";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const marks: Record<ContactLink["id"], string> = {
  linkedin: "IN",
  github: "GH",
  whatsapp: "WA",
  gmail: "GM",
  "resume-view": "CV",
  "resume-download": "↓",
};

function handleFromUrl(href: string) {
  try {
    const segments = new URL(href).pathname.split("/").filter(Boolean);
    return segments[segments.length - 1] ?? href;
  } catch {
    return href;
  }
}

function formatWhatsapp(href: string | null) {
  const digits = href?.match(/\d+/)?.[0];

  if (!digits || !digits.startsWith("55") || digits.length < 12) {
    return digits ? `+${digits}` : undefined;
  }

  const ddd = digits.slice(2, 4);
  const number = digits.slice(4);
  const split = number.length - 4;
  return `+55 ${ddd} ${number.slice(0, split)}-${number.slice(split)}`;
}

function copyWithFallback(value: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  } finally {
    document.body.removeChild(textarea);
  }
}

export function Contact() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: "easeOut" };

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function handleCopyEmail() {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    try {
      await copyWithFallback(contact.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    resetTimer.current = setTimeout(() => setCopyState("idle"), 1800);
  }

  function labelFor(link: ContactLink) {
    if (link.id === "resume-view") {
      return t("c_resume_view");
    }

    if (link.id === "resume-download") {
      return t("c_resume");
    }

    return link.label;
  }

  function metaFor(link: ContactLink) {
    if (link.status === "todo") {
      return link.todoKey === "whatsappNumber"
        ? t("contact_whatsapp_todo")
        : t("contact_resume_todo");
    }

    if (link.id === "gmail") {
      return t("c_email_sub");
    }

    if (link.id === "resume-view" || link.id === "resume-download") {
      return "PDF";
    }

    if (link.id === "whatsapp") {
      return formatWhatsapp(link.href);
    }

    if (link.href) {
      return handleFromUrl(link.href);
    }

    return undefined;
  }

  const copyMeta =
    copyState === "copied"
      ? t("contact_copied")
      : copyState === "error"
        ? t("contact_copy_failed")
        : contact.email;

  return (
    <section
      className="scroll-mt-24 overflow-hidden border-b border-border"
      id="contact"
    >
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
        initial="hidden"
        transition={reduceMotion ? { duration: 0 } : { staggerChildren: 0.08 }}
        viewport={{ amount: 0.16, once: true }}
        whileInView="show"
      >
        <motion.div
          className="relative overflow-hidden rounded-card-lg border border-blue-border bg-surface p-5 shadow-blue sm:p-7 lg:p-8"
          transition={transition}
          variants={reveal}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,var(--ambient-a),transparent_28rem)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />

          <div className="relative z-10 grid gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch">
            <div className="flex min-w-0 flex-col justify-between rounded-card-lg border border-border bg-background/35 p-5 sm:p-6">
              <div>
                <SectionHeading
                  eyebrow={t("contact_label")}
                  title={t("contact_h2")}
                />
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-[17px]">
                  {t("contact_p")}
                </p>
              </div>

              <ContactButton
                aria-label={t("contact_copy_email")}
                className="mt-7"
                featured
                label={t("contact_copy_email")}
                mark="@"
                meta={copyMeta}
                onClick={handleCopyEmail}
              />
              <p aria-live="polite" className="sr-only">
                {copyState === "idle" ? "" : copyMeta}
              </p>
            </div>

            <div className="grid min-w-0 auto-rows-fr gap-3 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <ContactButton
                  disabled={link.status === "todo"}
                  download={link.download}
                  external={link.external}
                  href={link.href}
                  key={link.id}
                  label={labelFor(link)}
                  mark={marks[link.id]}
                  meta={metaFor(link)}
                >
                  {link.status === "todo" ? (
                    <span className="mt-3 inline-flex rounded-pill border border-border bg-chip-bg px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                      {t("contact_todo")}
                    </span>
                  ) : (
                    <span className="mt-3 inline-flex rounded-pill border border-blue-border bg-chip-bg px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft">
                      {t("contact_open_label")}
                    </span>
                  )}
                </ContactButton>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
