import React from 'react'

interface mainProps {
  children: React.ReactNode;
}


const Main: React.FC<mainProps> = ({ children }) => {
  return (
    <main>
      <div className='container max-w-md pt-20'>
        {children}
      </div>
    </main>

  )
}

export default Main