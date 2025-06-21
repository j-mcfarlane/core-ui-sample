export const profileKeys = {
    all: ['profile'] as const,
    getCurrentProfile: () => [...profileKeys.all, 'get-current-profile'],
} as const
