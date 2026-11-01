import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/content/site";
import { classesDasFontes } from "./fontes";
import { AvisoPrivacidade } from "@/components/AvisoPrivacidade";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Synex | Sites e Automação em Santa Cruz do Rio Pardo",
  description: site.descricao,
  openGraph: {
    title: "Synex | Sites e Automação em Santa Cruz do Rio Pardo",
    description: site.descricao,
    url: site.url,
    siteName: "Synex",
    locale: "pt_BR",
    type: "website",
    // PENDENTE: imagem de compartilhamento 1200x630 em public/og.png
    // images: ["/og.png"],
  },
  twitter: {
    card: "summary",
    title: "Synex | Sites e Automação em Santa Cruz do Rio Pardo",
    description: site.descricao,
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" className={classesDasFontes} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
        <noscript>
          <style>{".fx-slide-l,.fx-slide-r{opacity:1;transform:none}"}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }} />
      </head>
      <body>
        {children}
        <AvisoPrivacidade />
      </body>
    </html>
  );
}
