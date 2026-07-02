import type { DictionaryKey } from "@/lib/i18n/dictionaries";

export type NavItem = {
  href: `#${string}`;
  labelKey: DictionaryKey;
};

export const navigationItems: NavItem[] = [
  {
    href: "#about",
    labelKey: "nav_about",
  },
  {
    href: "#work-method",
    labelKey: "nav_work",
  },
  {
    href: "#projects",
    labelKey: "nav_projects",
  },
  {
    href: "#stack",
    labelKey: "nav_stack",
  },
  {
    href: "#journey",
    labelKey: "nav_path",
  },
];
