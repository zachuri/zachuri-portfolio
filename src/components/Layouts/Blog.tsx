import React from 'react';
import { MetaProps } from '../../../types/layout';
import Head from './Head';

interface mainProps {
  children: React.ReactNode;
  customMeta?: MetaProps;
}

const BlogLayout: React.FC<mainProps> = ({ children, customMeta }) => {
  return (
    <>
      {customMeta !== null && <Head customMeta={customMeta} />}
      <main>
        <div className="pt-16 md:pt-20 max-w-2xl px-10 py-4 mx-auto">
          {children}
        </div>
      </main>
    </>
  );
};

export default BlogLayout;
