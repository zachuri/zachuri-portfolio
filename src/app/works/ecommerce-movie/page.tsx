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
        title: 'github.com/zachuri/122b',
        href: 'https://github.com/zachuri/122b'
      }
    },
    {
      badgeName: 'Demo Videos',
      details: [
        {
          title: 'Demo 1',
          href: 'https://www.youtube.com/watch?v=eg1VJATdAPM'
        },
        {
          title: 'Demo 2',
          href: 'https://www.youtube.com/watch?v=EaT3hTv7-7s'
        }
      ]
    },
    {
      badgeName: 'Platform',
      detail: {
        data: ['Desktop', 'Mobile']
      }
    },
    {
      badgeName: 'frontend',
      detail: {
        data: ['React.js', 'React Native', 'Bootstrap']
      }
    },
    {
      badgeName: 'backend',
      detail: {
        data: ['Java', 'Spring Boot', 'Jackson']
      }
    },
    {
      badgeName: 'database',
      detail: {
        data: ['MySQL', 'JDBC', 'Named Parameter JDBC Template']
      }
    }
  ]
};

const mastheadConfig: MastHeadProps = {
  title: 'Ecommerce Movie Shop (Fablix)',
  description: `
    Created a web-based ecommerce movie shop that allows customers to locate movies, place them in a shopping cart, \ 
    and checkout/pay with Stripe. Implemented microservices, RESTful APIs, and an API gateway for improved security and scalability. \
    Enhanced understanding of full stack, establishing seamless integration between frontend and backend.
  `
};

const Page = async () => {
  const images = await getImagesProject('ecommerce-movie');

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
