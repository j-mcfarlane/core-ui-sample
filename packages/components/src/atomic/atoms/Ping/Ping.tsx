import { HTMLAttributes, Ref } from 'react'

// Packages
import { cn } from '@core/utils'

export interface PingProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    color?: string
}

export function Ping({ ref, color = 'currentColor', className, ...rest }: PingProps) {
    return (
        <div ref={ref} className={cn(`relative flex items-center justify-center w-3 h-3`, className)} {...rest}>
            {/* pulse circle */}
            <span
                className="absolute inline-flex w-full h-full rounded-full opacity-30 animate-ping"
                style={{
                    backgroundColor: color,
                    animationDuration: '3s',
                }}
            />
            {/* solid dot */}
            <span className="relative inline-flex w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        </div>
    )
}
