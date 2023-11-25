import React from 'react';

type Props = {
  id: string;
  title: string;
  description: string;
};

const MastHead: React.FC<Props> = ({ id, title, description }) => {
  return <div>MastHead</div>;
};

export default MastHead;
