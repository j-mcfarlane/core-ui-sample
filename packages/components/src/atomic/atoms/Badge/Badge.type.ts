export const BadgeColor = {
    brand: `
        bg-[color:var(--bg-color-brand)] 
        border-[color:var(--color-brand-200)] 
        text-[color:var(--text-color-brand-secondary)]`,
    default: `
        bg-[color:var(--bg-color-primary)] 
        border-[color:var(--border-color-primary)] 
        text-[color:var(--text-color-secondary)]`,
    error: `
        bg-[color:var(--bg-color-error-primary)] 
        border-[color:var(--border-color-error-subtle)] 
        text-[color:var(--text-color-error)]`,
    gray: `
        bg-[color:var(--bg-color-secondary)] 
        border-[color:var(--border-color-secondary)] 
        text-[color:var(--text-color-secondary)]`,
    success: `
        bg-[color:var(--bg-color-success-primary)] 
        border-[color:var(--border-color-success-subtle)] 
        text-[color:var(--text-color-success)]`,
    warning: `
        bg-[color:var(--bg-color-warning-primary)] 
        border-[color:var(--border-color-warning-subtle)] 
        text-[color:var(--text-color-warning)]`,
}

export type BadgeColor = keyof typeof BadgeColor

export const BadgeSize = {
    sm: 'py-[2px] px-[6px] text-body-sm leading-body-sm',
    md: 'py-[2px] px-[8px] text-body-md leading-body-md',
    lg: 'py-1 px-[10px] text-body-md leading-body-md',
}

export type BadgeSize = keyof typeof BadgeSize

export const BadgeShadow = {
    none: '',
    modern: 'shadow-xs',
}

export type BadgeShadow = keyof typeof BadgeShadow

export const BadgeVariant = {
    default: 'rounded-size-3',
    circle: 'rounded-circle',
    pill: 'rounded-size-6',
}

export type BadgeVariant = keyof typeof BadgeVariant
