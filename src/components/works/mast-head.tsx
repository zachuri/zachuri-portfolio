import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";

export type MastHeadProps = {
	title: string;
	description: string;
};

const MastHead: React.FC<MastHeadProps> = ({ title, description }) => {
	return (
		<section className='space-y-5'>
			<Link
				href='/blog'
				className={cn(buttonVariants({ variant: "secondary" }))}>
				<Icons.chevronLeft className='mr-2 h-4 w-4' />
				See all posts
			</Link>

			<h1 className='text-3xl font-medium'>{title}</h1>
			<p
				dangerouslySetInnerHTML={{
					__html: description.replace(/\n/g, "<br/>"),
				}}
			/>
		</section>
	);
};

export default MastHead;
