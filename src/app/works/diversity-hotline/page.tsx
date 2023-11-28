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
        title: 'github.com/zachuri/DiversityHotlineApp',
        href: 'https://github.com/zachuri/DiversityHotlineApp'
      }
    },
    {
      badgeName: 'website',
      detail: {
        title: 'diversityhotline.com',
        href: 'https://suspicious-euclid-dddcf0.netlify.app/'
      }
    },
    {
      badgeName: 'Platform',
      detail: {
        data: ['Desktop', 'Mobile', 'Progressive Web Application (PWA)']
      }
    },
    {
      badgeName: 'Technologies',
      detail: {
        data: ['React', 'Firebase', 'Node JS', 'HTML/CSS', 'Agile']
      }
    }
  ]
};

const mastheadConfig: MastHeadProps = {
  title: 'Diversity Hotline',
  description: `
    Collaborated with Student Service Counselor of UCI who wanted a Progressive Web Application \
    where mentors and users can schedule counseling meetings and users can access multiple \
    resources regarding diversity, equity and inclusion.
  `
};

const Page = async () => {
  const images = await getImagesProject('diversity-hotline');

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
