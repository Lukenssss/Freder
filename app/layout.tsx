import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Alerts from '@/components/core/nav/Alerts'
import Header from '@/components/core/nav/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freder 🥤',
  description: '',
}

export const viewport: Viewport = {
  themeColor: '#000000'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Alerts />
        <Header />
        
        {children}
      </body>
    </html>
  )
}
