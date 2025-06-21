import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Type
import { FeaturedIconColor } from './FeaturedIconCircle.type'

const featured = cva(
    `flex items-center justify-center h-[48px] w-[48px] border-[6px] border-solid rounded-circle grow-0 shrink-0`,
    {
        variants: {
            color: FeaturedIconColor,
        },
        defaultVariants: {
            color: 'brand',
        },
    },
)

export interface FeaturedIconCircleProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    color?: FeaturedIconColor
}

export function FeaturedIconCircle({
    ref,
    color = 'brand',
    className,
    children,
    ...rest
}: PropsWithChildren<FeaturedIconCircleProps>) {
    return (
        <div ref={ref} className={cn(featured({ color }), className)} {...rest}>
            {children}
        </div>
    )
}
