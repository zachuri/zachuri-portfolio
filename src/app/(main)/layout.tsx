import MainContainer from "@/components/layout/main-container";
import { Metadata } from "next";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Zachary Punsalang - Homepage",
	description:
		"I'm a Computer Science graduate from the University of California, Irvine, driven by a passion for building meaningful projects that positively impact people's lives. My curiosity about how things are created from the ground up inspires me to explore and understand the intricate details of technology. I’m also fascinated by how coding allows us to express ideas and bring them to life. As a developer, I’m always eager to learn new technologies, embrace innovative ideas, and grow through collaboration and challenges.",
};

export default async function MainLayout({ children }: MainLayoutProps) {
	return <MainContainer>{children}</MainContainer>;
}
