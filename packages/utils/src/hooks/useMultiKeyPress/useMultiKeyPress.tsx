import { useCallback, useEffect } from 'react'

export function useMultiKeyPress(keys: string[], action: () => void) {
    const keyPressHandler = useCallback(
        (event: KeyboardEvent) => {
            if (keys.includes(event.key)) {
                action()
            }
        },
        [keys, action],
    )

    useEffect(() => {
        document.addEventListener('keydown', keyPressHandler)
        return () => document.removeEventListener('keydown', keyPressHandler)
    }, [keyPressHandler])
}
