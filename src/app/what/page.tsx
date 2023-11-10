'use client';

import React from 'react';
import Skills from '@/components/skills';
import { ThreeModel } from '@/components/three-model';

const Page: React.FC = () => {
  return (
    <div className="flex-col max-sm:-mt-10 flex items-center justify-center">
      <div className="w-[80%] sm:-mb-52 -mb-32 z-10">
        <center className="h-[400px] sm:h-[600px] flex items-center justify-center">
          <ThreeModel />
        </center>
      </div>

      <section className="container space-y-2 z-20">
        <h1 className="text-3xl font-bold">Technical Skills</h1>
        <Skills />
      </section>
    </div>
  );
};

export default Page;
