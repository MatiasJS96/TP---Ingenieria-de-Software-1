import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google"
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'PictoComunica - Comunicación Aumentativa',
  description: 'Aplicación de comunicación aumentativa y alternativa (CAA) para educación especial',
  generator: 'v0.app',
  keywords: ['CAA', 'AAC', 'pictogramas', 'comunicación aumentativa', 'educación especial', 'autismo'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: '#F5C542',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="es" className="bg-background">
    <body className={inter.className}>
      {children}
    </body>
  </html>
)
}
