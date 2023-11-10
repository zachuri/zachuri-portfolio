import React from 'react';
import FeatureTitle from './title';
import { CardProps } from './card';

type Features = {
  title: string;
  id: string;
  card: ({ id }: CardProps) => React.JSX.Element;
};

type Props = {
  features: Features[];
};

const Feature: React.FC<Props> = ({ features }) => {
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
