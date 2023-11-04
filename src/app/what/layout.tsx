import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';
import Navbar from '@/components/navbar';
import { SiteFooter } from '@/components/site-footer';
import { mainConfig } from '@/config/main';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Navbar />
      <main className="container flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <SiteFooter className="border-t" />
    </div>
  );
}
