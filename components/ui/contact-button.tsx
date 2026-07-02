import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ContactButtonProps = {
  label: string;
  meta?: string;
  mark: string;
  href?: string | null;
  external?: boolean;
  disabled?: boolean;
  download?: string;
  children?: ReactNode;
  className?: string;
  featured?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const classes =
  "group relative flex min-h-24 w-full min-w-0 overflow-hidden rounded-card-lg border border-border bg-surface-2 text-left shadow-soft transition duration-300 ease-[var(--ease-premium)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ContactButton({
  label,
  meta,
  mark,
  href,
  external,
  disabled,
  download,
  children,
  className,
  featured,
  ...props
}: ContactButtonProps) {
  const content = (
    <>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
        <span className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      </span>
      <span
        className={cn(
          "relative z-10 flex w-full min-w-0 items-center gap-4 p-4",
          featured && "items-start p-5 sm:p-6",
        )}
      >
        <span
          className={cn(
            "grid shrink-0 place-items-center rounded-card border border-blue-border bg-chip-bg font-mono text-xs font-bold uppercase text-accent-soft shadow-blue",
            featured ? "h-14 w-14" : "h-12 w-12",
          )}
        >
          {mark}
        </span>
        <span className="min-w-0 flex-1">
          <span
            className={cn(
              "block break-words font-semibold text-head",
              featured ? "text-xl sm:text-2xl" : "text-base",
            )}
          >
            {label}
          </span>
          {meta ? (
            <span
              className={cn(
                "mt-1 block font-mono text-xs text-muted",
                featured ? "break-all leading-6" : "truncate",
              )}
            >
              {meta}
            </span>
          ) : null}
          {children}
        </span>
        {href && !disabled && !featured ? (
          <span
            aria-hidden="true"
            className="self-center text-sm text-accent-soft transition duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            {download ? "↓" : "↗"}
          </span>
        ) : null}
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        className={cn(
          classes,
          "hover:-translate-y-1 hover:border-blue-border hover:bg-chip-bg",
          featured && "min-h-36 border-blue-border bg-chip-bg shadow-blue",
          className,
        )}
        download={download}
        href={href}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(
        classes,
        disabled
          ? "cursor-not-allowed opacity-60"
          : "hover:-translate-y-1 hover:border-blue-border hover:bg-chip-bg",
        featured && "min-h-36 border-blue-border bg-chip-bg shadow-blue",
        className,
      )}
      disabled={disabled}
      type="button"
      {...props}
    >
      {content}
    </button>
  );
}
