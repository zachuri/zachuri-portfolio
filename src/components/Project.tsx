
import Image from 'next/image';
import React from 'react'

interface Props {
  id: string;
  title: string;
  desc: string;
}

const Project: React.FC<Props> = ({ id, title, desc }) => {
  return (
    <div>
      <Image
        src={`/assets/projects/${id}.png`}
        alt={name}
        width="1000"
        height="700"
        className='rounded-xl'
        loading="lazy"
      />
      <div className="">{title}</div>
      <div className="">{desc}</div>
    </div>
  )
}

export default Project