import { HTMLAttributes, Ref } from 'react'

// Packages
import { cn } from '@core/utils'

export interface DotProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    color?: string
}

export function Dot({ ref, color = 'currentColor', className, ...rest }: DotProps) {
    const bgClass = color === 'currentColor' ? 'bg-current' : `bg-[${color}]`

    return <div ref={ref} className={cn('rounded-circle w-2 h-2', bgClass, className)} {...rest} />
}
