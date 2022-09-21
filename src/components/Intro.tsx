import Image from 'next/image'
import React from 'react'

const Intro: React.FC = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center pt-20 '>
        <div className="max-w-lg flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">

          {/* Where I'm from */}
          <div className='w-full bg-[#dbd7d7] dark:bg-[#1c1c1c] p-5 rounded-xl mb-6' >
              Hello, I&apos;m a Web Developer based in Irvine, California!
          </div>

          {/* Name */}
          <div className='w-full flex items-center gap-10 mb-6'>
            <div>
              <h1 className='text-4xl dark:text-[#bd93f9]'>Zachary Punsalang</h1>
              <p>Developer (Web, Application, Game)</p>
            </div>
            <div>
              <Image className='rounded-full' src="/assets/github-profile-pic.jpeg" width={100} height={100} alt="profile picture" />
            </div>
          </div>

          {/* Work */}
          <div className='max-w-md flex flex-items-center'>
            <div>
              <h2 className='text-2xl dark:text-[#bd93f9]'>Work</h2>
              <p >Takuya is a freelance and a full-stack developer based
                in Osaka with a passion for building digital services/stuff
                he wants. He has a knack for all things launching products,
                from planning and designing all the way to solving real-life
                problems with code. When not online, he loves hanging out with
                his camera. Currently, he is living off of his own product called
                Inkdrop. He publishes content for marketing his products and his
                YouTube channel called &quot;Dev as Life&quot; has more than 100k subscribers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Intro