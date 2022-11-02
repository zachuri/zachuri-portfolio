import React from 'react';
import LayoutMotion from '../components/Layouts/Motion';
import MainLayout from '../components/Layouts/Main';
import Projects from '../components/Projects';
import { NextSeo } from 'next-seo';
import { MetaProps } from '../../types/layout';

const Works = () => {
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
          <h2 className="text-2xl dark:text-[#bd93f9] mb-2 font-bold">Works</h2>
          <Projects />
        </LayoutMotion>
      </MainLayout>
    </>
  );
};

export default Works;
