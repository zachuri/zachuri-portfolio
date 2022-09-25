import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from 'next-themes'
import MyLink from './MyLink';

const links = [
  { href: '/who', name: 'Who' },
  { href: '/what', name: 'What' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
  { href: '/support', name: 'Support' },
  { href: '/license', name: 'License' },
]

const Navbar: React.FC = () => {

  const { theme, setTheme } = useTheme()
  const [darkToggle, setDarkToggle] = useState<boolean>(theme === "dark" ? false : true);

  // console.log(theme);
  // console.log(darkToggle);

  useEffect(() => { darkToggle }, [darkToggle])

  function handleTheme() {
    if (theme === 'dark') {
      setTheme('light')
      setDarkToggle(false)
    }
    else {
      setTheme('dark')
      setDarkToggle(true)
    }
  }

  return (
    <div className='fixed w-full h-10 md:h-20 z-[100] bg-opacity-20 backdrop-blur-lg drop-shadow-lg'>
      <div className='flex justify-between items-center w-full h-full px-10'>
        {/* Left */}
        <Link href="/">
          ZACHURI
        </Link>

        {/* Middle */}
        <div>
          <ul className='hidden md:flex'>
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

        {/* Right (medium and large)*/}
        <div className='justify-between items-center hidden md:flex'>
          <button onClick={handleTheme} className="flex justify-between items-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
          <Link href="/contact">
            CONTACT
          </Link>
        </div>

        {/* Right (Hamburger)*/}
        <div className='flex justify-between items-center md:hidden'>
          <button onClick={handleTheme} className="flex justify-between items-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
          <Menu as="div" className="relative inline-block text-left mt-1">
            <Menu.Button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                {/* <Menu.Items> */}
                {links.map((link) => (
                  /* Use the `active` state to conditionally style the active item. */
                  <Menu.Item key={link.href} as={Fragment}>
                    {({ active }) => (

                      // Headless UI needs to use a tag
                      //  mylink component helps to make it work
                      <MyLink href={`${link.href}`} active={active}>
                        {link.name}
                      </MyLink>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>

            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Navbar
