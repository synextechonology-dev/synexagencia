// Perguntas frequentes. `pendente` aparece no modo revisão (?revisao=1).

const duvidas: { p: string; r: string; pendente?: string }[] = [
  {
    p: "Quanto custa?",
    r: "Depende do que o seu negócio precisa. Um cardápio simples tem um valor, um site com várias páginas e pedido completo tem outro. Na conversa a gente entende o escopo e passa um valor fechado, sem surpresa depois.",
  },
  {
    p: "Tem mensalidade?",
    r: "Só se você quiser. O projeto é pago uma vez. A mensalidade existe para quem prefere que a gente cuide das alterações ao longo do mês.",
  },
  {
    p: "Não tenho identidade visual. Dá para fazer mesmo assim?",
    r: "Dá. Começamos com o que você já tem, como o logo, as fotos e as cores do espaço, e organizamos o resto junto com você.",
    pendente: "Confirmar se a Synex cria identidade visual do zero",
  },
  {
    p: "Quanto tempo leva?",
    r: "Cada projeto tem o seu prazo. Ele depende do tamanho do projeto e de quanto do material (fotos, cardápio, textos) já está pronto. Combinamos a data de entrega antes de começar.",
  },
  {
    p: "Funciona bem no celular?",
    r: "Funciona. A maioria dos seus clientes vai abrir pelo celular, então o projeto é desenhado primeiro para a tela pequena.",
  },
  {
    p: "Vocês atendem fora de Santa Cruz do Rio Pardo?",
    r: "Atendemos. Estamos em Santa Cruz do Rio Pardo, SP, e fazemos projetos para qualquer cidade, com tudo combinado pelo WhatsApp e por chamada.",
  },
  {
    p: "Domínio e hospedagem estão inclusos?",
    r: "Combinamos isso na proposta. Se você já tiver domínio, usamos o seu.",
    pendente: "Definir política de domínio e hospedagem",
  },
];

export function Duvidas() {
  return (
    <section className="sec sec--1" id="duvidas">
      <div className="wrap duvidas__grade">
        <div className="cabeca">
          <p className="rotulo">Dúvidas</p>
          <h2 className="titulo">Perguntas que sempre aparecem.</h2>
        </div>
        <div className="duvidas">
          {duvidas.map((d) => (
            <details key={d.p} className="duvida" data-pendente={d.pendente}>
              <summary>
                <span>{d.p}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{d.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
