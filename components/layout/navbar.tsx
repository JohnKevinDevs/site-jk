"use client";

import { useState } from "react";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navigationItems } from "@/lib/data/navigation";
import { profile } from "@/lib/data/profile";
import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const { locale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const menuLabel = isOpen ? t("nav_menu_close") : t("nav_menu_open");
  const navLabel = locale === "en" ? "Primary" : "Principal";
  const skipLabel = locale === "en" ? "Skip to content" : "Pular para o conteúdo";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-nav backdrop-blur-xl">
      <a
        className="sr-only left-4 top-4 z-[60] rounded-pill border border-blue-border bg-surface px-4 py-3 text-sm font-semibold text-strong shadow-blue focus:not-sr-only focus:fixed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        href="#main-content"
      >
        {skipLabel}
      </a>
      <nav
        aria-label={navLabel}
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-5 sm:px-8"
      >
        <a
          href="#hero"
          className="group flex min-w-0 items-center gap-3 rounded-pill focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-chip bg-linear-to-br from-accent to-accent-deep font-display text-sm font-bold text-white shadow-blue transition duration-300 ease-premium group-hover:-translate-y-0.5">
            {profile.initials}
          </span>
          <span className="hidden min-w-0 min-[420px]:block">
            <span className="block truncate font-display text-base font-semibold tracking-[-0.02em] text-strong">
              {profile.shortName}
            </span>
            <span className="hidden truncate text-xs text-muted md:block">
              {profile.positioning[locale]}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              className="rounded-pill px-4 py-2 text-sm font-medium text-soft transition duration-300 ease-[var(--ease-premium)] hover:bg-chip-bg hover:text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href={item.href}
              key={item.href}
            >
              {t(item.labelKey)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <a
            className="rounded-pill border border-transparent bg-linear-to-br from-accent to-accent-deep px-5 py-2.5 text-sm font-semibold text-white shadow-blue transition duration-300 ease-premium hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            href="#contact"
          >
            {t("nav_cta")}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageToggle className="h-10 px-3" />
          <ThemeToggle className="h-10 [&>span:last-child]:hidden sm:[&>span:last-child]:inline" />
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={menuLabel}
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-pill border border-border bg-surface text-soft shadow-soft transition hover:border-blue-border hover:text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-4 rounded-pill bg-current transition",
                  isOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-4 rounded-pill bg-current transition",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-4 rounded-pill bg-current transition",
                  isOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        aria-hidden={!isOpen}
        id="mobile-menu"
        className={cn(
          "grid border-t border-border bg-nav px-5 shadow-soft backdrop-blur-xl transition-all duration-300 ease-[var(--ease-premium)] lg:hidden",
          isOpen
            ? "grid-rows-[1fr] py-4 opacity-100"
            : "grid-rows-[0fr] py-0 opacity-0",
        )}
      >
        <div className="max-h-[calc(100svh-4rem)] overflow-hidden overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <a
                className="rounded-card border border-border bg-surface px-4 py-3 text-sm font-medium text-soft transition hover:border-blue-border hover:bg-chip-bg hover:text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
              >
                {t(item.labelKey)}
              </a>
            ))}
            <a
              className="mt-2 rounded-card border border-transparent bg-linear-to-br from-accent to-accent-deep px-4 py-3 text-center text-sm font-semibold text-white shadow-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href="#contact"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {t("nav_cta")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
