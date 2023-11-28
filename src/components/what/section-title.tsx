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

const SectionTitle: React.FC<FeatureCardProps> = ({ id, children }) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);

  return (
    <p
      key={id}
      className={cn(
        'font-heading text-[1.5vw] lg:text-[1.2vw] uppercase transition-colors text-gray-300',
        inViewFeature === id ? 'text-primary' : 'text-primary/20'
      )}
    >
      {children}
    </p>
  );
};

export default SectionTitle;
