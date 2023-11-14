'use client';

import { features } from 'process';
import React from 'react';
import Title from './title';

type Features = {
  title: string;
  id: string;
};

type Props = {
  features: Features[];
};

const Feature: React.FC<Props> = ({ features }) => {
  return (
    <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex">
        <ul>
          {features.map(feature => {
            return <li key={feature.id}>{/* <Title  id={feature.id} /> */}</li>;
          })}
        </ul>
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {/* {children} */}
      </main>
    </div>
  );
};

export default Feature;
