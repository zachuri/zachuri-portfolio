"use client";

import { mainConfig } from "@/config/main";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const transition = {
	type: "tween",
	ease: "easeOut",
	duration: 0.15,
};

export function MainNav() {
	const path = usePathname();

	const items = mainConfig.mainNav;

	const defaultActiveIndex = items.findIndex(item => item.href === path);

	const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

	useEffect(() => {
		const parentPath = path.split("/").slice(0, 2).join("/");
		const defaultActiveIndex = items.findIndex(
			item => item.href === parentPath
		);
		setActiveIndex(defaultActiveIndex);
	}, [items, path]);

	const [buttonRefs, setButtonRefs] = useState<Array<HTMLAnchorElement | null>>(
		[]
	);

	useEffect(() => {
		setButtonRefs(prev => prev.slice(0, items.length));
	}, [items.length]);

	const navRef = useRef<HTMLDivElement>(null);
	const navRect = navRef.current?.getBoundingClientRect();

	const selectedRect = buttonRefs[activeIndex]?.getBoundingClientRect();

	const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
	const hoveredRect =
		buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

	return (
		<section
			ref={navRef}
			onPointerLeave={e => setHoveredTabIndex(null)}
			className='flex items-center justify-center relative'>
			{items.map((item, index) => {
				const isActive = hoveredTabIndex === index || activeIndex === index;

				return (
					<Link
						key={index}
						href={item.href}
						className={cn(
							"uppercase font-medium z-20 text-xs relative rounded-lg flex items-center h-8 px-4 bg-transparent cursor-pointer select-none transition-colors",
							{
								"text-background": !isActive, // Default color for non-active tabs
								"text-primary": isActive, // Color for active tabs
							}
						)}
						ref={el => (buttonRefs[index] = el)}
						onPointerEnter={() => {
							setHoveredTabIndex(index);
						}}
						onFocus={() => {
							setHoveredTabIndex(index);
						}}
						onClick={() => {
							setActiveIndex(index);
						}}>
						{item.title}
					</Link>
				);
			})}

			{/* Underline/Highlight Box */}
			<AnimatePresence>
				{hoveredRect && navRect && (
					// <motion.div
					//   className={
					//     'absolute z-10 bottom-0 left-0.5 h-[3px] bg-background/90'
					//   }
					//   initial={false}
					//   animate={{
					//     width: hoveredRect.width * 0.8,
					//     x: `calc(${hoveredRect.left - navRect.left}px + 10%)`,
					//     opacity: 1
					//   }}
					//   transition={transition}
					// />
					<motion.div
						className='absolute p-1 z-10 top-0 left-0 rounded-xl bg-background/50'
						initial={{
							x: hoveredRect.left - navRect.left,
							y: hoveredRect.top - navRect.top,
							width: hoveredRect.width,
							height: hoveredRect.height,
							opacity: 0,
						}}
						animate={{
							x: hoveredRect.left - navRect.left,
							y: hoveredRect.top - navRect.top,
							width: hoveredRect.width,
							height: hoveredRect.height,
							opacity: 1,
						}}
						exit={{
							x: hoveredRect.left - navRect.left,
							y: hoveredRect.top - navRect.top,
							width: hoveredRect.width,
							height: hoveredRect.height,
							opacity: 0,
						}}
						transition={transition}
					/>
				)}
			</AnimatePresence>

			{/* Box */}
			{selectedRect && navRect && (
				<motion.div
					className='absolute p-1 z-10 top-0 left-0 rounded-[11px] bg-background'
					initial={{
						x: selectedRect.left - navRect.left,
						y: selectedRect.top - navRect.top,
						width: selectedRect.width,
						height: selectedRect.height,
						opacity: 0,
					}}
					animate={{
						x: selectedRect.left - navRect.left,
						y: selectedRect.top - navRect.top,
						width: selectedRect.width,
						height: selectedRect.height,
						opacity: 1,
					}}
					exit={{
						x: selectedRect.left - navRect.left,
						y: selectedRect.top - navRect.top,
						width: selectedRect.width,
						height: selectedRect.height,
						opacity: 0,
					}}
					transition={transition}
				/>
			)}
		</section>
	);
}
