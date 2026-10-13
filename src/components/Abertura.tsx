"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Simbolo } from "./Logo";
import { Icone } from "./Icone";
import { vitrines } from "@/content/vitrines";
import { linkWhats } from "@/content/site";

// Primeira tela. O momento de impacto: as duas peças do S se encaixam no losango
// e o celular ao lado troca de marca a cada poucos segundos, mostrando a mesma
// vitrine vestindo três identidades diferentes.

export function Abertura() {
  const [ativa, setAtiva] = useState(0);
  const [pausado, setPausado] = useState(false);
  const semMovimento = useRef(false);

  useEffect(() => {
    semMovimento.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (pausado || semMovimento.current) return;
    const t = window.setInterval(() => setAtiva((i) => (i + 1) % vitrines.length), 4200);
    return () => window.clearInterval(t);
  }, [pausado]);

  const v = vitrines[ativa];
  const estilo = {
    "--v-fundo": v.fundo,
    "--v-texto": v.texto,
    "--v-apoio": v.apoio,
    "--v-marca": v.marca,
    "--v-marca-texto": v.marcaTexto,
    "--v-fonte": v.fonte,
  } as CSSProperties;

  return (
    <section className="abertura sec sec--1" id="topo">
      <div className="abertura__brilho" aria-hidden="true" />
      <div className="wrap abertura__grade">
        <div className="abertura__texto">
          <p className="rotulo">Vitrines digitais sob medida</p>
          <h1 className="abertura__titulo">Hoje a primeira visita ao seu negócio acontece no celular.</h1>
          <p className="abertura__sub">
            A Synex cria a sua vitrine digital, com site ou cardápio feitos a partir da sua marca, para que essa
            visita termine em pedido no seu WhatsApp.
          </p>
          <div className="abertura__acoes">
            <a className="btn btn--primario btn--grande" href={linkWhats()} target="_blank" rel="noopener">
              <Icone nome="whats" /> Quero minha vitrine
            </a>
            <a className="link-texto" href="#contato">
              Prefiro mandar os detalhes
            </a>
          </div>
        </div>

        <div
          className="palco"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocus={() => setPausado(true)}
          onBlur={() => setPausado(false)}
        >
          <Simbolo className="palco__s" tamanho="100%" recorte="var(--bg-1)" animado />

          <div className="fone" style={estilo} aria-label={`Exemplo de vitrine: ${v.nome}, ${v.nicho}`} role="img">
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
                Vitrine por <Simbolo tamanho={11} recorte="var(--v-fundo)" /> synex
              </span>
            </div>
          </div>

          <div className="palco__trocas" role="group" aria-label="Ver outro exemplo de vitrine">
            {vitrines.map((x, i) => (
              <button
                key={x.nome}
                type="button"
                aria-pressed={i === ativa}
                className={i === ativa ? "troca troca--on" : "troca"}
                onClick={() => setAtiva(i)}
              >
                {x.nicho}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
