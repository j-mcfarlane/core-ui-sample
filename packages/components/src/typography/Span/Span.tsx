import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Common Variants
import { BodySizeVariant } from '../_body'
import { FontColorVariant } from '../_font-color'
import { FontEllipseVariant } from '../_font-ellipse'
import { FontWeightVariant } from '../_font-weight'

const span = cva(`p-0 m-0 inline-flex`, {
    variants: {
        color: FontColorVariant,
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
})

export interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
    ref?: Ref<HTMLParagraphElement>
    color?: FontColorVariant
    ellipse?: FontEllipseVariant
    size?: BodySizeVariant
    weight?: FontWeightVariant
}

export function Span({
    ref,
    className,
    color = 'inherit',
    ellipse = 'initial',
    size = 'inherit',
    weight = 'inherit',
    children,
    ...rest
}: PropsWithChildren<SpanProps>) {
    return (
        <span ref={ref} className={cn(span({ color, ellipse, size, weight }), className)} {...rest}>
            {children}
        </span>
    )
}
