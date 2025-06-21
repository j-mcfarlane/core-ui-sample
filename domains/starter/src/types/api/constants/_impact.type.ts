export const Impact = {
    LOW: 'LOW',
    STANDARD: 'STANDARD',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL',
} as const

export type Impact = (typeof Impact)[keyof typeof Impact]
