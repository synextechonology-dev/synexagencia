// Fontes servidas pelo próprio site: o next/font baixa os arquivos no build, então o navegador
// do visitante não fala com os servidores do Google (e o IP dele não vai para lá).
// Cada fonte vira uma variável CSS; o globals.css e as vitrines usam essas variáveis.

import {
  Bebas_Neue,
  Caveat,
  Fraunces,
  JetBrains_Mono,
  Montserrat,
  Montserrat_Alternates,
  Space_Grotesk,
} from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-montserrat-alternates",
  display: "swap",
  fallback: ["Montserrat", "system-ui", "sans-serif"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
});

// Fraunces é fonte variável: sem `weight`, o next/font aceita o eixo de tamanho óptico (opsz) como antes.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["serif"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
  fallback: ["sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
  fallback: ["sans-serif"],
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
  fallback: ["cursive"],
});

export const classesDasFontes = [
  montserratAlternates,
  montserrat,
  jetbrainsMono,
  fraunces,
  bebasNeue,
  spaceGrotesk,
  caveat,
]
  .map((f) => f.variable)
  .join(" ");
