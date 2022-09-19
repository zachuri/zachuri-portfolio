import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className='fixed w-full h-20 z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-8'>
        {/* Left */}
        <Link href="/">
          ZACHURI
        </Link>

        {/* Middle */}
        <div>
          <ul className='hidden md:flex'>
            <Link href="/" >
              <li className="ml-10 text-sm uppercase hover:border-b">
                INTRO
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                WHO
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                WHAT
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                PROJECTS
              </li>
            </Link>
          </ul>
        </div>

        {/* Right md and lg*/}
        <div className='justify-between items-center hidden md:flex'>
          <Link href="/">
            <Image src="/assets/icons/toggle-theme.png" height="32" width="32" alt='toggle-theme'></Image>
          </Link>
          <Link href="/">
            <div className='ml-2'>
              CONTACT
            </div>
          </Link>
        </div>

        {/* Right (Hamburger)*/}
        <div className='md:hidden'>
          <Link href="/">
            <Image src="/assets/icons/toggle-theme.png" height="32" width="32" alt='toggle-theme'></Image>
          </Link>
          <Link href="/">
            <Image src="/assets/icons/hamburger.png" height="32" width="32" alt='hamgurger menu'></Image>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
