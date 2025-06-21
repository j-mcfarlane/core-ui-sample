import { HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Components
import { H2, P } from '@/typography'
import { cn } from '@core/utils'

// Types
import { CTASimpleHorizontalLogosColor } from './CTASimpleHorizontalLogos.type'

const cta = cva(`w-dvw py-16 md:py-24 px-0`, {
    variants: {
        color: CTASimpleHorizontalLogosColor,
    },
    defaultVariants: {
        color: 'theme',
    },
})

export interface CTASimpleHorizontalLogosProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    color?: CTASimpleHorizontalLogosColor
    title: string
    subtext: string
    logos: string[]
}

export function CTASimpleHorizontalLogos({
    title,
    subtext,
    color,
    logos,
    ref,
    className,
    children,
    ...rest
}: PropsWithChildren<CTASimpleHorizontalLogosProps>) {
    const text = () => {
        switch (color) {
            case 'brand':
                return `text-[color:var(--color-brand-200)]`
            case 'dark':
                return `text-[color:var(--color-gray-400)]`
            case 'light':
                return `text-[color:var(--color-gray-600)]`
            default:
                return `text-[color:var(--text-color-tertiary)]`
        }
    }

    const image = () => {
        switch (color) {
            case 'brand':
            case 'dark':
                return `filter brightness-0 invert`
            default:
                return ``
        }
    }

    return (
        <div ref={ref} className={cn(cta({ color }), className)} {...rest}>
            <div className="w-full max-w-[1280px] p-8 m-auto flex flex-col md:flex-row items-start gap-16 overflow-hidden">
                <div className="flex-1 flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col gap-5">
                        <H2 color="inherit" size="level4" weight="semibold">
                            {title}
                        </H2>

                        <P color="inherit" size="xl" className={cn(text())}>
                            {subtext}
                        </P>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-3">{children}</div>
                </div>

                <div className="flex flex-wrap flex-1 gap-8 items-center justify-center">
                    {logos.map((logo, idx) => {
                        const extraClasses = idx < 6 ? '' : idx < 9 ? 'hidden md:block' : 'hidden'

                        return <img key={idx} src={logo} alt="idx" className={cn(image(), extraClasses)} />
                    })}
                </div>
            </div>
        </div>
    )
}
