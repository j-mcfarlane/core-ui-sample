export const AvatarIndicatorColor = {
    offline: 'bg-[color:var(--bg-color-tertiary)]',
    online: 'bg-[color:var(--fg-color-success-primary)]',
}

export type AvatarIndicatorColor = keyof typeof AvatarIndicatorColor

export const AvatarIndicatorSize = {
    xs: 'w-[6px] h-[6px]',
    sm: 'w-[8px] h-[8px]',
    md: 'w-[10px] h-[10px]',
    lg: 'w-[12px] h-[12px]',
    xl: 'w-[14px] h-[14px]',
    xl2: 'w-[16px] h-[16px]',
}

export type AvatarIndicatorSize = keyof typeof AvatarIndicatorSize
