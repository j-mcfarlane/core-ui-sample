import { useCallback, useEffect, useState } from 'react'

interface Coordinates {
    x: number
    y: number
}

export interface ElementCoordinates {
    center: {
        top: Coordinates
        right: Coordinates
        bottom: Coordinates
        left: Coordinates
    }
    corners: {
        top: {
            left: Coordinates
            right: Coordinates
        }
        bottom: {
            left: Coordinates
            right: Coordinates
        }
    }
    size: {
        width: number
        height: number
    }
}

export const useElementCoordinates = (ref: React.RefObject<HTMLElement>): ElementCoordinates | null => {
    const [coordinates, setCoordinates] = useState<ElementCoordinates | null>(null)

    const updateCoordinates = useCallback(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()

            setCoordinates({
                center: {
                    top: { x: rect.left + rect.width / 2, y: rect.top },
                    right: { x: rect.right, y: rect.bottom - rect.height / 2 },
                    bottom: { x: rect.left + rect.width / 2, y: rect.bottom },
                    left: { x: rect.left, y: rect.bottom - rect.height / 2 },
                },
                corners: {
                    top: {
                        left: { x: rect.left, y: rect.top },
                        right: { x: rect.right, y: rect.top },
                    },
                    bottom: {
                        left: { x: rect.left, y: rect.bottom },
                        right: { x: rect.right, y: rect.bottom },
                    },
                },
                size: {
                    width: rect.width,
                    height: rect.height,
                },
            })
        }
    }, [ref])

    useEffect(() => {
        updateCoordinates()

        window.addEventListener('resize', updateCoordinates)
        window.addEventListener('scroll', updateCoordinates)

        const resizeObserver = new ResizeObserver(() => {
            updateCoordinates()
        })

        const parentElement = ref.current?.parentElement
        if (parentElement) {
            resizeObserver.observe(parentElement)
        }

        return () => {
            window.removeEventListener('resize', updateCoordinates)
            window.removeEventListener('scroll', updateCoordinates)

            if (parentElement) {
                resizeObserver.unobserve(parentElement)
            }
        }
    }, [updateCoordinates, ref])

    return coordinates
}
