import Link from 'next/link'
import { FaGithub, FaBars, FaTimes, FaRegSun, FaRegMoon } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='
    flex flex-wrap justify-between content-center
    px-8 h-28 sm:h-16 text-xl
  bg-slate-700'>
      <div>
        <Link href='/'>
          Logo
        </Link>
      </div>
      <div className='flex justify-start flex-col sm:flex-row'>
        <div className='mx-2 sm:mx-6'>
          <Link href='/users'>
            Users
          </Link>
        </div>
        <div className='mx-2 sm:mx-6'>
          <Link href='/impressum'>
            Impressum
          </Link>
        </div>
        <div className='mx-2 sm:mx-6'>
          <Link href='/playground'>
            Playground
          </Link>
        </div>
      </div>
      <div>
        <Link href='https://github.com/alexfelker12' target='_blank'>
          <FaGithub className='h-7 w-7' />
        </Link>
      </div>
      <div className='hidden md:flex flex-row'>
        <FaBars className='h-7 w-7' />
        <FaTimes className='h-7 w-7' />
        <FaRegSun className='h-7 w-7' />
        <FaRegMoon className='h-7 w-7' />
      </div>
    </header>
  )
}
