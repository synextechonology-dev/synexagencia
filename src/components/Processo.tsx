import { site } from "@/content/site";

// Etapas de um projeto. Aqui a numeração faz sentido porque é uma sequência real.

const etapas = [
  { titulo: "Conversa", texto: "Entendemos o negócio, o público e por onde o cliente chega até você hoje." },
  { titulo: "Identidade", texto: "Criamos a marca do zero ou organizamos a que você já tem: logo, cores, fontes e tom de voz." },
  { titulo: "Protótipo", texto: "Você vê o projeto funcionando no seu celular antes de aprovar." },
  { titulo: "Ajustes", texto: "Revisamos textos, fotos e detalhes com você, dentro das rodadas combinadas." },
  { titulo: "No ar", texto: "Publicamos, ligamos ao seu WhatsApp e entregamos tudo funcionando." },
];

export function Processo() {
  return (
    <section className="sec sec--3" id="processo">
      <div className="wrap">
        <div className="cabeca">
          <p className="rotulo">Processo</p>
          <h2 className="titulo">Como é trabalhar com a Synex.</h2>
          {site.prazoMedio ? (
            <p className="lead">Prazo médio de entrega: {site.prazoMedio}.</p>
          ) : (
            <p className="lead">
              Você fala direto com quem faz o projeto e aprova cada etapa antes de seguir. Prazo e rodadas de ajuste
              ficam combinados antes de começar, junto com o escopo.
            </p>
          )}
        </div>
        <ol className="etapas">
          {etapas.map((e, i) => (
            <li key={e.titulo} className="etapa">
              <span className="etapa__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="etapa__marco" aria-hidden="true" />
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
