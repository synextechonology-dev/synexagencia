"use client";

import { useEffect, useState } from "react";
import { Icone } from "./Icone";
import { linkWhats } from "@/content/site";

// Botão fixo de WhatsApp no celular. Aparece depois que a pessoa passa da primeira tela.
export function BotaoFlutuante() {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.7);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);
  return (
    <a
      className={`flutuante${visivel ? " flutuante--on" : ""}`}
      href={linkWhats()}
      target="_blank"
      rel="noopener"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
    >
      <Icone nome="whats" /> Quero minha vitrine
    </a>
  );
}

// Modo revisão: abra o site com ?revisao=1 para ver tudo que ainda falta preencher.
export function ModoRevisao() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("revisao") === "1") {
      document.documentElement.dataset.revisao = "1";
    }
  }, []);
  return null;
}
