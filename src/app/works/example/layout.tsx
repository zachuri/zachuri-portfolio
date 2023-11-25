import MainContainer from '@/components/layout/main-container';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Layout;
