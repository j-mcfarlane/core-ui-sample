import styles from '@core/styling/app.css?url'

type LinkTag = React.LinkHTMLAttributes<HTMLLinkElement>

export const RootLinks: LinkTag[] = [
    { rel: 'stylesheet', href: styles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'icon', href: '/favicon.ico' },
]
