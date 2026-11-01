import { Simbolo } from "./Logo";
import { Icone, type NomeIcone } from "./Icone";
import { linkWhats } from "@/content/site";

// Primeira tela. O momento de impacto: as duas peças do S se encaixam no losango.
// Os três motivos respondem "por que ter um site?" sem cards: ícone, título e uma frase.

const motivos: { icone: NomeIcone; titulo: string; texto: string }[] = [
  {
    icone: "lupa",
    titulo: "Pode ser encontrado no Google",
    texto: "Quem procura o que você vende tem onde te achar, além do Instagram.",
  },
  {
    icone: "chave",
    titulo: "É seu de verdade",
    texto: "Rede social muda as regras. O seu site continua no ar do jeito que você quer.",
  },
  {
    icone: "selo",
    titulo: "Passa confiança",
    texto: "Endereço próprio e marca bem aplicada mostram que o negócio é sério.",
  },
];

export function Abertura() {
  return (
    <section className="abertura sec sec--1" id="topo">
      <div className="abertura__brilho" aria-hidden="true" />
      <div className="wrap abertura__grade">
        <div className="abertura__texto">
          <p className="rotulo">Por que ter um site?</p>
          <h1 className="abertura__titulo">Porque o cliente pesquisa antes de chamar, e decide pelo que encontra.</h1>
          <p className="abertura__sub">
            Criamos a sua marca e tudo onde ela aparece: site, cardápio, loja ou landing page. Uma identidade só,
            do logo ao botão do WhatsApp.
          </p>

          <ul className="motivos">
            {motivos.map((m) => (
              <li key={m.titulo}>
                <span className="icone-caixa">
                  <Icone nome={m.icone} />
                </span>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
              </li>
            ))}
          </ul>

          <div className="abertura__acoes">
            <a className="btn btn--primario btn--grande" href={linkWhats()} target="_blank" rel="noopener">
              <Icone nome="whats" /> Pedir orçamento
            </a>
            <a className="link-texto" href="#contato">
              Prefiro mandar os detalhes
            </a>
          </div>

          <p className="diferenciais">
            <span>Pago uma vez, mensalidade só se quiser</span>
            <span>Você aprova no celular antes</span>
            <span>Fala direto com quem faz</span>
          </p>
        </div>

        <div className="palco" aria-hidden="true">
          <Simbolo className="palco__s" tamanho="100%" recorte="var(--bg-1)" animado />
        </div>
      </div>
    </section>
  );
}
