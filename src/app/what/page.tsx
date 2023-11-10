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

const features = [
  {
    title: 'Use your calendar as a todo list',
    id: 'todo-list',
    card: Todo
    // visual: OtherVisual,
  },
  {
    title: 'Color your calendar to organize',
    id: 'colors',
    card: Colors
    // visual: OtherVisual,
  },
  {
    title: 'Instantly know if someone is available',
    id: 'availability',
    card: Availability
    // visual: OtherVisual,
  },
  {
    title: 'Track what you listened to when',
    id: 'music',
    card: Music
    // visual: MusicVisual,
  },
  {
    title: 'Send scheduling links guests love',
    id: 'scheduling-links',
    card: SchedulingLinks
    // visual: OtherVisual,
  },
  {
    title: 'Always know what your team is up to',
    id: 'team',
    card: Team
    // visual: OtherVisual,
  }
];
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

      <Feature features={features} />
    </div>
  );
};

export default Page;
