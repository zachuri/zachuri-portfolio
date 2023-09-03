import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getBlurhash } from 'next-blurhash';
import React from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import MainLayout from '../../components/Layouts/Main';
import LayoutMotion from '../../components/Layouts/Motion';
import { Badge } from '../../components/Project';

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const images = [
    { src: '/assets/projects/next13-supabase-stripe.png' },
    { src: '/assets/projects/next13-supabase-stripe-1.png' },
    { src: '/assets/projects/next13-supabase-stripe-2.png' },
    { src: '/assets/projects/next13-supabase-stripe-3.png' },
    { src: '/assets/projects/next13-supabase-stripe-4.png' }
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

const Next13SupabaseStripe: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <MainLayout>
      <LayoutMotion>
        <h1 className="text-2xl font-bold dark:text-[#bd93f9] mb-5">
          <span className="text-base font-normal text-black dark:text-white">
            Works &gt;
          </span>
          <div>Next 13 + Supabase + Stripe: Saas Template</div>
        </h1>
        <div className="ml-5 mb-5 space-y-5">
          <p>
            This is a boilerplate project that combines Next.js 13, Supabase,
            and Stripe to provide a starting point for building web
            applications. It includes a basic setup for integrating Supabase as
            the backend database and Stripe for handling payments.
          </p>
          <p>
            I drew inspiration from Shadcn&apos;s innovative Taxonomy app, which
            provided a powerful categorization system. However, to enhance the
            backend functionality and streamline content management, I
            implemented Supabase as my backend solution. By integrating
            Supabase, I was able to efficiently store, organize, and retrieve
            inspiration content, allowing users to discover and explore curated
            collections based on the Taxonomy framework. This combination of
            Shadcn&apos; inspiration and Supabase&apos;s backend capabilities
            resulted in a seamless and engaging experience for users seeking
            creative inspiration.
          </p>
        </div>

        <ul className="mb-5">
          <li>
            <Badge>Source</Badge>
            <a
              href="https://github.com/zachuri/next13-supabase-stripe"
              className="hover:underline text-purple-900 dark:text-[#bd93f9]"
            >
              github.com/zachuri/next13-supabase-stripe
            </a>
          </li>
          <li>
            <Badge>Website</Badge>
            <a
              href="https://next13-supabase-stripe.zachuri.com/"
              className="hover:underline text-purple-900 dark:text-[#bd93f9] "
            >
              next13-supabase-stripe.zachuri.com
            </a>
          </li>
          <li>
            <Badge>Platform</Badge>
            Desktop, Mobile
          </li>
          <li>
            <Badge>Front-end</Badge>
            Next.js 13, Supabase, Stripe, Radix UI, Tailwind CSS
          </li>
        </ul>

        {/* Display images */}
        <div className="flex flex-col gap-8">
          <ImageHash
            src={'/assets/projects/next13-supabase-stripe.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(0)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/next13-supabase-stripe-1.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(0)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/next13-supabase-stripe-2.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(1)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/next13-supabase-stripe-3.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(2)?.hash as string}
          />
          <ImageHash
            src={'/assets/projects/next13-supabase-stripe-4.png'}
            alt={'arceldesign'}
            hash={imgHashes.at(3)?.hash as string}
          />
        </div>
      </LayoutMotion>
    </MainLayout>
  );
};

export default Next13SupabaseStripe;
