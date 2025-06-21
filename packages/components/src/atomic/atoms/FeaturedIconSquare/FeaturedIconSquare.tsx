import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Type
import { FeaturedIconColor } from './FeaturedIconSquare.type'

const featured = cva(
    `flex items-center justify-center h-[48px] w-[48px] rounded-[10px] border border-solid grow-0 shrink-0 shadow-xs`,
    {
        variants: {
            color: FeaturedIconColor,
        },
        defaultVariants: {
            color: 'brand',
        },
    },
)

export interface FeaturedIconSquareProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    color?: FeaturedIconColor
}

export function FeaturedIconSquare({
    ref,
    color = 'brand',
    className,
    children,
    ...rest
}: PropsWithChildren<FeaturedIconSquareProps>) {
    return (
        <div ref={ref} className={cn(featured({ color }), className)} {...rest}>
            {children}
        </div>
    )
}
