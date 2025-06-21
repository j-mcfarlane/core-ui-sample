import { createServerFn } from '@tanstack/react-start'
import { setResponseStatus } from '@tanstack/react-start/server'

// Data
import { useAxios } from '@/data/http'

// Types
import { Api } from '@core/types'

export const getCurrentUser = createServerFn({ method: 'GET' }).handler(async () => {
    const { http } = await useAxios()

    try {
        const res = await http.get<Api.Response.Data<Api.Identity.User.CurrentUser>>(`/users/current`)

        return res.data
    } catch (err: any) {
        setResponseStatus(400)

        const serverBody = err.response?.data as { message?: string }
        const msg = serverBody?.message ?? err.message ?? ``

        throw new Error(msg)
    }
})
