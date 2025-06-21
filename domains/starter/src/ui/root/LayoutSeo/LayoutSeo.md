SEO Metadata Generator Overview

This document explains the purpose and structure of a comprehensive SEO metadata generator used in modern web applications (React, Vite, Next.js, etc.).

⸻

✨ Purpose

This utility function generates a full set of meta tags to improve your site’s:
• Search engine visibility (Google, Bing, etc.)
• Social media previews (Facebook, Twitter, LinkedIn, WhatsApp, Instagram)
• Content classification (type, language, ownership, image previews)

It returns an array of tag definitions that can be rendered into the <head> of your HTML or React page.

⸻

⚙️ Props Reference

Required
• title: Page title (shows in browser tab, search results, social shares)

Optional
• description: Summary of the page’s content
• keywords: Comma-separated keywords for SEO (less critical today)
• image: Absolute URL to preview image
• url: Canonical/public page URL
• canonical: Preferred page URL (avoids duplicate content penalties)
• noindex: If true, prevents search engines from indexing this page
• locale: Page language/region (e.g., en_US, ar_AE)
• siteName: Used in Open Graph to name the site
• type: Content type (website, article, product, etc.)

Nested Objects
• twitter:
• card: Card type (summary, summary_large_image, app, player)
• site: Twitter handle of the site
• creator: Twitter handle of the content author
• description: Twitter-specific description
• facebook:
• appId: Facebook App ID for tracking shares via Insights
• google:
• siteVerification: Meta tag to verify site ownership in Google Search Console
• botDirectives: Overrides robots tag for Google’s crawler (e.g., index, follow)

⸻
