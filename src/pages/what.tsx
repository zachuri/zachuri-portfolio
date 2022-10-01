import React, { useState } from 'react'
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';
import Skills from '../components/Skills';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  title?: string;
  subTitle?: string
  justify?: string
}

const Container: React.FC<Props> = ({ children, title, subTitle, justify }) => {
  return (
    <div className='mb-2'>
      <h1 className='text-2xl mb-2 font-bold dark:text-[#bd93f9]'>{title}</h1>
      <h2 className='text-l mb-2 font-bold'>{subTitle}</h2>
      <div className={`mx-5 ${justify}`}>
        {children}
      </div>
    </div>
  )
}

const ReadMore: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown(!isReadMoreShown);
  }

  return (
    <div>
      {isReadMoreShown ? children : ""}
      <button onClick={toggleBtn} className="rounded px-2 border border-[#333333] text-[#333333] dark:border-[#AAAAAA] dark:text-[#AAAAAA]">{isReadMoreShown ? 'Read Less' : '...Read More'}</button>
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
              <li>Dynamic Window Manager</li>
              <li className='indent-6'>
                <a
                  href='https://dwm.suckless.org/'
                  className='hover:underline text-purple-900 dark:text-[#bd93f9]'
                >(DWM) Suckless</a>
              </li>
            </Container>
            <Container subTitle='Coding'>
              <li>Visual Studio Code</li>
              <li>Vim / TMUX</li>
              <li>Zsh / Bash</li>
            </Container>
            <Container subTitle='Why?'>

              <p className='pb-2'>
                For most of my work flow it really depends on a keyboard. When I was a student
                in college, I would use my laptop track pad to navigate my code. My first class at UCI,
                one of my professors taught his course while using VIM. It was amazing to see him
                code like a hacker who can type and navigate around his code really fast. To me
                I adored him and saw him as a professional coder because of that.
                He showed us how to use it but again it took practice.
              </p>

              <ReadMore>
                <p className='pb-2'>
                  Throughout my college carrer I was able to use vim really well; however, this abiilty to increase work flow only really worked in an IDE. I later discovered
                  the power of linux (Arch) and a desktop enviroment called &quot;Suckless Dynamic Window Manager
                  (DWM)&quot;.
                  These two combined helped me reach another level as a developer which for me increased
                  my work flow and love for coding.
                </p>
                <p className='pb-2'>
                  Linux showed me the power of the terminal. I remember dreading to use the terminal and typing
                  commands but later enjoyed it so much that I&apos;d rather use a CLI instead of GUI. Also, I use a linux
                  distribution called Arch. I spent couple months building my own linux from sractch and I love it.
                  I&apos; learned so much about linux which made me forget about Windows LOL. There are many specfic
                  reasons but I&apos;ll go into detail later.
                </p>
                <p className='pb-2'>
                  Laslty, DWM made my linux experince even better. The way DWM is able to organize your windows efficently
                  and being able to navigate around your desktop with only a keyboard again made me feel like a
                  professional developer. Just to be clear all of these configs I&apos;ve mentioned are preference
                  and it isn&apos;t for everyone. For me, it just makes me feel proud to be a coder.
                </p>
              </ReadMore>

            </Container>
          </Container>

          <Container title={"Personal Interests"}>
            <Container subTitle='Keyboards'>
              <p className='pb-2'>
                During covid I fell in love with the keyboard community. As a developer I do
                feel a bit more professional with my handy keyboard! My first ever keeb I ever built
                is the Tofu 60%. It was my first baby and I adored it a lot. It got the job done and sounded
                really great.
              </p>
              <p className='pb-2'>
                However, I fell into the rabbit hole of looking at luxury keyboards.
                I found the JP-02 which is an arisu layout and is a slightly ergonmic. It looks really interesting
                and typing on it is really comforatble. I would always encourage other developrs to obtain
                their own keyboard with their own personality on it!
              </p>
              <ReadMore>
                <p>
                  One more thing, the best part about building these type of keyboards is that it&apos;s yours. It&apos;s
                  something you created to your liking (the sound, looks, feel, keycaps, switches, etc.). With these attributes,
                  it makes me want to type more and even code more.
                </p>
              </ReadMore>

              <Container subTitle='JP-02 (Arisu)' justify='flex items-center justify-center items-center'>
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
              <Container subTitle='Tofu 60 (60%)' justify='flex items-center justify-center items-center'>
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
          </Container>
        </div>


      </LayoutMotion>
    </MainLayout>
  )
}

export default What;