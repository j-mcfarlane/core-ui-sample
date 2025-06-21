export const ButtonColor = {
    brand: `
        text-[color:var(--color-white)]
        bg-[color:var(--bg-color-brand-solid)] 
        border-[color:var(--bg-color-brand-solid)] 
 
        hover:bg-[color:var(--bg-color-brand-solid-hover)] 
        hover:border-[color:var(--bg-color-brand-solid-hover)]

        disabled:bg-[color:var(--bg-color-disabled)] 
        disabled:border-[color:var(--border-color-disabled)] 
        disabled:text-[color:var(--text-color-disabled)]
        `,
    destructive: `
        text-[color:var(--color-white)]
        bg-[color:var(--fg-color-error-secondary)] 
        border-[color:var(--fg-color-error-secondary)] 
 
        hover:bg-[color:var(--fg-color-error-primary)] 
        hover:border-[color:var(--fg-color-error-primary)]

        disabled:bg-[color:var(--bg-color-disabled)] 
        disabled:border-[color:var(--border-color-disabled)] 
        disabled:text-[color:var(--text-color-disabled)]
        `,
    destructive_secondary: `
        text-[color:var(--text-color-error)]
        bg-[color:var(--color-white)] 
        border-[color:var(--border-color-error-subtle)] 
 
        hover:bg-[color:var(--bg-color-error-primary)] 
        hover:text-[color:var(--text-color-error-hover)]

        disabled:bg-[color:var(--color-white)] 
        disabled:border-[color:var(--border-color-disabled)] 
        disabled:text-[color:var(--text-color-disabled)]
        `,
    destructive_tertiary: `
        shadow-none bg-transparent border-transparent       
        text-[color:var(--text-color-error)]
        
        hover:bg-[color:var(--bg-color-error-primary)] 
        hover:text-[color:var(--text-color-error-hover)]

        disabled:bg-transparent 
        disabled:border-transparent
        disabled:text-[color:var(--text-color-disabled)]
        `,
    secondary: `
        text-[color:var(--text-color-secondary)]
        bg-[color:var(--color-white)] 
        border-[color:var(--border-color-primary)] 
 
        hover:bg-[color:var(--bg-color-secondary)] 

        disabled:bg-[color:var(--color-white)] 
        disabled:border-[color:var(--border-color-disabled)]
        disabled:text-[color:var(--text-color-disabled)]
        `,
    tertiary: `
        shadow-none bg-transparent border-transparent
        text-[color:var(--text-color-secondary)]
 
        hover:bg-[color:var(--bg-color-secondary)] 

        disabled:bg-transparent
        disabled:border-transparent
        disabled:text-[color:var(--text-color-disabled)]
        `,
    link_primary: `
        inline-flex shadow-none bg-transparent border-transparent
        text-[color:var(--text-color-brand-secondary)]
 
        hover:bg-transparent 
        hover:text-[color:var(--text-color-brand-primary)]
        hover:underline

        disabled:no-underline
        disabled:bg-transparent
        disabled:border-transparent
        disabled:text-[color:var(--text-color-disabled)]
    `,
    link_secondary: `
        inline-flex shadow-none bg-transparent border-transparent
        text-[color:var(--text-color-secondary)]
 
        hover:bg-transparent 
        hover:underline

        disabled:no-underline
        disabled:bg-transparent
        disabled:border-transparent
        disabled:text-[color:var(--text-color-disabled)]
    `,
}

export type ButtonColor = keyof typeof ButtonColor

export const ButtonSize = {
    xs: 'py-[8px] px-3',
    sm: 'py-[8px] px-3',
    md: 'py-[10px] px-[14px]',
    lg: 'gap-[6px] py-[10px] px-4 text-body-md leading-body-md',
    xl: 'gap-[6px] py-[12px] px-[18px] text-body-md leading-body-md',
}

export type ButtonSize = keyof typeof ButtonSize

export const ButtonVariant = {
    default: '',
    link: 'p-0',
}

export type ButtonVariant = keyof typeof ButtonVariant
