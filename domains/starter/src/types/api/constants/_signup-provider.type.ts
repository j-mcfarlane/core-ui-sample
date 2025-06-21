export const SignupProvider = {
    APPLE: 'APPLE',
    EMAIL: 'EMAIL',
    FACEBOOK: 'FACEBOOK',
    GITHUB: 'GITHUB',
    GOOGLE: 'GOOGLE',
    INSTAGRAM: 'INSTAGRAM',
    LINKEDIN: 'LINKEDIN',
} as const

export type SignupProvider = (typeof SignupProvider)[keyof typeof SignupProvider]
