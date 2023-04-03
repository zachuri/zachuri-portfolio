import Image from 'next/image';
import React from 'react';
import MainLayout from '../../components/Layouts/Main';
import LayoutMotion from '../../components/Layouts/Motion';
import { Badge } from '../../components/Project';

const ArcelDesign = () => {
  return (
    <MainLayout>
      <LayoutMotion>
        <h1 className="text-2xl font-bold dark:text-[#bd93f9] mb-5">
          {' '}
          <span className="text-base font-normal text-black dark:text-white">
            Works &gt;
          </span>{' '}
          ArcelDesign, Inc.
        </h1>
        <p className="ml-5 mb-5">
          Communicated closely with the client to understand their design
          preferences and requirements, and iteratively refined the website
          until it met their expectations. Redesigned and revamped key elements
          of the website, such as the landing page and navigation menu, to
          improve user engagement and conversion rates. Developed with modern
          technologies, saving their company $100 a year from paying a website
          builder subscripti
        </p>

        <ul className="mb-5">
          <li>
            <Badge>Source</Badge>
            <a
              href="https://github.com/zachuri/arceldesign"
              className="hover:underline text-purple-900 dark:text-[#bd93f9]"
            >
              github.com/zachuri/BeFit
            </a>
          </li>
          <li>
            <Badge>Website</Badge>
            <a
              href="https://arceldesign.vercel.app/"
              className="hover:underline text-purple-900 dark:text-[#bd93f9] "
            >
              arceldesign.com
            </a>
          </li>
          <li>
            <Badge>Platform</Badge>
            Desktop, Mobile
          </li>
          <li>
            <Badge>Front-end</Badge>
            Next.js, React.js, Tailwind CSS, Framer Motion
          </li>
        </ul>

        <div className="flex flex-col gap-8">
          <div className="rounded-xl">
            <Image
              src={`/assets/projects/arceldesign.png`}
              alt={'arceldesign'}
              width="1200"
              height="700"
              className="rounded-xl mb-5"
              placeholder="blur"
              blurDataURL={`/assets/projects/be-fit.png`}
            />
          </div>
          <div className="rounded-xl">
            <Image
              src={`/assets/projects/arceldesign-1.png`}
              alt={'arceldesign'}
              width="1200"
              height="700"
              className="rounded-xl mb-5"
              placeholder="blur"
              blurDataURL={`/assets/projects/be-fit-1.png`}
            />
          </div>
          <div className="rounded-xl">
            <Image
              src={`/assets/projects/arceldesign-2.png`}
              alt={'arceldesign'}
              width="1200"
              height="700"
              className="rounded-xl mb-5"
              placeholder="blur"
              blurDataURL={`/assets/projects/be-fit-2.png`}
            />
          </div>
        </div>
      </LayoutMotion>
    </MainLayout>
  );
};

export default ArcelDesign;
