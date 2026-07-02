export type ContactLink = {
  id:
    | "linkedin"
    | "github"
    | "whatsapp"
    | "gmail"
    | "resume-view"
    | "resume-download";
  label: "LinkedIn" | "GitHub" | "WhatsApp" | "Gmail" | "Resume";
  href: string | null;
  external: boolean;
  status: "enabled" | "todo";
  download?: string;
  todoKey?: "whatsappNumber" | "resumePdf";
};

export const contact = {
  linkedin: "https://linkedin.com/in/john-kevin-alves",
  github: "https://github.com/JohnKevinDevs",
  email: "johnkevin.devs@gmail.com",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=johnkevin.devs@gmail.com",
  whatsapp: "https://wa.me/5511952140926",
  resume: "/cv-john-kevin.pdf",
} as const;

export const contactLinks: ContactLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: contact.linkedin,
    external: true,
    status: "enabled",
  },
  {
    id: "github",
    label: "GitHub",
    href: contact.github,
    external: true,
    status: "enabled",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: contact.whatsapp,
    external: true,
    status: "enabled",
  },
  {
    id: "gmail",
    label: "Gmail",
    href: contact.gmailCompose,
    external: true,
    status: "enabled",
  },
  {
    id: "resume-view",
    label: "Resume",
    href: contact.resume,
    external: true,
    status: "enabled",
  },
  {
    id: "resume-download",
    label: "Resume",
    href: contact.resume,
    external: false,
    status: "enabled",
    download: "curriculo-john-kevin.pdf",
  },
];
