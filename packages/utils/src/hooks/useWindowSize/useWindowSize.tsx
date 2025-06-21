import { useState, useLayoutEffect } from 'react'

export interface UseWindowSizeProps {
    width: number
    height: number
}

export function useWindowSize() {
    const isClient = typeof window === 'object'

    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : 0,
            height: isClient ? window.innerHeight : 0,
        }
    }

    const [windowSize, setWindowSize] = useState<UseWindowSizeProps>(getSize)

    useLayoutEffect(() => {
        if (!isClient) return

        const handleResize = () => setWindowSize(getSize())

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return windowSize
}
