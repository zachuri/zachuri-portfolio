import React from 'react'
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';
import Skills from '../components/Skills';
import Image from 'next/image';

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
              <li>Arch Linux</li>
              <li>Dynamic Window Manager (DWM Suckless)</li>
            </Container>
            <Container subTitle='Coding'>
              <li>Visual Studio Code</li>
              <li>Vim</li>
            </Container>
          </Container>

          <Container title={"Personal Interests"}>
            <Container subTitle='Keyboards'>
              <p className='pb-2 -mx-4'>
                During covid I fell in love with the keyboard community. As a developer I do
                feel a bit more professional with my handy keyboard! My first ever keeb I built
                is the Tofu 60%. It was my first baby and I adored it a lot. It got the job done and sounded
                really great. However, I fell into the rabbit hole looking at luxury keyboards.
                I found the JP-02 which is an arisu layout which is a slightly ergonmic. It looks really interesting
                and typing on it is really comforatble. I would always encourage other developrs to obtain
                their own keyboard with their own personality on it! Happy typing!
              </p>
            </Container>
            <Container subTitle='JP-02 (Arisu)'>
              <Image
                src="/assets/keyboards/jp-02.jpeg"
                width="350"
                height="550"
                alt='jp-02 keyboard'
                placeholder='blur'
                blurDataURL='assets/keyboards/jp-02.jpeg'
                className='rounded'
              />
            </Container>
            <Container subTitle='Tofu 60 (60%)'>
              <Image
                src="/assets/keyboards/tofu60.jpeg"
                width="350"
                height="500"
                alt='tofu 60 keyboard'
                placeholder='blur'
                blurDataURL='assets/keyboards/tofu60.jpeg'
                className='rounded'
              />
            </Container>
          </Container>
        </div>


      </LayoutMotion>
    </MainLayout>
  )
}

export default What;