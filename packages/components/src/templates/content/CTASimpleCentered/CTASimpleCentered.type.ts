export const CTASimpleCenteredColor = {
    theme: `
        bg-[color:var(--bg-color-primary)]
        text-[color:var(--text-color-primary)]     
    `,
    light: `
        bg-[color:var(--color-white)]
        text-[color:var(--color-gray-900)]     
    `,
    dark: `
        bg-[color:var(--color-gray-950)]
        text-[color:var(--color-white)]
    `,
    brand: `
        bg-[color:var(--color-brand-800)]
        text-[color:var(--color-white)]
    `,
}

export type CTASimpleCenteredColor = keyof typeof CTASimpleCenteredColor
