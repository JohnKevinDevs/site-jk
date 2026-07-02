import type { LocalizedText } from "./profile";

export type ProjectStatus =
  | "awarded-wip"
  | "full-stack"
  | "live-ai"
  | "live"
  | "wip";

export type ProjectLink = {
  href: string;
  label: LocalizedText;
};

export type Project = {
  id: string;
  name: string;
  status: LocalizedText;
  statusKind: ProjectStatus;
  category: LocalizedText;
  description: LocalizedText;
  stack: string[];
  link: ProjectLink | null;
  screenshot: string | null;
};

export const featuredProject: Project = {
  id: "fluxon",
  name: "FluxON",
  statusKind: "awarded-wip",
  status: {
    pt: "Premiada · Em construção",
    en: "Awarded · In progress",
  },
  category: {
    pt: "Startup · SaaS · Produto · Validação · MVP",
    en: "Startup · SaaS · Product · Validation · MVP",
  },
  description: {
    pt: "Startup própria, liderada como CEO, focada em agendamento e controle de atendimentos para negócios de serviço.",
    en: "Own startup, led as CEO, focused on scheduling and service control for service-based businesses.",
  },
  stack: ["Startup", "SaaS", "Produto", "Validação", "MVP"],
  link: null,
  screenshot: null,
};

export const secondaryProjects: Project[] = [
  {
    id: "skillforge",
    name: "SkillForge CEAP",
    statusKind: "full-stack",
    status: {
      pt: "Full stack",
      en: "Full stack",
    },
    category: {
      pt: "Projeto full stack",
      en: "Full stack project",
    },
    description: {
      pt: "Plataforma web para acompanhamento, validação e gamificação do aprendizado dos alunos do CEAP.",
      en: "Web platform for tracking, validation and gamification of CEAP students' learning.",
    },
    stack: ["Spring Boot", "PostgreSQL", "JWT", "React", "Vite"],
    link: {
      href: "https://github.com/JohnKevinDevs/skillforge-ceap",
      label: { pt: "GitHub", en: "GitHub" },
    },
    screenshot: null,
  },
  {
    id: "sistema-jk",
    name: "Sistema JK",
    statusKind: "live-ai",
    status: {
      pt: "Publicado · IA",
      en: "Live · AI",
    },
    category: {
      pt: "Segundo cérebro com IA",
      en: "AI second brain",
    },
    description: {
      pt: "MVP de segundo cérebro pessoal com chat Gemini, histórico local em SQLite e organização por dia, semana e metas.",
      en: "Personal second-brain MVP with Gemini chat, local SQLite history and organization by day, week and goals.",
    },
    stack: ["Next.js", "TypeScript", "SQLite", "Gemini"],
    link: {
      href: "https://github.com/JohnKevinDevs/sistema-vida",
      label: { pt: "GitHub", en: "GitHub" },
    },
    screenshot: null,
  },
  {
    id: "bid-copa-ceap",
    name: "BID / Copa CEAP",
    statusKind: "live",
    status: {
      pt: "Publicado",
      en: "Live",
    },
    category: {
      pt: "Projeto publicado",
      en: "Live project",
    },
    description: {
      pt: "Portal público para organizar atletas, times, modalidades, regulamentos e conteúdo institucional do Interclasse CEAP e da FAC.",
      en: "Public portal for organizing athletes, teams, sports, regulations and institutional content for CEAP Interclasse and FAC.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "JSON"],
    link: {
      href: "https://github.com/JohnKevinDevs/bid-interclasse",
      label: { pt: "GitHub", en: "GitHub" },
    },
    screenshot: null,
  },
  {
    id: "levelcorp",
    name: "LevelCorp",
    statusKind: "wip",
    status: {
      pt: "Em construção",
      en: "In progress",
    },
    category: {
      pt: "Plataforma corporativa",
      en: "Corporate platform",
    },
    description: {
      pt: "Produto multi-tenant para organizar empresas, equipes, tarefas, comunicação e rotinas operacionais em um ambiente digital.",
      en: "Multi-tenant product for organizing companies, teams, tasks, communication and operational routines in one digital environment.",
    },
    stack: ["Next.js", "Prisma", "PostgreSQL", "JWT"],
    link: {
      href: "https://github.com/JohnKevinDevs/levelcorp",
      label: { pt: "GitHub", en: "GitHub" },
    },
    screenshot: null,
  },
];
