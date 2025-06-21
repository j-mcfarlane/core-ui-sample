import { createServerFn } from '@tanstack/react-start'
import { setResponseStatus } from '@tanstack/react-start/server'

// Data
import { useAxios } from '@/data/http'
import { useAppSession } from '@/data/session'

// Types
import { Api } from '@core/types'

export const logoutFn = createServerFn({ method: 'POST' }).handler(async () => {
    const { http } = await useAxios()

    try {
        const session = await useAppSession()

        await http.post<Api.Response.Data<null>>('/authentication/logout', {
            refresh_id: session.data.refresh_id,
        })

        await session.clear()

        return {
            success: true,
        }
    } catch (err: any) {
        setResponseStatus(400)

        const serverBody = err.response?.data as { message?: string }
        const msg = serverBody?.message ?? err.message ?? `Verification failed with status ${err.response?.status}`

        throw new Error(msg)
    }
})
