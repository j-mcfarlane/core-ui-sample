import { HTMLAttributes, PropsWithChildren, Ref, useState } from 'react'
import { cva } from 'class-variance-authority'
import { animated, useSpring } from '@react-spring/web'

// Packages
import { cn } from '@core/utils'

// Type
import { SocialButtonColor, SocialButtonSize } from './SocialButton.type'

const button = cva(
    `
        inline-flex justify-center items-center font-semibold shadow-xs gap-1 
        rounded-size-3 text-body-sm leading-body-sm border border-solid 
        disabled:cursor-not-allowed disabled:transition-none disabled:duration-0 disabled:active:scale-100
    `,
    {
        variants: {
            color: SocialButtonColor,
            size: SocialButtonSize,
        },
        defaultVariants: {
            color: 'default',
            size: 'md',
        },
    },
)

export interface SocialButtonProps extends HTMLAttributes<HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>
    color?: SocialButtonColor
    disabled?: boolean
    size?: SocialButtonSize
}

export function SocialButton({
    children,
    className,
    color,
    disabled = false,
    size,
    ref,
    ...rest
}: PropsWithChildren<SocialButtonProps>) {
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
