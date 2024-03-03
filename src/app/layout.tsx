import type { Metadata } from 'next'

import './globals.css'
import Providers from "@/utils/Providers";
import siteConfig from '../../site-config';
import localFont from "next/font/local";
import {ReactNode} from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"



const NeueMontreal=localFont(
    {
        src: '../fonts/NeueMontreal-Bold.woff2',
        variable: '--font-NeuMontreal',
    }
)
const NeueMontrealRegular=localFont(
    {
        src: '../fonts/NeueMontreal-Regular.woff2',
        variable: '--font-NeuMontrealRegular',
    }
)

export const metadata: Metadata = {
  title: siteConfig.title,

  description: siteConfig.tagline,
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

        description: 'An awesome web developer who loves to build web applications.',
        url: 'https://htetahyan.vercel.app/',
        releaseDate: '2023-03-02',


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
    export const viewport = {
        width: 'device-width',
        initialScale: 1,
      };
      
export default function RootLayout({
  children
}: {
  children:ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning className={`${NeueMontreal.variable} ${NeueMontrealRegular.variable}  `}>

      <body className={'bg-white'}>
      <SpeedInsights/>
      <Providers>
    

          {children}


      </Providers></body>
      </html>
  )
}
