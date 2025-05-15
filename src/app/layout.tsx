//root layout

import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.authors[0].name,
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/og.jpg`,
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: siteConfig.twitter,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                url: '/favicon-32x32.png',
            },
        ],
    },
    manifest: '/site.webmanifest',
    themeColor: '#ffffff',
    appleWebApp: {
        capable: true,
        title: siteConfig.name,
        statusBarStyle: 'default',
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
}

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
       
            {children}
            
      </body>
    </html>
  )
}