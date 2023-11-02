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
    { src: '/assets/projects/befit-v2.png' },
    { src: '/assets/projects/befit-v2-1.png' },
    { src: '/assets/projects/befit-v2-2.png' },
    { src: '/assets/projects/befit-v2-3.png' },
    { src: '/assets/projects/befit-v2-4.png' },
    { src: '/assets/projects/befit-v2-5.png' },
    { src: '/assets/projects/befit-v2-6.png' }
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

const BeFitV2: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <MainLayout>
      <LayoutMotion>
        <h1 className="text-2xl font-bold dark:text-[#bd93f9] mb-5">
          {' '}
          <span className="text-base font-normal text-black dark:text-white">
            Works &gt;
          </span>{' '}
          BeFit-v2 (In Progress)
        </h1>
        <p className="ml-5 mb-5">
          Our fitness journey began as a personal endeavor, aiding my brother
          and me in our quest for improved fitness. However, our vision soon
          expanded: we aimed to assist both beginners and advanced individuals
          in their pursuit of fitness excellence. Our focus encompassed crucial
          elements such as diet, weight management, and tailored workout
          regimens.
        </p>
        <p className="ml-5 mb-5">
          Now, with the release of an updated version, we have harnessed the
          power of Next.js and Supabase to propel our fitness tracker to new
          heights. By addressing the shortcomings of existing fitness trackers,
          we aspire to share our insights and knowledge, empowering newcomers to
          the fitness world to achieve their goals. Join us in this journey
          towards success, driven by innovation and a commitment to helping
          others realize their fitness potential.
        </p>

        <ul className="mb-5">
          <li>
            <Badge>Source</Badge>
            <a
              href="https://github.com/zachuri/BeFit-v2"
              className="hover:underline text-purple-900 dark:text-[#bd93f9]"
            >
              github.com/zachuri/BeFit-v2
            </a>
          </li>
          <li>
            <Badge>Website</Badge>
            <a
              href="https://befit-v2.zachuri.com/"
              className="hover:underline text-purple-900 dark:text-[#bd93f9] "
            >
              befit-v2.zachuri.com
            </a>
          </li>
          <li>
            <Badge>Platform</Badge>
            Desktop, Mobile
          </li>
          <li>
            <Badge>Front-end</Badge>
            Next 13, React.js, Shadcn UI, Tailwind CSS, TypeScript
          </li>
          <li>
            <Badge>Back-end</Badge>
            Supabase, Postgres
          </li>
        </ul>

        <div className="flex flex-col gap-8">
          <ImageHash
            src={'/assets/projects/befit-v2.png'}
            alt={'be-fit'}
            hash={imgHashes.at(0)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/befit-v2-1.png'}
            alt={'be-fit-1'}
            hash={imgHashes.at(1)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/befit-v2-2.png'}
            alt={'be-fit'}
            hash={imgHashes.at(0)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/befit-v2-3.png'}
            alt={'be-fit-1'}
            hash={imgHashes.at(1)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/befit-v2-4.png'}
            alt={'be-fit'}
            hash={imgHashes.at(0)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/befit-v2-5.png'}
            alt={'be-fit-1'}
            hash={imgHashes.at(1)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/befit-v2-6.png'}
            alt={'be-fit-1'}
            hash={imgHashes.at(1)?.hash as string}
          />
        </div>
      </LayoutMotion>
    </MainLayout>
  );
};

export default BeFitV2;
