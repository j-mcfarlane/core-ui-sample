import { useEffect, useState } from 'react'

export interface Timer {
    duration: number
    pause: () => void
    start: () => void
    resume: () => void
    elapsed: number
}

export interface useTimerProps {
    duration: number
    action: () => void
}

export function useTimer({ duration, action }: useTimerProps): Timer {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const [elapsed, setElapsed] = useState<number>(0)

    const start = (): void => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        if (intervalId) {
            clearInterval(intervalId)
        }
        setElapsed(0)
        const id = setTimeout(() => {
            action()
        }, duration)
        setTimeoutId(id)

        const interval = setInterval(() => {
            setElapsed((prev) => {
                const newElapsed = prev + 0.1
                if (newElapsed >= duration / 1000) {
                    clearInterval(interval)
                    return duration / 1000
                }
                return newElapsed
            })
        }, 100)
        setIntervalId(interval)
    }

    const pause = (): void => {
        if (timeoutId) {
            clearTimeout(timeoutId)
            setTimeoutId(null)
        }
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
        setIsPaused(true)
    }

    const resume = (): void => {
        if (isPaused) {
            const remainingDuration = duration - elapsed * 1000
            const id = setTimeout(() => {
                action()
            }, remainingDuration)
            setTimeoutId(id)

            const interval = setInterval(() => {
                setElapsed((prev) => {
                    const newElapsed = prev + 0.1
                    if (newElapsed >= duration / 1000) {
                        clearInterval(interval)
                        return duration / 1000
                    }
                    return newElapsed
                })
            }, 100)
            setIntervalId(interval)
            setIsPaused(false)
        }
    }

    useEffect(() => {
        start()

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        duration,
        pause,
        resume,
        start,
        elapsed: parseFloat(elapsed.toFixed(1)),
    }
}
