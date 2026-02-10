import type { Metadata } from 'next'
import { Newsreader, Inter } from 'next/font/google'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const serifDisplay = Newsreader({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif-display',
})

export const metadata: Metadata = {
  title: 'Irfan | Portfolio',
  description: 'Designing systems that scale. Crafting clarity in complexity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serifDisplay.variable}`}>{children}</body>
    </html>
  )
}
