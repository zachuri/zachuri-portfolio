
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
        <Image
          src={`/assets/projects/${id}.png`}
          alt={id}
          width="1000"
          height="700"
          className='rounded-xl'
          loading="lazy"
        />
      </Link>
      <div className="">{title}</div>
      <div className="">{desc}</div>
    </div>
  )
}

export default Project