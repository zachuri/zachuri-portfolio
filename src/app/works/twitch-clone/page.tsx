import Details, { DetailProps } from '@/components/works/details';
import DisplayImages from '@/components/works/display-images';
import MastHead, { MastHeadProps } from '@/components/works/mast-head';
import { getImagesProject } from '@/utils/get-images';
import React from 'react';

const detailConfig: DetailProps = {
  badges: [
    {
      badgeName: 'source',
      detail: {
        title: 'github.com/zachuri/twitch-clone-react',
        href: 'https://github.com/zachuri/twitch-clone-react'
      }
    },
    {
      badgeName: 'website',
      detail: {
        title: 'twitch-clone-react-zachuri.vercel.app/',
        href: 'https://twitch-clone-react-zachuri.vercel.app/'
      }
    },
    {
      badgeName: 'platform',
      detail: {
        data: ['Desktop', 'Mobile']
      }
    },
    {
      badgeName: 'Stack',
      detail: {
        data: ['Next.js', 'Tailwind CSS']
      }
    }
  ]
};

const mastheadConfig: MastHeadProps = {
  title: 'Twitch Clone',
  description: `
    A clone of Twitch to develop my understanding of Tailwind CSS. Understand fundamentals of \
    tailwind which helped me apply these fundamentals to other projects.
  `
};

const Page = async () => {
  const images = await getImagesProject('twitch-clone');

  return (
    <section className="container space-y-5 lg:space-y-10">
      <MastHead
        title={mastheadConfig.title}
        description={mastheadConfig.description}
      />
      <Details badges={detailConfig.badges} />
      <DisplayImages images={images} />
    </section>
  );
};

export default Page;
