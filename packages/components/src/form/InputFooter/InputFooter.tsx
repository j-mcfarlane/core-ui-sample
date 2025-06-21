import { HTMLAttributes, Ref } from 'react'

// Components
import { P } from '@/typography'

export interface InputFooterProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    help?: string
    error?: string
}

export function InputFooter({ help, error, ref, ...rest }: InputFooterProps) {
    return (
        <div ref={ref} className="flex items-center justify-start gap-1" {...rest}>
            {error ? (
                <P size="sm" color="error">
                    {error}
                </P>
            ) : (
                <P size="sm" color="tertiary">
                    {help}
                </P>
            )}
        </div>
    )
}
