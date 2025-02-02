import { SkillItem, skillCategories, skillsConfig } from "@/config/skills";
import React from "react";

const Skills = () => {
	const skills: SkillItem[] = skillsConfig.skills;

	// Group groupedCategories by type
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

	return (
		<div className='flex flex-col space-y-2 z-20'>

			<h1 className='text-3xl max-md:text-2xl uppercase font-medium'>
				Technical Skills
			</h1>
			{skillCategories.map(category => (
				<div key={category.type} className='space-y-2'>
					<h2 className='text-lg md:text-xl uppercase'>{category.name}</h2>
					<div className='flex flex-wrap gap-2 pb-2'>
						{groupedSkills[category.type] &&
							groupedSkills[category.type].map((skill, index) => (
								<div
									key={index}
									className='border py-1 px-2 border-primary text-xs rounded-sm'>
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
