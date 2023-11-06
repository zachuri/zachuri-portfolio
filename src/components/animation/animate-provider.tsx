'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AnimateProvider: React.FC<Props> = ({ children }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
};

export default AnimateProvider;
