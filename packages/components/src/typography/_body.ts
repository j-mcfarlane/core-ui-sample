export const BodySizeVariant = {
    xs: 'text-body-xs leading-body-xs',
    sm: 'text-body-sm leading-body-sm',
    md: 'text-body-md leading-body-md',
    lg: 'text-body-lg leading-body-lg',
    xl: 'text-body-xl leading-body-xl',
    inherit: 'text-body-[inherit] leading-body-[inherit]',
} as const

export type BodySizeVariant = keyof typeof BodySizeVariant
