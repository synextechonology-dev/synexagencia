"use client";

import { useState, type FormEvent } from "react";
import { Icone } from "./Icone";
import { linkWhats, mensagens, site } from "@/content/site";

// Briefing curto. Não precisa de servidor: o formulário monta a mensagem e abre o WhatsApp.
// Se um dia quiser guardar os contatos (CRM, planilha), troque o envio em `enviar`.

const segmentos = [
  "Hamburgueria",
  "Pizzaria",
  "Cafeteria",
  "Bar ou restaurante",
  "Barbearia",
  "Clínica ou consultório",
  "Outro",
];

const necessidades = ["Cardápio digital", "Site", "Automação de processos"];

type Erros = Partial<Record<"nome" | "negocio" | "precisa", string>>;

export function Contato() {
  const [erros, setErros] = useState<Erros>({});

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get("nome") || "").trim();
    const negocio = String(dados.get("negocio") || "").trim();
    const segmento = String(dados.get("segmento") || "");
    const cidade = String(dados.get("cidade") || "").trim();
    const instagram = String(dados.get("instagram") || "").trim();
    const precisa = dados.getAll("precisa").map(String);

    const novos: Erros = {};
    if (!nome) novos.nome = "Escreva seu nome para a gente saber com quem vai falar.";
    if (!negocio) novos.negocio = "Escreva o nome do negócio.";
    if (precisa.length === 0) novos.precisa = "Marque pelo menos uma opção.";
    setErros(novos);
    if (Object.keys(novos).length > 0) return;

    const texto = [
      `Oi! Meu nome é ${nome} e vim pelo site da Synex.`,
      `Negócio: ${negocio}${segmento ? ` (${segmento.toLowerCase()})` : ""}`,
      cidade && `Cidade: ${cidade}`,
      instagram && `Instagram: ${instagram}`,
      `Preciso de: ${precisa.join(", ").toLowerCase()}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(linkWhats(texto), "_blank", "noopener");
  }

  return (
    <section className="sec contato" id="contato">
      <div className="contato__brilho" aria-hidden="true" />
      <div className="wrap contato__grade">
        <div className="contato__texto">
          <p className="rotulo rotulo--claro">Contato</p>
          <h2 className="titulo">Vamos montar a sua?</h2>
          <p className="lead">
            Conte um pouco do seu negócio. A mensagem vai pronta para o nosso WhatsApp e a gente responde por lá.
          </p>
          <div className="contato__canais">
            <a href={linkWhats()} target="_blank" rel="noopener">
              <Icone nome="whats" /> {site.whatsappExibicao}
            </a>
            <a href={site.instagram} target="_blank" rel="noopener">
              <Icone nome="insta" /> {site.instagramUsuario}
            </a>
          </div>
          {site.agendaUrl ? (
            <p className="contato__agenda">
              Prefere marcar um horário?{" "}
              <a href={site.agendaUrl} target="_blank" rel="noopener">
                Agende 20 minutos com a gente
              </a>
              .
            </p>
          ) : (
            <p className="contato__agenda">
              Prefere marcar um horário para conversar?{" "}
              <a href={linkWhats(mensagens.agenda)} target="_blank" rel="noopener">
                Consulte os horários no WhatsApp
              </a>
              .
            </p>
          )}
        </div>

        <form className="briefing" onSubmit={enviar} noValidate>
          <div className="briefing__duplo">
            <label className="campo">
              <span>Seu nome</span>
              <input
                name="nome"
                autoComplete="name"
                aria-invalid={!!erros.nome}
                aria-describedby={erros.nome ? "erro-nome" : undefined}
              />
              {erros.nome && (
                <em className="campo__erro" id="erro-nome">
                  {erros.nome}
                </em>
              )}
            </label>
            <label className="campo">
              <span>Nome do negócio</span>
              <input
                name="negocio"
                autoComplete="organization"
                aria-invalid={!!erros.negocio}
                aria-describedby={erros.negocio ? "erro-negocio" : undefined}
              />
              {erros.negocio && (
                <em className="campo__erro" id="erro-negocio">
                  {erros.negocio}
                </em>
              )}
            </label>
          </div>
          <div className="briefing__duplo">
            <label className="campo">
              <span>Segmento</span>
              <select name="segmento" defaultValue="">
                <option value="" disabled>
                  Escolha um
                </option>
                {segmentos.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="campo">
              <span>Cidade</span>
              <input name="cidade" autoComplete="address-level2" />
            </label>
          </div>
          <label className="campo">
            <span>
              Instagram do negócio <small>(opcional)</small>
            </span>
            <input name="instagram" placeholder="@seunegocio" />
          </label>
          <fieldset className="grupo" aria-describedby={erros.precisa ? "erro-precisa" : undefined}>
            <legend>Do que você precisa?</legend>
            <div className="marcas">
              {necessidades.map((n) => (
                <label key={n} className="marcador">
                  <input type="checkbox" name="precisa" value={n} />
                  <span>{n}</span>
                </label>
              ))}
            </div>
            {erros.precisa && (
              <em className="campo__erro" id="erro-precisa">
                {erros.precisa}
              </em>
            )}
          </fieldset>
          <button type="submit" className="btn btn--claro btn--grande">
            <Icone nome="whats" /> Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
