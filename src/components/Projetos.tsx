"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { projetosPublicados } from "@/content/projetos";

// Painéis que expandem: o projeto aberto ocupa a maior parte do espaço e os outros cedem lugar.
// O JavaScript só troca qual painel está aberto; a divisão do espaço é resolvida pelo CSS.
// Sem projeto publicado, a seção some (e o link "Projetos" do menu some junto, ver Cabecalho.tsx).

export function Projetos() {
  const [aberto, setAberto] = useState(0);

  if (projetosPublicados.length === 0) return null;

  // No computador o painel abre ao passar o mouse. No celular só abre ao tocar, para a página não pular.
  function aoPassarMouse(i: number) {
    if (window.matchMedia("(min-width: 900px) and (hover: hover)").matches) setAberto(i);
  }

  return (
    <section className="sec sec--1" id="projetos">
      <div className="wrap">
        <div className="cabeca">
          <p className="rotulo">Projetos</p>
          <h2 className="titulo">Projetos que já saíram daqui.</h2>
          <p className="lead">
            Dois clientes reais e um projeto conceito, criado do zero para mostrar como a Synex trabalha num segmento
            novo. Cada um nasceu de uma identidade diferente.
          </p>
        </div>

        <div className="projetos">
          {projetosPublicados.map((p, i) => {
            const ativo = i === aberto;
            return (
              <article
                className={ativo ? "proj proj--aberto" : "proj"}
                key={p.slug}
                data-pendente={p.pendente}
                onMouseEnter={() => aoPassarMouse(i)}
              >
                <button
                  type="button"
                  className="proj__capa"
                  style={{ "--proj-cor": p.cor } as CSSProperties}
                  aria-expanded={ativo}
                  aria-controls={`proj-${p.slug}`}
                  aria-label={`Ver o projeto ${p.nome}`}
                  onClick={() => setAberto(i)}
                >
                  {p.foto ? (
                    <Image
                      src={p.foto}
                      alt={p.fotoAlt ?? `Tela do projeto ${p.nome}`}
                      fill
                      sizes="(max-width: 899px) calc(100vw - 32px), 900px"
                      style={{ objectPosition: p.enquadramento }}
                    />
                  ) : (
                    <span className="proj__vazio" aria-hidden="true">
                      <span className="proj__fone">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="proj__aviso">Imagem do projeto</span>
                    </span>
                  )}
                </button>

                <div className="proj__corpo" id={`proj-${p.slug}`}>
                  <span className={`etiqueta etiqueta--${p.tipo}`}>
                    {p.tipo === "cliente" ? "Cliente" : "Projeto conceito"}
                  </span>
                  <h3>{p.nome}</h3>
                  <div className="proj__mais" inert={!ativo}>
                    <div>
                      <p className="proj__nicho">
                        {p.nicho}
                        {p.cidade ? `, ${p.cidade}` : ""}
                      </p>
                      <p>{p.resumo}</p>
                      <ul className="proj__entrega">
                        {p.entrega.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                      {p.link && (
                        <a className="btn btn--contorno proj__link" href={p.link} target="_blank" rel="noopener">
                          Ver o site no ar
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
