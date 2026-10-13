"use client";

import { useState, type CSSProperties } from "react";
import { Icone } from "./Icone";
import { Simbolo } from "./Logo";
import { linkWhats } from "@/content/site";

// Provador de identidade: o visitante digita o nome do negócio, escolhe cor, fonte,
// fundo e formato, e vê uma vitrine mudar na hora. Ao lado, os "tokens" da marca
// aparecem como um desenvolvedor os escreveria. No fim, as escolhas vão prontas
// para o WhatsApp da Synex.

const cores = [
  { nome: "Brasa", hex: "#E4572E" },
  { nome: "Mostarda", hex: "#E9A23B" },
  { nome: "Oliva", hex: "#5B7A3A" },
  { nome: "Vinho", hex: "#8E2C48" },
  { nome: "Oceano", hex: "#0E7490" },
  { nome: "Ouro", hex: "#C9A227" },
];

const fontes = [
  { nome: "Clássica", familia: "Fraunces", css: "'Fraunces', serif" },
  { nome: "Impacto", familia: "Bebas Neue", css: "'Bebas Neue', sans-serif" },
  { nome: "Moderna", familia: "Space Grotesk", css: "'Space Grotesk', sans-serif" },
  { nome: "Artesanal", familia: "Caveat", css: "'Caveat', cursive" },
];

const fundos = {
  escuro: { nome: "Escuro", fundo: "#141416", texto: "#F5F3EF", apoio: "rgba(245,243,239,.6)", linha: "rgba(245,243,239,.12)" },
  claro: { nome: "Claro", fundo: "#FAF7F2", texto: "#1B1B1F", apoio: "rgba(27,27,31,.6)", linha: "rgba(27,27,31,.12)" },
};

type Formato = "cardapio" | "site";
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
  const [formato, setFormato] = useState<Formato>("cardapio");

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
    "Oi! Testei o provador no site da Synex e quero conversar sobre a minha vitrine.",
    `Negócio: ${nome.trim() || "(não informado)"}`,
    `Formato: ${formato === "cardapio" ? "cardápio digital" : "site"}`,
    `Cor: ${cor.toUpperCase()}`,
    `Fonte: ${fonte.familia}`,
    `Fundo: ${f.nome.toLowerCase()}`,
  ].join("\n");

  return (
    <section className="sec sec--3 identidade" id="identidade">
      <div className="identidade__brilho" aria-hidden="true" />
      <div className="wrap identidade__grade">
        <div className="identidade__texto">
          <p className="rotulo">Identidade em primeiro lugar</p>
          <h2 className="titulo">Cada projeto começa pela sua marca.</h2>
          <p className="lead">
            Antes da primeira linha de código, reunimos o que faz o seu negócio ser reconhecido: logotipo, cores,
            fontes, fotos e o jeito como você fala com o cliente. A vitrine nasce dessas peças. Por isso nenhuma
            fica parecida com a outra.
          </p>
          <ul className="lista-losango identidade__lista">
            <li>Logotipo aplicado do jeito certo, com área de respiro e versões</li>
            <li>Paleta da marca nas cores de fundo, botões e destaques</li>
            <li>Fontes da sua identidade nos títulos e textos</li>
            <li>Fotos reais do produto e do espaço</li>
            <li>Textos no tom de voz da casa</li>
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
                placeholder="Ex.: Brasa & Pão"
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <fieldset className="grupo">
              <legend>Formato</legend>
              <div className="segmentos">
                {(["cardapio", "site"] as Formato[]).map((x) => (
                  <button
                    key={x}
                    type="button"
                    aria-pressed={formato === x}
                    className={formato === x ? "segmento segmento--on" : "segmento"}
                    onClick={() => setFormato(x)}
                  >
                    {x === "cardapio" ? "Cardápio" : "Site"}
                  </button>
                ))}
              </div>
            </fieldset>

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
              {formato === "cardapio" ? (
                <>
                  <div className="previa__topo">
                    <small>Cardápio</small>
                    <strong>{nomeExibido}</strong>
                  </div>
                  <div className="previa__abas">
                    <span className="on">Da casa</span>
                    <span>Porções</span>
                    <span>Bebidas</span>
                  </div>
                  <ul className="previa__itens">
                    <li>
                      <span>
                        <b>O mais pedido</b>
                        <small>Seu carro-chefe aparece primeiro</small>
                      </span>
                      <em>R$ 38</em>
                    </li>
                    <li>
                      <span>
                        <b>Especial da semana</b>
                        <small>Com foto e descrição completa</small>
                      </span>
                      <em>R$ 44</em>
                    </li>
                  </ul>
                  <span className="previa__acao">Pedir pelo WhatsApp</span>
                </>
              ) : (
                <>
                  <div className="previa__topo previa__topo--site">
                    <strong>{nomeExibido}</strong>
                    <small>Atendimento com hora marcada</small>
                  </div>
                  <div className="previa__faixa" />
                  <ul className="previa__servicos">
                    <li>Serviço principal</li>
                    <li>Pacote completo</li>
                    <li>Primeira visita</li>
                  </ul>
                  <span className="previa__acao">Agendar pelo WhatsApp</span>
                </>
              )}
              <span className="previa__assinatura">
                Vitrine por <Simbolo tamanho={10} recorte="var(--p-fundo)" /> synex
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
                {"\n"}
                <span className="tokens__p">--formato</span>:{" "}
                <span className="tokens__v">{formato === "cardapio" ? "cardapio" : "site"}</span>;
              </code>
            </pre>

            <a className="btn btn--primario provador__cta" href={linkWhats(mensagem)} target="_blank" rel="noopener">
              <Icone nome="whats" /> Montar a minha com a Synex
            </a>
            <p className="provador__nota">Suas escolhas vão junto na mensagem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
