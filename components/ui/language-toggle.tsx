"use client";

import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils/cn";

type LanguageToggleProps = {
  className?: string;
};

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, mounted, toggleLocale, t } = useI18n();
  const nextLocale = locale === "pt" ? "EN" : "PT";

  return (
    <button
      type="button"
      aria-label={t("languageToggleLabel")}
      onClick={toggleLocale}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-pill border border-border bg-surface px-4 font-mono text-xs uppercase tracking-[0.18em] text-soft shadow-soft transition duration-300 ease-[var(--ease-premium)] hover:border-blue-border hover:text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span className="text-accent-soft">{mounted ? locale : "pt"}</span>
      <span aria-hidden="true" className="text-faint">
        /
      </span>
      <span>{mounted ? nextLocale.toLowerCase() : "en"}</span>
    </button>
  );
}
