'use client';

import React from 'react';
import Skills from '@/components/what/skills';
import { ThreeModel } from '@/components/three/three-model';
import Section from '@/components/what/section-div';
import Workflow from '@/components/what/workflow';

const Page: React.FC = () => {
  return (
    <div className="max-sm:-mt-10 flex flex-col">
      <Section
        id={'technical-skills'}
        className="flex items-center justify-center"
      >
        <div className="w-[80%] sm:-mb-52 -mb-32 z-10">
          <center className="h-[400px] sm:h-[600px] flex items-center justify-center">
            <ThreeModel />
          </center>
        </div>
      </Section>

      <Section id={'technical-skills'} className="pb-32">
        <Skills />
      </Section>

      <Section id={'work-flow'} className="pb-32">
        <Workflow />
      </Section>
    </div>
  );
};

export default Page;
