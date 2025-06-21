import { useCallback, useEffect } from 'react'

export function useKeyPress(targetKey: string, action: () => void) {
    const keyPressHandler = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === targetKey) {
                action()
            }
        },
        [targetKey, action],
    )

    useEffect(() => {
        document.addEventListener('keyup', keyPressHandler)

        return () => {
            document.removeEventListener('keyup', keyPressHandler)
        }
    }, [keyPressHandler])
}
