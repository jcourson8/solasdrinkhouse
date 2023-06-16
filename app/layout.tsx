import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import DropdownMenu from './components/DropdownMenu'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: "300",
  variable: '--font-plex',
})

export const metadata = {
  title: 'Solas',
  description: 'Solas is here for you! We strive to be everything you love about a local coffee shop, but wherever you want us. We know you like to have fun and so do we! Let us know where you’d like to see us next.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-lightTan'>
      <meta name="theme-color" content="#fffaf5" />
      <body className={`${inter.variable} ${ibm_plex_mono.variable}`}>
          <div className='text-dark mx-auto px-4 pt-4 bg-lightTan w-full'>
            <div><p className="text-4xl font-plex italic">THANKS FOR</p></div>
            <div><p className="text-4xl font-plex italic text-right">STOPPING BY</p></div>
            <DropdownMenu />
          </div>
        {children}
        <div className='bg-lightTan justify-center text-center p-4'>
          <Link href="https://www.instagram.com/solasdrinkhouse/" className=' border border-black rounded-lg p-2 py-0 bg-transparent text-black inline-block font-plex'>Instagram</Link>
        </div>
      </body>
    </html>
  )
}
