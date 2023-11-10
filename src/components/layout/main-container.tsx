'use client';

import React from 'react';
import { SiteFooter } from '../site-footer';
import { AnimatePresence, motion } from 'framer-motion';
import PageAnimation from '../animation/page-animation';

interface Props {
  children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grow sm:container sm:flex-1">
        <main className="relative flex w-full flex-col">
          <div className="flex flex-col justify-center items-center max-md:my-10">
            <PageAnimation>{children}</PageAnimation>
          </div>
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
};

export default MainContainer;
