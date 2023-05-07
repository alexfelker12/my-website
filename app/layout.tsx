import { Open_Sans } from 'next/font/google'
import './globals.css';
import Head from 'next/head';
import Header from './components/Header';
import Script from 'next/script';

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
      <Head>
        <script type='text/javascript'></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
      </Head>
      {/*
        declare default theme colors
      */}
      <body className={openSans.className + ' ' +
        'bg-slate-50 dark:bg-slate-950 text-black dark:text-white'}>
        <Header />
        <div className="flex"></div>
        <main className='max-w-screen-xl mt-20 m-auto p-0'>
          {children}
        </main>
      </body>
    </html>
  )
}
