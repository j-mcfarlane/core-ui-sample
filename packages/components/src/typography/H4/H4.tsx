import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Variants
import { FontColorVariant } from '../_font-color'
import { FontEllipseVariant } from '../_font-ellipse'
import { FontWeightVariant } from '../_font-weight'
import { HeadingSizeVariant } from '../_heading'

const heading = cva('m-0 p-0', {
    variants: {
        color: FontColorVariant,
        ellipse: FontEllipseVariant,
        size: HeadingSizeVariant,
        weight: FontWeightVariant,
    },
    defaultVariants: {
        color: 'primary',
        ellipse: 'initial',
        size: 'level4',
        weight: 'bold',
    },
})

export interface H4Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
    ref?: Ref<HTMLHeadingElement>
    color?: FontColorVariant
    ellipse?: FontEllipseVariant
    size?: HeadingSizeVariant
    weight?: FontWeightVariant
}

export function H4({
    ref,
    className,
    color = 'primary',
    ellipse = 'initial',
    size = 'level4',
    weight = 'bold',
    children,
    ...rest
}: PropsWithChildren<H4Props>) {
    return (
        <h4 ref={ref} className={cn(heading({ color, ellipse, size, weight }), className)} {...rest}>
            {children}
        </h4>
    )
}
