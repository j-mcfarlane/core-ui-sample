import { useMutation } from '@tanstack/react-query'

// Data
import { logoutFn } from './logout.server'
import { mutationKeys } from '@/data'

export function logoutMutation() {
    return useMutation({
        mutationKey: mutationKeys.identity.authentication.logout(),
        mutationFn: () => logoutFn(),
        retry: false,
    })
}
