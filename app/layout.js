// export default function Page() {
//   return (
//     <div>page</div>
//   )
// } 

import { Open_Sans } from 'next/font/google'
import './globals.css';
import Header from './components/Header';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'My Website',
  description: 'My Website created with Next.js',
  keywords: 'web dev, coding, beginner, own website'
}

export default function HomeLayout({ children }) {
  return (
    <html lang="de">
      <body className={ openSans.className }>
        <Header />
        <main className='main-container'>
          {children}
        </main>
      </body>
    </html>
  )
}
