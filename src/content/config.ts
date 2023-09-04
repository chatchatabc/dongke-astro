import { z, defineCollection } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    timestamp: z.number(),
    summary: z.string().optional(),
    image: z.string(),
    type: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
};
