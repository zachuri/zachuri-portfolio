'use client';

import { useInView } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef } from 'react';
import { useFeatureStore } from '../store/feature';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: React.ReactNode;
  id: string;
}

const SectionDiv: React.FC<Props> = ({ id, children, className }) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' });

  // const { ref, inView } = useInView({
  //   threshold: 0.9 // Trigger when element is 10% visible
  //   // triggerOnce: true // Only trigger once
  // });

  const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
  const inViewFeature = useFeatureStore(state => state.inViewFeature);

  useEffect(() => {
    if (inView) setInViewFeature(id);

    if (!inView && inViewFeature === id) setInViewFeature(null);
  }, [inView, id, setInViewFeature, inViewFeature]);

  return (
    <section ref={ref} className={cn('flex flex-col', className)}>
      {children}
    </section>
  );
};

export default SectionDiv;

