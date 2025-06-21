import { HTMLAttributes, PropsWithChildren, ReactNode, Ref, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    items: {
        action: () => void
        disabled: boolean
        children: ReactNode
    }[]
}

export function ButtonGroup({ className, ref, items = [], ...rest }: ButtonGroupProps) {
    return (
        <div
            ref={ref}
            className="
            rounded-size-3 border border-solid border-[color:var(--border-color-primary)] shadow-xs bg-[color:var(--bg-color-primary)] overflow-hidden flex items-center "
            {...rest}
        >
            {items.map((items, idx) => (
                <ButtonGroupItem key={idx} disabled={items.disabled} onClick={items.action}>
                    {items.children}
                </ButtonGroupItem>
            ))}
        </div>
    )
}

function ButtonGroupItem({
    disabled = false,
    onClick,
    children,
}: PropsWithChildren<{ disabled?: boolean; onClick: () => void }>) {
    const [active, setActive] = useState(false)

    const springStyle = useSpring({
        transform: active ? 'scale(0.99)' : 'scale(1)',
        config: { tension: 150, friction: 10 },
    })

    return (
        <animated.button
            className="
                py-2 px-4 flex items-center justify-center gap-2 h-full
                hover:bg-[color:var(--bg-color-secondary)]
                border-0 border-r border-solid border-[color:var(--border-color-primary)]
                last:border-r-0
            "
            disabled={disabled}
            style={springStyle}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onMouseLeave={() => setActive(false)}
            onTouchStart={() => setActive(true)}
            onTouchEnd={() => setActive(false)}
            onClick={onClick}
        >
            {children}
        </animated.button>
    )
}
