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

- `src/data.ts` — todo o conteúdo (estudos de caso com vídeo, projetos, experiências, artigos, certificados). Para atualizar o site, basta editar este arquivo.
- `src/App.tsx` — seções da página
- `src/CaseStudy.tsx` — estudo de caso com prévia em vídeo e player em `<dialog>`
- `src/CommandPalette.tsx` — paleta de comandos (⌘K / Ctrl K)
- `src/hooks.ts` — reveal on scroll, autoplay por visibilidade, tema e cópia
- `src/index.css` — design system completo (tema claro/escuro)
- `public/videos/` — demos (`.mp4`), prévias curtas (`-preview.webm/.mp4`) e posters (`-poster.webp`)

## Adicionando um vídeo

Grave a tela, então gere as três versões com ffmpeg (ajuste o `crop` para remover barras do navegador/marcas d'água):

```bash
# demo completa
ffmpeg -i bruto.mp4 -an -vf "crop=W:H:X:Y,scale=-2:720" -c:v libx264 -crf 27 -preset slow -movflags +faststart public/videos/nome.mp4
# prévia (9s, 2x)
ffmpeg -ss 10 -t 18 -i bruto.mp4 -an -vf "setpts=PTS/2,crop=W:H:X:Y,scale=960:-2" -c:v libx264 -crf 30 -movflags +faststart public/videos/nome-preview.mp4
ffmpeg -i public/videos/nome-preview.mp4 -c:v libvpx-vp9 -crf 40 -b:v 0 public/videos/nome-preview.webm
# poster
ffmpeg -ss 20 -i bruto.mp4 -frames:v 1 -vf "crop=W:H:X:Y,scale=1280:-2" -c:v libwebp -quality 78 public/videos/nome-poster.webp
```
