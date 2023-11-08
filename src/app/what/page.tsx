'use client';

import React from 'react';
import Skills from '@/components/skills';
import { ThreeModel } from '@/components/three-model';

const Page: React.FC = () => {
  return (
    <div className="flex-col flex items-center justify-center">
      <section className="h-[500px] w-[500px]">
        <ThreeModel />
      </section>

      <section className="container space-y-2">
        <h1 className="text-3xl font-bold">Technical Skills</h1>
        <Skills />
      </section>
    </div>
  );
};

export default Page;
