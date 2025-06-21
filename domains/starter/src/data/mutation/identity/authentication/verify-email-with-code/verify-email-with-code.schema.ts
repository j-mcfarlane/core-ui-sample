import { z } from 'zod'

export type VerifyEmailWithCodeSchema = z.infer<typeof VerifyEmailWithCodeSchema>

export const VerifyEmailWithCodeSchema = z.object({
    code: z.string().min(4, 'Verification code is required'),
})
