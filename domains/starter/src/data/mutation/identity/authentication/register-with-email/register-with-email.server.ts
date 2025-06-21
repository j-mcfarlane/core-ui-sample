import { createServerFn } from '@tanstack/react-start'
import { getCookie, setResponseStatus } from '@tanstack/react-start/server'

// Utils
import { useAxios } from '@/data/http'
import { useAppSession } from '@/data/session'

// Types
import { Api } from '@core/types'

// Data
import { RegisterWithEmailSchema } from './register-with-email.schema'

export const registerWithEmailFn = createServerFn({ method: 'POST', response: 'data' })
    .validator(RegisterWithEmailSchema)
    .handler(async ({ data }) => {
        const { http } = await useAxios()

        try {
            const session = await useAppSession()

            const affiliate = getCookie('affiliate')
            const campaign = getCookie('campaign')
            const referrer = getCookie('referrer')

            const cookieHeader = [
                affiliate && `affiliate=${encodeURIComponent(affiliate)}`,
                campaign && `campaign=${encodeURIComponent(campaign)}`,
                referrer && `referrer=${encodeURIComponent(referrer)}`,
            ]
                .filter(Boolean)
                .join('; ')

            const response = await http.post<Api.Response.Data<Api.Jwt.Tokens>>(
                '/authentication/email/register',
                data,
                {
                    headers: {
                        cookie: cookieHeader,
                    },
                    withCredentials: true,
                },
            )

            await session.update({
                access: response.data.data.access,
                refresh: response.data.data.refresh,
                refresh_id: response.data.data.refresh_id,
            })

            return {
                ...response.data,
            }
        } catch (err: any) {
            setResponseStatus(400)

            const serverBody = err.response?.data as { message?: string }
            const msg = serverBody?.message ?? err.message ?? `Verification failed with status ${err.response?.status}`

            throw new Error(msg)
        }
    })
