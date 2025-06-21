import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

// App Session
import { useAppSession } from '@/data'

export const setSessionData = createServerFn({ method: 'POST' })
    .validator(z.object({ access: z.string(), refresh: z.string(), refresh_id: z.string() }))
    .handler(async ({ data }) => {
        const session = await useAppSession()

        await session.update({
            access: data.access,
            refresh: data.refresh,
            refresh_id: data.refresh_id,
        })

        return session.data
    })
