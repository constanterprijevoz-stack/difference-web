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
    schema: ({ image }) => base.extend({
      client: z.string().optional(),
      type: z.string().optional(),
      externalUrl: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({
        image: image(),
        alt: z.string(),
      })).default([]),
    }),
  }),
  usluge: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/usluge' }),
    schema: base,
  }),
};
