import { profileKeys } from './profile/profile.keys'
import { userKeys } from './user/user.keys'

export const identityKeys = {
    profile: profileKeys,
    user: userKeys,
} as const
