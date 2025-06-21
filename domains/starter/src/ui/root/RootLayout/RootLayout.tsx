import { lazy, PropsWithChildren } from 'react'
import { HeadContent, Scripts } from '@tanstack/react-router'

// Providers
import { Providers } from '@/providers'

const ReactRouterDevTools =
    process.env.NODE_ENV === 'production'
        ? () => null
        : lazy(() =>
              import('@tanstack/react-router-devtools').then((res) => ({
                  default: res.TanStackRouterDevtools,
              })),
          )

const ReactQueryDevTools =
    process.env.NODE_ENV === 'production'
        ? () => null
        : lazy(() =>
              import('@tanstack/react-query-devtools').then((res) => ({
                  default: res.ReactQueryDevtools,
              })),
          )

export function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning className="bg-[color:var(--bg-color-secondary)]">
            <head>
                <HeadContent />
            </head>
            <body lang="en" suppressHydrationWarning className="bg-[color:var(--bg-color-secondary)]">
                <Providers>{children}</Providers>

                <ReactQueryDevTools initialIsOpen={false} buttonPosition="bottom-left" />
                <ReactRouterDevTools position="bottom-right" />

                <Scripts />
            </body>
        </html>
    )
}
