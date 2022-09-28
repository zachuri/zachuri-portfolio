import React from 'react'
import LayoutMotion from '../components/Layouts/Motion';
import MainLayout from '../components/Layouts/Main';
import Projects from '../components/Projects';

const Works = () => {
  return (
    <>
      <MainLayout>
        <LayoutMotion>
          <h2 className='text-2xl dark:text-[#bd93f9] mb-2 font-bold'>Works</h2>
          <Projects />
        </LayoutMotion>
      </MainLayout>
    </>
  )
}

export default Works;