import React from 'react';
import { SiteFooter } from '@/components/site-footer';
import PageAnimation from '@/components/animation/page-animation';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grow md:container sm:flex-1">
        <PageAnimation>{children}</PageAnimation>
      </div>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
