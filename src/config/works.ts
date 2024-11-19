export type ExperienceInfo = {
	id: string;
	title: string;
	desc: string;
	src: string;
	website: string;
};

export type WorksInfo = {
	id: string;
	title: string;
	desc: string;
	src: string;
};

export type WorkConfig = {
	experience: ExperienceInfo[];
	works: WorksInfo[];
};

export const worksConfig: WorkConfig = {
	experience: [
		{
			id: "lightstrike",
			title: "STAR/CHILD",
			desc: "Technical Project Manager\nQulity Assurance Engineer\nSoftware Engineer",
			src: "/assets/experience/starchild-01.jpeg",
			website: "https://www.starchild.app/",
		},
		{
			id: "tramona",
			title: "Tramona",
			desc: "Full Stack Developer",
			src: "/assets/experience/tramona-01.png",
			website: "https://www.tramona.com/",
		},
		{
			id: "nutripair",
			title: "Nutripair",
			desc: "Frontend Developer - Internship\nFull Stack Developer",
			src: "/assets/experience/nutripair-02.png",
			website: "https://www.nutripair.co/",
		},
	],
	works: [
		{
			id: "befit-v2",
			title: "BeFit-v2",
			desc: "Enhanced Fitness Tracker: Building with Next.js and Supabase (Version 2)",
			src: "/assets/projects/befit-v2-0.png",
		},
		{
			id: "next13-supabase-stripe",
			title: "Next 13 + Supabase + Stripe: SaaS Starter",
			desc: "A boilerplate template to create a foundation for building SaaS applications",
			src: "/assets/projects/next13-supabase-stripe-0.png",
		},
		{
			id: "arceldesign",
			title: "ArcelDesign, Inc.",
			desc: "Redesigned and implemented key elements to clients website",
			src: "/assets/projects/arceldesign-0.png",
		},
		{
			id: "be-fit",
			title: "BeFit",
			desc: "Full Stack fitness tracker that allows users to keep track of their diet, weight, and workouts",
			src: "/assets/projects/be-fit-0.png",
		},
		{
			id: "twitch-clone",
			title: "Twitch Clone",
			desc: "Clone of Twitch using next.js and tailwind.css to help my understanding of design",
			src: "/assets/projects/twitch-clone-0.png",
		},
		{
			id: "ecommerce-movie",
			title: "Ecommerce Movie Shop",
			desc: "Full Stack ecommerce movie shop where users are able to buy movies",
			src: "/assets/projects/ecommerce-movie-0.png",
		},
		{
			id: "diversity-hotline",
			title: "Diversity Hotline",
			desc: "Hotline for individuals to discuss topics regarding diversity, equity, inclusion, and discrimination",
			src: "/assets/projects/diversity-hotline-0.png",
		},
	],
};
