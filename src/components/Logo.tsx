// Símbolo da Synex redesenhado em SVG a partir do manual (seção 02):
// duas peças que se encaixam ao redor de um losango.
// PENDENTE: quando tiver o SVG oficial do logo, substitua o desenho de PECA pelo arquivo original.

const PECA = "M26 10H99a11 11 0 0 1 0 22H44v12h8v22H26a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6z";

type SimboloProps = {
  tamanho?: number | string;
  className?: string;
  // cor do recorte em volta do losango; deve ser a cor do fundo onde o símbolo está
  recorte?: string;
  animado?: boolean;
};

export function Simbolo({ tamanho = 28, className, recorte = "var(--bg-1)", animado = false }: SimboloProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={tamanho}
      height={tamanho}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={PECA} fill="var(--azul)" className={animado ? "s-peca" : undefined} />
      <g transform="rotate(180 60 60)">
        <path d={PECA} fill="var(--azul)" className={animado ? "s-peca s-peca--b" : undefined} />
      </g>
      <g className={animado ? "s-nucleo" : undefined}>
        <rect
          x="49"
          y="49"
          width="22"
          height="22"
          rx="4"
          transform="rotate(45 60 60)"
          fill="var(--azul-claro)"
          stroke={recorte}
          strokeWidth="6"
          paintOrder="stroke"
        />
      </g>
    </svg>
  );
}

export function Marca({ href = "#topo", recorte }: { href?: string; recorte?: string }) {
  return (
    <a className="marca" href={href} aria-label="Synex, voltar ao início">
      <Simbolo tamanho={30} recorte={recorte} />
      <span className="marca__nome">synex</span>
    </a>
  );
}
