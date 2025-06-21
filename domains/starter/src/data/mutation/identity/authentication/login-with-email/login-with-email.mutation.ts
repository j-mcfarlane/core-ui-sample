import { useMutation } from '@tanstack/react-query'

// Data
import { loginWithEmailFn, mutationKeys } from '@/data'
import { LoginWithEmailSchema } from './login-with-email.schema'

export function loginWithEmailMutation() {
    return useMutation({
        mutationKey: mutationKeys.identity.authentication.loginWithEmail(),
        mutationFn: (data: LoginWithEmailSchema) => loginWithEmailFn({ data }),
        retry: false,
    })
}
