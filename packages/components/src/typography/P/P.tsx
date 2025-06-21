import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Common Variants
import { BodySizeVariant } from '../_body'
import { FontColorVariant } from '../_font-color'
import { FontEllipseVariant } from '../_font-ellipse'
import { FontWeightVariant } from '../_font-weight'

const paragraph = cva(`p-0 m-0`, {
    variants: {
        color: FontColorVariant,
        ellipse: FontEllipseVariant,
        size: BodySizeVariant,
        weight: FontWeightVariant,
    },
    defaultVariants: {
        color: 'inherit',
        ellipse: 'initial',
        size: 'md',
        weight: 'inherit',
    },
})

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    ref?: Ref<HTMLParagraphElement>
    color?: FontColorVariant
    ellipse?: FontEllipseVariant
    size?: BodySizeVariant
    weight?: FontWeightVariant
}

export function P({
    ref,
    className,
    color = 'inherit',
    ellipse = 'initial',
    size = 'md',
    weight = 'inherit',
    children,
    ...rest
}: PropsWithChildren<ParagraphProps>) {
    return (
        <p ref={ref} className={cn(paragraph({ color, ellipse, size, weight }), className)} {...rest}>
            {children}
        </p>
    )
}
