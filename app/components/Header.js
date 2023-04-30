'use client';

import Link from 'next/link'
import Image from 'next/image';
import { FaGithub, FaBars, FaTimes, FaRegSun, FaRegMoon } from 'react-icons/fa'

export default function Header() {

  function toggleSidabar() {
    const sidebarClasses = document.getElementById('menu-sidebar').classList
    sidebarClasses.toggle('flex')
    sidebarClasses.toggle('hidden')
  }

  return (
    <header className='flex flex-wrap justify-between content-center w-full px-6 h-16 text-xl bg-slate-700 shadow-lg'>
      <div className='hover:text-sky-400 transition duration-150'>
        <Link href='/'>
          <Image src='/F.svg' alt='F logo' width={28} height={28} className='inline-flex h-7' />
          <span className='ml-2 italic'>Alex Felker</span>
        </Link>
      </div>

      {/* sidbar < 640px */}
      <div id='menu-sidebar' className='hidden absolute right-0 top-0 h-full w-screen backdrop-blur-sm'>
        <div className='w-2/5 h-full' onClick={toggleSidabar}></div>
        <div className='flex flex-col w-3/5 bg-slate-700 shadow-xl
        sm:flex-row sm:justify-start sm:w-auto'>
          <div className='flex flex-wrap content-center justify-end h-16 mr-6'>
            <FaTimes className='h-7 w-7' onClick={toggleSidabar} />
          </div>

          <div className='pl-2 pt-2'>
            <Link href='/users' onClick={toggleSidabar}>
              Users
            </Link>
          </div>
          <div className='pl-2 pt-2'>
            <Link href='/impressum' onClick={toggleSidabar}>
              Impressum
            </Link>
          </div>
          <div className='pl-2 pt-2'>
            <Link href='/playground' onClick={toggleSidabar}>
              Playground
            </Link>
          </div>

          <div id='sidebar-footer' className="absolute flex flex-wrap content-center justify-evenly bottom-0 w-3/5 bg-black h-24">
            <Link href='https://github.com/alexfelker12' target='_blank'>
              <FaGithub className='h-7 w-7' />
            </Link>
          </div>
        </div>
      </div>

      {/* subpages >= 640px */}
      <div className='hidden sm:flex'>
        <div className='mx-6 hover:text-sky-400  transition duration-150'>
          <Link href='/users'>
            Users
          </Link>
        </div>
        <div className='mx-6 hover:text-sky-400  transition duration-150'>
          <Link href='/impressum'>
            Impressum
          </Link>
        </div>
        <div className='mx-6 hover:text-sky-400  transition duration-150'>
          <Link href='/playground'>
            Playground
          </Link>
        </div>
      </div>

      {/* right end */}
      <div className='hidden sm:flex'>
        <Link href='https://github.com/alexfelker12' target='_blank'>
          <FaGithub className='h-7 w-7' />
        </Link>
      </div>
      <div className='flex sm:hidden flex-row'>
        <FaBars className='h-7 w-7' onClick={toggleSidabar} />
        <FaRegSun className='h-7 w-7 hidden' />
        <FaRegMoon className='h-7 w-7 hidden' />
      </div>
    </header>
  )
}
