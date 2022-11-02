import React from 'react';
import LayoutMotion from '../components/Layouts/Motion';
import MainLayout from '../components/Layouts/Main';
import Projects from '../components/Projects';
import { NextSeo } from 'next-seo';

const Works = () => {
  const url = 'https://zachuri.com/works';
  const title = 'Works';
  const description = 'Works - view projects of ZACHURI';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />

      <MainLayout>
        <LayoutMotion>
          <h2 className="text-2xl dark:text-[#bd93f9] mb-2 font-bold">Works</h2>
          <Projects />
        </LayoutMotion>
      </MainLayout>
    </>
  );
};

export default Works;
