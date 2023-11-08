'use client';

import React from 'react';
import Skills from '@/components/skills';

const Page: React.FC = () => {
  return (
    <div className="space-y-10">
      <section className="container space-y-2">
        <h1 className="text-3xl font-bold">Technical Skills</h1>
        <Skills />
      </section>

      <section className="container space-y-2">
        <h1 className="text-3xl font-bold">Work Flow</h1>
        <article className="container">YEssir</article>
      </section>
    </div>
  );
};

export default Page;
