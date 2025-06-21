import { useState } from 'react'

// Icons
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

// Components
import { Input, InputProps } from '../Input'

export interface PasswordInputProps
    extends Omit<InputProps, 'type' | 'error' | 'inputMode' | 'autoComplete' | 'spellCheck'> {}

export function PasswordInput({ ref, value, ...rest }: PasswordInputProps) {
    const [hidden, setHidden] = useState<boolean>(true)

    return (
        <Input
            ref={ref}
            spellCheck={false}
            type={hidden ? 'password' : 'text'}
            trailing={
                <button onClick={() => setHidden(!hidden)} className="opacity-[0.5]">
                    {hidden ? <FaRegEye size={16} /> : <FaRegEyeSlash size={16} />}
                </button>
            }
            {...rest}
        />
    )
}
