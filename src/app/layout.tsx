import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AAII - Auburn Artificial Intelligence Initiative',
  description: 'A student organization bridging engineering, business, and computer science to explore AI\'s impact on future careers.',
  keywords: ['Auburn University', 'AI', 'Artificial Intelligence', 'Student Organization', 'Technology'],
  authors: [{ name: 'Auburn Artificial Intelligence Initiative' }],
  openGraph: {
    title: 'AAII - Auburn Artificial Intelligence Initiative',
    description: 'Unite Auburn students to transform the shared challenge of AI advancement into collective strength.',
    type: 'website',
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
