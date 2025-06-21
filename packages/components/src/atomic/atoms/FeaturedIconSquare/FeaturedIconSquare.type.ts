export const FeaturedIconColor = {
    brand: `
        text-[color:var(--color-white)]
        bg-[color:var(--bg-color-brand-solid)] 
        border-[color:var(--bg-color-brand-solid)]
        `,
    gray: `
        text-[color:var(--text-color-tertiary)]
        bg-[color:var(--bg-color-primary)] 
        border-[color:var(--border-color-primary)] 
        `,
    destructive: `
        text-[color:var(--text-color-error)]
        bg-[color:var(--bg-color-error-primary)] 
        border-[color:var(--border-color-error)] 
        `,
    success: `
        text-[color:var(--text-color-success)]
        bg-[color:var(--bg-color-success-primary)] 
        border-[color:var(--border-color-success)] 
        `,
    warning: `
        text-[color:var(--text-color-warning)]
        bg-[color:var(--bg-color-warning-primary)] 
        border-[color:var(--border-color-warning)] 
        `,
    empty: `
        text-[color:var(--text-color-tertiary)]
        bg-[color:var(--bg-color-primary)] 
        border-[color:transparent] 
        shadow-none
    `,
}

export type FeaturedIconColor = keyof typeof FeaturedIconColor
