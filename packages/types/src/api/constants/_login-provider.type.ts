export const LoginProvider = {
    APPLE: 'APPLE',
    EMAIL: 'EMAIL',
    FACEBOOK: 'FACEBOOK',
    GITHUB: 'GITHUB',
    GOOGLE: 'GOOGLE',
    INSTAGRAM: 'INSTAGRAM',
    LINKEDIN: 'LINKEDIN',
} as const

export type LoginProvider = (typeof LoginProvider)[keyof typeof LoginProvider]
