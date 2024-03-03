import type { Metadata } from 'next'

import './globals.css'
import Providers from "@/utils/Providers";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";

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
  title: 'Edusn',
  description: 'Developer Portfolio',
}

export default function RootLayout({
  children
}: {
  children:ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning  className={`${NeueMontreal.variable} ${NeueMontrealRegular.variable}  `}>
      <body className={'bg-white'} >
      <Providers >



              {children}


      </Providers></body>
    </html>
  )
}
