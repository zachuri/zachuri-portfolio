import Details, { DetailProps } from '@/components/works/details';
import DisplayImages from '@/components/works/display-images';
import MastHead, { MastHeadProps } from '@/components/works/mast-head';
import glob from 'fast-glob';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';
import fs from 'fs';

const detailConfig: DetailProps = {
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
        technologies: [
          'Next 13',
          'React.js',
          'Shadcn UI',
          'Tailwind CSS',
          'TypeScript'
        ]
      }
    },
    {
      badgeName: 'back-end',
      detail: {
        technologies: ['Supabase', 'Postgres']
      }
    }
  ]
};

const mastheadConfig: MastHeadProps = {
  title: 'BeFit V2',
  description:
    'Our fitness journey began as a personal endeavor, aiding my brother and me in our quest for improved fitness. \
  However, our vision soon expanded: we aimed to assist both beginners and advanced individuals in their pursuit of fitness excellence. \
  Our focus encompassed crucial elements such as diet, weight management, and tailored workout regimens. \
  Now, with the release of an updated version,we have harnessed the power of Next.js and Supabase to propel our fitness tracker \
  to new heights. By addressing the shortcomings of existing fitness trackers, we aspire to share our insights and knowledge, empowering \
  newcomers to the fitness world to achieve their goals. Join us in this journey towards success, driven by innovation \
  and a commitment to helping others realize their fitness potential.'
};

const getImages = async (pattern: string) =>
  Promise.all(
    glob.sync(pattern).map(async file => {
      const src = file.replace('./public', '');
      const buffer = await fs.promises.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src } };
    })
  );

const BefitV2 = async () => {
  const id = 'befit-v2';

  const images = await getImages(
    `./public/assets/projects/${id}-*.{jpg,png,jpeg}`
  );

  return (
    <section className="container space-y-5 lg:space-y-10">
      <MastHead
        title={mastheadConfig.title}
        description={mastheadConfig.description}
      />
      <Details badges={detailConfig.badges} />
      <DisplayImages images={images}/>
    </section>
  );
};

export default BefitV2;
