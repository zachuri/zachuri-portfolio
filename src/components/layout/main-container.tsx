'use client';

import React from 'react';
import { SiteFooter } from '../site-footer';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grow sm:container sm:flex-1">
        <main className="relative flex w-full flex-col overflow-hidden">
          <div className="flex flex-col justify-center items-center space-y-10 max-md:my-10">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ position: 'relative' }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
};

export default MainContainer;
