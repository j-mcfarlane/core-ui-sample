import { useLayoutEffect } from 'react'

export function useLockedBodyScroll(active = true): void {
    useLayoutEffect(() => {
        const originalStyle: string = document.body.style.overflow

        if (active) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = originalStyle
        }

        return () => {
            document.body.style.overflow = originalStyle
        }
    }, [active])
}
