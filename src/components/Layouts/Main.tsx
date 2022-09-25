import React from 'react'

interface mainProps {
  children: React.ReactNode;
}


const Main: React.FC<mainProps> = ({ children }) => {
  return (
    <main>
      <div className='flex flex-col justify-center items-center pt-10 md:pt-20 px-10'>
        <div className="max-w-md flex-1 flex flex-col justify-center items-center pt-r md:pt-10 lg:pt-6">
          {children}
        </div>
      </div>
    </main>

  )
}

export default Main