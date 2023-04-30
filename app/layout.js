import { Open_Sans } from 'next/font/google'
import './globals.css';
import Header from './components/Header';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Home | Alex Felker',
  description: 'My Website created with Next.js',
  keywords: 'web dev, next js, coding, beginner, own website'
}

export default function HomeLayout({ children }) {
  return (
    <html lang="de">
      <body className={ openSans.className + ' bg-slate-900' }>
        <Header />
        <main className='main-container'>
          {children}
        </main>
      </body>
    </html>
  )
}
