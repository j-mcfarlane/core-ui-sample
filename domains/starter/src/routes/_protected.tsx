import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
    beforeLoad: async ({ context }) => {
        if (!context.authorized) {
            throw redirect({
                to: '/login',
            })
        }
    },
})
