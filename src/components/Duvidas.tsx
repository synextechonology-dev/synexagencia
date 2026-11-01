"use client";

import { useState } from "react";

// Perguntas frequentes. A resposta desliza para baixo ao clicar na pergunta (a altura é resolvida pelo CSS).
// `pendente` aparece no modo revisão (?revisao=1).

const duvidas: { p: string; r: string; pendente?: string }[] = [
  {
    p: "Já tenho Instagram. Preciso mesmo de site?",
    r: "O Instagram é ótimo para ser visto, mas as regras são da plataforma e o alcance muda sem aviso. O site é seu: pode ser encontrado no Google, junta tudo em um link só e leva o cliente direto para o seu WhatsApp.",
  },
  {
    p: "Qual formato é o melhor para o meu negócio?",
    r: "Depende de como você vende. Na conversa a gente indica o formato certo. Muitas vezes é uma combinação, como site institucional com cardápio ou loja.",
  },
  {
    p: "Vocês criam a identidade visual do zero?",
    r: "Criamos. Logo, cores, fontes, tom de voz e manual da marca. Se você já tem uma identidade, aplicamos a sua.",
  },
  {
    p: "Consigo mudar preços, produtos e fotos sozinho?",
    r: "Consegue, quando o projeto precisa disso. Combinamos no início o que você vai poder atualizar por conta própria. Se preferir não mexer, a gente atualiza para você.",
  },
  {
    p: "Quanto custa?",
    r: "Depende do que o seu negócio precisa: se a identidade é criada do zero, quantas páginas o site tem e quais funções entram, como cardápio com pedido ou loja com carrinho. Na conversa a gente entende o escopo e passa um valor fechado, sem surpresa depois.",
  },
  {
    p: "Tem mensalidade?",
    r: "Só se você quiser. O projeto é pago uma vez. A mensalidade existe para quem prefere que a gente cuide das alterações ao longo do mês.",
  },
  {
    p: "E se eu quiser mudar alguma coisa durante o projeto?",
    r: "Antes de começar, combinamos quantas rodadas de ajuste estão incluídas. Você vê o projeto funcionando no celular e pede as mudanças dentro dessas rodadas.",
  },
  {
    p: "Não tenho fotos boas do meu negócio. E agora?",
    r: "Se o seu negócio fica em Santa Cruz do Rio Pardo, podemos fazer uma sessão de fotos do espaço e dos produtos, combinada na proposta. Em outras cidades, a gente conversa sobre a melhor saída para o seu caso.",
  },
  {
    p: "Quanto tempo leva?",
    r: "Cada projeto tem o seu prazo. Ele depende do tamanho do projeto e de quanto do material (fotos, textos, identidade) já está pronto. Combinamos a data de entrega antes de começar.",
  },
  {
    p: "Vocês atendem fora de Santa Cruz do Rio Pardo?",
    r: "Atendemos. Estamos em Santa Cruz do Rio Pardo, SP, e fazemos projetos para qualquer cidade, com tudo combinado pelo WhatsApp e por chamada.",
  },
  {
    p: "Domínio e hospedagem estão inclusos?",
    r: "Combinamos isso na proposta. Se você já tiver domínio, usamos o seu.",
  },
];

export function Duvidas() {
  const [abertas, setAbertas] = useState<Set<number>>(new Set());

  function alternar(i: number) {
    setAbertas((atual) => {
      const novo = new Set(atual);
      if (novo.has(i)) novo.delete(i);
      else novo.add(i);
      return novo;
    });
  }

  return (
    <section className="sec sec--1" id="duvidas">
      <div className="wrap duvidas__grade">
        <div className="cabeca">
          <p className="rotulo">Dúvidas</p>
          <h2 className="titulo">Perguntas que sempre aparecem.</h2>
        </div>
        <div className="duvidas">
          {duvidas.map((d, i) => {
            const aberta = abertas.has(i);
            return (
              <div key={d.p} className={aberta ? "duvida duvida--aberta" : "duvida"} data-pendente={d.pendente}>
                <h3>
                  <button type="button" aria-expanded={aberta} aria-controls={`resposta-${i}`} onClick={() => alternar(i)}>
                    <span>{d.p}</span>
                    <i aria-hidden="true" />
                  </button>
                </h3>
                <div className="duvida__resposta" id={`resposta-${i}`} role="region" aria-hidden={!aberta} inert={!aberta}>
                  <div>
                    <p>{d.r}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
