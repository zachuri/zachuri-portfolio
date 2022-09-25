import React from 'react'

interface mainProps {
  children: React.ReactNode;
}


const Main: React.FC<mainProps> = ({ children }) => {
  return (
    <main>
      <div className='flex flex-col justify-center items-center px-10 pt-10 md:pt-20 '>
        <div className="max-w-md flex-1 flex flex-col justify-center items-center pt-6">
          {children}
        </div>
      </div>
    </main>

  )
}

export default Main