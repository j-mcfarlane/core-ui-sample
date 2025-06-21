import { LayoutSeo } from '@/ui/root/LayoutSeo'

export const RootMeta:
    | (React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement> | undefined)[]
    | undefined = [
    {
        charSet: 'utf-8',
    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
    },
    {
        title: 'Website Title',
    },
    {
        name: 'description',
        content: 'This is the website description',
    },
] as const
