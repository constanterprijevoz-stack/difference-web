import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const base = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  image: z.string().optional(),
});

export const collections = {
  vodic: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/vodic' }),
    schema: base.extend({ category: z.string().optional() }),
  }),
  projekti: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projekti' }),
    schema: base.extend({
      client: z.string().optional(),
      type: z.string().optional(),
      externalUrl: z.string().url().optional(),
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({
        image: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
      })).default([]),
    }),
  }),
  usluge: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/usluge' }),
    schema: base,
  }),
};
