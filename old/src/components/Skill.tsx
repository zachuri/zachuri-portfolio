import React from 'react'

const Skill: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className='border text-center m-1 text-xs p-1'>
      <h1>{name}</h1>
    </div>
  )
}

export default Skill