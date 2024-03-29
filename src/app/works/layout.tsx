import React from "react";
import { SiteFooter } from "@/components/site-footer";
import PageAnimation from "@/components/animation/page-animation";
import { Metadata } from "next";

interface Props {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Works",
	description: "All of my projects and experience!",
};

const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className='flex min-h-screen flex-col space-y-6 mt-[30px] md:mt-[82.5px]'>
			<div className='grow md:container sm:flex-1'>
				<PageAnimation>{children}</PageAnimation>
			</div>
			<SiteFooter />
		</div>
	);
};

export default MainLayout;
