import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

// Packages
import { cn } from '@core/utils'

// Type
import { AnchorColorVariant } from './A.type'

// Common Variants
import { BodySizeVariant } from '../_body'
import { FontEllipseVariant } from '../_font-ellipse'
import { FontWeightVariant } from '../_font-weight'

const heading = cva(
    `m-0 p-0 inline-flex items-center justify-center gap-1 text-body-sm leading-body-sm font-semibold hover:underline disabled:pointer-events-none disabled:no-underline`,
    {
        variants: {
            color: AnchorColorVariant,
            ellipse: FontEllipseVariant,
            size: BodySizeVariant,
            weight: FontWeightVariant,
        },
        defaultVariants: {
            color: 'inherit',
            ellipse: 'initial',
            size: 'inherit',
            weight: 'inherit',
        },
    },
)

export interface AProps extends HTMLAttributes<HTMLAnchorElement> {
    ref?: Ref<HTMLAnchorElement>
    color?: AnchorColorVariant
    ellipse?: FontEllipseVariant
    size?: BodySizeVariant
    weight?: FontWeightVariant
    asChild?: boolean
}

export function A({
    ref,
    asChild,
    className,
    children,
    color,
    ellipse = 'initial',
    size = 'inherit',
    weight = 'inherit',
    ...rest
}: PropsWithChildren<AProps>) {
    return (
        <a ref={ref} className={cn(heading({ color, ellipse, size, weight }), className)} {...rest}>
            {children}
        </a>
    )
}
