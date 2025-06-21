import { useMutation } from '@tanstack/react-query'

// Data
import { mutationKeys } from '@/data'
import { verifyEmailWithCodeFn } from './verify-email-with-code.server'
import { VerifyEmailWithCodeSchema } from './verify-email-with-code.schema'

export function verifyEmailWithCodeMutation() {
    return useMutation({
        mutationKey: mutationKeys.identity.authentication.verifyEmailWithCode(),
        mutationFn: (data: VerifyEmailWithCodeSchema) => verifyEmailWithCodeFn({ data }),
        retry: false,
    })
}
