import Image from 'next/image';
import React from 'react'
import MainLayout from '../../components/Layouts/Main';
import LayoutMotion from '../../components/Layouts/Motion';
import { Badge } from '../../components/Project';

const DiversityHotline = () => {
  return (
    <div>
      <MainLayout>
        <LayoutMotion>
          <h1 className='text-2xl font-bold dark:text-[#bd93f9] mb-5'> <span className='text-base font-normal text-black dark:text-white'>Works &gt;</span> Diversity Hotline</h1>
          <p className='indent-8 mb-5'>
            Collaborated with Student Service Counselor of UCI who wanted a Progressive Web Application where
            mentors and users can schedule counseling meetings and users can access multiple resources regarding
            diversity, equity and inclusion.
          </p>

          <ul className='mb-5'>
            <li>
              <Badge>
                Website
              </Badge>
              <a href="https://suspicious-euclid-dddcf0.netlify.app/" className='hover:underline text-purple-900 dark:text-[#bd93f9] '>DiversityHotline.com</a>
            </li>
            <li>
              <Badge>
                Platform
              </Badge>
              Desktop, Mobile (Progressive Web Application)
            </li>
            <li>
              <Badge>
                Stack
              </Badge>
              React.js & Bootstrap css
            </li>
            <li>
              <Badge>
                Source
              </Badge>
              <a href="https://github.com/zachuri/DiversityHotlineApp" className='hover:underline text-purple-900 dark:text-[#bd93f9]' >github.com/zachuri/DiversityHotlineApp</a>
            </li>
          </ul>

          <div className='flex flex-col gap-8'>
            <Image
              src={`/assets/projects/diversity-hotline.png`}
              alt={"twitch-clone"}
              width="1200"
              height="700"
              className='rounded-xl mb-5'
              placeholder='blur'
              blurDataURL={`/assets/projects/diversity-hotline.png`}
            />

            <Image
              src={`/assets/projects/diversity-hotline-1.png`}
              alt={"twitch-clone"}
              width="1200"
              height="700"
              className='rounded-xl mb-5'
              placeholder='blur'
              blurDataURL={`/assets/projects/diversity-hotline-1.png`}
            />

            <Image
              src={`/assets/projects/diversity-hotline-2.png`}
              alt={"twitch-clone"}
              width="1200"
              height="700"
              className='rounded-xl mb-5'
              placeholder='blur'
              blurDataURL={`/assets/projects/diversity-hotline-2.png`}
            />

            <Image
              src={`/assets/projects/diversity-hotline-3.png`}
              alt={"twitch-clone"}
              width="1200"
              height="700"
              className='rounded-xl mb-5'
              loading="lazy"
              blurDataURL={`/assets/projects/diversity-hotline-3.png`}
            />
          </div>
        </LayoutMotion>
      </MainLayout>
    </div>
  )
}

export default DiversityHotline; 