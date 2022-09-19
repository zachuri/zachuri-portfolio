import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from 'next-themes'
import { WiMoonAltThirdQuarter } from "react-icons/wi"


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {

  const { theme, setTheme } = useTheme()
  const [darkToggle, setDarkToggle] = useState<boolean>(theme === "dark" ? false : true);

  console.log(theme);
  console.log(darkToggle);

  useEffect(() => { darkToggle }, [])

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
    <div className='fixed w-full h-20 z-[100] dark:bg-black'>
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

        {/* Right (medium and large)*/}
        <div className='justify-between items-center hidden md:flex'>
          <button onClick={handleTheme} className="flex justify-between items-center ">
            <WiMoonAltThirdQuarter size={32} />
          </button>
          <Link href="/">
            <div className='ml-2'>
              CONTACT
            </div>
          </Link>
        </div>

        {/* Right (Hamburger)*/}
        <div className='flex justify-between items-center md:hidden'>
          <button onClick={handleTheme} className="flex justify-between items-center ">
            <WiMoonAltThirdQuarter size={32} /> :
          </button>
          <Menu as="div" className="relative text-left mt-1 ml-2">
            <div className="flex">
              <Menu.Button>
                (<Image src="/assets/icons/hamburger-light.png" height="32" width="32" alt='toggle-theme-light' />) :
              </Menu.Button>
            </div>

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
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        About
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Projects
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Navbar
