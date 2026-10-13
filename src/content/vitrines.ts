// As três marcas fictícias que aparecem no celular da primeira tela.
// Servem para mostrar que a mesma estrutura ganha outra cara para cada marca.

export type Vitrine = {
  nome: string;
  nicho: string;
  fundo: string;
  texto: string;
  apoio: string;
  marca: string;
  marcaTexto: string;
  fonte: string;
  abas: string[];
  itens: { nome: string; detalhe: string; preco: string }[];
  acao: string;
};

export const vitrines: Vitrine[] = [
  {
    nome: "Brasa & Pão",
    nicho: "Hamburgueria",
    fundo: "#1A110C",
    texto: "#FBEFE3",
    apoio: "rgba(251,239,227,.62)",
    marca: "#E4572E",
    marcaTexto: "#FFFFFF",
    fonte: "'Bebas Neue', sans-serif",
    abas: ["Lanches", "Porções", "Bebidas"],
    itens: [
      { nome: "Clássico da casa", detalhe: "Blend 160 g, cheddar, cebola na chapa", preco: "R$ 32" },
      { nome: "Duplo cheddar", detalhe: "Dois blends, cheddar duplo, bacon", preco: "R$ 41" },
      { nome: "Batata rústica", detalhe: "Com páprica e maionese da casa", preco: "R$ 18" },
    ],
    acao: "Pedir pelo WhatsApp",
  },
  {
    nome: "Bistrô Aurora",
    nicho: "Café e bistrô",
    fundo: "#F6F2EA",
    texto: "#1F2A1C",
    apoio: "rgba(31,42,28,.6)",
    marca: "#3F5B3A",
    marcaTexto: "#FFFFFF",
    fonte: "'Fraunces', serif",
    abas: ["Entradas", "Pratos", "Cafés"],
    itens: [
      { nome: "Bruschetta de tomate", detalhe: "Pão de fermentação natural", preco: "R$ 32" },
      { nome: "Carpaccio", detalhe: "Rúcula, parmesão, alcaparras", preco: "R$ 48" },
      { nome: "Burrata", detalhe: "Pesto de manjericão", preco: "R$ 56" },
    ],
    acao: "Reservar mesa",
  },
  {
    nome: "Navalha",
    nicho: "Barbearia",
    fundo: "#0F0F11",
    texto: "#F2EEE6",
    apoio: "rgba(242,238,230,.58)",
    marca: "#C9A227",
    marcaTexto: "#14110A",
    fonte: "'Space Grotesk', sans-serif",
    abas: ["Serviços", "Equipe", "Local"],
    itens: [
      { nome: "Corte", detalhe: "Tesoura ou máquina, com lavagem", preco: "R$ 45" },
      { nome: "Barba", detalhe: "Toalha quente e navalha", preco: "R$ 35" },
      { nome: "Corte e barba", detalhe: "O combo mais pedido", preco: "R$ 70" },
    ],
    acao: "Agendar horário",
  },
];
