import {
  WorkflowItem,
  workflowConfig,
  workflowCategories
} from '@/config/workflow';
import React from 'react';

const Workflow = () => {
  const skills: WorkflowItem[] = workflowConfig.workflow;

  // Group skills by type
  const groupedCategories: Record<number, WorkflowItem[]> = skills.reduce(
    (grouped, skill) => {
      if (!grouped[skill.type]) {
        grouped[skill.type] = [];
      }
      grouped[skill.type].push(skill);
      return grouped;
    },
    {} as Record<number, WorkflowItem[]>
  ); // Use type assertion here

  return (
    <div className="flex flex-col space-y-2 z-20">
      <h1 className="text-4xl max-md:text-3xl uppercase font-medium">
        Workflow
      </h1>
      {workflowCategories.map(category => (
        <div key={category.type} className="space-y-2">
          <h2 className="text-lg md:text-xl uppercase">{category.name}</h2>
          <div className="flex flex-wrap gap-2 pb-2">
            {groupedCategories[category.type] &&
              groupedCategories[category.type].map((skill, index) => (
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

export default Workflow;
