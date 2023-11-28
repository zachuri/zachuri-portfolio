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
        title: 'github.com/zachuri/arceldesign',
        href: 'https://github.com/zachuri/arceldesign'
      }
    },
    {
      badgeName: 'website',
      detail: {
        title: 'arceldesign.com',
        href: 'https://arceldesign.vercel.app/'
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
        data: ['Next 13', 'React.js', 'Tailwind CSS', 'Framer Motion']
      }
    }
  ]
};

const mastheadConfig: MastHeadProps = {
  title: 'ArcelDesign, Inc.',
  description: `
  Communicated closely with the client to understand their design preferences \
  and requirements, and iteratively refined the website until it met their expectations. \
  Redesigned and revamped key elements of the website, such as the landing page and \
  navigation menu, to improve user engagement and conversion rates. Developed with \
  modern technologies, saving their company $100 a year from paying a website builder subscripti
  `
};

const Page = async () => {
  const images = await getImagesProject('arceldesign');

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
