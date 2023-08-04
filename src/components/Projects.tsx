import React from 'react';
import Project from './Project';

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

const Projects: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <Project
        id={'befit-v2'}
        title={'BeFit-v2'}
        desc={
          'Enhanced Fitness Tracker: Building with Next.js and Supabase (Version 2) - In Progress'
        }
        hash={imgHashes.at(0)?.hash as string}
      />
      <Project
        id={'next13-supabase-stripe'}
        title={'Next.js 13 + Supabase + Stripe: SaaS Starter'}
        desc={
          'A boilerplate project that combines Next 13, Supabase, and Stripe to create a foundation for building SaaS applications'
        }
        hash={imgHashes.at(1)?.hash as string}
      />
      <Project
        id={'arceldesign'}
        title={'ArcelDesign, Inc.'}
        desc={
          'Redesigned key elements of clients website, such as the landing page and navigation menu'
        }
        hash={imgHashes.at(2)?.hash as string}
      />
      <Project
        id={'be-fit'}
        title={'BeFit'}
        desc={
          'Full Stack Fitness tracker that allows users to keep track of their diet, weight, and workouts'
        }
        hash={imgHashes.at(3)?.hash as string}
      />
      <Project
        id={'twitch-clone'}
        title={'Twitch Clone'}
        desc={
          'Clone of Twitch using next.js and tailwind.css to help my understanding of design'
        }
        hash={imgHashes.at(4)?.hash as string}
      />
      <Project
        id={'ecommerce-movie'}
        title={'Ecommerce Movie'}
        desc={
          'Full Stack ecommerce movie shop where users are able to buy movies'
        }
        hash={imgHashes.at(5)?.hash as string}
      />
      <Project
        id={'diversity-hotline'}
        title={'Diversity Hotline'}
        desc={
          'Hotline for individuals to discuss topics regarding diversity, equity, inclusion, and discrimination'
        }
        hash={imgHashes.at(6)?.hash as string}
      />
    </div>
  );
};

export default Projects;
