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
  icons: {
    icon: [
      { url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="viewport-root">
      <body className={`${sans.variable} ${serifDisplay.variable}`}>
        <div className="viewport-1716x879">{children}</div>
      </body>
    </html>
  )
}
