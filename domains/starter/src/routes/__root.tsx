import { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

// Ui
import { NotFoundContainer, RootLayout, RootLinks, RootMeta } from '@/ui'

// Data
import { getCurrentProfileQueryOptions, getCurrentUserQueryOptions, getSessionData } from '@/data'

export const Route = createRootRouteWithContext<{
    authorized: boolean
    queryClient: QueryClient
}>()({
    beforeLoad: async ({ context }) => {
        const data = await getSessionData()

        if (!data.access) {
            return {
                ...context,
                authorized: !!data.access,
                user: undefined,
            }
        }

        const profile = await context.queryClient.ensureQueryData(getCurrentProfileQueryOptions())
        const user = await context.queryClient.ensureQueryData(getCurrentUserQueryOptions())

        return {
            ...context,
            authorized: !!data.access && user.data.credentials.role !== 'USER',
            profile,
            user,
        }
    },
    head: () => ({
        links: RootLinks,
        meta: RootMeta,
    }),
    notFoundComponent: NotFoundContainer,
    component: () => {
        return (
            <RootLayout>
                <Outlet />
            </RootLayout>
        )
    },
})
