import Image from 'next/image';
import React from 'react';
import MainLayout from '../../components/Layouts/Main';
import LayoutMotion from '../../components/Layouts/Motion';
import { Badge } from '../../components/Project';
import { GetStaticProps } from 'next';
import { getBlurhash } from 'next-blurhash';
import { BlurhashCanvas } from 'react-blurhash';

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const images = [
    { src: '/assets/projects/arceldesign.png' },
    { src: '/assets/projects/arceldesign-1.png' },
    { src: '/assets/projects/arceldesign-2.png' }
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
          width="1200"
          height="700"
          className="rounded-lg"
        />
      </div>
    </>
  );
}

const ArcelDesign: React.FC<DemoProps> = ({ imgHashes }) => {
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
              github.com/zachuri/arceldesign
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

        {/* Display images */}
        <div className="flex flex-col gap-8">
          <ImageHash
            src={'/assets/projects/arceldesign.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(0)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/arceldesign-1.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(1)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/arceldesign-2.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(2)?.hash as string}
          />
        </div>
      </LayoutMotion>
    </MainLayout>
  );
};

export default ArcelDesign;
