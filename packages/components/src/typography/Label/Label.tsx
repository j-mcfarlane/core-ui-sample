import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Common Variants
import { BodySizeVariant } from '../_body'
import { FontColorVariant } from '../_font-color'
import { FontEllipseVariant } from '../_font-ellipse'
import { FontWeightVariant } from '../_font-weight'

const label = cva(`p-0 m-0`, {
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

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    ref?: Ref<HTMLLabelElement>
    htmlFor?: string
    color?: FontColorVariant
    ellipse?: FontEllipseVariant
    size?: BodySizeVariant
    weight?: FontWeightVariant
}

export function Label({
    ref,
    htmlFor = '',
    color = 'inherit',
    ellipse = 'initial',
    size = 'md',
    weight = 'inherit',
    className,
    children,
    ...rest
}: PropsWithChildren<LabelProps>) {
    return (
        <label htmlFor={htmlFor} className={cn(label({ color, ellipse, size, weight }), className)} {...rest}>
            {children}
        </label>
    )
}
