import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Config Builder',
  description: 'Generate your own config',
}
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className='main'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
