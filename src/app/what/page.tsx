'use client';

import React from 'react';
import Skills from '@/components/skills';
import { ThreeModel } from '@/components/three/three-model';
import Section from '@/components/what/section-div';

const Page: React.FC = () => {
  return (
    <div className="max-sm:-mt-10 flex flex-col">
      <Section id={'technical-skills'} className="pb-32">
        <div className="w-[80%] sm:-mb-52 -mb-32 z-10">
          <center className="h-[400px] sm:h-[600px] flex items-center justify-center">
            <ThreeModel />
          </center>
        </div>

        <Skills />
      </Section>
    </div>
  );
};

export default Page;
