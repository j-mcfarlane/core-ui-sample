import { z } from 'zod'

export type LoginWithEmailSchema = z.infer<typeof LoginWithEmailSchema>

export const LoginWithEmailSchema = z.object({
    email: z.string(),
    password: z.string(),
})
