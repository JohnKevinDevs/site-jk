import type { Achievement, Certificate } from "@/lib/data/learning";
import type { Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils/cn";

type LearningRowProps =
  | {
      item: Certificate;
      kind: "certificate";
      locale: Locale;
      isLast?: boolean;
    }
  | {
      item: Achievement;
      kind: "achievement";
      locale: Locale;
      isLast?: boolean;
    };

type IssuerPlate = {
  label: string;
  className: string;
};

function issuerPlate(issuer: string): IssuerPlate {
  if (issuer.startsWith("Oracle")) {
    return { label: "Oracle", className: "bg-red/10 text-red" };
  }

  if (issuer.startsWith("Cisco")) {
    return { label: "Cisco", className: "bg-accent-2/10 text-accent-2" };
  }

  if (issuer.startsWith("Wadhwani")) {
    return { label: "Wadh.", className: "bg-green/10 text-green" };
  }

  if (issuer.startsWith("Google")) {
    return { label: "Google", className: "bg-gold/10 text-gold" };
  }

  return { label: "FIAP+", className: "bg-accent-2/10 text-accent-2" };
}

export function LearningRow({ item, kind, locale, isLast }: LearningRowProps) {
  const rowClass = cn(
    "flex items-start gap-3.5 py-3.5",
    !isLast && "border-b border-border",
  );

  if (kind === "certificate") {
    const plate = issuerPlate(item.issuer);

    return (
      <div className={rowClass}>
        <span
          className={cn(
            "mt-0.5 grid h-6 w-[58px] shrink-0 place-items-center rounded-[7px] font-mono text-[10px] font-semibold",
            plate.className,
          )}
        >
          {plate.label}
        </span>
        <div className="min-w-0">
          <p className="break-words text-[14.5px] font-medium leading-[1.4] text-text">
            {item.name[locale]}
          </p>
          <p className="mt-0.5 font-mono text-[11px] text-muted">
            {item.issuer}
          </p>
        </div>
      </div>
    );
  }

  const isAward = item.tag.pt === "Premiada" || item.tag.pt === "Premiação";

  return (
    <div className={rowClass}>
      <span
        aria-hidden="true"
        className={cn(
          "mt-1.5 h-2 w-2 shrink-0 rounded-full",
          isAward ? "bg-gold shadow-[0_0_8px_var(--gold)]" : "bg-accent-2",
        )}
      />
      <div className="min-w-0 flex-1">
        <p className="break-words text-[14.5px] font-semibold leading-[1.4] text-text">
          {item.title[locale]}
        </p>
        <p className="mt-0.5 font-mono text-[11px] text-muted">
          {item.description[locale]}
        </p>
      </div>
      <span
        className={cn(
          "mt-0.5 shrink-0 rounded-pill border px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.08em]",
          isAward
            ? "border-gold-border text-gold"
            : "border-blue-border text-accent-soft",
        )}
      >
        {item.tag[locale]}
      </span>
    </div>
  );
}
