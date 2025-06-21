import { HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react'
import { useSpring, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'

// Utils
import { cn } from '@core/utils'

export interface ExpandableCardProps extends HTMLAttributes<HTMLDivElement> {
    ref?: Ref<HTMLDivElement>
    open: boolean
    inner: ReactNode
}

export function ExpandableCard({
    ref,
    open,
    inner,
    children,
    className,
    ...rest
}: PropsWithChildren<ExpandableCardProps>) {
    const [contentRef, { height }] = useMeasure()

    const slideAnimation = useSpring({
        height: open ? height : 0,
        config: {
            tension: 500,
            friction: 50,
        },
    })

    return (
        <div
            ref={ref}
            className={cn(
                `shadow-md flex flex-col rounded-size-6 bg-[var(--bg-secondary)] overflow-hidden border border-1 border-solid border-[color:var(--border-color-secondary)] w-full`,
                className,
            )}
            {...rest}
        >
            <div className="rounded-size-6 rounded-b-[0px] bg-[var(--bg-primary)] shadow-xs">{children}</div>

            <animated.div style={{ ...slideAnimation, overflow: 'hidden' }}>
                <div ref={contentRef} className="rounded-b-size-6">
                    {inner}
                </div>
            </animated.div>
        </div>
    )
}
