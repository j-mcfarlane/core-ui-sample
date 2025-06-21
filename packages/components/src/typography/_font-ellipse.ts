export const FontEllipseVariant = {
    initial: '',
    truncate: 'truncate',
    clip: 'clip',
} as const

export type FontEllipseVariant = keyof typeof FontEllipseVariant
