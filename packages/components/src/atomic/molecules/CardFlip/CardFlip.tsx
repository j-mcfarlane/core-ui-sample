import { HTMLAttributes, ReactNode, Ref, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export interface CardFlipProps extends HTMLAttributes<HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>
    vertical?: boolean
    front: ReactNode
    back: ReactNode
}

export function CardFlip({ back, front, vertical = false, ref, ...rest }: CardFlipProps) {
    const [flipped, set] = useState(false)

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: vertical
            ? `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`
            : `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <button ref={ref} onClick={() => set((state) => !state)} {...rest}>
            <animated.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>{front}</animated.div>
            <animated.div
                style={{
                    opacity,
                    transform,
                    rotateX: !vertical ? '180deg' : '0',
                    rotateY: vertical ? '180deg' : '0',
                }}
            >
                {back}
            </animated.div>
        </button>
    )
}
