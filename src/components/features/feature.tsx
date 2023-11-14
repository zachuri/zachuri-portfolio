import React from 'react';
import FeatureTitle from './title';
import { CardProps } from './card';

import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Todo
} from '@/components/features/card';

type Features = {
  title: string;
  id: string;
  card: ({ id }: CardProps) => React.JSX.Element;
};

type Props = {
  features: Features[];
};

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


const Feature = () => {
  return (
    // {/* Items start -> removed the div behind the sticky */}
    <section className="container flex gap-5 w-full items-start">
      <div className="w-full py-[50vh]">
        <ul>
          {features.map(feature => (
            <li key={feature.id}>
              <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full sticky top-0 flex h-screen items-center">
        <div className="relative w-full rounded-2xl aspect-square bg-gray-500">
          {features.map(feature => (
            <feature.card id={feature.id} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
