import { HTMLAttributes, PropsWithChildren, Ref } from 'react'
import { cva } from 'class-variance-authority'

// Packages
import { cn } from '@core/utils'

// Types
import { AvatarIndicatorColor, AvatarIndicatorSize } from './AvatarIndicator.type'

const indicator = cva(
    `
        rounded-circle select-none items-center
        justify-center overflow-hidden align-middle 
        border-[1.5px] border-solid border-[color:var(--border-color-primary)]
    `,
    {
        variants: {
            color: AvatarIndicatorColor,
            size: AvatarIndicatorSize,
        },
        defaultVariants: {
            color: 'offline',
            size: 'md',
        },
    },
)

export interface AvatarIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    online?: boolean
    size?: AvatarIndicatorSize
}

export function AvatarIndicator({
    ref,
    online = false,
    size = 'md',
    className,
    ...rest
}: PropsWithChildren<AvatarIndicatorProps>) {
    return <div ref={ref} className={cn(indicator({ color: online ? 'online' : 'offline', size }))} {...rest} />
}
