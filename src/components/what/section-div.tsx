"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "../store/feature";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	children: React.ReactNode;
	id: string;
}

const SectionDiv: React.FC<Props> = ({ id, children, className }) => {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

	const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
	const inViewFeature = useFeatureStore(state => state.inViewFeature);

	useEffect(() => {
		if (isInView) setInViewFeature(id);

		if (!isInView && inViewFeature === id) setInViewFeature(null);
	}, [isInView, id, setInViewFeature, inViewFeature]);

	return (
		<section ref={ref} className={cn("flex flex-col", className)}>
			{children}
		</section>
	);
};

export default SectionDiv;
