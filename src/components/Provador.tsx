"use client";

import { useState, type CSSProperties } from "react";
import { Icone } from "./Icone";
import { Simbolo } from "./Logo";
import { linkWhats } from "@/content/site";

// Provador de identidade: o visitante digita o nome do negócio, escolhe cor, fonte,
// fundo, e vê um site mudar na hora. Ao lado, os "tokens" da marca
// aparecem como um desenvolvedor os escreveria. No fim, as escolhas vão prontas
// para o WhatsApp da Synex.

const cores = [
  { nome: "Terracota", hex: "#E4572E" },
  { nome: "Mostarda", hex: "#E9A23B" },
  { nome: "Oliva", hex: "#5B7A3A" },
  { nome: "Vinho", hex: "#8E2C48" },
  { nome: "Oceano", hex: "#0E7490" },
  { nome: "Ouro", hex: "#C9A227" },
];

const fontes = [
  { nome: "Clássica", familia: "Fraunces", css: "var(--font-fraunces)" },
  { nome: "Impacto", familia: "Bebas Neue", css: "var(--font-bebas-neue)" },
  { nome: "Moderna", familia: "Space Grotesk", css: "var(--font-space-grotesk)" },
  { nome: "Artesanal", familia: "Caveat", css: "var(--font-caveat)" },
];

const fundos = {
  escuro: { nome: "Escuro", fundo: "#141416", texto: "#F5F3EF", apoio: "rgba(245,243,239,.6)", linha: "rgba(245,243,239,.12)" },
  claro: { nome: "Claro", fundo: "#FAF7F2", texto: "#1B1B1F", apoio: "rgba(27,27,31,.6)", linha: "rgba(27,27,31,.12)" },
};

type Fundo = keyof typeof fundos;

function luminancia(hex: string) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function textoSobre(hex: string) {
  return luminancia(hex) > 0.38 ? "#141416" : "#FFFFFF";
}

export function Provador() {
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState(cores[0].hex);
  const [fonte, setFonte] = useState(fontes[0]);
  const [fundo, setFundo] = useState<Fundo>("escuro");

  const nomeExibido = nome.trim() || "Seu negócio";
  const f = fundos[fundo];

  const estilo = {
    "--p-fundo": f.fundo,
    "--p-texto": f.texto,
    "--p-apoio": f.apoio,
    "--p-linha": f.linha,
    "--p-marca": cor,
    "--p-marca-texto": textoSobre(cor),
    "--p-fonte": fonte.css,
  } as CSSProperties;

  const mensagem = [
    "Oi! Testei o provador no site da Synex e quero criar a minha marca.",
    `Negócio: ${nome.trim() || "(não informado)"}`,
    `Cor: ${cor.toUpperCase()}`,
    `Fonte: ${fonte.familia}`,
    `Fundo: ${f.nome.toLowerCase()}`,
  ].join("\n");

  return (
    <section className="sec sec--3 identidade" id="identidade">
      <div className="identidade__brilho" aria-hidden="true" />
      <div className="wrap identidade__grade">
        <div className="identidade__texto">
          <p className="rotulo">Identidade visual</p>
          <h2 className="titulo">Antes do site, vem a marca.</h2>
          <p className="lead">
            Se o seu negócio ainda não tem identidade, criamos do zero. Se já tem, organizamos e aplicamos com
            cuidado. É a marca que faz o cliente lembrar de você depois de fechar a página.
          </p>
          <ul className="lista-losango identidade__lista">
            <li>Logotipo e suas versões</li>
            <li>Paleta de cores</li>
            <li>Tipografia para títulos e textos</li>
            <li>Tom de voz: o jeito como a marca fala</li>
            <li>Manual da marca, para usar no site, no Instagram, na fachada e no material impresso</li>
          </ul>
        </div>

        <div className="provador">
          <div className="provador__controles">
            <p className="provador__instrucao">Teste com a sua marca</p>

            <label className="campo">
              <span>Nome do seu negócio</span>
              <input
                type="text"
                value={nome}
                maxLength={28}
                placeholder="Ex.: Studio Lume"
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <fieldset className="grupo">
              <legend>Cor da marca</legend>
              <div className="amostras">
                {cores.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    className="amostra"
                    style={{ background: c.hex }}
                    aria-pressed={cor === c.hex}
                    aria-label={c.nome}
                    title={c.nome}
                    onClick={() => setCor(c.hex)}
                  />
                ))}
                <label className="amostra amostra--livre" title="Escolher outra cor">
                  <Icone nome="mais" tamanho={16} />
                  <span className="sr">Escolher outra cor</span>
                  <input type="color" value={cor} onChange={(e) => setCor(e.target.value)} />
                </label>
              </div>
            </fieldset>

            <fieldset className="grupo">
              <legend>Fonte dos títulos</legend>
              <div className="fontes">
                {fontes.map((x) => (
                  <button
                    key={x.familia}
                    type="button"
                    aria-pressed={fonte.familia === x.familia}
                    className={fonte.familia === x.familia ? "fonte-op fonte-op--on" : "fonte-op"}
                    onClick={() => setFonte(x)}
                  >
                    <span style={{ fontFamily: x.css }}>Aa</span>
                    <small>{x.nome}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="grupo">
              <legend>Fundo</legend>
              <div className="segmentos">
                {(Object.keys(fundos) as Fundo[]).map((x) => (
                  <button
                    key={x}
                    type="button"
                    aria-pressed={fundo === x}
                    className={fundo === x ? "segmento segmento--on" : "segmento"}
                    onClick={() => setFundo(x)}
                  >
                    {fundos[x].nome}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="provador__saida">
            <div className="previa" style={estilo} aria-live="polite">
              <div className="previa__topo">
                <small>Seu site</small>
                <strong>{nomeExibido}</strong>
              </div>
              <p className="previa__frase">O que você faz, em uma frase.</p>
              <div className="previa__faixa" />
              <ul className="previa__servicos">
                <li>Produto ou serviço principal</li>
                <li>O diferencial da casa</li>
                <li>Onde encontrar você</li>
              </ul>
              <span className="previa__acao">Falar no WhatsApp</span>
              <span className="previa__assinatura">
                Criado por <Simbolo tamanho={10} recorte="var(--p-fundo)" /> synex
              </span>
            </div>

            <pre className="tokens" aria-label="Tokens da sua marca">
              <code>
                <span className="tokens__c">{"/* tokens da sua marca */"}</span>
                {"\n"}
                <span className="tokens__p">--marca</span>: <span className="tokens__v">{cor.toUpperCase()}</span>;
                {"\n"}
                <span className="tokens__p">--fundo</span>: <span className="tokens__v">{f.fundo}</span>;
                {"\n"}
                <span className="tokens__p">--titulos</span>: <span className="tokens__v">&quot;{fonte.familia}&quot;</span>;
              </code>
            </pre>

            <a className="btn btn--primario provador__cta" href={linkWhats(mensagem)} target="_blank" rel="noopener">
              <Icone nome="whats" /> Criar a minha marca com a Synex
            </a>
            <p className="provador__nota">Suas escolhas vão junto na mensagem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
