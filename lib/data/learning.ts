import type { LocalizedText } from "./profile";

export type Certificate = {
  name: LocalizedText;
  issuer: string;
};

export type Achievement = {
  title: LocalizedText;
  description: LocalizedText;
  tag: LocalizedText;
};

export const certificates: Certificate[] = [
  {
    name: {
      pt: "Oracle Certified Associate, Java SE 8 Programmer",
      en: "Oracle Certified Associate, Java SE 8 Programmer",
    },
    issuer: "Oracle",
  },
  {
    name: {
      pt: "Java Programming / Java Fundamentals",
      en: "Java Programming / Java Fundamentals",
    },
    issuer: "Oracle",
  },
  {
    name: {
      pt: "Introdução à Cibersegurança",
      en: "Introduction to Cybersecurity",
    },
    issuer: "Cisco Networking Academy",
  },
  {
    name: {
      pt: "Competências para Empregabilidade",
      en: "Employability Skills",
    },
    issuer: "Wadhwani Foundation",
  },
  {
    name: {
      pt: "Associate Android Developer",
      en: "Associate Android Developer",
    },
    issuer: "Google",
  },
  {
    name: {
      pt: "Nano Cursos",
      en: "Nano Courses",
    },
    issuer: "FIAP · SEBRAE · Fundação Bradesco · Microsoft",
  },
];

export const achievements: Achievement[] = [
  {
    title: { pt: "FluxON", en: "FluxON" },
    description: {
      pt: "startup própria, como CEO",
      en: "own startup, as CEO",
    },
    tag: { pt: "Premiada", en: "Awarded" },
  },
  {
    title: { pt: "Feira Start CEAP", en: "Feira Start CEAP" },
    description: {
      pt: "1º lugar",
      en: "1st place",
    },
    tag: { pt: "Premiação", en: "Award" },
  },
  {
    title: { pt: "FeCEAP", en: "FeCEAP" },
    description: {
      pt: "campeão público",
      en: "public champion",
    },
    tag: { pt: "Premiação", en: "Award" },
  },
  {
    title: { pt: "Desenvolvedor freelancer", en: "Freelance developer" },
    description: {
      pt: "clientes reais",
      en: "real clients",
    },
    tag: { pt: "Experiência", en: "Experience" },
  },
  {
    title: { pt: "5+ projetos full stack", en: "5+ full stack projects" },
    description: {
      pt: "do problema à entrega",
      en: "from problem to delivery",
    },
    tag: { pt: "Projetos", en: "Projects" },
  },
  {
    title: { pt: "Liderança na FAC", en: "Leadership at FAC" },
    description: {
      pt: "gestão de equipe na prática",
      en: "team management in practice",
    },
    tag: { pt: "Liderança", en: "Leadership" },
  },
];
