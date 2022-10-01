import React from 'react'
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';
import Skills from '../components/Skills';
import Skill from '../components/Skill';

interface Props {
  children: React.ReactNode;
  title?: string;
  subTitle?: string
}

const Container: React.FC<Props> = ({ children, title, subTitle }) => {
  return (
    <div className='mb-2'>
      <h1 className='text-2xl mb-2 font-bold dark:text-[#bd93f9]'>{title}</h1>
      <h2 className='text-l mb-2 font-bold'>{subTitle}</h2>
      <div className='mx-5'>
        {children}
      </div>
    </div>
  )
}

const What: React.FC = () => {
  return (
    <MainLayout>
      <LayoutMotion>
        <div className='max-w-full'>
          <Container title={"Technical Skills"}>
            {/* <div className='grid grid-cols-3 md:grid-cols-5'> */}
            <div className='flex flex-wrap'>
              <Skills />
            </div>
          </Container>

          <Container title={"Work Flow"}>
            <Container subTitle='Operating System'>
              <p>- Arch Linux</p>
              <p>- Dynamic Window Manager (DWM Suckless)</p>
            </Container>
            <Container subTitle='Coding'>
              <p>- Visual Studio Code</p>
              <p>- Vim</p>
            </Container>
          </Container>

          <Container title={"Personal Interests"}>
            <Container subTitle='Keyboards'>
              <p className='pb-2'>During covid I fell in love with the keyboard community. As a developer I do
                feel a bit more professional with my handy keyboard! My first every keeb I built
                is the Tofu 60%. It was my first baby and I adored it a lot. It got the job done and sounded
                really great. However, I feel into the rabbit hole of trying to experience a luxury keyboard
                with the layout I would like.
              </p>
              <p>- JP-02 (Arisu)</p>
              <p>- Tofu 60 (60%)</p>
            </Container>
          </Container>
        </div>


      </LayoutMotion>
    </MainLayout>
  )
}

export default What;