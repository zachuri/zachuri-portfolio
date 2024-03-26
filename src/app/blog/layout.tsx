import PageAnimation from "@/components/animation/page-animation";
import { Metadata } from "next";
import React from "react";

interface Props {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Blog",
	description: "My Thoughts and ideas!",
};

const Layout: React.FC<Props> = ({ children }) => {
	return <PageAnimation>{children}</PageAnimation>;
};

export default Layout;
