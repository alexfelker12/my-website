import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex flex-wrap justify-between p-1 px-4'>
      <div>
        <Link href='/'>
          Logo
        </Link>
      </div>
      <div className='flex justify-start px-12'>
        <div className='mx-6 hover:to-blue-400'>
          <Link href='/users'>
            Users
          </Link>
        </div>
        <div className='mx-6 hover:to-blue-400'>
          <Link href='/impressum'>
            Impressum
          </Link>
        </div>
        <div className='mx-6 hover:to-blue-400'>
          <Link href='/blogs'>
            Blogs
          </Link>
        </div>
      </div>
      <div>
        Links
      </div>
    </header>
  )
}
