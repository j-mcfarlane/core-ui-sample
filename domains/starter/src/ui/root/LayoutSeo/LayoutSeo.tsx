import React, { JSX } from 'react'

export const LayoutSeo = ({
    title,
    description,
    keywords,
    image,
    url,
    canonical,
    noindex = false,
    locale = 'en_US',
    siteName = 'My Website',
    type = 'website',
    twitter = {},
    facebook = {},
    google = {},
}: {
    title: string
    description?: string
    keywords?: string
    image?: string
    url?: string
    canonical?: string
    noindex?: boolean
    locale?: string
    siteName?: string
    type?: string
    twitter?: {
        card?: 'summary' | 'summary_large_image' | 'app' | 'player'
        site?: string
        creator?: string
        description?: string
    }
    facebook?: {
        appId?: string
    }
    google?: {
        siteVerification?: string
        botDirectives?: string
    }
}): JSX.Element[] => {
    const tags: JSX.Element[] = []

    tags.push(<title key="title">{title}</title>)
    tags.push(<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} key="robots" />)

    // Open Graph
    tags.push(<meta property="og:type" content={type} key="og:type" />)
    tags.push(<meta property="og:title" content={title} key="og:title" />)
    tags.push(<meta property="og:locale" content={locale} key="og:locale" />)
    tags.push(<meta property="og:site_name" content={siteName} key="og:site_name" />)

    if (description) {
        tags.push(<meta name="description" content={description} key="desc" />)
    }

    if (keywords) {
        tags.push(<meta name="keywords" content={keywords} key="keywords" />)
    }

    if (google.botDirectives) {
        tags.push(<meta name="googlebot" content={google.botDirectives} key="googlebot" />)
    }

    if (google.siteVerification) {
        tags.push(<meta name="google-site-verification" content={google.siteVerification} key="google-verification" />)
    }

    if (canonical) {
        tags.push(<link rel="canonical" href={canonical} key="canonical" />)
    }

    if (description) {
        tags.push(<meta property="og:description" content={description} key="og:desc" />)
    }

    if (url) {
        tags.push(<meta property="og:url" content={url} key="og:url" />)
    }

    if (image) {
        tags.push(<meta property="og:image" content={image} key="og:image" />)
    }

    if (facebook.appId) {
        tags.push(<meta property="fb:app_id" content={facebook.appId} key="fb:app_id" />)
    }

    // Twitter
    tags.push(
        <meta
            name="twitter:card"
            content={twitter.card || (image ? 'summary_large_image' : 'summary')}
            key="twitter:card"
        />,
    )
    tags.push(<meta name="twitter:title" content={title} key="twitter:title" />)

    if (twitter.description || description) {
        tags.push(<meta name="twitter:description" content={twitter.description || description} key="twitter:desc" />)
    }

    if (twitter.creator) {
        tags.push(<meta name="twitter:creator" content={twitter.creator} key="twitter:creator" />)
    }

    if (twitter.site) {
        tags.push(<meta name="twitter:site" content={twitter.site} key="twitter:site" />)
    }

    if (image) {
        tags.push(<meta name="twitter:image" content={image} key="twitter:image" />)
    }

    return tags
}
