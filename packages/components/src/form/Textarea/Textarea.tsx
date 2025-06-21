import { HTMLAttributes, ReactNode, Ref } from 'react'

// Components
import { InputHeader } from '../InputHeader'
import { InputFooter } from '../InputFooter'

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
    // Input
    ref?: Ref<HTMLTextAreaElement>
    disabled?: boolean
    placeholder?: string
    readonly?: boolean
    value?: string

    //
    leading?: ReactNode
    trailing?: ReactNode

    //
    error?: string
    help?: string
    hint?: ReactNode
    label?: string
}

export function Textarea({
    autoCapitalize,
    autoCorrect,
    autoSave,
    disabled = false,
    id,
    placeholder = '',
    readonly = false,
    value,
    ref,

    //
    leading,
    trailing,

    //
    error,
    help,
    hint,
    label,
    ...rest
}: TextAreaProps) {
    return (
        <div className="input-root">
            {(label || hint) && <InputHeader hint={hint} id={id} label={label || ''} />}

            <div className="textarea-container">
                {leading}

                <textarea
                    ref={ref}
                    autoCapitalize={autoCapitalize || 'off'}
                    autoCorrect={autoCorrect || 'off'}
                    autoSave={autoSave || 'off'}
                    disabled={disabled}
                    placeholder={placeholder}
                    readOnly={readonly}
                    value={value}
                    className="textarea-inner"
                    {...rest}
                />

                {trailing}
            </div>

            {(help || error) && <InputFooter error={error} help={help} />}
        </div>
    )
}
