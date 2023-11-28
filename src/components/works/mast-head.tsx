import React from 'react';

export type MastHeadProps = {
  title: string;
  description: string;
};

const MastHead: React.FC<MastHeadProps> = ({ title, description }) => {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default MastHead;
