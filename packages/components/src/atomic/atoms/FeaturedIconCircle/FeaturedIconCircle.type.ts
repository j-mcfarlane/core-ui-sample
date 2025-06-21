export const FeaturedIconColor = {
    brand: `
        text-[color:var(--color-white)]
        bg-[color:var(--bg-color-brand-solid)] 
        border-[color:var(--color-brand-300)]
        `,
    gray: `
        text-[color:var(--text-color-primary)]
        bg-[color:var(--bg-color-tertiary)] 
        border-[color:var(--bg-color-secondary)] 
        `,
    destructive: `
        text-[color:var(--text-color-error)]
        bg-[color:var(--bg-color-error-secondary)] 
        border-[color:var(--bg-color-error-primary)] 
        `,
    success: `
        text-[color:var(--text-color-success)]
        bg-[color:var(--bg-color-success-secondary)] 
        border-[color:var(--bg-color-success-primary)] 
        `,
    warning: `
        text-[color:var(--text-color-warning)]
        bg-[color:var(--bg-color-warning-secondary)] 
        border-[color:var(--bg-color-warning-primary)] 
        `,
}

export type FeaturedIconColor = keyof typeof FeaturedIconColor
