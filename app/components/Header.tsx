'use client';

import Link from 'next/link'
import Image from 'next/image';
import { FaGithub, FaBars, FaTimes, FaRegSun, FaRegMoon, FaDesktop } from 'react-icons/fa'
import { useEffect, useState, useRef } from 'react'

export default function Header() {
  // prefered theme
  useEffect(() => {
    choosePageTheme('')

    document.addEventListener('mousedown', themeToggleHandler)
  }, [])

  const [themeToggleOpen, setThemeToggleOpen] = useState(false)
  const themeToggleRef = useRef<HTMLDivElement>()


  function choosePageTheme(preferedTheme: String): void {
    if (preferedTheme === 'system') localStorage.removeItem('theme')
    else if (preferedTheme !== '') localStorage.setItem('theme', `${preferedTheme}`)

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (themeToggleOpen) setThemeToggleOpen(!themeToggleOpen)
  }

  function themeToggleHandler(e) {
    if (themeToggleRef && !themeToggleRef.current.contains(e.target)) setThemeToggleOpen(false)
  }

  function toggleThemeChoices(): void {
    setThemeToggleOpen(!themeToggleOpen)
  }


  function toggleSidabar(): void {
    document.querySelector('body').classList.toggle('overflow-hidden')
    document.getElementById('navbar').classList.toggle('backdrop-blur-sm')

    const sidebarClasses = document.getElementById('menu-sidebar').classList
    sidebarClasses.toggle('flex')
    sidebarClasses.toggle('hidden')
  }

  return (
    <header className='fixed border-b border-slate-500/30 top-0 flex flex-wrap content-center w-full px-6 h-20 text-xl shadow-lg bg-slate-50/75 dark:bg-slate-950/75 backdrop-blur-sm ' id='navbar'>
      <div className="max-w-screen-xl w-full m-auto flex justify-between text-black dark:text-slate-200">
        <div className=''>
          <Link href='/'>
            <Image src='/F.svg' alt='F logo' width={28} height={28} className='inline-flex h-7' />
            <span className='ml-2 italic'>Alex Felker</span>
          </Link>
        </div>

        {/* sidbar < 640px */}
        <div id='menu-sidebar' className='hidden absolute right-0 top-0 h-screen w-screen backdrop-blur-sm z-50'>
          <div className='w-2/5 h-full' onClick={toggleSidabar}></div>
          <div className='flex flex-col w-3/5 bg-slate-700 shadow-xl sm:flex-row sm:justify-start sm:w-auto'>
            <div className='flex flex-wrap content-center justify-end h-20 mr-6'>
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
        <div className='hidden sm:flex flex-grow pl-8'>
          <div className='mx-4 hover:text-slate-500 dark:hover:text-sky-400  transition duration-150'>
            <Link href='/users'>
              Users
            </Link>
          </div>
          <div className='mx-4 hover:text-slate-500 dark:hover:text-sky-400  transition duration-150'>
            <Link href='/impressum'>
              Impressum
            </Link>
          </div>
          <div className='mx-4 hover:text-slate-500 dark:hover:text-sky-400  transition duration-150'>
            <Link href='/playground'>
              Playground
            </Link>
          </div>
        </div>

        {/* right end */}
        <div className='flex relative h-full' ref={themeToggleRef}>
          <div className='mx-4'>
            <FaRegSun className='cursor-pointer h-6 w-6 dark:hidden' onClick={toggleThemeChoices} />
            <FaRegMoon className='cursor-pointer h-6 w-6 hidden dark:inline' onClick={toggleThemeChoices} />
          </div>
          {themeToggleOpen && (<div className='absolute top-10 right-0' id='themeToggleDropdown'>
            <ul className='border rounded-lg shadow-md p-2 flex justify-start flex-col w-32 bg-slate-50 dark:bg-slate-950 border-slate-400/50'>

              <li className='flex items-center rounded-md list-none m-0 hover:bg-slate-100 dark:hover:bg-slate-800 px-1'>
                <FaRegSun className='w-6 h-6 text-slate-400 fill-current' />
                <button className='px-2 w-full text-left rounded-md' onClick={() => { choosePageTheme('light') }}>Light</button>
                </li>

              <li className='flex items-center rounded-md list-none m-0 hover:bg-slate-100 dark:hover:bg-slate-800 px-1'>
                <FaRegMoon className='w-6 h-6 text-slate-400 fill-current' />
                <button className='px-2 w-full text-left rounded-md' onClick={() => { choosePageTheme('dark') }}>Dark</button>
                </li>

              <li className='flex items-center rounded-md list-none m-0 hover:bg-slate-100 dark:hover:bg-slate-800 px-1'>
                <FaDesktop className='w-6 h-6 text-slate-400 fill-current' />
                <button className='px-2 w-full text-left rounded-md' onClick={() => { choosePageTheme('system') }}>System</button>
                </li>

            </ul>
          </div>)}
          <div className='hidden sm:flex'>
            <Link href='https://github.com/alexfelker12' target='_blank'>
              <FaGithub className='h-6 w-6' />
            </Link>
          </div>
          <div className='flex sm:hidden flex-row'>
            <FaBars className='h-7 w-7' onClick={toggleSidabar} />
          </div>
        </div>
      </div>

    </header>
  )
}
