export const IconButtonSize = {
    sm: 'w-[36px] h-[36px]',
    md: 'w-[40px] h-[40px]',
    lg: 'w-[44px] h-[44px]',
    xl: 'w-[48px] h-[48px]',
}

export type IconButtonSize = keyof typeof IconButtonSize

export const IconButtonColor = {
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
    secondary: `
        text-[color:var(--color-gray-700)]
        bg-[color:var(--color-white)] 
        border-[color:var(--color-gray-300)] 
 
        hover:bg-[color:var(--color-gray-50)] 

        disabled:bg-[color:var(--color-white)] 
        disabled:border-[color:var(--color-gray-200)] 
        disabled:text-[color:var(--color-gray-400)]
        `,
    tertiary: `
        shadow-none
        text-[color:var(--color-gray-700)]
        bg-[color:var(--bg-color-primary)] 
        border-[color:var(--bg-color-primary)] 
 
        hover:bg-[color:var(--color-gray-50)] 

        disabled:bg-[color:var(--bg-color-primary)]
        disabled:border-[color:var(--bg-color-primary)]
        disabled:text-[color:var(--color-gray-400)]
        `,
    destructive: `
        text-[color:var(--color-white)]
        bg-[color:var(--fg-color-error-primary)] 
        border-[color:var(--fg-color-error-primary)] 
 
        hover:bg-[color:var(--color-error-700)] 
        hover:border-[color:var(--color-error-700)]

        disabled:bg-[color:var(--bg-color-disabled)] 
        disabled:border-[color:var(--border-color-disabled)] 
        disabled:text-[color:var(--text-color-disabled)]
        `,
    destructive_secondary: `
        text-[color:var(--color-error-500)]
        bg-[color:var(--color-white)] 
        border-[color:var(--color-error-300)] 
 
        hover:bg-[color:var(--color-error-50)] 
        hover:text-[color:var(--color-error-600)]

        disabled:bg-[color:var(--color-white)] 
        disabled:border-[color:var(--color-gray-200)] 
        disabled:text-[color:var(--color-gray-400)]
        `,
    destructive_tertiary: `
        shadow-none        
        text-[color:var(--color-error-500)]
        bg-[color:var(--bg-color-primary)] 
        border-[color:var(--bg-color-primary)] 

        hover:bg-[color:var(--color-error-50)] 
        hover:text-[color:var(--color-error-600)]

        disabled:bg-[color:var(--bg-color-primary)]
        disabled:border-[color:var(--bg-color-primary)]
        disabled:text-[color:var(--color-gray-400)]
        `,
}

export type IconButtonColor = keyof typeof IconButtonColor
