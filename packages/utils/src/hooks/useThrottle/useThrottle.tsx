import { useRef, useEffect, useState } from 'react'

export function useThrottle(value: string | number, limit: number) {
    const [throttledValue, setThrottledValue] = useState<string | number>(value)
    const lastRan = useRef(Date.now())
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const handler = () => {
            setThrottledValue(value)
            lastRan.current = Date.now()
        }

        if (Date.now() - lastRan.current >= limit) {
            handler()
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            timeoutRef.current = setTimeout(handler, limit - (Date.now() - lastRan.current))
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [value, limit])

    return throttledValue
}
