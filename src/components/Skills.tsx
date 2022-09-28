import React from 'react'
import Skill from './Skill'

const names = [
  { id: "reactjs", skillName: 'React.js' },
  { id: "nextjs", skillName: 'Next.js' },
  { id: "reactnative", skillName: 'React Native' },
  { id: "tailwindd", skillName: 'Tailwind.css' },
  { id: "java", skillName: 'Java' },
  { id: "c/c++", skillName: 'C/C++' },
  { id: "javascript", skillName: 'JavaScript' },
  { id: "python", skillName: 'Python' },
  { id: "springboot", skillName: 'SpringBoot' },
  { id: "mysql", skillName: 'MySQL' },
  { id: "trpc", skillName: 'TRPC' },
  { id: "git", skillName: 'Git' },
]

const Skills = () => {
  return (
    <>
      {names.map((name) => (
        <Skill key={name.id} name={name.skillName} />
      ))}
    </>
  )
}

export default Skills