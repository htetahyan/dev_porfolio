import type { Metadata } from 'next'

import './globals.css'
import Providers from "@/utils/Providers";

import localFont from "next/font/local";
import {ReactNode} from "react";



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
  title: 'Htet Ah Yan',

  description: 'An awesome web developer who loves to build web applications.',
    metadataBase: new URL('https://htetahyan.vercel.app'),
  keywords: ['htetahyan', 'htetahyan.vercel.app', 'htetahyan.com','htetahyan portfolio','next','htet ah yan'],

    robots: {
        index: true,
        follow: true,
        googleBot: {
            follow: true,
            index: true
        }
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.ico',
        shortcut: '/favicon.ico'

    },

twitter: {
  card: 'summary',
  title: 'Htet Ah Yan',
  description: 'An awesome web developer who loves to build web applications.',
  creator: 'Htet Ah Yan',
  images: ['https://htetahyan.vercel.app/opengraph.png']
},
    openGraph: {
        title: 'Htet Ah Yan',
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

    }

export default function RootLayout({
  children
}: {
  children:ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning className={`${NeueMontreal.variable} ${NeueMontrealRegular.variable}  `}>

      <body className={'bg-white'}>
      <Providers>


          {children}


      </Providers></body>
      </html>
  )
}
