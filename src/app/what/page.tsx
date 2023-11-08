'use client';

import React from 'react';
import Skills from '@/components/skills';
import { ThreeModel } from '@/components/three-model';

const Page: React.FC = () => {
  return (
    <div className="flex-col flex items-center justify-center">
      <div className="w-[70%] -mb-40 sm:-mb-32">
        <center className="h-[400px]">
          <ThreeModel />
        </center>
      </div>

      <section className="container space-y-2">
        <h1 className="text-3xl font-bold">Technical Skills</h1>
        <Skills />
      </section>
    </div>
  );
};

export default Page;
