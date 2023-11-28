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
        title: 'github.com/zachuri/next13-supabase-stripe',
        href: 'https://github.com/zachuri/next13-supabase-stripe'
      }
    },
    {
      badgeName: 'website',
      detail: {
        title: 'next13-supabase-stripe.zachuri.com',
        href: 'https://next13-supabase-stripe.zachuri.com/'
      }
    },
    {
      badgeName: 'platform',
      detail: {
        data: ['Desktop', 'Mobile']
      }
    },
    {
      badgeName: 'frontend',
      detail: {
        data: ['Next 13', 'Shadcn UI', 'Tailwind CSS', 'TypeScript']
      }
    },
    {
      badgeName: 'backend',
      detail: {
        data: ['Supabase', 'Postgres', 'Stripe']
      }
    }
  ]
};

const mastheadConfig: MastHeadProps = {
  title: 'Next 13 + Supabase + Stripe: Saas Template',
  description: `
    This is a boilerplate project that combines Next.js 13, Supabase, and Stripe to provide a starting \
    point for building web applications. It includes a basic setup for integrating Supabase as the backend \
    database and Stripe for handling payments. \n
    I drew inspiration from Shadcn's innovative Taxonomy app, which provided a powerful categorization system. \
    However, to enhance the backend functionality and streamline content management, I implemented Supabase as \
    my backend solution. By integrating Supabase, I was able to efficiently store, organize, and retrieve \
    inspiration content, allowing users to discover and explore curated collections based on the Taxonomy \
    framework. This combination of Shadcn' inspiration and Supabase's backend capabilities resulted in \
    a seamless and engaging experience for users seeking creative inspiration.
  `
};

const Page = async () => {
  const images = await getImagesProject('next13-supabase-stripe');

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
