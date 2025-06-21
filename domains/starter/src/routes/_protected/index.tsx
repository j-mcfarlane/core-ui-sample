import { createFileRoute } from '@tanstack/react-router'

// UI
import { LandingContainer } from '@/ui'

export const Route = createFileRoute('/_protected/')({
    head: () => {
        return {
            meta: [
                { title: `Title for page` },
                {
                    name: 'description',
                    content: `Description for page`,
                },
            ],
        }
    },
    component: LandingContainer,
})
