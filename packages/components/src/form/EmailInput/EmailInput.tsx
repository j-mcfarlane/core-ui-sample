import { useState } from 'react'
import { Input, InputProps } from '../Input'
import { FaRegCircleCheck } from 'react-icons/fa6'

export interface EmailInputProps
    extends Omit<InputProps, 'type' | 'error' | 'inputMode' | 'autoComplete' | 'spellCheck'> {}

export function EmailInput({ ref, value, ...rest }: EmailInputProps) {
    const [isValid, setIsValid] = useState<boolean>(false)

    const onBlur = () => {
        setIsValid(true)
    }

    return (
        <Input
            ref={ref}
            type="email"
            inputMode="email"
            spellCheck={false}
            onBlur={onBlur}
            trailing={value && value.length > 3 && isValid && <FaRegCircleCheck />}
            {...rest}
        />
    )
}
