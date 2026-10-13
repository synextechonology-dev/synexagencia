# Site da Synex

Next.js (App Router) + CSS puro, sem biblioteca de componentes.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # confere se está tudo certo antes de publicar
```

Modo revisão: `http://localhost:3000/?revisao=1` mostra o que falta preencher (ver `PENDENCIAS.md`).

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| WhatsApp, Instagram, domínio, e-mail, agenda, prazo | `src/content/site.ts` |
| Projetos do portfólio | `src/content/projetos.ts` (fotos em `public/projetos/`) |
| Marcas de exemplo no celular da primeira tela | `src/content/vitrines.ts` |
| Textos de cada seção | `src/components/<Seção>.tsx` |
| Cores, fontes, espaçamentos, tema claro | `src/app/globals.css` (topo do arquivo) |
| Ícone da aba | `src/app/icon.svg` |

## Seções e fundos

| Seção | Arquivo | Fundo |
|---|---|---|
| Abertura | `Abertura.tsx` | Grafite + grade de pontos |
| Formatos | `Formatos.tsx` | Superfície |
| Identidade + provador | `Provador.tsx` | Azul noturno |
| Projetos | `Projetos.tsx` | Grafite |
| Automação | `Automacao.tsx` | Superfície + grade de pontos |
| Processo | `Processo.tsx` | Azul noturno |
| Dúvidas | `Duvidas.tsx` | Grafite |
| Contato | `Contato.tsx` | Azul marinho (igual nos dois temas) |
| Rodapé | `Rodape.tsx` | Superfície |

## Publicar

Vercel: importe o repositório, sem configuração extra.
