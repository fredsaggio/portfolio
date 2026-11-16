# Portfólio · Frederico Saggio

Site estático em [Astro](https://astro.build). Estilo editorial escuro com acento verde-limão e fonte Plus Jakarta Sans.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run check    # checagem de tipos
```

## Onde editar o conteúdo

O conteúdo fica separado do layout:

| O quê | Onde |
|---|---|
| Nome, status, apresentação, texto do Sobre mim, email, links, skills, áreas de atuação | `src/data/pt/profile.ts` |
| Slides da Trajetória (Sobre mim) | `src/content/journey/pt/*.md` + imagem em `src/assets/journey/` |
| Projetos (um arquivo por projeto) | `src/content/projects/pt/*.md` |
| Textos de interface (botões, títulos das seções) | `src/i18n/ui.ts` |
| Foto da hero | `src/assets/fred.jpg` (fica em preto e branco pelo CSS; AVIF/WebP são gerados no build) |
| Prints dos projetos | `src/assets/projects/` |

O schema em `src/content.config.ts` valida cada arquivo: se faltar um campo obrigatório, o build avisa.

### Novo item da Trajetória (carrossel do Sobre mim)

Salve a foto em `src/assets/journey/` e crie um arquivo em cada idioma, por exemplo `src/content/journey/pt/nome.md`:

```md
---
title: "Legenda curta, ex.: 2º lugar no Hackathon X"
image: ../../../assets/journey/nome.jpg
imageAlt: "Descrição da foto."
order: 2                   # menor aparece primeiro
---
```

As setas aparecem sozinhas quando houver mais de um item.

### Novo projeto

Salve um print do desktop (ex.: 1440×900) e, se quiser, um do celular em `src/assets/projects/`. Depois crie `src/content/projects/pt/nome.md`:

```md
---
title: Nome
subtitle: Uma linha
description: Parágrafo principal.
highlights:
  - Ponto técnico.
image: ../../../assets/projects/nome-desktop.png
mobileImage: ../../../assets/projects/nome-mobile.png   # opcional
imageAlt: O que aparece no print.
displayUrl: nome.com.br                                  # texto da barra do navegador
year: 2027
status: em-desenvolvimento   # ou concluido
order: 2
stack: [Go, PostgreSQL]
links:
  site: https://...
  repo: https://github.com/...
---
```

### Currículo

O PDF fica em `public/frederico-saggio-cv.pdf` e aparece no botão "Currículo" do topo e no menu do celular. Para atualizar, substitua o arquivo mantendo o mesmo nome. Para tirar o botão, apague `cvUrl` em `src/data/pt/profile.ts`.

## Idiomas (PT, EN, IT)

O site tem três versões: `/` (português), `/en/` e `/it/`. O seletor com bandeiras fica no cabeçalho.

Ao mudar um conteúdo, atualize as três pastas:

| O quê | Português | Inglês | Italiano |
|---|---|---|---|
| Perfil, skills, áreas de atuação | `src/data/pt/profile.ts` | `src/data/en/profile.ts` | `src/data/it/profile.ts` |
| Trajetória | `src/content/journey/pt/` | `.../journey/en/` | `.../journey/it/` |
| Projetos | `src/content/projects/pt/` | `.../projects/en/` | `.../projects/it/` |
| Textos de interface | `src/i18n/ui.ts` (bloco `pt`) | bloco `en` | bloco `it` |

Nome, email e links ficam só no perfil em português; EN e IT herdam de lá. Se faltar alguma chave de interface em `en` ou `it`, o `npm run check` acusa.

## Publicar

Recomendado: Vercel. Importe o repositório no painel da Vercel (o Astro é detectado sozinho) ou rode `npx vercel`.
