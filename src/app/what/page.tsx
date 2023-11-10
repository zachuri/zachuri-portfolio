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
  Todo,
} from "@/components/features/card";
import FeatureTitle from '@/components/features/title';

function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl md:text-3xl font-bold">{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-semibold">{children}</h2>;
}

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    card: Todo,
    // visual: OtherVisual,
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    card: Colors,
    // visual: OtherVisual,
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Availability,
    // visual: OtherVisual,
  },
  {
    title: "Track what you listened to when",
    id: "music",
    card: Music,
    // visual: MusicVisual,
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
    card: SchedulingLinks,
    // visual: OtherVisual,
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    card: Team,
    // visual: OtherVisual,
  },
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

      {/* <section className="container space-y-2 z-20">
        <H1>Workflow</H1>
        <H2>Operating System</H2>
      </section> */}

      {/* Items start -> removed the div behind the sticky */}
      <section className="flex gap-20 w-full items-start">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map(feature => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>
                  {feature.title}
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 flex h-screen items-center">
          <div className="relative w-full rounded-2xl aspect-square bg-gray-500">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
