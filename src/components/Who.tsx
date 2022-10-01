import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MainLayout from './Layouts/Main'
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Who: React.FC = () => {
  return (
    <MainLayout>
      {/* Where I'm from */}
      <div className='bg-[#dbd7d7] dark:bg-[#1c1c1c] p-5 rounded-xl mb-6' >
        <h1>
          Hello, I&apos;m a Web Developer based in Irvine, California!
        </h1>
      </div>

      {/* Name */}
      <div className='w-full flex flex-col sm:flex-row items-center gap-9 mb-6'>
        <div>
          <h1 className='text-4xl dark:text-[#bd93f9]'>Zachary Punsalang</h1>
          <p>Developer (Web, Application, Game)</p>
        </div>
        <div>
          <Image className='rounded-full' src="/assets/github-profile-pic.jpeg" width={100} height={100} alt="profile picture" />
        </div>
      </div>

      {/* Work */}
      <div className='w-full flex flex-items-center'>
        <div>
          <h2 className='font-bold text-2xl dark:text-[#bd93f9] mb-2'>Who</h2>
          <p>
            Hola I&apos;m <span className='dark:text-[#bd93f9]'>ZACHURI</span>. I&apos;m a Computer and Information Science graduate
            from the University of California, Irvine. What inspires me to code is being able to build valuable projects that
            can help individuals with their lives, my curiosity on wanting to know how things are built from the ground up, and
            how one is able to express their ideas through code. I am a developer that is willing to learn new ideas
            and technologies.
          </p>
          <div className='pt-2'>
            <h2 className='text-xl text-center'>Let&apos;s build something together!</h2>
            <div className='flex flex-cols gap-5 justify-center'>
              <a
                href="https://www.linkedin.com/in/zachary-punsalang/"
                aria-label='link to linkden'
              >
                <FaLinkedin size={20} className='fill-black dark:fill-white hover:bg-[#777777] hover:rounded' />
              </a>
              <a
                href="https://github.com/zachuri"
                aria-label='link to github'
              >
                <FaGithub size={20} className='fill-black dark:fill-white hover:bg-[#777777] hover:rounded' />
              </a>
              <a
                href="https://twitter.com/zachurii"
                aria-label='link to twitter'
              >
                <FaTwitter size={20} className='fill-black dark:fill-white hover:bg-[#777777] hover:rounded' />
              </a>
              <a
                href="mailto:punsalang.zachary.work@gmail.com?body="
                aria-label='link to my email'
              >
                <AiOutlineMail size={20} className='fill-black dark:fill-white hover:bg-[#777777] hover:rounded' />
              </a>
            </div>
          </div>

          <div className='flex justify-center mt-5'>
            <Link href="/works">
              <button className='bg-purple-200 text-purple-900 dark:bg-[#bd93f9] dark:text-black rounded-xl px-8 py-2 '>My portfolio &gt;</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className='w-full flex mt-6'>
        <div className='w-full'>
          <h2 className='text-2xl dark:text-[#bd93f9] mb-2'>Bio</h2>
          <div className='grid grid-cols-3 mb-4'><span className='font-bold'>1999</span><p className='col-span-2'> Born in Los Angeles, California</p></div>
          <div className='grid grid-cols-3 mb-4'><span className='font-bold'>2017 to 2019</span><p className='col-span-2'> Mount San Antonio Community College (Computer Science)</p></div>
          <div className='grid grid-cols-3 mb-4'><span className='font-bold'>2019 to 2022</span><p className='col-span-2'> University of Califonia, Irvine (Computer and Information Science)</p></div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Who