import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "John Kevin Alves Rodrigues | Site JK",
  description:
    "Portfolio profissional de John Kevin Alves Rodrigues em construcao.",
  metadataBase: new URL("https://TODO"),
  openGraph: {
    title: "John Kevin Alves Rodrigues | Site JK",
    description:
      "Portfolio profissional de tecnologia, produto, negocio, comunicacao e execucao.",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Kevin Alves Rodrigues | Site JK",
    description:
      "Portfolio profissional de tecnologia, produto, negocio, comunicacao e execucao.",
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
      className={`${manrope.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
