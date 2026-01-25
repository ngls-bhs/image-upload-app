import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image to URL Converter – Free Online Image Hosting Tool',
  description: 'Upload images and instantly get a public URL. Free, fast, and no signup required. Share images anywhere online.',
  openGraph: {
    title: 'Image to URL Converter',
    description: 'Upload images and instantly get a shareable public URL. Free and easy to use.',
    type: 'website',
    url: 'https://image-upload.app',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://image-upload.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
