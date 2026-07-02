import type { Locale } from "@/lib/i18n/dictionaries";

export type LocalizedText = Record<Locale, string>;

export const profile = {
  name: "John Kevin Alves Rodrigues",
  shortName: "John Kevin",
  initials: "JK",
  location: "São Paulo, BR",
  role: {
    pt: "Técnico em Informática",
    en: "Computing Technician",
  } satisfies LocalizedText,
  positioning: {
    pt: "Tecnologia, produto, negócio, comunicação e execução.",
    en: "Technology, product, business, communication and execution.",
  } satisfies LocalizedText,
  brandPhrase: {
    pt: "Comunicação abre portas. Tecnologia constrói caminhos.",
    en: "Communication opens doors. Technology builds the path.",
  } satisfies LocalizedText,
  availability: {
    pt: "Disponível para oportunidades",
    en: "Open to opportunities",
  } satisfies LocalizedText,
  assets: {
    photo: "/photo.png",
    banner: "/banner.png",
    resume: "/cv-john-kevin.pdf",
  },
} as const;
