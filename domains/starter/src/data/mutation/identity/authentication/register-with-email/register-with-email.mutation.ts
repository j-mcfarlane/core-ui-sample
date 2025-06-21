import { useMutation } from '@tanstack/react-query'

// Data
import { mutationKeys } from '@/data'
import { registerWithEmailFn } from './register-with-email.server'
import { RegisterWithEmailSchema } from './register-with-email.schema'

export function registerWithEmailMutation() {
    return useMutation({
        mutationKey: mutationKeys.identity.authentication.registerWithEmail(),
        mutationFn: async (data: RegisterWithEmailSchema) => registerWithEmailFn({ data }),
        retry: false,
    })
}
