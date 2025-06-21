import { createFileRoute } from '@tanstack/react-router'

// Container
import { LoginContainer } from '@/ui'

export const Route = createFileRoute('/_public/login')({
    component: LoginContainer,
})
