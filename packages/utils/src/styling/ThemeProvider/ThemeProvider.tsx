import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { ScriptOnce } from '@tanstack/react-router'
import { outdent } from 'outdent'

const createContextFactory = <T,>(opts?: { defaultValue?: T | null; errorMessage?: string }) => {
    const options = { defaultValue: null, errorMessage: 'useContext must be used within a Provider', ...opts }
    const ctx = createContext<T | null>(options.defaultValue)

    const useCtx = () => {
        const value = useContext(ctx)
        if (value === null) throw new Error(options.errorMessage)
        return value
    }

    return [ctx.Provider, useCtx] as const
}

type Theme = string
type ResolvedTheme = string

interface ThemeContext {
    value: Theme
    resolved: ResolvedTheme
    set: (theme: Theme) => void
}

const [ThemeContextProvider, useThemeFactory] = createContextFactory<ThemeContext>({
    errorMessage: 'useTheme must be used within a ThemeProvider',
})

export const useTheme = useThemeFactory

const getLocalTheme = (): Theme =>
    typeof localStorage === 'undefined' ? 'system' : localStorage.getItem('theme') || 'system'

const getPreferredTheme = (): ResolvedTheme =>
    typeof window === 'undefined'
        ? 'light'
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

const getResolvedTheme = (theme: Theme): ResolvedTheme => (theme === 'system' ? getPreferredTheme() : theme)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(getLocalTheme())
    const [resolved, setResolved] = useState<ResolvedTheme>(getResolvedTheme(theme))

    useEffect(() => {
        localStorage.setItem('theme', theme)

        setResolved(getResolvedTheme(theme))
    }, [theme])

    useEffect(() => {
        document.documentElement.dataset.theme = resolved
        document.documentElement.setAttribute('suppressHydrationWarning', '')
    }, [resolved])

    useEffect(() => {
        const handleStorage = () => setThemeState(getLocalTheme())
        handleStorage()
        window.addEventListener('storage', handleStorage)

        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    useEffect(() => {
        if (theme !== 'system') return

        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => setResolved(getPreferredTheme())
        media.addEventListener('change', handleChange)

        return () => media.removeEventListener('change', handleChange)
    }, [theme])

    return (
        <>
            <ScriptOnce>
                {outdent`
                    (function() {
                        if (typeof localStorage === 'undefined') return;

                        var localTheme = localStorage.getItem('theme');
                        var prefer = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                        var resolved = !localTheme || localTheme === 'system' ? prefer : localTheme;

                        if (!localTheme) localStorage.setItem('theme', 'light');

                        document.documentElement.dataset.theme = resolved;
                        document.documentElement.setAttribute('suppressHydrationWarning', '');
                    })();`}
            </ScriptOnce>
            <ThemeContextProvider
                value={{ value: 'light', resolved, set: (newTheme: Theme) => setThemeState(newTheme) }}
            >
                {children}
            </ThemeContextProvider>
        </>
    )
}
