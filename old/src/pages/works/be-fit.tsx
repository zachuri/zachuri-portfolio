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
    { src: '/assets/projects/be-fit.png' },
    { src: '/assets/projects/be-fit-1.png' },
    { src: '/assets/projects/be-fit-2.png' }
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

const Befit: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <MainLayout>
      <LayoutMotion>
        <h1 className="text-2xl font-bold dark:text-[#bd93f9] mb-5">
          {' '}
          <span className="text-base font-normal text-black dark:text-white">
            Works &gt;
          </span>{' '}
          BeFit
        </h1>
        <p className="ml-5 mb-5">
          Designed and implemented with my brother{' '}
          <span>
            <a
              href="https://github.com/artifactz1"
              className="hover:underline text-purple-900 dark:text-[#bd93f9]"
            >
              (Artifactz1)
            </a>
          </span>{' '}
          to develop a Web and Mobile application that allows users to be able
          to track their fitness journey. It started off with helping me and my
          brother improve our fitness progress and later wanted to help
          beginners and advances individuals with their fitness progress too.
          The main aspects we wanted to track are diet, weight and workouts. We
          wanted to build this app with what that other fitness trackers are
          lacking and hope that our knowledge will help others who are getting
          into fitness succeed.
        </p>

        <ul className="mb-5">
          <li>
            <Badge>Source</Badge>
            <a
              href="https://github.com/zachuri/BeFit"
              className="hover:underline text-purple-900 dark:text-[#bd93f9]"
            >
              github.com/zachuri/BeFit
            </a>
          </li>
          <li>
            <Badge>Website</Badge>
            <a
              href="https://be-fit-zachuri.vercel.app/"
              className="hover:underline text-purple-900 dark:text-[#bd93f9] "
            >
              be-fit-zachuri.vercel.app/
            </a>
          </li>
          <li>
            <Badge>Platform</Badge>
            Desktop, Mobile
          </li>
          <li>
            <Badge>Stack</Badge>
            T3-stack
          </li>
          <li>
            <Badge>Front-end</Badge>
            Next.js, React.js, Tailwind CSS
          </li>
          <li>
            <Badge>Back-end</Badge>
            tRPC, Prisma, NextAuth.js TypeScript
          </li>
        </ul>

        <div className="flex flex-col gap-8">
          <ImageHash
            src={'/assets/projects/be-fit.png'}
            alt={'be-fit'}
            hash={imgHashes.at(0)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/be-fit-1.png'}
            alt={'be-fit-1'}
            hash={imgHashes.at(1)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/be-fit-2.png'}
            alt={'be-fit-2'}
            hash={imgHashes.at(2)?.hash as string}
          />
        </div>
      </LayoutMotion>
    </MainLayout>
  );
};

export default Befit;
