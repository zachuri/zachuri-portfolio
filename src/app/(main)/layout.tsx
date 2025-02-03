import PageAnimation from "@/components/animation/page-animation";
import MainContainer from "@/components/layout/main-container";
import { Metadata } from "next";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Zachary Punsalang - Homepage",
	description:
		"Zachary is a Software Engineer / Full-stack developer based in California with a passion for building digital services/stuff he wants.",
};

export default async function MainLayout({ children }: MainLayoutProps) {
	return <MainContainer>{children}</MainContainer>;
}
