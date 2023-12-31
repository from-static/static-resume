import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import DATA from '../../static.json';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: DATA.metadata.title,
  description: DATA.metadata.description
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className='fixed bottom-0 right-4'>
          <small>
            <a href="https://github.com/from-static">
              generated from <span className='bg-light-green'>s</span>tatic
            </a>
          </small>
        </footer>
      </body>
    </html>
  )
}
