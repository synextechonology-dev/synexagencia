// Portfólio. Para adicionar foto: coloque o arquivo em public/projetos/ (formato 4:3, .webp ou .jpg,
// lado maior com 1600 px, abaixo de 300 KB) e preencha `foto: "/projetos/<arquivo>"`.
// `pendente` mostra um aviso no modo revisão (?revisao=1). Apague a linha quando estiver resolvido.
// `publicar: false` esconde o projeto do site sem precisar apagar.

export type Projeto = {
  slug: string;
  nome: string;
  tipo: "cliente" | "conceito";
  nicho: string;
  cidade?: string;
  resumo: string;
  entrega: string[];
  cor: string; // cor principal da marca do projeto, usada na capa provisória
  foto?: string;
  link?: string;
  publicar?: boolean;
  pendente?: string;
};

export const projetos: Projeto[] = [
  {
    slug: "espaco-cafe",
    nome: "Espaço Café",
    tipo: "cliente",
    nicho: "Cafeteria",
    resumo: "Cardápio completo com comanda: o cliente monta o pedido no celular e envia pronto pelo WhatsApp.",
    entrega: ["Cardápio digital", "Pedido pelo WhatsApp"],
    cor: "#8C5A3C",
    pendente: "Confirmar autorização, cidade, foto e link",
  },
  {
    slug: "jotage-smash-burger",
    nome: "Jotagê Smash Burger",
    tipo: "cliente",
    nicho: "Hamburgueria",
    cidade: "Santa Cruz do Rio Pardo",
    resumo: "Cardápio digital com a identidade da casa e pedido direto no WhatsApp.",
    entrega: ["Cardápio digital", "Pedido pelo WhatsApp"],
    cor: "#E4572E",
    pendente: "Confirmar autorização, foto e link",
  },
  {
    slug: "almanaque-gastrobar",
    nome: "Almanaque Gastrobar",
    tipo: "cliente",
    nicho: "Gastrobar",
    cidade: "Santa Cruz do Rio Pardo",
    resumo: "Cardápio de bar e cozinha com pedido pelo WhatsApp.",
    entrega: ["Cardápio digital", "Pedido pelo WhatsApp"],
    cor: "#C9A227",
    pendente: "Confirmar autorização, foto e link",
  },
  {
    slug: "barbearia-palazzo",
    nome: "Barbearia Palazzo",
    tipo: "cliente",
    nicho: "Barbearia",
    cidade: "Santa Cruz do Rio Pardo",
    resumo: "Site com serviços, fotos do espaço e agendamento pelo WhatsApp.",
    entrega: ["Site", "Agendamento pelo WhatsApp"],
    cor: "#A8865A",
    pendente: "Confirmar autorização, foto e link",
  },
  {
    slug: "dra-bruna-luiza",
    nome: "Dra. Bruna Luiza",
    tipo: "cliente",
    nicho: "Odontologia",
    cidade: "Santa Cruz do Rio Pardo",
    resumo: "Site pessoal de dentista, com tratamentos explicados e contato pelo WhatsApp.",
    entrega: ["Site", "Contato pelo WhatsApp"],
    cor: "#5E9CA0",
    pendente: "Confirmar autorização, foto e link",
  },
  {
    slug: "us-dental",
    nome: "US Dental",
    tipo: "cliente",
    nicho: "Clínica odontológica",
    cidade: "Sorocaba",
    resumo: "Site para clínica com duas unidades, cada uma com o próprio contato.",
    entrega: ["Site", "Contato pelo WhatsApp"],
    cor: "#2F6FB0",
    pendente: "Confirmar autorização, foto e link",
  },
  {
    slug: "lunatico",
    nome: "Lunático",
    tipo: "conceito",
    nicho: "Hamburgueria noturna",
    resumo: "Projeto conceito: uma hamburgueria que só abre à noite, da identidade visual ao cardápio.",
    entrega: ["Identidade aplicada", "Cardápio digital"],
    cor: "#7C6CF2",
    pendente: "Adicionar foto e link",
  },
];
