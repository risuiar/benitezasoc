import { defineCollection, z } from "astro:content";

const team = defineCollection({
    schema: z.object({
        title: z.string(),
        federalTitle: z.string(),
        cuit: z.string(),
        img: z.string(),
        contact: z.string(),
        sort: z.number(),
    }),
})

export const collections = { team };
