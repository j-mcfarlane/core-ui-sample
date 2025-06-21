import { Role } from '@/data/api/constants/_role.type'
import { SignupProvider } from '@/data/api/constants/_signup-provider.type'

export interface CurrentUser {
    _id: string
    credentials: {
        role: Role
    }
    identity: {
        firstname?: string
        surname?: string
        birthdate?: string
        gender?: string
        residence?: string
    }
    providers: {
        email: {
            email: string
            verified: boolean
            mail_sent: string
        }
        provider: SignupProvider
    }
    status: {
        banned: boolean
        locked: boolean
        identified: boolean
        onboarded: boolean
        suspended: boolean
    }
}
