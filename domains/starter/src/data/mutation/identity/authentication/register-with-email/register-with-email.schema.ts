import { z } from 'zod'

export type RegisterWithEmailSchema = z.infer<typeof RegisterWithEmailSchema>

export const RegisterWithEmailSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    affiliate: z.string().optional(),
    campaign: z.string().optional(),
    referrer: z.string().optional(),
})
