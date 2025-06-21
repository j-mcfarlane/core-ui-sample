import { useLayoutEffect, useState } from 'react'
import { ImageLoadingStatusType } from './ImageLoadingStatus.type'

export function useImageLoadingStatus(src?: string) {
    const [loadingStatus, setLoadingStatus] = useState<string>(ImageLoadingStatusType.IDLE)

    useLayoutEffect(() => {
        if (!src) {
            setLoadingStatus(ImageLoadingStatusType.ERROR)
            return
        }

        let isMounted = true
        const image = new window.Image()

        const updateStatus = (status: string) => () => {
            if (!isMounted) return
            setLoadingStatus(status)
        }

        setLoadingStatus(ImageLoadingStatusType.LOADING)
        image.onload = updateStatus(ImageLoadingStatusType.LOADED)
        image.onerror = updateStatus(ImageLoadingStatusType.ERROR)
        image.src = src

        return () => {
            isMounted = false
        }
    }, [src])

    return loadingStatus
}
