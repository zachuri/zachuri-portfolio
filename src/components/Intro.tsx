import Image from 'next/image'
import React from 'react'

const Intro: React.FC = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center pt-20 px-10'>
        <div className="max-w-md flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">

          {/* Where I'm from */}
          <div className='bg-[#dbd7d7] dark:bg-[#1c1c1c] p-5 rounded-xl mb-6' >
            <h1>
              Hello, I&apos;m a Web Developer based in Irvine, California!
            </h1>
          </div>

          {/* Name */}
          <div className='w-full flex items-center gap-9 mb-6'>
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
              <h2 className='text-2xl dark:text-[#bd93f9] mb-2'>Work</h2>
              <p>
                Hola I&apos;m ZACHURI. I&apos;m a Computer and Information Science major from the University of California, Ivine.
                What inspires me is to code is being able to build valuable projects that can help people. Also just love how we live
                in a society where we can build things with words which can make our lives better. I aspire to beomce a Web Developer
                in the far future! I&apos;m always here to learn about anything new. Lets build something together!
              </p>
              <div className='flex justify-center mt-2'>
                <button className='bg-[#bd93f9] rounded-xl px-8 py-2 text-black'>My portfolio &gt;</button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className='w-full flex flex-items-center mt-6'>
            <div className='w-full'>
              <h2 className='text-2xl dark:text-[#bd93f9] mb-2'>Bio</h2>
              <div className='flex'><span className='font-bold mr-1'>1999</span><p className='pl-2'> Born in Los Angeles, California</p></div>
              <div className='flex'><span className='font-bold mr-1'>2017 to 2019</span><p className='pl-2'> Mount San San Antonio Community College (Computer Science)</p></div>
              <div className='flex'><span className='font-bold mr-1'>2019-2022</span><p className='pl-2'> University of Califonia, Irvine (Computer and Information Science)</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro