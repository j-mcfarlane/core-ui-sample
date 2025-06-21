export const AnchorColorVariant = {
    primary: `
        text-[color:var(--text-color-tertiary)] 
        hover:text-[color:var(--text-color-secondary)]
        disabled:text-[color:var(--text-color-placeholder-subtle)] 
        disabled:hover:text-[color:var(--text-color-placeholder-subtle)]
    `,
    secondary: `
        text-[color:var(--text-color-brand-secondary)] 
        hover:text-[color:var(--text-color-brand-primary)]
        disabled:text-[color:var(--text-color-placeholder-subtle)] 
        disabled:hover:text-[color:var(--text-color-placeholder-subtle)]
    `,
    inherit: 'text-inherit',
} as const

export type AnchorColorVariant = keyof typeof AnchorColorVariant
