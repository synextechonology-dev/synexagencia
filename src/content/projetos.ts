// Portfólio. Para adicionar foto: coloque o arquivo em public/projetos/ (formato 4:3, .webp ou .jpg,
// lado maior com 1600 px, abaixo de 300 KB) e preencha `foto: "/projetos/<arquivo>"`.
// Para adicionar outro projeto, copie um bloco abaixo e troque os dados.
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
  cor: string; // cor principal da marca do projeto, aparece atrás da foto enquanto ela carrega
  foto?: string;
  fotoAlt?: string; // descrição da foto para leitores de tela
  // qual parte da foto fica visível quando ela é cortada em 4:3 (valor de object-position, ex.: "left center")
  enquadramento?: string;
  link?: string;
  publicar?: boolean;
  pendente?: string;
};

export const projetos: Projeto[] = [
  {
    slug: "andris-burger",
    nome: "Andri's Burger",
    tipo: "cliente",
    nicho: "Hamburgueria food truck",
    cidade: "Camboriú, SC",
    resumo:
      "Cardápio digital para um food truck de hambúrguer, feito a partir da identidade da marca, com pedido para retirada ou entrega direto no WhatsApp.",
    entrega: ["Identidade aplicada", "Cardápio digital", "Pedido pelo WhatsApp"],
    cor: "#F6B90E",
    foto: "/projetos/andris-burger.webp",
    fotoAlt: "Tela do site do Andri's Burger",
    link: "https://andris-burger.vercel.app/",
  },
  {
    slug: "barbearia-palazzo",
    nome: "Barbearia Palazzo",
    tipo: "cliente",
    nicho: "Barbearia",
    cidade: "Santa Cruz do Rio Pardo, SP",
    resumo: "Site com a identidade da barbearia, fotos do trabalho e do espaço, e agendamento direto pelo WhatsApp.",
    entrega: ["Identidade aplicada", "Site", "Agendamento pelo WhatsApp"],
    cor: "#5C0F1B",
    foto: "/projetos/barbearia-palazzo.webp",
    fotoAlt: "Tela do site da Barbearia Palazzo",
    // o nome PALAZZO fica à esquerda do print; o corte centralizado cortaria a primeira letra
    enquadramento: "left center",
    link: "https://barbearia-palazzo.vercel.app/",
  },
];

export const projetosPublicados = projetos.filter((p) => p.publicar !== false);
