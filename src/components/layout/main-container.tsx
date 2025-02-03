"use client";

import React from "react";
import { SiteFooter } from "../site-footer";
import { AnimatePresence, motion } from "framer-motion";
import PageAnimation from "../animation/page-animation";

interface Props {
	children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
	return (
		<div className='flex min-h-screen flex-col space-y-6 -mt-20'>
			<div className='grow sm:container sm:flex-1'>
				<main className='flex w-full flex-col'>
          <PageAnimation>{children}</PageAnimation>
				</main>
			</div>
			<SiteFooter />
		</div>
	);
};

export default MainContainer;
