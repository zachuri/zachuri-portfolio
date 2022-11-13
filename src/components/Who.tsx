import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MainLayout from './Layouts/Main';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MetaProps } from '../../types/layout';

const Who: React.FC = () => {
  const customMeta: MetaProps = {
    title: `Zachary Punsalang - Homepage`,
    description:
      'Hello, I&apos;m a Web Developer based in Irvine, California! Zachary Punsalang. Developer (Web, Application, Game)'
  };
  return (
    <MainLayout customMeta={customMeta}>
      {/* Where I'm from */}
      <div className="border p-5 rounded-xl mb-5 w-full">
        <h1 className="text-center">
          Hello, I&apos;m a Web Developer based in Irvine, California!
        </h1>
      </div>

      {/* Name */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-9 mb-5">
        <div>
          <h1 className="text-4xl ">Zachary Punsalang</h1>
          <p>Developer (Web, Application, Game)</p>
        </div>
        <div>
          <Image
            className="rounded-full"
            src="/assets/github-profile-pic.jpeg"
            width={100}
            height={100}
            alt="profile picture"
            placeholder="blur"
            blurDataURL="/assets/github-profile-pic.jpeg"
          />
        </div>
      </div>

      {/* Work */}
      <div className="w-full flex flex-items-center border dark:bg-[#0D141E] rounded-xl p-5">
        <div>
          <h2 className="font-bold text-2xl dark:text-[#bd93f9] mb-2">Who</h2>
          <p>
            Hola I&apos;m <span className="dark:text-[#bd93f9]">ZACHURI</span>.
            I&apos;m a Computer and Information Science graduate from the
            University of California, Irvine. What inspires me to code is being
            able to build valuable projects that can help individuals with their
            lives, my curiosity on wanting to know how things are built from the
            ground up, and how one is able to express their ideas through code.
            I am a developer that is willing to learn new ideas and
            technologies.
          </p>
          <div className="mt-6">
            <h2 className="text-xl text-center">
              Let&apos;s build something together!
            </h2>
            <div className="flex flex-cols gap-5 justify-center">
              <a
                href="https://www.linkedin.com/in/zachary-punsalang/"
                aria-label="link to linkden"
              >
                <FaLinkedin
                  size={20}
                  className="dark:fill-black fill-[#FFFFFB] hover:bg-[#777777] hover:rounded"
                />
              </a>
              <a href="https://github.com/zachuri" aria-label="link to github">
                <FaGithub
                  size={20}
                  className="dark:fill-black fill-[#FFFFFB] hover:bg-[#777777] hover:rounded"
                />
              </a>
              <a
                href="https://twitter.com/zachurii"
                aria-label="link to twitter"
              >
                <FaTwitter
                  size={20}
                  className="dark:fill-black fill-[#FFFFFB] hover:bg-[#777777] hover:rounded"
                />
              </a>
              <a
                href="mailto:punsalang.zachary.work@gmail.com?body="
                aria-label="link to my email"
              >
                <AiOutlineMail
                  size={20}
                  className="dark:fill-black fill-[#FFFFFB] hover:bg-[#777777] hover:rounded"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-5 ">
            <Link href="/works">
              <button className="border dark:bg-[#bd93f9] dark:text-black rounded-xl px-8 py-2 hover:dark:text-gray-700 hover:text-gray-500 hover:border-gray-500 transition">
                <div className="flex flex-row items-center justify-center">
                  <p>My Portfolio</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="w-full flex mt-6 dark:bg-[#1C1C1C] p-3">
        <div className="w-full">
          <h2 className="text-2xl dark:text-[#bd93f9] mb-2 font-bold">Bio</h2>
          <div className="grid grid-cols-3 mb-4">
            <span className="font-bold">1999</span>
            <p className="col-span-2"> Born in Los Angeles, California</p>
          </div>
          <div className="grid grid-cols-3 mb-4">
            <span className="font-bold">2017 to 2019</span>
            <p className="col-span-2">
              {' '}
              Mt. San Antonio Community College (Computer Science)
            </p>
          </div>
          <div className="grid grid-cols-3">
            <span className="font-bold">2019 to 2022</span>
            <p className="col-span-2">
              {' '}
              University of Califonia, Irvine (Computer and Information Science)
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <Link href="/what">
          <button
            role="navigate to what page"
            aria-label="press to get to know more about me (link to what page)"
            className="border dark:bg-[#bd93f9] dark:text-black rounded-xl px-8 py-2 hover:dark:text-gray-700 hover:text-gray-500 hover:border-gray-500 transition"
          >
            <div className="flex flex-row items-center justify-center">
              <p>MORE ABOUT ME</p>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Who;
