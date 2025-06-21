import { HTMLAttributes, PropsWithChildren, Ref, useState } from 'react'
import { cva } from 'class-variance-authority'
import { IoClose } from 'react-icons/io5'
import { animated, useSpring } from '@react-spring/web'

// Packages
import { cn } from '@core/utils'

// Type
import { CloseButtonSize } from './CloseButton.type'

const button = cva(
    `
    flex items-center justify-center rounded-size-3 bg-transparent
    border border-solid border-transparent text-[color:var(--text-color-tertiary)]

    hover:text-[color:var(--text-color-secondary)]
    hover:bg-[color:var(--color-gray-50)]

    disabled:bg-[color:var(--bg-color-primary)]
    disabled:border-transparent
    disabled:text-[color:var(--color-gray-400)]
    disabled:cursor-not-allowed
    disabled:transition-none
    disabled:duration-0
    disabled:active:scale-100
  `,
    {
        variants: {
            size: CloseButtonSize,
        },
        defaultVariants: {
            size: 'md',
        },
    },
)

export interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>
    disabled?: boolean
    size?: CloseButtonSize
}

export function CloseButton({
    children,
    className,
    color,
    disabled = false,
    size,
    ref,
    ...rest
}: PropsWithChildren<CloseButtonProps>) {
    const [active, setActive] = useState(false)

    const springStyle = useSpring({
        transform: active ? 'scale(0.99)' : 'scale(1)',
        config: { tension: 150, friction: 10 },
    })

    return (
        <animated.button
            ref={ref}
            disabled={disabled}
            style={springStyle}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onMouseLeave={() => setActive(false)}
            onTouchStart={() => setActive(true)}
            onTouchEnd={() => setActive(false)}
            className={cn(button({ size }), className)}
            {...rest}
        >
            <IoClose size={24} color="currentColor" />
        </animated.button>
    )
}
