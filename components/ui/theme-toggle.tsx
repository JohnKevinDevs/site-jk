"use client";

import { cn } from "@/lib/utils/cn";
import { useI18n } from "@/lib/i18n/use-i18n";
import { useTheme } from "@/lib/theme/use-theme";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { locale } = useI18n();
  const { theme, toggleTheme, mounted } = useTheme();
  const isLight = theme === "light";
  const label = isLight
    ? locale === "en"
      ? "Switch to dark theme"
      : "Alternar para tema escuro"
    : locale === "en"
      ? "Switch to light theme"
      : "Alternar para tema claro";
  const visibleLabel = mounted
    ? isLight
      ? locale === "en"
        ? "Light"
        : "Claro"
      : locale === "en"
        ? "Dark"
        : "Escuro"
    : locale === "en"
      ? "Theme"
      : "Tema";

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isLight}
      onClick={toggleTheme}
      className={cn(
        "group inline-flex h-11 items-center gap-2 rounded-pill border border-border bg-surface px-2.5 text-sm text-soft shadow-soft transition duration-300 ease-[var(--ease-premium)] hover:border-blue-border hover:text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative flex h-6 w-11 items-center rounded-pill border border-border-strong bg-chip-bg p-0.5 transition-colors duration-300",
          isLight && "bg-surface-2",
        )}
      >
        <span
          className={cn(
            "h-5 w-5 rounded-full bg-linear-to-br from-accent to-accent-2 shadow-blue transition-transform duration-300 ease-[var(--ease-premium)]",
            isLight && "translate-x-5",
          )}
        />
      </span>
      <span className="min-w-12 font-mono text-xs uppercase tracking-[0.18em]">
        {visibleLabel}
      </span>
    </button>
  );
}
