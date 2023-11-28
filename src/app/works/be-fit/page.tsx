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
        title: 'github.com/zachuri/BeFit',
        href: 'https://github.com/zachuri/BeFit'
      }
    },
    {
      badgeName: 'website',
      detail: {
        title: 'befit-zachuri.vercel.app',
        href: 'be-fit-zachuri.vercel.app'
      }
    },
    {
      badgeName: 'platform',
      detail: {
        data: ['Desktop', 'Mobile']
      }
    },
    {
      badgeName: 'stack',
      detail: {
        data: ['T3-stack']
      }
    },
    {
      badgeName: 'frontend',
      detail: {
        data: ['Next 13', 'React.js', 'Tailwind CSS']
      }
    },
    {
      badgeName: 'backend',
      detail: {
        data: ['tRPC', 'Prisma', 'NextAuth.js', 'TypeScript']
      }
    }
  ]
};

const mastheadConfig: MastHeadProps = {
  title: 'BeFit',
  description: `
    Designed and implemented with my brother (Artifactz1) to develop a Web and Mobile \
    application that allows users to be able to track their fitness journey. It started \
    off with helping me and my brother improve our fitness progress and later \
    wanted to help beginners and advances individuals with their fitness progress too. \
    The main aspects we wanted to track are diet, weight and workouts. We wanted to \
    build this app with what that other fitness trackers are lacking and hope that \
    our knowledge will help others who are getting into fitness succeed.
  `
};

const Page = async () => {
  const images = await getImagesProject('be-fit');

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
