import { Children, PropsWithChildren, useMemo } from 'react'
import { useTrail, animated } from '@react-spring/web'

export interface TrailAnimationProps {
    open: boolean
    onRest: () => void
}

export function TrailAnimation({ children, open, onRest }: PropsWithChildren<TrailAnimationProps>) {
    const items = useMemo(() => Children.toArray(children), [children])

    const trail = useTrail(items.length, {
        config: { mass: 1, tension: 4000, friction: 200 },
        opacity: open ? 1 : 0,
        y: open ? 0 : -20,
        from: { opacity: 0, y: 0 },
        onRest,
    })

    return (
        <>
            {trail.map((style, index) => (
                <animated.div key={index} style={style}>
                    {items[index]}
                </animated.div>
            ))}
        </>
    )
}
