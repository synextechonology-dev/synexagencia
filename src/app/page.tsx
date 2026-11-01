import { Cabecalho } from "@/components/Cabecalho";
import { Abertura } from "@/components/Abertura";
import { Criamos } from "@/components/Criamos";
import { Provador } from "@/components/Provador";
import { Projetos } from "@/components/Projetos";
import { Automacao } from "@/components/Automacao";
import { Processo } from "@/components/Processo";
import { Duvidas } from "@/components/Duvidas";
import { Contato } from "@/components/Contato";
import { Rodape } from "@/components/Rodape";
import { BotaoFlutuante, ModoRevisao } from "@/components/Extras";

// Ordem das seções e cor de fundo de cada uma:
// abertura (grafite) > o que criamos (superfície) > identidade (azul noturno) > projetos (grafite)
// > automação (superfície) > processo (azul noturno) > dúvidas (grafite) > contato (marinho) > rodapé (superfície)

export default function Pagina() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Abertura />
        <Criamos />
        <Provador />
        <Projetos />
        <Automacao />
        <Processo />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
      <BotaoFlutuante />
      <ModoRevisao />
    </>
  );
}
