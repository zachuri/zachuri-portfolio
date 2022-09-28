import React from 'react'
import Project from './Project'

const Projects: React.FC = () => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <Project id={"twitch-clone"} title={"Twitch Clone"} desc={"Clone of Twitch using next.js and tailwind.css to help my understanding of design"} />
      <Project id={"ecommerce-movie"} title={"Ecommerce Movie"} desc={"Full Stack ecommerce movie shop where users are able to buy movies"} />
    </div>
  )
}

export default Projects