export const SocialButtonColor = {
    default: `
        text-[color:var(--color-gray-700)]
        bg-[color:var(--color-white)] 
        border-[color:var(--border-color-primary)] 
 
        hover:bg-[color:var(--color-gray-50)] 

        disabled:bg-[color:var(--color-white)] 
        disabled:border-[color:var(--color-gray-200)] 
        disabled:text-[color:var(--color-gray-400)]
        `,
    google: ``,
    apple: ``,
}

export type SocialButtonColor = keyof typeof SocialButtonColor

export const SocialButtonSize = {
    sm: 'py-[8px] px-3',
    md: 'py-[10px] px-[14px]',
    lg: 'gap-[6px] py-[10px] px-4 text-body-md leading-body-md',
    xl: 'gap-[6px] py-[12px] px-[18px] text-body-md leading-body-md',
}

export type SocialButtonSize = keyof typeof SocialButtonSize
