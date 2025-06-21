export const FontColorVariant = {
    primary: 'text-[color:var(--text-color-primary)]',
    secondary: 'text-[color:var(--text-color-secondary)]',
    secondary_hover: 'text-[color:var(--text-color-secondary-hover)]',
    tertiary: 'text-[color:var(--text-color-tertiary)]',
    tertiary_hover: 'text-[color:var(--text-color-tertiary-hover)]',
    quaternary: 'text-[color:var(--text-color-quaternary)]',
    disabled: 'text-[color:var(--text-color-disabled)]',
    placeholder: 'text-[color:var(--text-color-placeholder)]',
    brand_primary: 'text-[color:var(--text-color-brand-primary)]',
    brand_secondary: 'text-[color:var(--text-color-brand-secondary)]',
    brand_tertiary: 'text-[color:var(--text-color-brand-tertiary)]',
    error: 'text-[color:var(--text-color-error)]',
    error_hover: 'text-[color:var(--text-color-error-hover)]',
    success: 'text-[color:var(--text-color-success)]',
    success_hover: 'text-[color:var(--text-color-success-hover)]',
    warning: 'text-[color:var(--text-color-warning)]',
    warning_hover: 'text-[color:var(--text-color-warning-hover)]',
    inherit: 'text-inherit',
} as const

export type FontColorVariant = keyof typeof FontColorVariant
