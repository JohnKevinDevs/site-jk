import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-linear-to-br from-accent to-accent-deep text-white shadow-blue hover:-translate-y-0.5 hover:brightness-110",
  secondary:
    "border-border-strong bg-surface text-strong shadow-soft hover:-translate-y-0.5 hover:border-blue-border hover:bg-chip-bg",
  ghost:
    "border-border bg-transparent text-soft hover:border-blue-border hover:bg-chip-bg hover:text-strong",
};

const baseClasses =
  "inline-flex min-h-12 min-w-0 items-center justify-center rounded-pill border px-5 py-3 text-center text-sm font-semibold leading-5 transition duration-300 ease-[var(--ease-premium)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

export function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    const rel =
      anchorProps.target === "_blank"
        ? Array.from(
            new Set(
              `${anchorProps.rel ?? ""} noopener noreferrer`
                .trim()
                .split(/\s+/),
            ),
          ).join(" ")
        : anchorProps.rel;

    return (
      <a
        className={classes}
        href={href}
        {...anchorProps}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
