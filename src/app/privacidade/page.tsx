import type { Metadata } from "next";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { site } from "@/content/site";

const titulo = "Privacidade e cookies | Synex";
const descricao = "Como a Synex trata os dados de quem visita o site e entra em contato.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: "/privacidade" },
  openGraph: {
    title: titulo,
    description: descricao,
    url: "/privacidade",
    siteName: "Synex",
    locale: "pt_BR",
    type: "website",
  },
};

// Atualize esta data sempre que o texto mudar.
const atualizadoEm = "1 de novembro de 2026";

export default function Privacidade() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo" className="sec sec--1 privacidade">
        <div className="wrap">
          <article className="prosa">
            <h1>Privacidade e cookies</h1>
            <p className="prosa__data">Última atualização: {atualizadoEm}</p>

            <p>
              Esta página explica quais dados a Synex recebe quando você visita o site ou fala com a gente, para que
              usamos esses dados e como você pode pedir para ver, corrigir ou apagar o que for seu. Seguimos a Lei
              Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>

            <h2>Quem somos</h2>
            <p>
              Synex, agência de sites, identidade visual e automação de processos, em Santa Cruz do Rio Pardo, SP.
              {site.cnpj && <> CNPJ: {site.cnpj}.</>} Contato para assuntos de privacidade:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> ou WhatsApp {site.whatsappExibicao}.
            </p>

            <h2>O que acontece quando você usa o formulário</h2>
            <p>
              O formulário de contato não envia nada para um servidor nosso. Ele junta o que você escreveu (nome, nome
              do negócio, segmento, cidade, Instagram e o tipo de projeto) em uma mensagem e abre o WhatsApp no seu
              aparelho. Nós só recebemos esses dados se você decidir enviar a mensagem.
            </p>
            <p>
              O mesmo vale para o teste de marca da seção Identidade: o nome, a cor e a fonte que você escolher ficam
              no seu navegador e só chegam até nós se você tocar no botão e enviar a mensagem.
            </p>

            <h2>Dados que recebemos e para quê</h2>
            <p>
              Quando você fala com a gente pelo WhatsApp, por e-mail ou pelo Instagram, recebemos o que você enviar:
              nome, telefone, nome do negócio, mensagens e arquivos. Usamos esses dados para responder, entender o
              projeto, preparar orçamento e, se fecharmos negócio, executar o contrato. A base legal é a realização de
              procedimentos preliminares a um contrato, a seu pedido, e a execução do contrato (art. 7º, V, da LGPD).
            </p>
            <p>
              Como qualquer site, a hospedagem registra dados técnicos de acesso, como endereço IP, tipo de navegador,
              página acessada e horário. Esses registros servem para manter o site no ar e protegido contra abusos. A
              base legal é o legítimo interesse (art. 7º, IX).
            </p>
            <p>Não usamos seus dados para enviar propaganda sem você pedir e não vendemos dados para ninguém.</p>

            <h2>Cookies e armazenamento no navegador</h2>
            <p>Este site não usa cookies de publicidade nem de rastreamento.</p>
            <p>Guardamos no seu navegador apenas duas informações, sem nenhum dado pessoal:</p>
            <ul className="lista-losango">
              <li>sua preferência de tema (claro ou escuro), para o site abrir do jeito que você escolheu;</li>
              <li>que você já viu o aviso de privacidade, para ele não aparecer de novo.</li>
            </ul>
            <p>
              Você pode apagar essas informações a qualquer momento limpando os dados do site nas configurações do seu
              navegador.
            </p>

            <h2>Com quem os dados podem ser compartilhados</h2>
            <p>Usamos alguns serviços para o site e o atendimento funcionarem:</p>
            <ul className="lista-losango">
              <li>Vercel, que hospeda o site;</li>
              <li>WhatsApp e Instagram (Meta), por onde conversamos com você;</li>
              <li>Google (Gmail), para o e-mail.</li>
            </ul>
            <p>
              Alguns desses serviços guardam dados fora do Brasil. Nesses casos, a transferência acontece com empresas
              que seguem padrões de proteção compatíveis com a LGPD (art. 33). Quando você abre o WhatsApp ou o
              Instagram pelos links do site, passam a valer também as políticas de privacidade dessas plataformas.
            </p>

            <h2>Por quanto tempo guardamos</h2>
            <p>
              Conversas e dados de orçamento ficam guardados enquanto estivermos conversando sobre o projeto e por até
              12 meses depois do último contato, caso você volte a falar com a gente. Se o projeto for contratado,
              guardamos os dados do contrato pelo prazo que a lei exige para documentos fiscais e contratuais. Depois
              disso, apagamos.
            </p>

            <h2>Seus direitos</h2>
            <p>Você pode pedir, a qualquer momento:</p>
            <ul className="lista-losango">
              <li>confirmação de que tratamos dados seus e acesso a eles;</li>
              <li>correção de dados incompletos ou desatualizados;</li>
              <li>exclusão dos dados que não precisamos mais guardar por lei;</li>
              <li>informação sobre com quem compartilhamos seus dados;</li>
              <li>revogação do seu consentimento, quando ele for a base do tratamento.</li>
            </ul>
            <p>
              Para isso, escreva para <a href={`mailto:${site.email}`}>{site.email}</a> ou mande uma mensagem no
              WhatsApp {site.whatsappExibicao}. Respondemos em até 15 dias. Se achar que seu pedido não foi atendido,
              você também pode procurar a Autoridade Nacional de Proteção de Dados (ANPD).
            </p>

            <h2>Segurança</h2>
            <p>
              O site funciona com conexão criptografada (HTTPS). O acesso às conversas e aos arquivos de clientes fica
              restrito a quem trabalha no projeto.
            </p>

            <h2>Menores de idade</h2>
            <p>
              O site e os nossos serviços são voltados para empresas e profissionais. Não coletamos de propósito dados
              de menores de 18 anos.
            </p>

            <h2>Mudanças nesta página</h2>
            <p>
              Se mudarmos a forma como tratamos dados, por exemplo ao incluir uma ferramenta de estatísticas de visitas,
              atualizamos esta página e a data no topo.
            </p>
          </article>
        </div>
      </main>
      <Rodape />
    </>
  );
}
