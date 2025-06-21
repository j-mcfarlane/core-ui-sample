import { createServerFn } from '@tanstack/react-start'

// App Session
import { useAppSession } from '@/data'

export const clearSessionData = createServerFn({ method: 'POST' }).handler(async ({ data }) => {
    const session = await useAppSession()

    await session.clear()

    return session.data
})
