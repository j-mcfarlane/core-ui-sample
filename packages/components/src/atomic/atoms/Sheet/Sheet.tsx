import { cn } from '@core/utils'
import { PropsWithChildren, ReactElement } from 'react'
import { Drawer as VaulDrawer, DialogProps } from 'vaul-base'

type Element = ReactElement<Record<string, unknown>, string | React.JSXElementConstructor<any>>

export interface SheetProps {
    trigger: Element
    dialog?: DialogProps
    handle?: boolean
}

export function Sheet({ trigger, dialog = {}, handle = true, children }: PropsWithChildren<SheetProps>) {
    return (
        <VaulDrawer.Root {...dialog}>
            <VaulDrawer.Trigger render={trigger} />
            <VaulDrawer.Portal>
                <VaulDrawer.Overlay className="fixed inset-0 bg-black/70" />
                <VaulDrawer.Content
                    className={cn(
                        'bg-[color:var(--bg-color-primary)] fixed inset-x-0 top-0 max-h-[70vh] w-full outline-none',
                        dialog?.direction === 'bottom'
                            ? 'rounded-t-[12px]'
                            : dialog?.direction === 'top'
                            ? 'rounded-b-[12px]'
                            : 'rounded-t-[12px]',
                    )}
                >
                    {children}

                    {handle && <VaulDrawer.Handle className="bottom-4" />}
                </VaulDrawer.Content>
            </VaulDrawer.Portal>
        </VaulDrawer.Root>
    )
}
