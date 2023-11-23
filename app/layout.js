import { Raleway } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/sections/Footer'
import { Analytics } from '@vercel/analytics/react';

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: '6ixShooter Academy - Training Course',
  description: '6ixShooter Academy with Shooting Coach Seth McCoy BasketBall Shooting Training Program',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
