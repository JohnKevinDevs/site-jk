import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { I18nProvider } from "@/lib/i18n/i18n-provider";
import { ThemeProvider } from "@/lib/theme/theme-provider";
import { ThemeScript } from "@/lib/theme/theme-script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Comunicação abre portas. Tecnologia constrói caminhos. Tecnologia com visão de negócio, comunicação e execução.";
const siteTitle = "John Kevin Alves Rodrigues - Técnico em Informática";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnkevin.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Site JK",
  authors: [{ name: "John Kevin Alves Rodrigues" }],
  creator: "John Kevin Alves Rodrigues",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/banner.png",
        width: 1600,
        height: 900,
        alt: "Banner do portfólio profissional Site JK de John Kevin Alves Rodrigues",
      },
    ],
    locale: "pt_BR",
    siteName: "Site JK",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: "Comunicação abre portas. Tecnologia constrói caminhos.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
