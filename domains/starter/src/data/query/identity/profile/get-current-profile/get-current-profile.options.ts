import { queryOptions } from '@tanstack/react-query'
import ms from 'ms'

// Data
import { getCurrentProfile } from './get-current-profile.server'
import { queryKeys } from '@/data'

export const getCurrentProfileQueryOptions = () =>
    queryOptions({
        queryKey: queryKeys.identity.profile.getCurrentProfile(),
        queryFn: () => getCurrentProfile(),
        staleTime: ms('5m'),
        retry: false,
    })
