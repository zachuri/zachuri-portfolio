import React from 'react'
import Project from './Project'

const Projects: React.FC = () => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <Project id={"twitch-clone"} name={"twitch-clone"} />
      <Project id={"ecommerce-movie"} name={"Ecommerce-movie"} />
    </div>
  )
}

export default Projects