import React, { useState } from 'react';
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';
import Skills from '../components/Skills';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { MetaProps } from '../../types/layout';
import { GetStaticProps } from 'next';
import { getBlurhash } from 'next-blurhash';
import { BlurhashCanvas } from 'react-blurhash';

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const images = [
    { src: '/assets/keyboards/jp-02.jpeg' },
    { src: '/assets/keyboards/tofu60.jpeg' }
  ];

  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < images.length; i++) {
    const hash = await getBlurhash(images[i]?.src as string);
    hashes[images[i]?.src as string] = hash;
  }

  const imgHashes = images
    .filter(img => hashes[img.src] !== undefined)
    .map(img => ({
      src: img.src,
      hash: hashes[img.src]!
    }));

  return {
    props: {
      imgHashes
    }
  };
};

function ImageHash({
  src,
  alt,
  hash
}: {
  src: string;
  alt: string;
  hash: string;
}) {
  return (
    <>
      <div className="relative">
        <BlurhashCanvas
          hash={hash}
          width={32}
          height={32}
          punch={1}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '95%'
          }}
          className="rounded-xl"
        />
        <Image
          src={src}
          alt={alt}
          width="350"
          height="500"
          className="rounded-lg"
        />
      </div>
    </>
  );
}

interface Props {
  children: React.ReactNode;
  title?: string;
  subTitleH2?: string;
  subTitleH3?: string;
  justify?: string;
}

const Container: React.FC<Props> = ({
  children,
  title,
  subTitleH2,
  subTitleH3,
  justify
}) => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl mb-2 font-bold text-gray-600 dark:text-[#bd93f9]">
        {title}
      </h1>
      <h2 className="text-xl mb-2 font-bold">{subTitleH2}</h2>
      <h3 className="text-xl mb-2 font-medium">{subTitleH3}</h3>
      <div className={`mx-5 ${justify}`}>{children}</div>
    </div>
  );
};

const ReadMore: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown(!isReadMoreShown);
  };

  return (
    <div>
      {isReadMoreShown ? children : ''}
      <button
        onClick={toggleBtn}
        className="rounded px-2 border border-[#333333] text-[#333333] dark:border-[#AAAAAA] dark:text-[#AAAAAA] hover:dark:border-gray-200 transition hover:border-gray-600 hover:dark:text-gray-200 hover:text-gray-600"
      >
        {isReadMoreShown ? 'Read Less' : '...Read More'}
      </button>
    </div>
  );
};

const url = 'https://zachuri.com/what';
const title = 'Zachary Punsalang - What';
const description = 'Get to know more about Zachary Punsalang | ZACHURI';

const What: React.FC<DemoProps> = ({ imgHashes }) => {
  const customMeta: MetaProps = {
    title: `Zachary Punsalang - What`,
    description: 'Get to know more about me :)'
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <MainLayout customMeta={customMeta}>
        <LayoutMotion>
          <div className="max-w-full">
            <Container title={'Technical Skills'}>
              {/* <div className='grid grid-cols-3 md:grid-cols-5'> */}
              <div className="flex flex-wrap">
                <Skills />
              </div>
            </Container>

            <Container title={'Work Flow'}>
              <Container subTitleH2="Operating System">
                <li>Arch Linux</li>
                <li>Dynamic Window Manager</li>
                <li className="indent-6">
                  <a
                    href="https://dwm.suckless.org/"
                    className="hover:underline text-purple-900 dark:text-[#bd93f9]"
                  >
                    (DWM) Suckless
                  </a>
                </li>
              </Container>
              <Container subTitleH2="Coding">
                <li>Visual Studio Code</li>
                <li>Vim / TMUX</li>
                <li>Zsh / Bash</li>
              </Container>
              <Container subTitleH2="Why?">
                <p className="pb-2">
                  For most of my work flow it really depends on a keyboard. When
                  I was a student in college, I would use my laptop track pad to
                  navigate my code. My first class at UCI, one of my professors
                  taught his course while using VIM. It was amazing to see him
                  code like a hacker who can type and navigate around his code
                  really fast. To me I adored him and saw him as a professional
                  coder because of that. He showed us how to use it but again it
                  took practice.
                </p>

                <ReadMore>
                  <p className="pb-2">
                    Throughout my college carrer I was able to use vim really
                    well; however, this abiilty to increase work flow only
                    really worked in an IDE. I later discovered the power of
                    linux (Arch) and a desktop enviroment called &quot;Suckless
                    Dynamic Window Manager (DWM)&quot;. These two combined
                    helped me reach another level as a developer which for me
                    increased my work flow and love for coding.
                  </p>
                  <p className="pb-2">
                    Linux showed me the power of the terminal. I remember
                    dreading to use the terminal and typing commands but later
                    enjoyed it so much that I&apos;d rather use a CLI instead of
                    GUI. Also, I use a linux distribution called Arch. I spent
                    couple months building my own linux from sractch and I love
                    it. I&apos; learned so much about linux which made me forget
                    about Windows LOL. There are many specfic reasons but
                    I&apos;ll go into detail later.
                  </p>
                  <p className="pb-2">
                    Laslty, DWM made my linux experince even better. The way DWM
                    is able to organize your windows efficently and being able
                    to navigate around your desktop with only a keyboard again
                    made me feel like a professional developer. Just to be clear
                    all of these configs I&apos;ve mentioned are preference and
                    it isn&apos;t for everyone. It&apos;s very technical and
                    takes a while to get used to. Similar to driving a manual
                    transmission because when your starting you will make a lot
                    of mistakes but once you get it down the more fun it
                    becomes. For me, it just makes me feel proud to be a coder.
                  </p>
                </ReadMore>
              </Container>
            </Container>

            <Container title={'Personal Interests'}>
              <Container subTitleH2="Keyboards">
                <p className="pb-2">
                  During covid I fell in love with the keyboard community. As a
                  developer I do feel a bit more professional with my handy
                  keyboard! My first ever keeb I ever built is the Tofu 60%. It
                  was my first baby and I adored it a lot. It got the job done
                  and sounded really great.
                </p>
                <p className="pb-2">
                  However, I fell into the rabbit hole of looking at luxury
                  keyboards. I found the JP-02 which is an arisu layout and is a
                  slightly ergonmic. It looks really interesting and typing on
                  it is really comforatble. I would always encourage other
                  developrs to obtain their own keyboard with their own
                  personality on it!
                </p>
                <ReadMore>
                  <p>
                    One more thing, the best part about building these type of
                    keyboards is that it&apos;s yours. It&apos;s something you
                    created to your liking (the sound, looks, feel, keycaps,
                    switches, etc.). With these attributes, it makes me want to
                    type more and even code more.
                  </p>
                </ReadMore>

                <Container
                  subTitleH3="JP-02 (Arisu)"
                  justify="flex items-center justify-center items-center"
                >
                  <ImageHash
                    src={'/assets/keyboards/jp-02.jpeg'}
                    alt={'jp-02'}
                    hash={imgHashes.at(0)?.hash as string}
                  />
                </Container>
                <Container
                  subTitleH3="Tofu 60 (60%)"
                  justify="flex items-center justify-center items-center"
                >
                  <ImageHash
                    src={'/assets/keyboards/tofu60.jpeg'}
                    alt={'tofo60'}
                    hash={imgHashes.at(1)?.hash as string}
                  />
                </Container>
              </Container>
              <Container subTitleH2="Games">
                <ReadMore>
                  <p className="pb-2">
                    Gaming has been one of the most influential thing in my life
                    because it gave me a sense of accomplishment. Each
                    individual game has their own technical aspect and game
                    theory where it can push one&apos;s competitve side. Just to
                    be clear there are multiple genres of gaming and the one
                    that stuck to me the most is competitve gaming.
                  </p>
                  <ReadMore>
                    <p className="pb-2">
                      The days of &quot;Major League Gaming (MLG)&quot; is where
                      it inspired many young gamers to become a professional
                      gamer because being able to be the best at a game can
                      bring the upmost respect to an individual as gamer. The
                      idea of being able play games for a living was something
                      that I grew up adoring becuase of the joy and pride can
                      bring to a person. It would be cool to say that &quot;Yes,
                      I&apos;m a professional gamer and do it for a living&quot;
                      but of course one has to earn it.
                    </p>
                    <p className="pb-2">
                      The competitive idea pushed me further to game because
                      being able to win and see improvement brings out
                      one&apos;s alter ego, and being able to earn the highest
                      rank possible does make oneself feel proud and have pride.
                      However, there is another side towards gaming which is
                      losing. Learning to lose a lot is the reality of being the
                      best. Learning the hard way, this lesson can be applied to
                      ones life.
                    </p>
                    <p className="pb-2">
                      For sure, school was something that I wasn&apos;t really
                      proud of myself for because not being able to see any
                      improvement, seeing a lot of mistakes being made, failing,
                      and not being the best was something that killed my self
                      esteem. Obviously gaming and school are in different
                      categories but gaming is something that brought my self
                      esteem up. Being able to be good at a game brought joy to
                      my life becuase I was able to make a lot of friends
                      through it who would want to play together to be better.
                    </p>
                    <p className="pb-2">
                      Again growing up, any parent wants to be proud of their
                      child academicly and not being able to provide that killed
                      my own self respect. Them seeing me play games made me
                      feel like games was the main problem. And to be honest it
                      probably was because I spent more time gaming than
                      studying in school LOL. Later in life such as high school
                      and college, I&apos;ve come to realize that there needs to
                      be a balance in what you put your time into.
                    </p>
                    <p className="pb-2">
                      Defintely now games are not hitting as hard for me as
                      before maybe because they are not the same as they used
                      to, I just moved on to another part of my life, or
                      I&apos;d rather prioritze my time to something else like
                      building projects. No matter what, games will always be
                      part of my life and the thought of thinking about my
                      gaming days for sure does bring back nostalgia of what I
                      thought was the golden age of gaming.
                    </p>
                  </ReadMore>

                  <Container subTitleH3="Super Smash Bros Melee">
                    <ReadMore>
                      <p className="pb-2">
                        Started to play Super Smash Bros Melee about the end of
                        2018. What inpsired me to play the game was the Smash
                        Bros Documentary which was created by the Smash
                        Community. Watching that showed me the era of competitve
                        smash in the early 2000&apos;s. Back then there was no
                        online multiplayer which in order to get better, people
                        had to find lan tournaments and continuosly visit to get
                        better. It&apos;s crazy to see how Melee has changed
                        about 20 years later to where now we can play others
                        online using an emulator called Slippi which also is
                        community made. Also, this game was just so fast that as
                        a spectator not know anything about the game it just
                        looked amazing. It looked like another level of gaming
                        that is so hard to understand to play but looks really
                        cool to watch.
                      </p>
                      <p className="pb-2">
                        My main is Marth! The main reason is that his dash
                        dancing is smooth and I feel like he is definetly an OP
                        charcter when you are able to space with him correctly.
                        Plus, his punished look so disrespectful LOL like his
                        down air off ledge. This might be a bit technical and I
                        would just reccomend watching a melee set with marth
                        dominating.
                      </p>
                      <p className="pb-2">
                        This game was one of the hardest to get good at. The
                        main reason is that in order to get better you have to
                        accept losing. When you start out playing, you
                        dont&apos;t know how control your characters movement,
                        the best timing, the correct spacing, etc. and this can
                        be frustrating for new players. One way to get better is
                        tech skill which there are fundamentals like l-canceling
                        or wave-dashing which can make faster. But I later
                        learned taught tech skill isn&apos;t everything. There
                        is a player named &quot;Borp&quot; who is know to not
                        use tech skill but is still able to place top 10 in
                        tournaments.
                      </p>
                      <p className="pb-2">
                        The most important thing inorder to win is to be able to
                        know how your opponent plays, what are his available
                        moves, and what moves do your character dominate over
                        your opponents. This game is legit just a mental game of
                        many rock, paper, scissor moments. Find which moves win
                        the most and you will eventually win.
                      </p>
                      <p className="pb-2">
                        It&apos;s been about 4 years since I started to play the
                        game and I&apos;ve seen so much improvement. I&apos;ve
                        thought about doing lan tournaments but never found the
                        time to. But when I do I want to test out my skills and
                        see how good I am. I would reccomend giving melee a try.
                        It&apos;s hard at first but to me it&apos;s worth it in
                        the end. Being able to play another person at a high
                        level makes the game look more fund and pushed the
                        competitive meta.
                      </p>
                    </ReadMore>
                  </Container>
                  <Container subTitleH3="Valorant">
                    <ReadMore>
                      <p>Under Construction... </p>
                    </ReadMore>
                  </Container>

                  <Container subTitleH3="CSGO">
                    <ReadMore>
                      <p>Under Construction... </p>
                    </ReadMore>
                  </Container>

                  <Container subTitleH3="Call Of Duty">
                    <ReadMore>
                      <p>Under Construction... </p>
                    </ReadMore>
                  </Container>
                </ReadMore>
              </Container>
            </Container>
          </div>
        </LayoutMotion>
      </MainLayout>
    </>
  );
};

export default What;
