import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
    beforeLoad: async ({ context }) => {
        if (context.authorized) {
            throw redirect({
                to: '/',
            })
        }
    },
})
