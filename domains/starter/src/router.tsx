import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'

// Route
import { routeTree } from './routeTree.gen'

// UI
import { DefaultCatchBoundaryContainer, NotFoundContainer } from './ui'

export function createRouter() {
    const queryClient = new QueryClient()

    return routerWithQueryClient(
        createTanStackRouter({
            routeTree,
            context: {
                authorized: false,
                queryClient,
            },
            scrollRestoration: true,
            defaultPreloadStaleTime: 0,
            defaultStaleTime: 0,
            defaultPreload: 'intent',
            defaultViewTransition: false,
            defaultErrorComponent: DefaultCatchBoundaryContainer,
            defaultNotFoundComponent: NotFoundContainer,
        }),
        queryClient,
    )
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}
