import { z, defineCollection } from "astro:content";


const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    month: z.string(),
    day: z.string(),
    intro: z.string()
  }),
});

export const collections = {
  blog: blogCollection
}