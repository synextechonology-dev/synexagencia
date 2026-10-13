import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Synex | Sites e cardápios digitais sob medida",
  description: site.descricao,
  openGraph: {
    title: "Synex | Sites e cardápios digitais sob medida",
    description: site.descricao,
    url: site.url,
    siteName: "Synex",
    locale: "pt_BR",
    type: "website",
    // PENDENTE: imagem de compartilhamento 1200x630 em public/og.png
    // images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111214" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

// Aplica o tema salvo antes da página aparecer, para não piscar a cor errada.
const temaInicial = `(function(){try{var t=localStorage.getItem('synex-tema');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Synex",
  description: site.descricao,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  address: { "@type": "PostalAddress", addressLocality: "Santa Cruz do Rio Pardo", addressRegion: "SP", addressCountry: "BR" },
  sameAs: [site.instagram],
};

const fontes =
  "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600&family=Montserrat:wght@400;500;600&family=JetBrains+Mono:wght@400&family=Fraunces:opsz,wght@9..144,600&family=Bebas+Neue&family=Space+Grotesk:wght@500;600&family=Caveat:wght@700&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={fontes} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
