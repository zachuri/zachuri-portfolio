import React from 'react';
import LayoutMotion from '../components/Layouts/Motion';
import MainLayout from '../components/Layouts/Main';
import Projects from '../components/Projects';
import { NextSeo } from 'next-seo';
import { MetaProps } from '../../types/layout';
import { GetStaticProps } from 'next';
import { getBlurhash } from 'next-blurhash';

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const images = [
    { src: '/assets/projects/be-fit.png' },
    { src: '/assets/projects/twitch-clone.png' },
    { src: '/assets/projects/ecommerce-movie.png' },
    { src: '/assets/projects/diversity-hotline.png' }
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

const Works: React.FC<DemoProps> = ({ imgHashes }) => {
  const url = 'https://zachuri.com/works';
  const title = 'Zachary Punsalang - Works';
  const description = 'Works - view projects of Zachary Punsalang | ZACHURI';

  const customMeta: MetaProps = {
    title: `Zachary Punsalang - Works`,
    description: 'Works - view projects of Zachary Punsalang | ZACHURI'
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
          <h2 className="text-2xl text-gray-600 dark:text-[#bd93f9] mb-2 font-bold">
            Works
          </h2>
          <Projects imgHashes={imgHashes} />
        </LayoutMotion>
      </MainLayout>
    </>
  );
};

export default Works;
