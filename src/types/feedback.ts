import { z } from "zod";

export const feedbackSchema = z.object({
    name: z.string().min(2),
    message: z.string(),
    contactLink: z.url(),
    img: z.url().optional()
})

export const feedback = feedbackSchema.extend({
    id: z.string(),
    createAt: z.date()
})

export type Feedback = z.infer<typeof feedback>;
export type FeedbackInput = z.infer<typeof feedbackSchema>