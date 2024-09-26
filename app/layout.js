import './globals.scss'
import Header from '../components/Header/Header'
import PageTransition from '../components/PageTransition'

export const metadata = {
  title: 'Game Intro Site',
  description: 'Discover amazing games',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  )
}