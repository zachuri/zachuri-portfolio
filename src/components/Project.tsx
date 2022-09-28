
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  id: string;
  title: string;
  desc: string;
}


export const Badge: React.FC<{ children: string }> = ({ children }) => {
  return (
    <span className="dark:bg-[#bd93f9] dark:text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">{children}</span>
  )
}

const Project: React.FC<Props> = ({ id, title, desc }) => {
  return (
    <div>
      <Link href={`works/${id}`}>
        <div>
          <button>
            <Image
              src={`/assets/projects/${id}.png`}
              alt={id}
              width="1200"
              height="700"
              className='rounded-xl'
              loading="eager"
              placeholder="blur"
              blurDataURL={`/assets/projects/${id}.png`}
            />
            <div className="text-center">
              <h1 className='text-xl mb-1 font-bold'>{title}</h1>
              <p className='md:text-sm mb-8'>{desc}</p>
            </div>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Project