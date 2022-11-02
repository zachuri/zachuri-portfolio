import React from 'react';
import { MetaProps } from '../../../types/layout';
import Head from './Head';

interface mainProps {
  children: React.ReactNode;
  customMeta?: MetaProps;
}

const MainLayout: React.FC<mainProps> = ({ children, customMeta }) => {
  return (
    <>
      {customMeta !== null && <Head customMeta={customMeta} />}
      <main>
        <div className="flex flex-col justify-center items-center px-10 pt-10 md:pt-20 ">
          <div className="max-w-xl flex-1 flex flex-col justify-center items-center pt-6">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
