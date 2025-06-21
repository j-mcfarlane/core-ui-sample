import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Types
import { SeparatorVariant } from './Separator.type'

const separator = cva(`w-full flex gap-2 items-center justify-center`, {
    variants: {
        variant: SeparatorVariant,
    },
    defaultVariants: {
        variant: 'line',
    },
})

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    variant?: SeparatorVariant
}

export function Separator({ children, className, ref, variant = 'line', ...rest }: PropsWithChildren<SeparatorProps>) {
    return (
        <div ref={ref} className={cn(separator({}), className)} {...rest}>
            <div className="grow-1 h-[1px] w-full bg-[color:var(--bg-color-quaternary)]" />

            <div className="shrink-0">{children}</div>

            <div className="grow-1 h-[1px] w-full bg-[color:var(--bg-color-quaternary)]" />
        </div>
    )
}
