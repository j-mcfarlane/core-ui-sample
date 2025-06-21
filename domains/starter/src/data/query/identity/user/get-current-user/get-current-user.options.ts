import { queryOptions } from '@tanstack/react-query'
import ms from 'ms'

// Data
import { getCurrentUser } from './get-current-user.server'
import { queryKeys } from '@/data'

export const getCurrentUserQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.identity.user.getCurrentUser(),
        queryFn: () => getCurrentUser(),
        staleTime: ms('5m'),
        retry: false,
    })
