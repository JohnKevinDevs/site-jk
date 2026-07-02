"use client";

import { contact } from "@/lib/data/contact";
import { navigationItems } from "@/lib/data/navigation";
import { profile } from "@/lib/data/profile";
import { useI18n } from "@/lib/i18n/use-i18n";

const footerLinkClass =
  "w-fit rounded-chip text-sm text-soft transition hover:text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Footer() {
  const { locale, t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a
            className="inline-flex items-center gap-3 rounded-pill focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="#hero"
          >
            <span className="grid h-9 w-9 place-items-center rounded-chip bg-linear-to-br from-accent to-accent-deep font-display text-sm font-bold text-white shadow-blue">
              {profile.initials}
            </span>
            <span className="font-display text-lg font-semibold text-strong">
              {profile.shortName}
            </span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">
            {profile.brandPhrase[locale]}
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-faint">
            {t("footer_built")}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">
            Site
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {navigationItems.map((item) => (
              <a className={footerLinkClass} href={item.href} key={item.href}>
                {t(item.labelKey)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">
            Links
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              className={footerLinkClass}
              href={contact.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className={footerLinkClass}
              href={contact.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center font-mono text-[11px] leading-5 text-faint">
        © {year} {profile.name} · {profile.location} — {t("footer_rights")}
      </div>
    </footer>
  );
}
