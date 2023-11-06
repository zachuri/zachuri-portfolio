import MainContainer from '@/components/layout/main-container';
import Navbar from '@/components/navbar';
import { SiteFooter } from '@/components/site-footer';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MainLayoutProps) {
  return <MainContainer>{children}</MainContainer>;
}
