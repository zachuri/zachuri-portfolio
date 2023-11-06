"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainConfig } from "@/config/main";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function MainNav() {
	const path = usePathname();

	const items = mainConfig.mainNav;

	const defaultActiveIndex = items.findIndex(item => item.href === path);

	const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

	useEffect(() => {
		const defaultActiveIndex = items.findIndex(item => item.href === path);
		setActiveIndex(defaultActiveIndex);
	}, [path]);

	return (
		<div className='flex items-center gap-x-7 relative'>
			{items.map((item, index) => (
				<Link key={index} href={item.href} className='text-sm font-medium'>
					{item.title}
				</Link>
			))}
			<AnimatePresence>
				<motion.div
					className='bg-background absolute text-sm font-medium text-primary rounded-[8px] p-2'
					initial={{ opacity: 0, x: items[defaultActiveIndex]?.position ?? 0 }}
					animate={{
						opacity: 1,
						x: items[activeIndex]?.position ?? 0,
						transition: { duration: 0.3 },
					}}
					exit={{ opacity: 0, x: items[activeIndex]?.position ?? 0 }}>
					{items[activeIndex]?.title}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
