import { SkillConfig } from "@/types";

export type SkillItem = {
	name: string;
	type: number;
};

export type SkillCategory = {
	type: number;
	name: string;
};

export const skillCategories: SkillCategory[] = [
	{ type: 1, name: "Frontend" },
	{ type: 5, name: "Backend" },
	{ type: 4, name: "Database" },
	{ type: 2, name: "Tools" },
	{ type: 3, name: "Other" },
];

export const skillsConfig: SkillConfig = {
	skills: [
		// Languages
		{ name: "TypeScript", type: 1 }, // Frontend
		{ name: "JavaScript", type: 1 }, // Frontend
		{ name: "Python", type: 5 }, // Backend
		{ name: "C/C++", type: 5 }, // Backend
		{ name: "Java", type: 5 }, // Backend

		// Frontend
		{ name: "React.js", type: 1 }, // Frontend
		{ name: "Next.js", type: 1 }, // Frontend
		{ name: "React Native/Expo", type: 1 }, // Frontend
		{ name: "Tailwind CSS", type: 1 }, // Frontend
		{ name: "Tamagui UI", type: 1 }, // Frontend
		{ name: "Zustand", type: 1 }, // Frontend
		{ name: "Jotai", type: 1 }, // Frontend
		{ name: "Redux", type: 1 }, // Frontend
		{ name: "HTML", type: 1 }, // Frontend
		{ name: "CSS", type: 1 }, // Frontend
		{ name: "Framer Motion", type: 1 }, // Frontend
		{ name: "Three.js", type: 1 }, // Frontend

		// Backend
		{ name: "Express.js", type: 5 }, // Backend
		{ name: "Hono.js ", type: 5 }, // Backend
		{ name: "tRPC", type: 5 }, // Backend
		{ name: "Deno.js", type: 5 }, // Backend
		{ name: "Nest.js", type: 5 }, // Backend
		{ name: "Spring Boot", type: 5 }, // Backend
		{ name: "Node.js", type: 5 }, // Backend
		{ name: "RESTful API", type: 5 }, // Backend
		{ name: "AWS Web Services", type: 5 }, // Backend
		{ name: "GraphQL", type: 5 }, // Backend

		// Databases
		{ name: "Postgres", type: 4 }, // Database
		{ name: "Supabase", type: 4 }, // Database
		{ name: "Prisma", type: 4 }, // Database
		{ name: "Drizzle", type: 4 }, // Database
		{ name: "MySQL", type: 4 }, // Database
		{ name: "MongoDB", type: 4 }, // Database
		{ name: "Firebase", type: 4 }, // Database
		{ name: "JDBC", type: 4 }, // Database
		{ name: "Vercel", type: 4 }, // Database
		{ name: "AWS", type: 4 }, // Database

		// Tools
		{ name: "Git", type: 2 }, // Tool
		{ name: "Version Control", type: 2 }, // Tool
		{ name: "Unix/Linux", type: 2 }, // Tool
		{ name: "Docker", type: 2 }, // Tool
		{ name: "Figma", type: 2 }, // Tool
		{ name: "Bash", type: 2 }, // Tool
		{ name: "Mocha Test", type: 2 }, // Tool
		{ name: "Jest", type: 2 }, // Tool

		// Other
		{ name: "Monorepo", type: 3 }, // Other
		{ name: "Agile", type: 3 }, // Other
		{ name: "Machine Learning", type: 3 }, // Other
		{ name: "Data Structures", type: 3 }, // Other
		{ name: "Operating Systems", type: 3 }, // Other
		{ name: "Ecommerce (Shopify, Stripe)", type: 3 }, // Other
		{ name: "Stripe", type: 3 }, // Other
		{ name: "Twilio", type: 3 }, // Other
		{ name: "SEO", type: 3 }, // Other
	],
};
