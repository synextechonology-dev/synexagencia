"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Aviso informativo, não um bloqueio de consentimento: o site não usa cookies de rastreamento.
// Se um dia entrar Analytics, Pixel ou outra ferramenta de rastreamento, isto precisa virar
// um pedido de consentimento de verdade (ver PENDENCIAS.md).

const CHAVE = "synex-aviso-privacidade";

export function AvisoPrivacidade() {
  const [visivel, setVisivel] = useState(false);

  // só decide depois de montar no cliente: sem piscar no carregamento e sem erro de hidratação
  useEffect(() => {
    try {
      if (localStorage.getItem(CHAVE) === "1") return;
    } catch {
      /* sem armazenamento: o aviso aparece e some só nesta visita */
    }
    setVisivel(true);
  }, []);

  // o botão flutuante do WhatsApp se esconde enquanto o aviso está na tela (ver globals.css)
  useEffect(() => {
    if (!visivel) return;
    const raiz = document.documentElement;
    raiz.dataset.aviso = "1";
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && setVisivel(false);
    window.addEventListener("keydown", aoTeclar);
    return () => {
      window.removeEventListener("keydown", aoTeclar);
      delete raiz.dataset.aviso;
    };
  }, [visivel]);

  function entendi() {
    try {
      localStorage.setItem(CHAVE, "1");
    } catch {
      /* navegador sem armazenamento: o aviso some só nesta visita */
    }
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div className="aviso" role="region" aria-label="Aviso de privacidade">
      <p>
        Este site não usa cookies de rastreamento. Guardamos só a sua preferência de tema, no seu navegador.{" "}
        <Link href="/privacidade">Saiba mais</Link>
      </p>
      <button type="button" className="btn btn--contorno aviso__ok" onClick={entendi}>
        Entendi
      </button>
    </div>
  );
}
