'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useFeatureStore } from '../store/feature';

export type FeatureCardProps = {
  children: React.ReactNode;
} & CardProps;

export type CardProps = {
  id: string;
};

const FeatureTitle: React.FC<FeatureCardProps> = ({ id, children }) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);

  console.log(inViewFeature);
  console.log(id);

  return (
    <p
      key={id}
      className={cn(
        'py-16 font-heading text-5xl transition-colors text-gray-300',
        inViewFeature === id ? 'text-black' : 'text-gray-300'
      )}
    >
      {children}
    </p>
  );
};

export default FeatureTitle;
