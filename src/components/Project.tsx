
import Image from 'next/image';
import React from 'react'

interface Props {
  id: string;
  name: string;
}

const Project: React.FC<Props> = ({ id, name }) => {
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
      <div className="">{name}</div>
    </div>
  )
}

export default Project