import type { Metadata } from 'next'

import './globals.css'
import Providers from "@/utils/Providers";

import localFont from "next/font/local";
import {ReactNode} from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import metaTag from "@/components/MetaTag";



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

export const metadata: Metadata =metaTag

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
