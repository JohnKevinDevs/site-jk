import type { LocalizedText } from "./profile";

export type TimelineYear = "2024" | "2025" | "2026";

export type TimelineCard = {
  title: LocalizedText;
  body: LocalizedText;
  chips: LocalizedText[];
  emphasis?: boolean;
};

export type TimelineItem = {
  year: TimelineYear;
  title: LocalizedText;
  body: LocalizedText;
  chips: LocalizedText[];
  cards: TimelineCard[];
  highlight?: boolean;
};

export const timelineYears: TimelineYear[] = ["2024", "2025", "2026"];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: {
      pt: "Base técnica e mentalidade de construção",
      en: "Technical foundation and builder mindset",
    },
    body: {
      pt: "Início da base técnica, com foco em lógica, programação, desenvolvimento web e primeiros projetos práticos. Foi o ano de entender que tecnologia não é apenas escrever código, mas construir soluções com clareza, organização e propósito.",
      en: "The start of the technical foundation, focused on logic, programming, web development and first practical projects. It was the year of understanding that technology is not only writing code, but building solutions with clarity, organization and purpose.",
    },
    chips: [
      { pt: "CEAP", en: "CEAP" },
      { pt: "Lógica", en: "Logic" },
      { pt: "Web", en: "Web" },
      { pt: "Banco de dados", en: "Databases" },
    ],
    cards: [
      {
        title: { pt: "Fundamentos técnicos", en: "Technical fundamentals" },
        body: {
          pt: "Base em lógica de programação, desenvolvimento web, banco de dados e primeiros sistemas.",
          en: "Foundation in programming logic, web development, databases and first systems.",
        },
        chips: [
          { pt: "Lógica", en: "Logic" },
          { pt: "HTML/CSS/JS", en: "HTML/CSS/JS" },
          { pt: "Java", en: "Java" },
        ],
      },
      {
        title: { pt: "Primeiros projetos práticos", en: "First practical projects" },
        body: {
          pt: "Aplicação dos estudos em projetos menores, começando a transformar aprendizado em entrega.",
          en: "Application of studies in smaller projects, beginning to turn learning into delivery.",
        },
        chips: [
          { pt: "Projetos", en: "Projects" },
          { pt: "Prática", en: "Practice" },
          { pt: "Entrega", en: "Delivery" },
        ],
      },
      {
        title: { pt: "Base CEAP", en: "CEAP foundation" },
        body: {
          pt: "Consolidação no Técnico em Informática, conectando estudo, responsabilidade e prática em tecnologia.",
          en: "Consolidation in the Computing Technician program, connecting study, responsibility and practical technology.",
        },
        chips: [
          { pt: "Técnico", en: "Technician" },
          { pt: "CEAP", en: "CEAP" },
          { pt: "Base", en: "Foundation" },
        ],
      },
      {
        title: { pt: "Mentalidade de construção", en: "Builder mindset" },
        body: {
          pt: "Percepção de que tecnologia exige clareza, organização, comunicação e responsabilidade.",
          en: "Realization that technology requires clarity, organization, communication and responsibility.",
        },
        chips: [
          { pt: "Clareza", en: "Clarity" },
          { pt: "Comunicação", en: "Communication" },
          { pt: "Organização", en: "Organization" },
        ],
      },
    ],
  },
  {
    year: "2025",
    title: {
      pt: "Projetos, reconhecimento e primeira virada profissional",
      en: "Projects, recognition and first professional shift",
    },
    body: {
      pt: "Ano de virada: projetos começaram a ganhar maturidade, reconhecimento e contato com problemas reais. A tecnologia passou a se conectar mais diretamente com comunicação, produto, negócio e entrega.",
      en: "A turning-point year: projects began gaining maturity, recognition and contact with real problems. Technology became more directly connected to communication, product, business and delivery.",
    },
    chips: [
      { pt: "FeCEAP", en: "FeCEAP" },
      { pt: "Apresentações", en: "Presentations" },
      { pt: "Freelancer", en: "Freelancer" },
      { pt: "Produto", en: "Product" },
    ],
    cards: [
      {
        title: { pt: "Projetos com mais maturidade", en: "More mature projects" },
        body: {
          pt: "Evolução em projetos técnicos, apresentações e construção de soluções mais completas.",
          en: "Evolution in technical projects, presentations and the building of more complete solutions.",
        },
        chips: [
          { pt: "Projetos técnicos", en: "Technical projects" },
          { pt: "Soluções", en: "Solutions" },
        ],
      },
      {
        title: { pt: "Reconhecimento e exposição", en: "Recognition and exposure" },
        body: {
          pt: "Participação em projetos e eventos que trouxeram validação, feedback e mais confiança.",
          en: "Participation in projects and events that brought validation, feedback and more confidence.",
        },
        chips: [
          { pt: "FeCEAP", en: "FeCEAP" },
          { pt: "Feedback", en: "Feedback" },
          { pt: "Validação", en: "Validation" },
        ],
      },
      {
        title: {
          pt: "Primeiros contatos com problemas reais",
          en: "First contact with real problems",
        },
        body: {
          pt: "Experiências mais próximas de cliente, necessidade real, comunicação profissional e entrega com responsabilidade.",
          en: "Experiences closer to clients, real needs, professional communication and responsible delivery.",
        },
        chips: [
          { pt: "Cliente real", en: "Real client" },
          { pt: "Comunicação", en: "Communication" },
          { pt: "Entrega", en: "Delivery" },
        ],
      },
      {
        title: { pt: "Mentalidade de portfólio", en: "Portfolio mindset" },
        body: {
          pt: "Projetos passam a comunicar evolução, repertório técnico e capacidade de transformar estudo em produto.",
          en: "Projects begin to communicate growth, technical range and the ability to turn study into product.",
        },
        chips: [
          { pt: "Portfólio", en: "Portfolio" },
          { pt: "Produto", en: "Product" },
          { pt: "Entrega", en: "Delivery" },
        ],
      },
    ],
  },
  {
    year: "2026",
    title: {
      pt: "Liderança, startup e execução em escala",
      en: "Leadership, startup and execution at scale",
    },
    body: {
      pt: "Ano de consolidação da execução: liderança da FluxON, construção de MVPs, projetos reais, mentorias e iniciativas dentro do CEAP. A tecnologia passou a ser tratada como ponte entre produto, negócio, comunicação e impacto.",
      en: "A year of execution consolidation: leadership at FluxON, MVPs, real projects, mentorships and initiatives within CEAP. Technology became a bridge between product, business, communication and impact.",
    },
    chips: [
      { pt: "FluxON", en: "FluxON" },
      { pt: "MVPs", en: "MVPs" },
      { pt: "FAC", en: "FAC" },
      { pt: "Mentorias", en: "Mentorships" },
    ],
    cards: [
      {
        title: { pt: "CEO da FluxON", en: "CEO of FluxON" },
        body: {
          pt: "Fundação e liderança da FluxON, startup de agendamento e controle de atendimentos para negócios de serviço.",
          en: "Founding and leading FluxON, a startup for scheduling and service control for service-based businesses.",
        },
        chips: [
          { pt: "CEO", en: "CEO" },
          { pt: "Produto", en: "Product" },
          { pt: "MVP", en: "MVP" },
        ],
      },
      {
        title: { pt: "MVPs e produtos digitais", en: "MVPs and digital products" },
        body: {
          pt: "Construção e direção de projetos como SkillForge, Sistema JK, BID/Copa CEAP, LevelCorp e Site JK.",
          en: "Building and directing projects such as SkillForge, Sistema JK, BID/Copa CEAP, LevelCorp and Site JK.",
        },
        chips: [
          { pt: "Produtos digitais", en: "Digital products" },
          { pt: "Portfólio", en: "Portfolio" },
        ],
      },
      {
        title: {
          pt: "Comunidade, mentorias e liderança",
          en: "Community, mentorships and leadership",
        },
        body: {
          pt: "Atuação em iniciativas como FAC e conversas com mentores e profissionais, ampliando visão de tecnologia, produto e negócio.",
          en: "Work in initiatives such as FAC and conversations with mentors and professionals, expanding the view of technology, product and business.",
        },
        chips: [
          { pt: "FAC", en: "FAC" },
          { pt: "Mentorias", en: "Mentorships" },
          { pt: "Negócio", en: "Business" },
        ],
      },
      {
        title: { pt: "Próximo capítulo", en: "Next chapter" },
        body: {
          pt: "Continuidade da trajetória com foco em produto, tecnologia, execução e impacto real.",
          en: "Continuing the journey with focus on product, technology, execution and real impact.",
        },
        chips: [
          { pt: "Tecnologia", en: "Technology" },
          { pt: "Execução", en: "Execution" },
          { pt: "Impacto real", en: "Real impact" },
        ],
        emphasis: true,
      },
    ],
    highlight: true,
  },
];
