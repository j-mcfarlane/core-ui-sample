import { HTMLAttributes, ReactNode, Ref } from 'react'

// Components
import { InputHeader } from '../InputHeader'
import { InputFooter } from '../InputFooter'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    // Input
    ref?: Ref<HTMLInputElement>
    disabled?: boolean
    placeholder?: string
    readonly?: boolean
    type?: string
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

export function Input({
    autoCapitalize,
    autoCorrect,
    autoSave,
    disabled = false,
    id,
    placeholder = '',
    readonly = false,
    type = 'text',
    value,
    ref,

    // Components
    leading,
    trailing,

    // Extras
    error,
    help,
    hint,
    label,
    ...rest
}: InputProps) {
    return (
        <div className="input-root">
            {(label || hint) && <InputHeader hint={hint} id={id} label={label || ''} />}

            <div className="input-container">
                {leading}

                <input
                    ref={ref}
                    autoCapitalize={autoCapitalize || 'off'}
                    autoCorrect={autoCorrect || 'off'}
                    autoSave={autoSave || 'off'}
                    disabled={disabled}
                    placeholder={placeholder}
                    readOnly={readonly}
                    type={type}
                    value={value}
                    className="input-inner"
                    {...rest}
                />

                {trailing}
            </div>

            {(help || error) && <InputFooter error={error} help={help} />}
        </div>
    )
}
