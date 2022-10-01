import Image from 'next/image'
import React from 'react'
import MainLayout from '../../components/Layouts/Main'
import LayoutMotion from '../../components/Layouts/Motion'
import { Badge } from '../../components/Project'

const twitchclone = () => {
  return (
    <div>
      <MainLayout>
        <LayoutMotion>
          <h1 className='text-2xl font-bold dark:text-[#bd93f9] mb-5'> <span className='text-base font-normal text-black dark:text-white'>Works &gt;</span> Twitch Clone</h1>
          <p className='mx-5 mb-5'>A clone of Twitch to develop my understanding of Tailwind css. Understand fundamentals of tailwind which helped me apply
            these fundamentals to other projects.
          </p>

          <ul className='mb-5'>
            <li>
              <Badge>
                Source
              </Badge>
              <a href="https://github.com/zachuri/twitch-clone-react" className='hover:underline text-purple-900 dark:text-[#bd93f9]'>github.com/zachuri/twitch-clone-react</a>
            </li>
            <li>
              <Badge>
                Website
              </Badge>
              <a href="https://twitch-clone-react-zachuri.vercel.app/" className='hover:underline text-purple-900 dark:text-[#bd93f9]'>https://twitch-clone-react-zachuri.vercel.app/</a>
            </li>
            <li>
              <Badge>
                Platform
              </Badge>
              Windows/macOS/Linux/iOS/Android
            </li>
            <li>
              <Badge>
                Stack
              </Badge>
              Next.js, Tailwind css
            </li>
          </ul>

          <div className='flex flex-col gap-8'>
            <Image
              src={`/assets/projects/twitch-clone.png`}
              alt={"twitch-clone"}
              width="1200"
              height="700"
              className='rounded-xl mb-5'
              placeholder='blur'
              blurDataURL={`/assets/projects/twitch-clone.png`}
            />

            <Image
              src={`/assets/projects/twitch-clone-1.png`}
              alt={"twitch-clone-1"}
              width="1200"
              height="1000"
              className='rounded-xl mb-5'
              placeholder='blur'
              blurDataURL={`/assets/projects/twitch-clone-1.png`}
            />

            <Image
              src={`/assets/projects/twitch-clone-2.png`}
              alt={"twitch-clone"}
              width="1200"
              height="1000"
              className='rounded-xl'
              placeholder='blur'
              blurDataURL={`/assets/projects/twitch-clone-2.png`}
            />
          </div>
        </LayoutMotion>
      </MainLayout>
    </div >
  )
}

export default twitchclone