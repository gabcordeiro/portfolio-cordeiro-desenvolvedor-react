# Gabriel Cordeiro · Portfólio

Portfólio profissional de **Gabriel Cordeiro de Carvalho** — Desenvolvedor Full-Stack (React, TypeScript, .NET, Python).

Construído com **React 19 + TypeScript + Vite**, sem dependências de UI externas — todo o design system é CSS puro e artesanal.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/`.

## Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe este repositório do GitHub
3. A Vercel detecta o Vite automaticamente — só clicar em **Deploy**

Ou via CLI:

```bash
npx vercel
```

## Estrutura

- `src/data.ts` — todo o conteúdo do currículo (projetos, experiências, artigos, certificados). Para atualizar o site, basta editar este arquivo.
- `src/App.tsx` — componentes das seções
- `src/hooks.ts` — hooks de animação (typewriter e reveal on scroll)
- `src/index.css` — design system completo
