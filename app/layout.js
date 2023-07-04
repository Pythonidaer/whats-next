import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Job Complaint Form',
  description: 'Created to learn Next.js, PostgresSQL and Prisma.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
