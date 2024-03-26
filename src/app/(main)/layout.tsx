import MainContainer from "@/components/layout/main-container";
import { Metadata } from "next";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Zachary Punsalang - Homepage",
	description:
		"Zachary is a freelance and a full-stack developer based in Irvine, California with a passion for building digital products/services for himself \
    and otherse to use. What inspires him to code is being able to build valuable projects that can help individuals with their lives, his curiosity on wanting \
    to know how things are built from the ground up, and how one is able to express their ideas through code. \
    He is a developer is willing to learn new ideas and technologies.",
};

export default async function MainLayout({ children }: MainLayoutProps) {
	return <MainContainer>{children}</MainContainer>;
}
