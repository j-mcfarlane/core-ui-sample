import { createServerFn } from '@tanstack/react-start'
import { setResponseStatus } from '@tanstack/react-start/server'

// Utils
import { useAxios } from '@/data/http'

// Types
import { Api } from '@core/types'

export const resendVerificationEmailFn = createServerFn({ method: 'POST', response: 'data' }).handler(
    async ({ data }) => {
        const { http } = await useAxios()

        try {
            const response = await http.post<Api.Response.Data<Api.Jwt.Tokens>>(
                '/authentication/email/verification/resend',
                data,
            )

            return response.data
        } catch (err: any) {
            setResponseStatus(400)

            const serverBody = err.response?.data as { message?: string }
            const msg = serverBody?.message ?? err.message ?? `Verification failed with status ${err.response?.status}`

            throw new Error(msg)
        }
    },
)
