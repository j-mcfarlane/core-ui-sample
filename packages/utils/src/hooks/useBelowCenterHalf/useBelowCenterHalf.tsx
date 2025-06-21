import { useEffect, useState, RefObject } from 'react'
import { useThrottle } from '../useThrottle'

export function useBelowCenterHalf(ref: RefObject<HTMLElement>): boolean {
    const [scrollY, setScrollY] = useState(window.scrollY)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [isBelowCenterHalf, setIsBelowCenterHalf] = useState(false)

    const throttledScrollY = useThrottle(scrollY, 100)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (ref.current) {
            const elementTop = ref.current.getBoundingClientRect().top
            const isBelow = elementTop > windowHeight / 2
            setIsBelowCenterHalf(isBelow)
        }
    }, [throttledScrollY, windowHeight, ref])

    return isBelowCenterHalf
}
