// As quatro marcas fictícias que aparecem no celular da seção "O que desenvolvemos".
// Cada uma ilustra um formato (institucional, landing page, cardápio, loja) com uma identidade própria.

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

export type FormatoId = "institucional" | "landing" | "cardapio" | "loja";

export const vitrines: Record<FormatoId, Vitrine> = {
  institucional: {
    nome: "Navalha",
    nicho: "Site · Barbearia",
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
  landing: {
    nome: "Lume Estúdio",
    nicho: "Landing page · Estética",
    fundo: "#FBF7F4",
    texto: "#2B2024",
    apoio: "rgba(43,32,36,.6)",
    marca: "#B4637A",
    marcaTexto: "#FFFFFF",
    fonte: "'Fraunces', serif",
    abas: ["Tratamentos", "Avaliação", "Local"],
    itens: [
      { nome: "Limpeza de pele profunda", detalhe: "Extração, máscara e hidratação", preco: "60 min" },
      { nome: "Peeling de diamante", detalhe: "Renova a textura da pele", preco: "40 min" },
      { nome: "Avaliação da pele", detalhe: "Para indicar o tratamento certo", preco: "20 min" },
    ],
    acao: "Agendar avaliação",
  },
  cardapio: {
    nome: "Bistrô Aurora",
    nicho: "Cardápio digital · Bistrô",
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
  loja: {
    nome: "Ponto Cel",
    nicho: "Loja virtual · Acessórios",
    fundo: "#0E1116",
    texto: "#F2F4F7",
    apoio: "rgba(242,244,247,.6)",
    marca: "#F59E0B",
    marcaTexto: "#111214",
    fonte: "'Space Grotesk', sans-serif",
    abas: ["Capinhas", "Carregadores", "Fones"],
    itens: [
      { nome: "Capinha antiimpacto", detalhe: "Bordas reforçadas, várias cores", preco: "R$ 49,90" },
      { nome: "Carregador 20W", detalhe: "Cabo USB-C incluso", preco: "R$ 89,90" },
      { nome: "Película de vidro", detalhe: "Aplicação na hora", preco: "R$ 29,90" },
    ],
    acao: "Finalizar no WhatsApp",
  },
};
