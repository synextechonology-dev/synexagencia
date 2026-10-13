"use client";

import { useEffect, useState } from "react";
import { Marca } from "./Logo";
import { Icone } from "./Icone";
import { linkWhats } from "@/content/site";
import { projetosPublicados } from "@/content/projetos";

const links = [
  { href: "#formatos", rotulo: "Formatos" },
  { href: "#identidade", rotulo: "Identidade" },
  // sem projeto publicado a seção não aparece, então o link também sai
  ...(projetosPublicados.length > 0 ? [{ href: "#projetos", rotulo: "Projetos" }] : []),
  { href: "#automacao", rotulo: "Automação" },
  { href: "#processo", rotulo: "Processo" },
];

type Tema = "dark" | "light";

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [tema, setTema] = useState<Tema>("dark");
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const atual = document.documentElement.dataset.theme;
    setTema(atual === "light" ? "light" : "dark");
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  function trocarTema() {
    const novo: Tema = tema === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = novo;
    try {
      localStorage.setItem("synex-tema", novo);
    } catch {
      /* navegador sem armazenamento: o tema vale só nesta visita */
    }
    setTema(novo);
  }

  return (
    <header className={`cab${rolou ? " cab--rolou" : ""}${aberto ? " cab--aberto" : ""}`}>
      <div className="wrap cab__linha">
        <Marca />
        <nav className={`cab__nav${aberto ? " cab__nav--aberto" : ""}`} id="menu" aria-label="Seções do site">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setAberto(false)}>
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primario cab__nav-cta" href={linkWhats()} target="_blank" rel="noopener">
            <Icone nome="whats" /> Quero minha vitrine
          </a>
        </nav>
        <div className="cab__acoes">
          <button
            type="button"
            className="icone-btn"
            onClick={trocarTema}
            aria-label={tema === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
            title={tema === "dark" ? "Tema claro" : "Tema escuro"}
          >
            <Icone nome={tema === "dark" ? "sol" : "lua"} />
          </button>
          <a className="btn btn--primario cab__cta" href={linkWhats()} target="_blank" rel="noopener">
            Quero minha vitrine
          </a>
          <button
            type="button"
            className="icone-btn cab__menu"
            aria-expanded={aberto}
            aria-controls="menu"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto((v) => !v)}
          >
            <Icone nome={aberto ? "fechar" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
