import Image from "next/image";
import type { CSSProperties } from "react";
import { projetosPublicados } from "@/content/projetos";

// Sem projeto publicado, a seção some (e o link "Projetos" do menu some junto, ver Cabecalho.tsx).

export function Projetos() {
  if (projetosPublicados.length === 0) return null;

  return (
    <section className="sec sec--1" id="projetos">
      <div className="wrap">
        <div className="cabeca">
          <p className="rotulo">Projetos</p>
          <h2 className="titulo">Projetos em destaque.</h2>
          <p className="lead">
            Dois projetos reais, no ar, cada um feito a partir da identidade da própria marca. Abra no celular para
            ver como funcionam.
          </p>
        </div>

        <div className="projetos">
          {projetosPublicados.map((p) => (
            <article className="proj" key={p.slug} data-pendente={p.pendente}>
              <div className="proj__capa" style={{ "--proj-cor": p.cor } as CSSProperties}>
                {p.foto ? (
                  <Image
                    src={p.foto}
                    alt={p.fotoAlt ?? `Tela do projeto ${p.nome}`}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 32px), 580px"
                    style={{ objectPosition: p.enquadramento }}
                  />
                ) : (
                  <div className="proj__vazio" aria-hidden="true">
                    <span className="proj__fone">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="proj__aviso">Imagem do projeto</span>
                  </div>
                )}
              </div>
              <div className="proj__corpo">
                <p className="proj__meta">
                  <span className={`etiqueta etiqueta--${p.tipo}`}>
                    {p.tipo === "cliente" ? "Cliente" : "Projeto conceito"}
                  </span>
                  <span>
                    {p.nicho}
                    {p.cidade ? `, ${p.cidade}` : ""}
                  </span>
                </p>
                <h3>{p.nome}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
