import { useEffect, useState, RefObject } from 'react'
import { useThrottle } from '../useThrottle'

export function useRightHalf(ref: RefObject<HTMLElement>): boolean {
    const [scrollX, setScrollX] = useState<number>(window.scrollX)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const [isRightHalf, setIsRightHalf] = useState<boolean>(false)

    const throttledScrollX = useThrottle(scrollX, 100)

    useEffect(() => {
        const handleScroll = (): void => {
            setScrollX(window.scrollX)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleResize = (): void => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (ref.current) {
            const elementLeft = ref.current.getBoundingClientRect().left
            const isRight = elementLeft > windowWidth / 2
            setIsRightHalf(isRight)
        }
    }, [throttledScrollX, windowWidth, ref])

    return isRightHalf
}
