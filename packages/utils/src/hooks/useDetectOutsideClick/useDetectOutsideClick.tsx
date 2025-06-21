import { RefObject, useLayoutEffect } from 'react'

export function useDetectOutsideClick<T extends HTMLElement>(
    ref: RefObject<T>,
    handler: () => void,
    exceptionRef?: RefObject<HTMLElement>,
): void {
    useLayoutEffect(() => {
        const listener = (event: MouseEvent) => {
            const target = event.target as Node

            if (ref.current?.contains(target) || (exceptionRef && exceptionRef.current?.contains(target))) {
                return
            }

            handler()
        }

        document.addEventListener('click', listener, true)

        return () => {
            document.removeEventListener('click', listener, true)
        }
    }, [ref, handler, exceptionRef])
}
