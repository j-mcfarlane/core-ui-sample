// VerificationInput.tsx
import React, {
    useCallback,
    useEffect,
    useRef,
    ChangeEvent,
    ClipboardEvent,
    HTMLAttributes,
    Dispatch,
    SetStateAction,
} from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@core/utils'
import { VerificationInputSize } from './VerificationInput.type'

const inputStyles = cva(
    `
      flex items-center justify-center text-center rounded-size-4 font-medium uppercase
      border border-solid
      bg-[color:var(--bg-color-primary)]
      focus:bg-[color:var(--bg-color-secondary)] focus:shadow-sm
      disabled:bg-[color:var(--bg-color-disabled)] disabled:cursor-not-allowed disabled:opacity-70
    `,
    {
        variants: {
            size: VerificationInputSize,
            error: {
                true: 'border-red-500',
                false: 'border-[color:var(--border-color-primary)]',
            },
        },
        defaultVariants: { size: 'md', error: false },
    },
)

export interface VerificationInputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    code: string[]
    setCode: Dispatch<SetStateAction<string[]>>
    length?: number
    size?: VerificationInputSize
    disabled?: boolean
    error?: boolean
    onClearError?: () => void
    onComplete?: (fullCode: string) => void

    /**
     * Called once on mount, giving the parent a `clear()` function
     * so it can reset all boxes and focus the first input.
     */
    onRegisterClear?: (clearFn: () => void) => void
}

export function VerificationInput({
    code,
    setCode,
    length = 4,
    size = 'md',
    disabled = false,
    error = false,
    onClearError,
    onComplete,
    onRegisterClear,
    className,
    ...rest
}: VerificationInputProps) {
    const inputRefs = useRef<HTMLInputElement[]>([])
    const hasClearedOnFocus = useRef(false)
    const hasCompletedRef = useRef(false)

    // 1️⃣ Register the `clear()` function with parent
    // register clear() with parent
    useEffect(() => {
        if (onRegisterClear) {
            onRegisterClear(() => {
                setCode(Array(length).fill(''))
                hasCompletedRef.current = false
                hasClearedOnFocus.current = false
                inputRefs.current[0]?.focus()
                onClearError?.()
            })
        }
    }, [onRegisterClear, length, setCode, onClearError])

    // 2️⃣ Reset focus-clear guard whenever error is removed
    useEffect(() => {
        if (!error) hasClearedOnFocus.current = false
    }, [error])

    const focusInput = useCallback((i: number) => {
        inputRefs.current[i]?.focus()
    }, [])

    // 3️⃣ Only fire onComplete once when all boxes go from partially→fully filled
    useEffect(() => {
        if (!hasCompletedRef.current && code.length === length && code.every((ch) => ch !== '')) {
            hasCompletedRef.current = true
            inputRefs.current[length - 1]?.blur()
            onComplete?.(code.join(''))
        }
    }, [code, length, onComplete])

    // 4️⃣ If the user clicks any box while an error exists, wipe everything
    const handleFocus = useCallback(
        (idx: number) => {
            if (error && !hasClearedOnFocus.current) {
                hasClearedOnFocus.current = true
                setCode(Array(length).fill(''))
                onClearError?.()
                focusInput(0)
            }
        },
        [error, length, onClearError, setCode, focusInput],
    )

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>, idx: number) => {
            const val = e.target.value.slice(-1).toUpperCase()
            setCode((prev) => {
                const next = [...prev]
                next[idx] = val
                return next
            })
            onClearError?.()
            if (val && idx < length - 1) focusInput(idx + 1)
        },
        [focusInput, length, onClearError, setCode],
    )

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
            if (e.key === 'Backspace') {
                e.preventDefault()
                setCode((prev) => {
                    const next = [...prev]
                    if (prev[idx]) {
                        next[idx] = ''
                    } else if (idx > 0) {
                        next[idx - 1] = ''
                        focusInput(idx - 1)
                    }
                    return next
                })
                onClearError?.()
            }
        },
        [focusInput, onClearError, setCode],
    )

    const handlePaste = useCallback(
        (e: ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault()
            const text = e.clipboardData.getData('text').slice(0, length).toUpperCase()

            const arr = Array<string>(length).fill('')
            for (let i = 0; i < text.length; i++) arr[i] = text[i]

            setCode(arr)
            onClearError?.()
            focusInput(Math.min(text.length, length - 1))
        },
        [focusInput, length, onClearError, setCode],
    )

    return (
        <div className={cn('flex items-center justify-between w-full overflow-hidden', className)} {...rest}>
            {Array.from({ length }).map((_, i) => (
                <input
                    key={i}
                    type="text"
                    maxLength={1}
                    disabled={disabled}
                    value={code[i] || ''}
                    onFocus={() => handleFocus(i)}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    onPaste={handlePaste}
                    ref={(el) => {
                        inputRefs.current[i] = el!
                    }}
                    className={cn(inputStyles({ size, error }))}
                />
            ))}
        </div>
    )
}
