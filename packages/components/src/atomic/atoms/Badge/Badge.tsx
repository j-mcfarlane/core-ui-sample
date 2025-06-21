import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Variant
import { BadgeColor, BadgeShadow, BadgeSize, BadgeVariant } from './Badge.type'

const badge = cva(`py-[2px] px-[6px] flex items-center justify-center gap-1 border border-solid font-medium`, {
    variants: {
        color: BadgeColor,
        shadow: BadgeShadow,
        size: BadgeSize,
        variant: BadgeVariant,
    },
    defaultVariants: {
        color: 'default',
        shadow: 'none',
        size: 'md',
        variant: 'default',
    },
})

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    color?: BadgeColor
    shadow?: BadgeShadow
    size?: BadgeSize
    variant?: BadgeVariant
}

export function Badge({
    color = 'default',
    shadow = 'none',
    size = 'md',
    variant = 'default',
    children,
    className,
    ref,
    ...rest
}: PropsWithChildren<BadgeProps>) {
    return (
        <div ref={ref} className={cn(badge({ color, shadow, size, variant }), className)} {...rest}>
            {children}
        </div>
    )
}
