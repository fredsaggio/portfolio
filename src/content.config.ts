import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Conteúdo editável do site. Cada idioma tem sua pasta (pt/, en/).
 * O id de cada entrada fica como "pt/shortbit", e as páginas filtram pelo prefixo do idioma.
 */

/** Slides da "Trajetória" na seção Sobre mim: hackathons, eventos, conquistas. */
const journey = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journey' }),
  schema: ({ image }) =>
    z.object({
      /** Legenda curta que aparece embaixo da foto. */
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      /** Menor número aparece primeiro. */
      order: z.number().default(99),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      /** Parágrafo principal do card. */
      description: z.string(),
      /** Pontos técnicos curtos exibidos abaixo da descrição. */
      highlights: z.array(z.string()).default([]),
      /** Imagem principal (print do desktop). Caminho relativo ao .md. */
      image: image(),
      /** Print do celular (opcional), aparece sobreposto ao print do desktop. */
      mobileImage: image().optional(),
      imageAlt: z.string(),
      /** Endereço exibido na barra do navegador desenhada em volta do print. */
      displayUrl: z.string().optional(),
      year: z.number(),
      status: z.enum(['concluido', 'em-desenvolvimento']),
      stack: z.array(z.string()),
      links: z
        .object({ site: z.url().optional(), repo: z.url().optional() })
        .default({}),
      /** Mostra um botão desativado "Site privado" quando o sistema não é aberto ao público. */
      privateSite: z.boolean().default(false),
      /** Menor número aparece primeiro. */
      order: z.number().default(99),
    }),
});

export const collections = { journey, projects };
