import { createServerFn } from '@tanstack/react-start'
import { setResponseStatus } from '@tanstack/react-start/server'

// Utils
import { useAxios } from '@/data/http'

// Types
import { Api } from '@core/types'

// Data
import { VerifyEmailWithCodeSchema } from './verify-email-with-code.schema'

export const verifyEmailWithCodeFn = createServerFn({ method: 'POST', response: 'data' })
    .validator(VerifyEmailWithCodeSchema)
    .handler(async ({ data }) => {
        const { http } = await useAxios()

        try {
            const response = await http.post<Api.Response.Data<Api.Jwt.Tokens>>(
                '/authentication/email/verification/with-code',
                data,
            )

            return response.data
        } catch (err: any) {
            setResponseStatus(400)

            const serverBody = err.response?.data as { message?: string }
            const msg = serverBody?.message ?? err.message ?? `Verification failed with status ${err.response?.status}`

            throw new Error(msg)
        }
    })
