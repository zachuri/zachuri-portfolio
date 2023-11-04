'use client';

import React from 'react';
import { MainNav } from './main-nav';
import { ModeToggle } from './mode-toggle';
import { mainConfig } from '@/config/main';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={mainConfig.mainNav} />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
