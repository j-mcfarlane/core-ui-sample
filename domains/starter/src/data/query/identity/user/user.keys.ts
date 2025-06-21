export const userKeys = {
    all: ['user'] as const,
    getCurrentUser: () => [...userKeys.all, 'get-current-user'],
} as const
