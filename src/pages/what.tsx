import React from 'react'
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';
import Skills from '../components/Skills';
import Skill from '../components/Skill';

const What: React.FC = () => {
  return (
    <MainLayout>
      <LayoutMotion>
        <div>
          <h1>Technical</h1>
          <h2>skills</h2>
          <div className='grid grid-cols-3 md:grid-cols-4 '>
            <Skills />
          </div>
        </div>
        <div>
          <h1>Personal</h1>
        </div>
      </LayoutMotion>
    </MainLayout>
  )
}

export default What;