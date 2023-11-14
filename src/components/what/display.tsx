'use client';

import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useFeatureStore } from '../store/feature';

interface Props {
  children: React.ReactNode;
  id: string;
}

const FeatureTitle: React.FC<Props> = ({ id, children }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

  const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
  const inViewFeature = useFeatureStore(state => state.inViewFeature);

  useEffect(() => {
    // setinviewelement
    if (isInView) setInViewFeature(id);

    // when exiting out the div
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature]);

  return (
    <p
      ref={ref}
      className={cn(
        'py-16 font-heading text-5xl transition-colors text-gray-300',
        isInView ? 'text-black' : 'text-gray-300'
      )}
    >
      {children}
    </p>
  );
};

export default FeatureTitle;
