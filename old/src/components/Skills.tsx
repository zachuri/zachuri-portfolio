import React from 'react';
import Skill from './Skill';

const names = [
  { id: 'reactjs', skillName: 'React.js' },
  { id: 'nextjs', skillName: 'Next.js' },
  { id: 'reactnative', skillName: 'React Native' },
  { id: 'tailwindd', skillName: 'Tailwind CSS' },
  { id: 'java', skillName: 'Java' },
  { id: 'c/c++', skillName: 'C/C++' },
  { id: 'typescript', skillName: 'Typecript' },
  { id: 'javascript', skillName: 'JavaScript' },
  { id: 'python', skillName: 'Python' },
  { id: 'springboot', skillName: 'Spring Boot' },
  { id: 'supabase', skillName: 'Supabase' },
  { id: 'Firebase', skillName: 'Firebase' },
  { id: 'mysql', skillName: 'MySQL' },
  { id: 'postgres', skillName: 'Postgres' },
  { id: 'trpc', skillName: 'tRPC' },
  { id: 'htmlcss', skillName: 'HTML/CSS' },
  { id: 'vim', skillName: 'Vim' },
  { id: 'git', skillName: 'Git' }
];

const Skills = () => {
  return (
    <>
      {names.map(name => (
        <Skill key={name.id} name={name.skillName} />
      ))}
    </>
  );
};

export default Skills;
