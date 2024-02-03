import type { Metadata } from 'next'
import {Bebas_Neue, Oswald} from 'next/font/google'
import './globals.css'
import Providers from "@/utils/Providers";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import Cursor from "@/animations/Cursor";
import localFont from "next/font/local";


const NeueMontreal=localFont(
    {
        src: '../fonts/NeueMontreal-Bold.woff2',
        variable: '--font-NeuMontreal',
    }
)

const oswald=Oswald({
    weight: '200',
    display: 'swap',
    subsets: ['latin'],
    preload: true,
    variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Htet Ah Yan',
  description: 'Developer Portfolio',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning  className={`${NeueMontreal.variable} ${oswald.variable}  `}>
      <body className={'bg-white'} >
      <Providers >

          <Header/>

              {children}
          <Menu/>
          <Cursor/>
      </Providers></body>
    </html>
  )
}
