import type { ReactNode } from "react";

// Ícones de traço no estilo Phosphor Regular (manual, seção 05).
// Se preferir a biblioteca oficial: npm i @phosphor-icons/react e troque aqui.

export type NomeIcone =
  | "whats"
  | "sol"
  | "lua"
  | "menu"
  | "fechar"
  | "insta"
  | "cardapio"
  | "site"
  | "estoque"
  | "financeiro"
  | "pedidos"
  | "atendimento"
  | "agenda"
  | "relatorio"
  | "venda"
  | "mais"
  | "lupa"
  | "chave"
  | "selo"
  | "landing"
  | "loja";

const desenhos: Record<NomeIcone, ReactNode> = {
  whats: (
    <>
      <path d="M4.2 19.8l1.2-3.6A8 8 0 1 1 8.1 18.6z" />
      <path d="M9.3 8.7c.2 2.8 2.5 5 5.2 5.3l1-1.2-1.7-.9-.8.8a4.4 4.4 0 0 1-2.2-2.2l.8-.8-.9-1.7z" />
    </>
  ),
  sol: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </>
  ),
  lua: <path d="M20 14.6A8 8 0 0 1 9.4 4a8 8 0 1 0 10.6 10.6z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
  insta: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </>
  ),
  cardapio: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <path d="M14 14h2.5v2.5H14zM18 18h2M20 14v2M14 20h2" />
    </>
  ),
  site: (
    <>
      <rect x="3" y="5" width="15" height="12" rx="1.5" />
      <path d="M6 8h12.5a1.5 1.5 0 0 1 1.5 1.5V19H7.5" />
    </>
  ),
  estoque: (
    <>
      <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
      <path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" />
    </>
  ),
  financeiro: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.6 9.6c-.5-.9-1.4-1.4-2.6-1.4-1.5 0-2.5.8-2.5 1.9 0 2.7 5.1 1.3 5.1 4 0 1.1-1.1 1.9-2.6 1.9-1.2 0-2.2-.5-2.7-1.4M12 6.6v1.6M12 15.9v1.6" />
    </>
  ),
  pedidos: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </>
  ),
  atendimento: <path d="M4 5.5h16v10.5H9.5L5 19.5V16H4z" />,
  agenda: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  relatorio: <path d="M4 4v16h16M8 15l3.5-4.5 3 3L19 8" />,
  venda: (
    <>
      <path d="M4.5 10v10h15V10" />
      <path d="M3 10l2-6h14l2 6zM9.5 20v-5h5v5" />
    </>
  ),
  mais: <path d="M12 5v14M5 12h14" />,
  lupa: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  chave: (
    <>
      <circle cx="8" cy="15.5" r="4" />
      <path d="M11 12.5L19.5 4M15.5 8l2.5 2.5" />
    </>
  ),
  selo: (
    <>
      <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="2" />
      <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="2" transform="rotate(45 12 12)" />
      <path d="M9.4 12.2l1.9 1.9 3.4-3.6" />
    </>
  ),
  landing: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8h7M8.5 11.5h4" />
      <rect x="8.5" y="15" width="7" height="2.5" rx="1.25" />
    </>
  ),
  loja: (
    <>
      <path d="M5 8h14l-1 12H6z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </>
  ),
};

export function Icone({ nome, tamanho = 20 }: { nome: NomeIcone; tamanho?: number }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {desenhos[nome]}
    </svg>
  );
}
