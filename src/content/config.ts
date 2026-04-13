import { z, defineCollection } from 'astro:content';

const profileCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    location: z.string(),
    english_level: z.string()
  })
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    entity: z.string(),
    start_date: z.string(),
    end_date: z.string().default('Presente'),
    tech_stack: z.array(z.string()),
    repo_url: z.string().url().optional(),
    ref_url: z.string().url().optional(),
    order: z.number().optional()
  })
});

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    technologies: z.array(z.string()),
    order: z.number().optional()
  })
});

const educationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.union([z.number(), z.string()])
  })
});

export const collections = {
  'profile': profileCollection,
  'experience': experienceCollection,
  'skills': skillsCollection,
  'education': educationCollection
};
