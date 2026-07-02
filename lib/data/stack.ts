import type { LocalizedText } from "./profile";

const deviconBase =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export type StackItem = {
  name: string;
  icon?: string;
  monogram?: string;
  highlight?: boolean;
};

export type StackCategory = {
  title: LocalizedText;
  symbol: string;
  items: StackItem[];
};

function devicon(slug: string) {
  return `${deviconBase}/${slug}/${slug}-original.svg`;
}

export const stackCategories: StackCategory[] = [
  {
    title: { pt: "Back-end & APIs", en: "Back-end & APIs" },
    symbol: "</>",
    items: [
      { name: "Java", icon: devicon("java") },
      { name: "Spring", icon: devicon("spring") },
      { name: "Python", icon: devicon("python") },
      { name: "APIs REST", monogram: "{ }" },
      { name: "JWT", monogram: "JWT" },
    ],
  },
  {
    title: { pt: "Front-end", en: "Front-end" },
    symbol: "UI",
    items: [
      { name: "React", icon: devicon("react") },
      { name: "Next.js", icon: devicon("nextjs") },
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "HTML5", icon: devicon("html5") },
      { name: "CSS3", icon: devicon("css3") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
    ],
  },
  {
    title: { pt: "Banco de dados", en: "Databases" },
    symbol: "DB",
    items: [
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "SQLite", icon: devicon("sqlite") },
      { name: "Prisma", icon: devicon("prisma") },
      { name: "SQL", monogram: "SQL" },
      { name: "Flyway", monogram: "FW" },
    ],
  },
  {
    title: {
      pt: "IA, produtividade & DevOps",
      en: "AI, productivity & DevOps",
    },
    symbol: "AI",
    items: [
      { name: "IA aplicada", monogram: "IA", highlight: true },
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github") },
      { name: "Docker", icon: devicon("docker") },
      { name: "Vite", icon: devicon("vitejs") },
    ],
  },
];
