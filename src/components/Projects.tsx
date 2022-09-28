import React from 'react'
import Project from './Project'

const Projects: React.FC = () => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <Project id={"twitch-clone"} title={"twitch-clone"} desc={"react"} />
      <Project id={"ecommerce-movie"} title={"Ecommerce-movie"} desc={"java"} />
    </div>
  )
}

export default Projects