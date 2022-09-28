
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  id: string;
  title: string;
  desc: string;
}

const Project: React.FC<Props> = ({ id, title, desc }) => {
  return (
    <div>
      <Link href={`works/${id}`}>
        <button>
          <Image
            src={`/assets/projects/${id}.png`}
            alt={id}
            width="1200"
            height="700"
            className='rounded-xl'
            loading="lazy"
          />
        </button>
      </Link>
      <div className="text-center">
        <h1 className='text-xl mb-2'>{title}</h1>
        <p className='md:text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default Project