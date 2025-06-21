import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Variant
import { ChipSize } from './Chip.type'

const chip = cva(
    `flex items-center justify-center gap-[3px] rounded-[6px] border border-solid border-[color:var(--border-color-primary)] bg-primary font-medium`,
    {
        variants: {
            size: ChipSize,
        },
        defaultVariants: {
            size: 'md',
        },
    },
)

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    size?: ChipSize
}

export function Chip({ size = 'md', children, className, ref, ...rest }: PropsWithChildren<ChipProps>) {
    return (
        <div ref={ref} className={cn(chip({ size }), className)} {...rest}>
            {children}
        </div>
    )
}
