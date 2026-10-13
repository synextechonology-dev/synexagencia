"use client";

import { useState, type CSSProperties } from "react";
import { projetos } from "@/content/projetos";

type Filtro = "todos" | "cliente" | "conceito";

const filtros: { id: Filtro; rotulo: string }[] = [
  { id: "todos", rotulo: "Todos" },
  { id: "cliente", rotulo: "Clientes" },
  { id: "conceito", rotulo: "Projetos conceito" },
];

export function Projetos() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const visiveis = projetos.filter((p) => p.publicar !== false);
  const lista = visiveis.filter((p) => filtro === "todos" || p.tipo === filtro);

  return (
    <section className="sec sec--1" id="projetos">
      <div className="wrap">
        <div className="cabeca cabeca--linha">
          <div>
            <p className="rotulo">Projetos</p>
            <h2 className="titulo">O que já saiu daqui.</h2>
            <p className="lead">
              Clientes reais e projetos conceito, que usamos para testar ideias novas. Cada um parte de uma
              identidade diferente.
            </p>
          </div>
          <div className="filtros" role="group" aria-label="Filtrar projetos">
            {filtros.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filtro === f.id}
                className={filtro === f.id ? "filtro filtro--on" : "filtro"}
                onClick={() => setFiltro(f.id)}
              >
                {f.rotulo}
              </button>
            ))}
          </div>
        </div>

        {lista.length === 0 ? (
          <p className="vazio">Nenhum projeto nesta categoria ainda. Escolha outro filtro para ver os demais.</p>
        ) : (
          <div className="projetos">
            {lista.map((p) => (
              <article className="proj" key={p.slug} data-pendente={p.pendente}>
                <div className="proj__capa" style={{ "--proj-cor": p.cor } as CSSProperties}>
                  {p.foto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.foto} alt={`Tela do projeto ${p.nome}`} loading="lazy" />
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
                    <a className="link-texto" href={p.link} target="_blank" rel="noopener">
                      Abrir o projeto
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
