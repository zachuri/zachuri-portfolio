import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10">
      <h1 className="text-7xl font-bold">Hi I'm <span className="dark:text-purple-600">Zachary</span></h1>
      <h3 className="text-4xl my-3">I am Web Designer</h3>
      <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam autem doloremque beatae iure, nihil fugit doloribus cum soluta modi!</p>
    </div>
  )
}

export default Hero;