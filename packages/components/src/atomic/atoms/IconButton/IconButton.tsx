import { HTMLAttributes, PropsWithChildren, Ref, useState } from 'react'
import { cva } from 'class-variance-authority'
import { animated, useSpring } from '@react-spring/web'

// Packages
import { cn } from '@core/utils'

// Type
import { IconButtonColor, IconButtonSize } from './IconButton.type'

const button = cva(
    `flex items-center justify-center transition-transform duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-[0.99] transition-colors duration-200 shadow-xs rounded-size-3 border border-solid disabled:cursor-not-allowed disabled:transition-none disabled:duration-0 disabled:active:scale-100`,
    {
        variants: {
            color: IconButtonColor,
            size: IconButtonSize,
        },
        defaultVariants: {
            color: 'brand',
            size: 'md',
        },
    },
)

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>
    color?: IconButtonColor
    disabled?: boolean
    size?: IconButtonSize
}

export function IconButton({
    children,
    className,
    color,
    disabled = false,
    size,
    ref,
    ...rest
}: PropsWithChildren<IconButtonProps>) {
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
            className={cn(button({ color, size }), className)}
            {...rest}
        >
            {children}
        </animated.button>
    )
}
