import './globals.css'

import { Poppins } from 'next/font/google'
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})
export const metadata = {
    title: 'Next.js 13.4+ App Router + Tailwind CSS + TypeScript + ESLint + Prettier + Husky + Commitlint + Lint Staged',
    description: 'Next.js 13.4+ App Router + Tailwind CSS + TypeScript + ESLint + Prettier + Husky + Commitlint + Lint Staged',
}
export default function RootLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>{children}</body>
        </html>
    )
    }