import Image from 'next/image';
import React from 'react'
import MainLayout from '../../components/Layouts/Main';
import LayoutMotion from '../../components/Layouts/Motion';
import { Badge } from '../../components/Project';
import { Disclosure } from '@headlessui/react'
import { AiFillCaretRight } from 'react-icons/ai'

const EcommerceMovie = () => {
  return (
    <div>
      <MainLayout>
        <LayoutMotion>
          <h1 className='text-2xl font-bold dark:text-[#bd93f9] text-center mb-5'> <span className='text-base font-normal text-black dark:text-white'>Works &gt;</span> Ecommerce Movie Shop</h1>
          <p className='indent-8 mb-5'>
            Implemented a web-based ecommerce system that allows customers to
            locate movies, place them in a shopping cart, and checkout/pay.
          </p>

          <ul className='mb-5'>
            <li>
              <Badge>
                Source
              </Badge>
              <a href="https://github.com/zachuri/122b" className='hover:underline text-purple-900 dark:text-[#bd93f9]'>https://github.com/zachuri/122b</a>
            </li>
            <li>
              <Badge>
                Videos
              </Badge>
              <a href="https://youtu.be/eg1VJATdAPM" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">Desktop tour</a>
              <a href="https://youtu.be/EaT3hTv7-7s" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">Mobile Tour</a>
            </li>
            <li>
              <Badge>
                Platform
              </Badge>
              Desktop & Mobile
            </li>
            <li>
              <Badge>
                Front-End
              </Badge>
              React.js, React Native, Bootstrap.css
            </li>
            <li>
              <Badge>
                Back-End
              </Badge>
              Java, SpringBoot, Jackson, MySQL
            </li>
            <li>
              <Badge>
                Database
              </Badge>
              SQL, MySQL, JDBC, NamedParameterJDBCTemplate
            </li>
          </ul>

          <div className='flex flex-col gap-8'>
            <Image
              src={`/assets/projects/ecommerce-movie.png`}
              alt={"twitch-clone"}
              width="1200"
              height="700"
              className='rounded-xl mb-5'
              loading="lazy"
            />
            <Image
              src={`/assets/projects/ecommerce-movie-1.png`}
              alt={"twitch-clone"}
              width="1200"
              height="900"
              className='rounded-xl mb-5'
              loading="lazy"
            />

            <Image
              src={`/assets/projects/ecommerce-movie-2.png`}
              alt={"twitch-clone"}
              width="1200"
              height="600"
              className='rounded-xl mb-5'
              loading="lazy"
            />



            <Disclosure>
              {({ open }) => (

                <>
                  <Disclosure.Button className="bg-[#bd93f9] rounded-xl mx-24 py-2 text-black">
                    <div className='flex flex-row justify-center items-center'>
                      Mobile Images
                      <AiFillCaretRight className={open ? 'rotate-90' : ""} />
                    </div>
                  </Disclosure.Button><Disclosure.Panel className="text-gray-500">
                    <Image
                      src={`/assets/projects/ecommerce-movie-3.png`}
                      alt={"twitch-clone"}
                      width="600"
                      height="1300"
                      className='rounded-xl mb-5'
                      loading="lazy" />

                    <Image
                      src={`/assets/projects/ecommerce-movie-4.png`}
                      alt={"twitch-clone"}
                      width="600"
                      height="1300"
                      className='rounded-xl mb-5'
                      loading="lazy" />

                    <Image
                      src={`/assets/projects/ecommerce-movie-5.png`}
                      alt={"twitch-clone"}
                      width="600"
                      height="1300"
                      className='rounded-xl mb-5'
                      loading="lazy" />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </LayoutMotion>
      </MainLayout>
    </div >
  )
}

export default EcommerceMovie; 