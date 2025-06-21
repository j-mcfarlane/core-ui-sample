import { createServerFn } from '@tanstack/react-start'
import { setResponseStatus } from '@tanstack/react-start/server'

// Utils
import { useAxios, useAppSession } from '@/data'

// Types
import { Api } from '@core/types'

// Data
import { LoginWithEmailSchema } from './login-with-email.schema'

export const loginWithEmailFn = createServerFn({ method: 'POST' })
    .validator(LoginWithEmailSchema)
    .handler(async ({ data }) => {
        const { http } = await useAxios()

        try {
            const session = await useAppSession()

            const response = await http.post<Api.Response.Data<Api.Jwt.Tokens>>('/authentication/email/login', data)

            await session.update({
                access: response.data.data.access,
                refresh: response.data.data.refresh,
                refresh_id: response.data.data.refresh_id,
            })

            return response.data
        } catch (err: any) {
            setResponseStatus(400)

            const serverBody = err.response?.data as { message?: string }
            const msg = serverBody?.message ?? err.message ?? `Verification failed with status ${err.response?.status}`

            throw new Error(msg)
        }
    })
