import { z } from "zod";

export const projectSchema = z.object({
    name: z.string().min(2),
    description: z.string(),
    imgUrl: z.url(),
    link: z.url(),
    techs: z.array(z.object({
        name: z.string().min(2),
        icon: z.url()
    })),
    attributes: z.array(z.object({
        name: z.string()
    }))
})

export const project = projectSchema.extend({
    id: z.string()
})

export type Project = z.infer<typeof projectSchema>;