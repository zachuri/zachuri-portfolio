import React, { useState } from 'react'
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';
import Skills from '../components/Skills';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  title?: string;
  subTitleH2?: string
  subTitleH3?: string
  justify?: string
}

const Container: React.FC<Props> = ({ children, title, subTitleH2, subTitleH3, justify }) => {
  return (
    <div className='mb-2'>
      <h1 className='text-2xl mb-2 font-bold dark:text-[#bd93f9]'>{title}</h1>
      <h2 className='text-xl mb-2 font-bold'>{subTitleH2}</h2>
      <h3 className='text-xl mb-2 font-medium'>{subTitleH3}</h3>
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
            <Container subTitleH2='Operating System'>
              <li>Arch Linux</li>
              <li>Dynamic Window Manager</li>
              <li className='indent-6'>
                <a
                  href='https://dwm.suckless.org/'
                  className='hover:underline text-purple-900 dark:text-[#bd93f9]'
                >(DWM) Suckless</a>
              </li>
            </Container>
            <Container subTitleH2='Coding'>
              <li>Visual Studio Code</li>
              <li>Vim / TMUX</li>
              <li>Zsh / Bash</li>
            </Container>
            <Container subTitleH2='Why?'>

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
                  and it isn&apos;t for everyone. It&apos;s very technical and takes a while to get used to. Similar to driving
                  a manual transmission because when your starting you will make a lot of mistakes but once you get it down the more
                  fun it becomes. For me, it just makes me feel proud to be a coder.
                </p>
              </ReadMore>

            </Container>
          </Container>

          <Container title={"Personal Interests"}>
            <Container subTitleH2='Keyboards'>
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

              <Container subTitleH3='JP-02 (Arisu)' justify='flex items-center justify-center items-center'>
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
              <Container subTitleH3='Tofu 60 (60%)' justify='flex items-center justify-center items-center'>
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
            <Container subTitleH2='Games'>
              <ReadMore>
                <p className='pb-2'>
                  Gaming has been one of the most influential thing in my life because it gave me a sense of
                  accomplishment. Each individual game has their own technical aspect and game theory where it
                  can push one&apos;s competitve side. Just to be clear there are multiple genres of gaming and the one that
                  stuck to me the most is competitve gaming.
                </p>
                <ReadMore>
                  <p className='pb-2'>
                    The days of &quot;Major League Gaming (MLG)&quot; is where it inspired many young gamers to become a professional gamer
                    because being able to be the best at a game can bring the upmost respect to an individual as gamer. The idea
                    of being able play games for a living was something that I grew up adoring becuase of the joy and pride can
                    bring to a person. It would be cool to say that &quot;Yes, I&apos;m a professional gamer and do it for a living&quot;
                    but of course one has to earn it.
                  </p>
                  <p className='pb-2'>
                    The competitive idea pushed me further to game because being able to win and see improvement
                    brings out one&apos;s alter ego, and being able to earn the highest rank possible does make oneself
                    feel proud and have pride. However, there is another side towards gaming which is losing.
                    Learning to lose a lot is the reality of being the best. Learning the hard way, this lesson can be
                    applied to ones life.
                  </p>
                  <p className='pb-2'>
                    For sure, school was something that I wasn&apos;t really proud of myself for because again not being able to see
                    any improvement, seeing a lot of mistakes being made, failing, not being the best was something that killed my self esteem.
                    Obviously gaming and school are in different categories but gaming is something that brought my self esteem up.
                    Being able to be good at a game brought joy to my life becuase I was able to make a lot of friends through it who would
                    want to play together to be better.
                  </p>

                </ReadMore>

                <Container subTitleH3='Super Smash Bros Melee'>

                </Container>

                <Container subTitleH3='Valorant'>

                </Container>

                <Container subTitleH3='CSGO'>

                </Container>

                <Container subTitleH3='Call Of Duty'>

                </Container>
              </ReadMore>
            </Container>
          </Container>
        </div>


      </LayoutMotion>
    </MainLayout>
  )
}

export default What;