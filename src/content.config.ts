import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    title: z.string(),
    license: z.string().optional(),
    cuit: z.string().optional(),
    img: z.string(),
    contact: z.coerce.string(),
    text: z.string(),
    sort: z.number()
  })
})

export const collections = { team }
