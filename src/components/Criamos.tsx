"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icone, type NomeIcone } from "./Icone";
import { Simbolo } from "./Logo";
import { vitrines, type FormatoId } from "@/content/vitrines";
import { linkWhats, mensagens } from "@/content/site";

// Os quatro formatos como botões selecionáveis; o celular ao lado mostra uma marca fictícia para cada um.
// A troca automática roda enquanto ninguém interage: pausa com mouse ou foco, para de vez no primeiro clique
// e não roda com prefers-reduced-motion. A lista entra deslizando da esquerda e o celular da direita,
// uma vez só, quando a seção aparece na tela.

const formatos: { id: FormatoId; icone: NomeIcone; titulo: string; texto: string }[] = [
  {
    id: "institucional",
    icone: "site",
    titulo: "Site institucional",
    texto: "Para apresentar o negócio, os serviços e a equipe, e passar confiança para quem ainda não te conhece.",
  },
  {
    id: "landing",
    icone: "landing",
    titulo: "Landing page",
    texto: "Uma página só, com um objetivo só: vender um serviço, divulgar uma promoção ou lançar algo novo.",
  },
  {
    id: "cardapio",
    icone: "cardapio",
    titulo: "Cardápio digital",
    texto: "O cliente escolhe no celular e manda o pedido montado para o seu WhatsApp, para retirada ou entrega.",
  },
  {
    id: "loja",
    icone: "loja",
    titulo: "Loja virtual",
    texto: "Catálogo com fotos, preços e carrinho. O pedido chega pronto no seu WhatsApp.",
  },
];

export function Criamos() {
  const [ativa, setAtiva] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [escolheu, setEscolheu] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const semMovimento = useRef(false);
  const bloco = useRef<HTMLDivElement>(null);

  useEffect(() => {
    semMovimento.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const el = bloco.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([it]) => {
        if (!it.isIntersecting) return;
        setVisivel(true);
        obs.disconnect();
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (pausado || escolheu || semMovimento.current) return;
    const t = window.setInterval(() => setAtiva((i) => (i + 1) % formatos.length), 4200);
    return () => window.clearInterval(t);
  }, [pausado, escolheu]);

  const formato = formatos[ativa];
  const v = vitrines[formato.id];
  const estilo = {
    "--v-fundo": v.fundo,
    "--v-texto": v.texto,
    "--v-apoio": v.apoio,
    "--v-marca": v.marca,
    "--v-marca-texto": v.marcaTexto,
    "--v-fonte": v.fonte,
  } as CSSProperties;

  // Antes de a pessoa escolher, o formato ativo é só a demonstração girando: a mensagem é a geral.
  const mensagem = escolheu ? mensagens[formato.id] : mensagens.geral;

  return (
    <section className="sec sec--2" id="criamos">
      <div className="wrap">
        <div className="cabeca">
          <p className="rotulo">O que desenvolvemos</p>
          <h2 className="titulo">Um formato para cada jeito de vender.</h2>
          <p className="lead">Todos partem da sua marca e levam o cliente direto para o seu WhatsApp.</p>
        </div>

        <div
          ref={bloco}
          className={visivel ? "criamos criamos--run" : "criamos"}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocus={() => setPausado(true)}
          onBlur={() => setPausado(false)}
        >
          <div className="criamos__lista" role="group" aria-label="Formatos">
            {formatos.map((f, i) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={i === ativa}
                className={i === ativa ? "criamos__op criamos__op--on fx-slide-l" : "criamos__op fx-slide-l"}
                style={{ "--i": i } as CSSProperties}
                onClick={() => {
                  setAtiva(i);
                  setEscolheu(true);
                }}
              >
                <span className="icone-caixa">
                  <Icone nome={f.icone} tamanho={22} />
                </span>
                <span className="criamos__op-texto">
                  <strong>{f.titulo}</strong>
                  <small>{f.texto}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="criamos__palco fx-slide-r" style={{ "--i": 2 } as CSSProperties}>
            <div className="fone" style={estilo} aria-label={`Exemplo de ${v.nicho}: ${v.nome}`} role="img">
              <div className="fone__tela" key={v.nome}>
                <div className="fone__topo">
                  <span className="fone__nicho">{v.nicho}</span>
                  <strong className="fone__nome">{v.nome}</strong>
                </div>
                <div className="fone__abas">
                  {v.abas.map((a, i) => (
                    <span key={a} className={i === 0 ? "fone__aba fone__aba--on" : "fone__aba"}>
                      {a}
                    </span>
                  ))}
                </div>
                <ul className="fone__itens">
                  {v.itens.map((it) => (
                    <li key={it.nome}>
                      <span>
                        <b>{it.nome}</b>
                        <small>{it.detalhe}</small>
                      </span>
                      <em>{it.preco}</em>
                    </li>
                  ))}
                </ul>
                <span className="fone__acao">{v.acao}</span>
                <span className="fone__assinatura">
                  Criado por <Simbolo tamanho={11} recorte="var(--v-fundo)" /> synex
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="criamos__fim">
          <p>Não sabe qual formato é o seu? A gente indica na conversa.</p>
          <a className="btn btn--contorno" href={linkWhats(mensagem)} target="_blank" rel="noopener">
            <Icone nome="whats" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
