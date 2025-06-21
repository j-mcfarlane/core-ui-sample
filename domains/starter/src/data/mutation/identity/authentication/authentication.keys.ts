export const authenticationKeys = {
    all: ['authentication'] as const,
    loginWithEmail: () => [...authenticationKeys.all, 'login', 'email'],
    logout: () => [...authenticationKeys.all, 'logout'],
    refresh: () => [...authenticationKeys.all, 'refresh'],
    registerWithEmail: () => [...authenticationKeys.all, 'register', 'email'],
    resendVerificationEmail: () => [...authenticationKeys.all, 'verification', 'resend'],
    verifyEmailWithCode: () => [...authenticationKeys.all, 'verification', 'email', 'withcode'],
} as const
