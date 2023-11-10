'use client';

import React from 'react';
import Skills from '@/components/skills';
import { ThreeModel } from '@/components/three-model';

function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl md:text-3xl font-bold">{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-semibold">{children}</h2>;
}

const Page: React.FC = () => {
  return (
    <div className="max-sm:-mt-10 flex flex-col items-center justify-center space-y-10">
      <section className="container flex flex-col items-center">
        <div className="w-[80%] sm:-mb-52 -mb-32 z-10">
          <center className="h-[400px] sm:h-[600px] flex items-center justify-center">
            <ThreeModel />
          </center>
        </div>

        <Skills />
      </section>

      <section className="container space-y-2 z-20">
        <H1>Workflow</H1>
        <H2>Operating System</H2>
      </section>
    </div>
  );
};

export default Page;
