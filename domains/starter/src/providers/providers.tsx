import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@core/utils'

export function Providers({ children }: PropsWithChildren) {
    return <ThemeProvider>{children}</ThemeProvider>
}
