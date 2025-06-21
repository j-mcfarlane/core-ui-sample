export const ImageLoadingStatusType = {
    ERROR: 'ERROR',
    IDLE: 'IDLE',
    LOADED: 'LOADED',
    LOADING: 'LOADING',
}

export type ImageLoadingStatusType = (typeof ImageLoadingStatusType)[keyof typeof ImageLoadingStatusType]
