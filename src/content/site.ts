// Tudo que é texto de contato e configuração do site fica aqui.
// Itens marcados com PENDENTE aparecem com borda rosa ao abrir o site com ?revisao=1

export const site = {
  nome: "Synex",
  // PENDENTE: domínio definitivo (usado no SEO e no compartilhamento)
  url: "https://synex.com.br",
  descricao:
    "Sites e cardápios digitais feitos a partir da identidade da sua marca, com pedido e agendamento direto no WhatsApp.",

  whatsapp: "5514998425937",
  whatsappExibicao: "(14) 99842-5937",
  instagram: "https://www.instagram.com/synex.agencia/",
  instagramUsuario: "@synex.agencia",
  cidade: "Santa Cruz do Rio Pardo, SP",

  email: "synextechonology@gmail.com",
  // PENDENTE: CNPJ. Vazio = não aparece no rodapé
  cnpj: "",
  // Link de agendamento (Calendly, Google Agenda...). Vazio = o link fica escondido
  // e o contato diz que dá para pedir um horário na mensagem.
  agendaUrl: "",
  // Prazo médio, ex.: "de 7 a 15 dias úteis". Vazio = o site diz que o prazo é combinado em cada projeto.
  prazoMedio: "",
};

export const mensagens = {
  geral: "Oi! Vim pelo site da Synex e quero conversar sobre a minha vitrine digital.",
  cardapio: "Oi! Vim pelo site da Synex e quero um cardápio digital para o meu negócio.",
  site: "Oi! Vim pelo site da Synex e quero um site para o meu negócio.",
  automacao: "Oi! Vim pelo site da Synex e quero automatizar um processo do meu negócio.",
  agenda: "Oi! Vim pelo site da Synex e quero marcar um horário para conversar. Quais horários vocês têm disponíveis?",
};

export function linkWhats(texto: string = mensagens.geral) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
}
