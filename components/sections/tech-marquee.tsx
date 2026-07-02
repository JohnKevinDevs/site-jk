import { Fragment } from "react";
import { Marquee } from "@/components/ui/marquee";
import { stackCategories } from "@/lib/data/stack";

const curatedNames = [
  "Java",
  "Spring",
  "Next.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Prisma",
  "Python",
  "IA aplicada",
  "Docker",
];

const stackNames = new Set(
  stackCategories.flatMap((category) =>
    category.items.map((item) => item.name),
  ),
);

const marqueeNames = curatedNames.filter((name) => stackNames.has(name));

export function TechMarquee() {
  return (
    <section className="scroll-mt-24 overflow-hidden" id="marquee">
      <Marquee ariaLabel="Stack" className="py-7 sm:py-8" groupClassName="gap-10 sm:gap-12">
        {marqueeNames.map((name) => (
          <Fragment key={name}>
            <span className="whitespace-nowrap font-display text-2xl font-semibold leading-none text-marquee sm:text-3xl">
              {name}
            </span>
            <span
              aria-hidden="true"
              className="font-display text-2xl font-semibold leading-none text-accent-2 sm:text-3xl"
            >
              ·
            </span>
          </Fragment>
        ))}
      </Marquee>
    </section>
  );
}
