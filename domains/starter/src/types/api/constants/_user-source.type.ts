export const UserSource = {
    AFFILIATE: 'AFFILIATE',
    CAMPAIGN: 'CAMPAIGN',
    REFERRAL: 'REFERRER',
    UNKNOWN: 'UNKNOWN',
} as const

export type UserSource = (typeof UserSource)[keyof typeof UserSource]
