import { skillsConfig } from '@/config/skills';
import React from 'react';

type SkillItem = {
  name: string;
  type: number;
};

type SkillCategory = {
  type: number;
  name: string;
};

const Skills = () => {
  const skills: SkillItem[] = skillsConfig.skills;

  // Group skills by type
  const groupedSkills: Record<number, SkillItem[]> = skills.reduce(
    (grouped, skill) => {
      if (!grouped[skill.type]) {
        grouped[skill.type] = [];
      }
      grouped[skill.type].push(skill);
      return grouped;
    },
    {} as Record<number, SkillItem[]>
  ); // Use type assertion here

  const skillCategories: SkillCategory[] = [
    { type: 1, name: 'Frontend' },
    { type: 5, name: 'Backend' },
    { type: 4, name: 'Database' },
    { type: 2, name: 'Tool' },
    { type: 3, name: 'Other' }
  ];

  return (
    <div className="flex flex-col space-y-2 z-20">
      <h1 className="text-2xl md:text-3xl font-bold">Technical Skills</h1>
      {skillCategories.map(category => (
        <div key={category.type} className="container space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold">{category.name}</h2>
          <div className="flex flex-wrap gap-2">
            {groupedSkills[category.type] &&
              groupedSkills[category.type].map((skill, index) => (
                <div
                  key={index}
                  className="border py-1 px-2 border-primary text-xs rounded-sm"
                >
                  {skill.name}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
