import { Icone } from "./Icone";
import { linkWhats, mensagens } from "@/content/site";

// Os dois formatos, separados pelo tipo de negócio e não pelo nome técnico do produto.

const formatos = [
  {
    id: "cardapio",
    icone: "cardapio" as const,
    titulo: "Cardápio digital",
    paraQuem: "Para hamburguerias, pizzarias, cafeterias e bares.",
    texto:
      "O cliente abre no celular, escolhe com calma e manda o pedido montado para o seu WhatsApp. Mudar preço ou item não exige reimprimir nada.",
    itens: [
      "Pedido montado pelo cliente e enviado pronto",
      "Categorias, tamanhos e adicionais",
      "Fotos dos pratos e do espaço",
      "Horário de funcionamento sempre à vista",
    ],
    acao: "Quero um cardápio",
    mensagem: mensagens.cardapio,
  },
  {
    id: "site",
    icone: "site" as const,
    titulo: "Site",
    paraQuem: "Para barbearias, clínicas, estúdios e serviços.",
    texto:
      "Mostra o seu trabalho, explica o que você faz e leva o cliente a marcar horário sem precisar perguntar duas vezes.",
    itens: [
      "Serviços e diferenciais explicados com clareza",
      "Fotos do espaço e da equipe",
      "Agendamento pelo WhatsApp",
      "Estrutura preparada para a busca do Google",
    ],
    acao: "Quero um site",
    mensagem: mensagens.site,
  },
];

export function Formatos() {
  return (
    <section className="sec sec--2" id="formatos">
      <div className="wrap">
        <div className="cabeca">
          <p className="rotulo">Formatos</p>
          <h2 className="titulo">Dois formatos, o mesmo objetivo: levar o cliente até você.</h2>
        </div>
        <div className="formatos">
          {formatos.map((f) => (
            <article className="formato" key={f.id}>
              <span className="icone-caixa">
                <Icone nome={f.icone} tamanho={22} />
              </span>
              <h3>{f.titulo}</h3>
              <p className="formato__quem">{f.paraQuem}</p>
              <p className="formato__texto">{f.texto}</p>
              <ul className="lista-losango">
                {f.itens.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a className="btn btn--contorno" href={linkWhats(f.mensagem)} target="_blank" rel="noopener">
                {f.acao}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
