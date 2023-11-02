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
    { src: '/assets/projects/twitch-clone.png' },
    { src: '/assets/projects/twitch-clone-1.png' },
    { src: '/assets/projects/twitch-clone-2.png' }
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

const twitchclone: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <div>
      <MainLayout>
        <LayoutMotion>
          <h1 className="text-2xl font-bold dark:text-[#bd93f9] mb-5">
            {' '}
            <span className="text-base font-normal text-black dark:text-white">
              Works &gt;
            </span>{' '}
            Twitch Clone
          </h1>
          <p className="ml-5 mb-5">
            A clone of Twitch to develop my understanding of Tailwind CSS.
            Understand fundamentals of tailwind which helped me apply these
            fundamentals to other projects.
          </p>

          <ul className="mb-5">
            <li>
              <Badge>Source</Badge>
              <a
                href="https://github.com/zachuri/twitch-clone-react"
                className="hover:underline text-purple-900 dark:text-[#bd93f9]"
              >
                github.com/zachuri/twitch-clone-react
              </a>
            </li>
            <li>
              <Badge>Website</Badge>
              <a
                href="https://twitch-clone-react-zachuri.vercel.app/"
                className="hover:underline text-purple-900 dark:text-[#bd93f9]"
              >
                https://twitch-clone-react-zachuri.vercel.app/
              </a>
            </li>
            <li>
              <Badge>Platform</Badge>
              Windows/macOS/Linux/iOS/Android
            </li>
            <li>
              <Badge>Stack</Badge>
              Next.js, Tailwind CSS
            </li>
          </ul>

          <div className="flex flex-col gap-8">
            <ImageHash
              src={'/assets/projects/twitch-clone.png'}
              alt={'twitch-clone'}
              hash={imgHashes.at(0)?.hash as string}
            />
            <ImageHash
              src={'/assets/projects/twitch-clone-1.png'}
              alt={'twitch-clone'}
              hash={imgHashes.at(1)?.hash as string}
            />
            <ImageHash
              src={'/assets/projects/twitch-clone-2.png'}
              alt={'twitch-clone'}
              hash={imgHashes.at(2)?.hash as string}
            />
          </div>
        </LayoutMotion>
      </MainLayout>
    </div>
  );
};

export default twitchclone;
