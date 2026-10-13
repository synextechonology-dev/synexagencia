import { Icone, type NomeIcone } from "./Icone";
import { linkWhats, mensagens } from "@/content/site";

// Automação de processos. Linhas de fluxo do manual (seção 05): nós conectados pelo núcleo.
// PENDENTE: confirmar quais destas automações a Synex entrega hoje e retirar as que não entrega.

const processos: { icone: NomeIcone; titulo: string; texto: string }[] = [
  {
    icone: "financeiro",
    titulo: "Financeiro",
    texto: "Contas a pagar e a receber organizadas, cobrança lembrada pelo WhatsApp e o caixa do dia conferido sem planilha manual.",
  },
  {
    icone: "estoque",
    titulo: "Controle de estoque",
    texto: "Baixa a cada venda, aviso quando um insumo está acabando e a lista de compras pronta antes de faltar.",
  },
  {
    icone: "pedidos",
    titulo: "Pedidos",
    texto: "Pedidos do site entram numa fila com status para a cozinha e aviso automático para o cliente.",
  },
  {
    icone: "agenda",
    titulo: "Agenda",
    texto: "Confirmação e lembrete de horário enviados sozinhos, para reduzir falta e horário vago.",
  },
  {
    icone: "atendimento",
    titulo: "Atendimento",
    texto: "Respostas para as perguntas de sempre: horário, endereço, cardápio e formas de pagamento.",
  },
  {
    icone: "relatorio",
    titulo: "Relatórios",
    texto: "Vendas, produtos mais pedidos e ticket médio resumidos e entregues no seu celular.",
  },
];

const caminhos = {
  entrada: "M70 150 H230",
  cima: "M290 150 C370 150 380 52 452 52",
  meio: "M290 150 H452",
  baixo: "M290 150 C370 150 380 248 452 248",
};

export function Automacao() {
  return (
    <section className="sec sec--2 pontos" id="automacao">
      <div className="wrap">
        <div className="automacao__topo">
          <div className="cabeca">
            <p className="rotulo">Automação de processos</p>
            <h2 className="titulo">Também automatizamos o que toma o seu tempo.</h2>
            <p className="lead">
              Muita rotina ainda depende de caderno, planilha ou memória. A gente mapeia o processo, mostra o que
              pode rodar sozinho e entrega o fluxo funcionando. Cada automação é orçada depois de entender como o
              seu negócio trabalha.
            </p>
          </div>

          <figure className="fluxo">
            <div className="fluxo__mapa">
              <svg viewBox="0 0 520 300" className="fluxo__linhas" aria-hidden="true" focusable="false">
                <defs>
                  {/* userSpaceOnUse: com as unidades padrão, o gradiente some nas linhas retas (caixa de altura zero) */}
                  <linearGradient id="grad-fluxo" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="520" y2="300">
                    <stop offset="0" stopColor="#93C5FD" />
                    <stop offset=".5" stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#1E3A8A" />
                  </linearGradient>
                </defs>
                {Object.entries(caminhos).map(([k, d]) => (
                  <path key={k} id={`caminho-${k}`} d={d} className="fluxo__traco" />
                ))}
                <g className="fluxo__pulsos">
                  <circle r="3.5">
                    <animateMotion dur="3.2s" repeatCount="indefinite" begin="0s">
                      <mpath href="#caminho-entrada" />
                    </animateMotion>
                  </circle>
                  {(["cima", "meio", "baixo"] as const).map((k, i) => (
                    <circle r="3.5" key={k}>
                      <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${1.1 + i * 0.25}s`}>
                        <mpath href={`#caminho-${k}`} />
                      </animateMotion>
                    </circle>
                  ))}
                </g>
              </svg>

              <span className="no no--venda" style={{ left: "7%", top: "50%" }}>
                <Icone nome="venda" />
                <small>Venda no site</small>
              </span>
              <span className="nucleo" style={{ left: "50%", top: "50%" }} aria-hidden="true" />
              <span className="no" style={{ left: "92%", top: "17.3%" }}>
                <Icone nome="estoque" />
                <small>Estoque</small>
              </span>
              <span className="no" style={{ left: "92%", top: "50%" }}>
                <Icone nome="financeiro" />
                <small>Financeiro</small>
              </span>
              <span className="no" style={{ left: "92%", top: "82.7%" }}>
                <Icone nome="relatorio" />
                <small>Relatório</small>
              </span>
            </div>

            <figcaption className="registro">
              <code>
                <span>pedido #0142 recebido</span>
                <span>estoque: pão brioche, menos 2</span>
                <span>financeiro: R$ 82,00 lançado no caixa</span>
                <span>relatório do dia atualizado</span>
              </code>
            </figcaption>
          </figure>
        </div>

        <ul className="processos">
          {processos.map((p) => (
            <li key={p.titulo}>
              <span className="icone-caixa">
                <Icone nome={p.icone} />
              </span>
              <div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="automacao__fim">
          <p>Tem uma tarefa que se repete todo dia? Conta pra gente qual é.</p>
          <a className="btn btn--contorno" href={linkWhats(mensagens.automacao)} target="_blank" rel="noopener">
            Falar sobre automação
          </a>
        </div>
      </div>
    </section>
  );
}
