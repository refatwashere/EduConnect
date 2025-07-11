import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { APP_CONFIG } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} - ${APP_CONFIG.description}`,
  description: APP_CONFIG.description,
  keywords: ['education', 'management', 'teachers', 'students', 'school'],
  authors: [{ name: 'EduConnect Team' }],
  creator: 'EduConnect Team',
  publisher: 'EduConnect',
  metadataBase: new URL(APP_CONFIG.url),
  openGraph: {
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    url: APP_CONFIG.url,
    siteName: APP_CONFIG.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}