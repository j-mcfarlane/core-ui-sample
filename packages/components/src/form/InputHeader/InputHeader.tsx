import { HTMLAttributes, ReactNode, Ref } from 'react'

// Components
import { Label } from '@/typography'

export interface InputHeaderProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    hint?: ReactNode
    id?: string
    label?: string
}

export function InputHeader({ hint, id, label, ref, ...rest }: InputHeaderProps) {
    return (
        <div ref={ref} className="flex items-center justify-between gap-1" {...rest}>
            <Label htmlFor={id} size="sm" weight="medium" color="tertiary">
                {label}
            </Label>

            {hint}
        </div>
    )
}
