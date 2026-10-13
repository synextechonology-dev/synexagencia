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

Coloquei os projetos deste ano. **Antes de publicar, confirme com cada cliente se pode mostrar o nome e a tela.** Quem não autorizar: `publicar: false`.

- Espaço Café (falta a cidade)
- Jotagê Smash Burger
- Almanaque Gastrobar
- Barbearia Palazzo
- Dra. Bruna Luiza
- US Dental
- Lunático (marcado como projeto conceito)

Projetos que fechou ou não: confira se todos são clientes de fato. Os que ainda são proposta não devem aparecer como "Cliente".

O primeiro da lista aparece maior. Deixe nele o projeto mais bonito.

## 3. Automação

Arquivo: `src/components/Automacao.tsx`.

Coloquei seis frentes: financeiro, estoque, pedidos, agenda, atendimento e relatórios. **Retire as que a Synex ainda não entrega.** O manual da marca pede "sem promessas vagas", e um cliente que pedir uma delas amanhã vai esperar que funcione.

## 4. Dúvidas frequentes

Arquivo: `src/components/Duvidas.tsx`. Duas respostas estão marcadas como pendentes:
- A Synex cria identidade visual do zero, ou só aplica a que o cliente já tem?
- Domínio e hospedagem: inclusos ou cobrados à parte?

## 5. Decisões que tomei (dá para mudar)

- **Sem preço no site**, como você decidiu. A dúvida "Quanto custa?" explica que depende do escopo.
- **Mensalidade opcional**, só para quem quer alterações no mês. Está na seção de dúvidas.
- **WhatsApp é a ação principal.** O formulário monta a mensagem e abre o WhatsApp, sem servidor. O agendamento só aparece no contato, como link de texto, quando você preencher `agendaUrl`.
- **Primeira dobra:** "Hoje a primeira visita ao seu negócio acontece no celular." Texto em `src/components/Abertura.tsx`.
- **As três marcas do celular** (Brasa & Pão, Bistrô Aurora, Navalha) são fictícias, para não expor cliente sem autorização. Ficam em `src/content/vitrines.ts`.
- **Provador de identidade:** o visitante testa nome, cor, fonte e fundo, e as escolhas vão junto na mensagem do WhatsApp. As opções ficam no topo de `src/components/Provador.tsx`.
- **Tema:** segue o do celular/computador da pessoa na primeira visita. Depois, o botão sol/lua troca e o site lembra a escolha.
- **Ícones** desenhados à mão no estilo Phosphor, para não depender de biblioteca. Se preferir a oficial: `npm i @phosphor-icons/react`.
- **Automação** aparece como frente secundária, depois dos projetos, e não na primeira dobra.
