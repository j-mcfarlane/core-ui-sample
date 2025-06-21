import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Components
import { H2, P } from '@/typography'
import { cn } from '@core/utils'

// Types
import { CTASimpleHorizontalLogosStackedColor } from './CTASimpleHorizontalLogosStacked.type'

const cta = cva(`w-dvw py-16 md:py-24 px-0 flex`, {
    variants: {
        color: CTASimpleHorizontalLogosStackedColor,
    },
    defaultVariants: {
        color: 'theme',
    },
})

export interface CTASimpleHorizontalLogosStackedProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    color?: CTASimpleHorizontalLogosStackedColor
    title: string
    subtext: string
}

export function CTASimpleHorizontalLogosStacked({
    title,
    subtext,
    color,
    ref,
    className,
    children,
    ...rest
}: PropsWithChildren<CTASimpleHorizontalLogosStackedProps>) {
    const text = () => {
        switch (color) {
            case 'brand':
                return `text-[color:var(--color-brand-200)]`
            case 'dark':
                return `text-[color:var(--color-gray-400)]`
            case 'light':
                return `text-[color:var(--color-gray-600)]`
            default:
                return ``
        }
    }

    return (
        <div ref={ref} className={cn(cta({ color }), className)} {...rest}>
            <div className="w-full max-w-[1280px] p-8 m-auto flex flex-col gap-8">
                <div className="flex flex-col text-center gap-5">
                    <H2 color="inherit" size="level4" weight="semibold">
                        {title}
                    </H2>

                    <P color="inherit" size="xl" className={cn(text())}>
                        {subtext}
                    </P>
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-center">{children}</div>
            </div>
        </div>
    )
}
