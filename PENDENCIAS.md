# O que falta preencher: site da Synex

Abra o site com `?revisao=1` no final do endereço (ex.: `localhost:3000/?revisao=1`).
Tudo que ainda está pendente aparece com borda rosa e uma etiqueta.

## 1. Dados da Synex

| O quê | Onde mexer | Situação hoje |
|---|---|---|
| **Domínio** definitivo | `src/content/site.ts` > `url` | "synex.com.br" provisório (é o do manual) |
| **E-mail** | `site.ts` > `email` | synextechonology@gmail.com (aparece no rodapé). Confira a grafia: "techonology" |
| **CNPJ** | `site.ts` > `cnpj` | Vazio, não aparece |
| **Link de agendamento** | `site.ts` > `agendaUrl` | Consulta pelo WhatsApp, com mensagem pronta pedindo os horários. Se um dia tiver Calendly ou Google Agenda, o link entra no lugar |
| **Prazo** | `site.ts` > `prazoMedio` | Definido como "combinado em cada projeto" na seção Processo e nas dúvidas |
| **Imagem de compartilhamento** 1200x630 | `public/og.png` e descomentar em `src/app/layout.tsx` | Não existe |
| **Logo oficial em SVG** | `src/components/Logo.tsx` e `src/app/icon.svg` | Redesenhei o símbolo a partir do PDF. Confira se bate com o original |

## 2. Projetos (portfólio)

Arquivo: `src/content/projetos.ts`. Fotos em `public/projetos/`, formato 4:3, `.webp` ou `.jpg`, lado maior com 1600 px, abaixo de 300 KB.

O portfólio tem dois clientes reais, os dois com autorização por escrito dos donos, e um projeto conceito, todos publicados:

- Andri's Burger (Camboriú, SC), no ar
- Barbearia Palazzo (Santa Cruz do Rio Pardo, SP), no ar
- Lastro Contabilidade (projeto conceito), no ar. A cor do projeto (`#0B1220`) veio do CSS do site publicado; o destaque dele é dourado (`#D4A84B`).

Para adicionar outro projeto, basta copiar um bloco em `projetos.ts` e trocar os dados (nome, nicho, cidade, resumo, entregas, cor, foto e link). Se a lista ficar vazia, a seção Projetos e o link do menu somem sozinhos.

## 3. Automação

Arquivo: `src/components/Automacao.tsx`.

Seis frentes: financeiro, estoque, pedidos, agenda, atendimento e relatórios. **Retire as que a Synex ainda não entrega.** O manual da marca pede "sem promessas vagas", e um cliente que pedir uma delas amanhã vai esperar que funcione.

## 4. Dúvidas frequentes

Arquivo: `src/components/Duvidas.tsx`. Sem pendências: as respostas sobre identidade do zero e sobre domínio e hospedagem foram definidas. Vale só conferir se "Combinamos isso na proposta" (domínio e hospedagem) é a política que vocês querem manter.

## 5. Decisões que tomei (dá para mudar)

- **Sem preço no site**, como você decidiu. A dúvida "Quanto custa?" explica que depende do escopo.
- **Mensalidade opcional**, só para quem quer alterações no mês. Está na seção de dúvidas.
- **WhatsApp é a ação principal.** O formulário monta a mensagem e abre o WhatsApp, sem servidor. O agendamento só aparece no contato, como link de texto, quando você preencher `agendaUrl`.
- **Reposicionamento:** o site deixou de falar só de gastronomia e passou a falar de marca, identidade visual e presença digital para qualquer negócio. Ordem das seções: Abertura ("Por que ter um site?"), O que desenvolvemos, Identidade visual, Projetos, Automação, Processo, Dúvidas, Contato.
- **Primeira dobra:** "Porque a primeira visita ao seu negócio acontece no celular." Texto em `src/components/Abertura.tsx`. Do lado direito fica só o símbolo da Synex se montando.
- **O que desenvolvemos:** quatro formatos (site institucional, landing page, cardápio digital, loja virtual) em `src/components/Criamos.tsx`, cada um com uma marca fictícia no celular. O botão "Falar no WhatsApp" manda a mensagem geral; depois que a pessoa clica num formato, passa a mandar a mensagem daquele formato (`mensagens` em `site.ts`).
- **As quatro marcas do celular** (Navalha, Lume Estúdio, Bistrô Aurora, Ponto Cel) são fictícias, para não expor cliente sem autorização. Ficam em `src/content/vitrines.ts`. A marca "Brasa & Pão" saiu.
- **Provador de identidade:** o visitante testa nome, cor, fonte e fundo num site genérico, e as escolhas vão junto na mensagem do WhatsApp. As opções ficam no topo de `src/components/Provador.tsx`.
- **Tema:** segue o do celular/computador da pessoa na primeira visita. Depois, o botão sol/lua troca e o site lembra a escolha.
- **Ícones** desenhados à mão no estilo Phosphor, para não depender de biblioteca. Se preferir a oficial: `npm i @phosphor-icons/react`.
- **Automação** aparece como frente secundária, depois dos projetos, e não na primeira dobra.
