import { useState, useEffect, cloneElement, ReactNode, isValidElement, Children } from 'react'

// Packages
import { Portal } from '@/atomic'

/**
 * This component allows components to animate when the portal is opened and closed
 */

interface AnimatedMountChildProps {
    onRest?: () => void
}

export interface AnimatedMountProps {
    active: boolean
    children: ReactNode
}

export function AnimatedMount({ active, children }: AnimatedMountProps) {
    const [mounted, setMounted] = useState<boolean>(active)
    const [animationStatuses, setAnimationStatuses] = useState<boolean[]>([])

    useEffect(() => {
        if (active) {
            setMounted(true)
            setAnimationStatuses(Array.isArray(children) ? new Array(Children.count(children)).fill(false) : [false])
        } else {
            setAnimationStatuses((prevStatuses) => prevStatuses.map(() => false))
        }
    }, [active, children])

    useEffect(() => {
        if (!active && animationStatuses.every((status) => status)) {
            setMounted(false)
        }
    }, [active, animationStatuses])

    const handleAnimationComplete = (index: number) => {
        setAnimationStatuses((prevStatuses) => {
            const newStatuses = [...prevStatuses]
            newStatuses[index] = true
            return newStatuses
        })
    }

    return (
        mounted && (
            <Portal>
                {Array.isArray(children)
                    ? Children.map(children, (child, index) =>
                          isValidElement<AnimatedMountChildProps>(child)
                              ? cloneElement(child, {
                                    onRest: () => handleAnimationComplete(index),
                                })
                              : child,
                      )
                    : isValidElement<AnimatedMountChildProps>(children)
                    ? cloneElement(children, {
                          onRest: () => handleAnimationComplete(0),
                      })
                    : children}
            </Portal>
        )
    )
}
