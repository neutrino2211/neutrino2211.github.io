import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published_at: z.date(),
    description: z.string(),
    published: z.boolean(),
    tags: z.string(),
    comments: z.number(),
    reactions: z.number(),
    views: z.number(),
    cover_image: z.nullable(z.string()),
    devto_link: z.nullable(z.string()),
  }),
});

const publicSpeakingCollection = defineCollection({
  type: "content",
  schema: z.object({
    speech: z.string(),
    event: z.string(),
    date: z.date(),
    image: z.string(),
    description: z.string()
  })
})

export const collections = { posts: postsCollection, public_speaking: publicSpeakingCollection };
