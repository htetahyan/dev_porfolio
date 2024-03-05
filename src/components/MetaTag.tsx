import siteConfig from "../../site-config";
import {Metadata} from "next";

const metaTag: Metadata={
    title: siteConfig.title,

    description: siteConfig.tagline,generator: 'Next.js',
    referrer: 'origin-when-cross-origin',


    applicationName: 'Htet Ah Yan',
    appleWebApp: true,
    formatDetection: {
        telephone: false
    },

    metadataBase: new URL(siteConfig.url),
    keywords: ['htetahyan', 'htetahyan.vercel.app', 'htetahyan.com','htetahyan portfolio','next','htet ah yan'],
    alternates: {
        canonical: new URL(siteConfig.url),
    },
    robots: {
        index: true,
        follow: true,

    },
    icons:[{
        rel: 'icon',
        type: 'image/png',
        sizes:'16x16',
        url: '/favicons/android-chrome-192x192.png'
    }
        ,{
            rel: 'icon',
            type: 'image/png',
            sizes:'32x32',
            url: '/favicons/android-chrome-512x512.png'
        }
        ,{
            rel: 'apple-touch-icon',
            type: 'image/png',
            sizes:'180x180',
            url: '/favicons/apple-touch-icon.png'
        }
    ],

    twitter: {
        card: 'summary',

        title: 'Htet Ah Yan',
        description: 'An innovative software engineer.',
        creator: 'Htet Ah Yan',
        images: ['https://htetahyan.vercel.app/opengraph.png']
    },
    openGraph: {

        title: 'Htet Ah Yan\'s Portfolio',
        type: 'website',
        description: 'An awesome web developer who loves to build web applications.',
        url: 'https://htetahyan.vercel.app/',
        siteName: 'Htet Ah Yan',


        images: [
            {
                url: 'https://htetahyan.vercel.app/opengraph.png',
                width: 1200,
                height: 630
            }
        ]
    },

    category:'Technology'
}
export default metaTag
