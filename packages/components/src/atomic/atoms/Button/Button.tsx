import { HTMLAttributes, PropsWithChildren, Ref, useState } from 'react'
import { cva } from 'class-variance-authority'
import { animated, useSpring } from '@react-spring/web'

// Packages
import { cn } from '@core/utils'

// Type
import { ButtonColor, ButtonSize, ButtonVariant } from './Button.type'

const button = cva(
    `
        inline-flex justify-center items-center font-semibold shadow-xs gap-1 
        rounded-size-3 text-body-sm leading-body-sm border border-solid 
        disabled:cursor-not-allowed disabled:transition-none disabled:duration-0 disabled:active:scale-100
    `,
    {
        variants: {
            color: ButtonColor,
            size: ButtonSize,
            variant: ButtonVariant,
        },
        defaultVariants: {
            color: 'brand',
            size: 'md',
            variant: 'default',
        },
    },
)

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>
    color?: ButtonColor
    disabled?: boolean
    size?: ButtonSize
    variant?: ButtonVariant
}

export function Button({
    children,
    className,
    color,
    disabled = false,
    size,
    variant = 'default',
    ref,
    ...rest
}: PropsWithChildren<ButtonProps>) {
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
            className={cn(button({ color, size, variant }), className)}
            {...rest}
        >
            {children}
        </animated.button>
    )
}
