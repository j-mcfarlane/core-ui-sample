export function formatRelativeTime(timestamp: Date): string {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000)

    if (diffInSeconds < 60) {
        return `${diffInSeconds}s ago`
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) {
        return `${diffInMinutes}m ago`
    }

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) {
        return `${diffInHours}h ago`
    }

    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) {
        return `${diffInDays}d ago`
    }

    return timestamp.toLocaleDateString(undefined, {
        month: 'short',
        day: '2-digit',
    })
}
