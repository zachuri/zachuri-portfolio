'use client';

import React from 'react';
import Skills from '@/components/skills';
import { ThreeModel } from '@/components/three-model';
import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Todo
} from '@/components/features/card';
import FeatureTitle from '@/components/features/title';
import Feature from '@/components/features/feature';

function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl md:text-3xl font-bold">{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-semibold">{children}</h2>;
}

const Page: React.FC = () => {
  return (
    <div className="max-sm:-mt-10 flex flex-col space-y-10">
      <section className="flex flex-col max-md:items-center max-md:justify-center">
        <div className="w-[80%] sm:-mb-52 -mb-32 z-10">
          <center className="h-[400px] sm:h-[600px] flex items-center justify-center">
            <ThreeModel />
          </center>
        </div>
      </section>
      <Skills />

      {/* <Feature features={features} /> */}
      <Feature />
    </div>
  );
};

export default Page;
