import { site } from "@/content/site";

// Etapas de um projeto. Aqui a numeração faz sentido porque é uma sequência real.

const etapas = [
  { titulo: "Conversa", texto: "Entendemos o negócio, o público e por onde o cliente chega até você hoje." },
  { titulo: "Identidade", texto: "Reunimos logo, cores, fontes e fotos. Se faltar alguma peça, organizamos junto." },
  { titulo: "Protótipo", texto: "Você vê a vitrine funcionando no seu celular antes da versão final." },
  { titulo: "Ajustes", texto: "Revisamos textos, fotos e detalhes com você até ficar com a cara da casa." },
  { titulo: "No ar", texto: "Publicamos, ligamos ao seu WhatsApp e entregamos tudo funcionando." },
];

export function Processo() {
  return (
    <section className="sec sec--3" id="processo">
      <div className="wrap">
        <div className="cabeca">
          <p className="rotulo">Processo</p>
          <h2 className="titulo">Como um projeto anda.</h2>
          {site.prazoMedio ? (
            <p className="lead">Prazo médio de entrega: {site.prazoMedio}.</p>
          ) : (
            <p className="lead">
              O prazo é combinado em cada projeto, antes de começar. Você acompanha cada etapa e aprova antes de
              seguir para a próxima.
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
