import Details, { DetailProps } from '@/components/works/details';
import MastHead from '@/components/works/mast-head';
import React from 'react';

const deatilConfig: DetailProps = {
  badges: [
    {
      badgeName: 'source',
      detail: {
        title: 'github.com/zachuri/BeFit-v2',
        href: 'https://github.com/zachuri/BeFit-v2'
      }
    },
    {
      badgeName: 'website',
      detail: {
        title: 'befit-v2.zachuri.com',
        href: 'https://befit-v2.zachuri.com/'
      }
    },
    {
      badgeName: 'front-end',
      detail: {
        technologies: ['Next 13', 'React.js']
      }
    },
    {
      badgeName: 'back-end',
      detail: {
        technologies: ['Next 13', 'React.js']
      }
    }
  ]
};

const Example = () => {
  return (
    <section className="container space-y-6">
      <MastHead id={'Example'} title={'Example'} description={''} />
      <Details badges={deatilConfig.badges} />
    </section>
  );
};

export default Example;
