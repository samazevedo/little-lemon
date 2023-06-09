import './globals.css'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Little Lemon Restaurant',
    description: 'The tradition made with passion.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
