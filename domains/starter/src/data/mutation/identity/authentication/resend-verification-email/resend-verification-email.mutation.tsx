import { useMutation } from '@tanstack/react-query'

// Data
import { mutationKeys } from '@/data'
import { resendVerificationEmailFn } from './resend-verification-email.server'

export function resendVerificationEmailMutation() {
    return useMutation({
        mutationKey: mutationKeys.identity.authentication.resendVerificationEmail(),
        mutationFn: () => resendVerificationEmailFn(),
        retry: false,
    })
}
