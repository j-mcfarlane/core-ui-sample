import { HTMLProps, PropsWithChildren, forwardRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps extends HTMLProps<HTMLDivElement> {}

export const Portal = forwardRef<HTMLDivElement, PropsWithChildren<PortalProps>>(function Base({ children }, ref) {
    const [defaultContainer, setDefaultContainer] = useState<HTMLElement | null>(null)

    useEffect(() => {
        const div = document.createElement('div')

        if (ref && typeof ref === 'object') {
            ref.current = div
        }

        document.body.appendChild(div)
        setDefaultContainer(div)

        return () => {
            document.body.removeChild(div)

            if (ref && typeof ref === 'object') {
                ref.current = null
            }
        }
    }, [ref])

    return defaultContainer ? createPortal(children, defaultContainer) : null
})
