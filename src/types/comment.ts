import { z } from "zod";

export const commentSchema = z.object({
    name: z.string().min(2),
    message: z.string(),
    contactLink: z.url(),
    img: z.url().optional()
})

export const comment = commentSchema.extend({
    id: z.string(),
    createAt: z.date()
})

export type Comment = z.infer<typeof commentSchema>;