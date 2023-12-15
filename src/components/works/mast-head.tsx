import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Icons } from "../ui/icons";

export type MastHeadProps = {
	title: string;
	description: string;
};

const MastHead: React.FC<MastHeadProps> = ({ title, description }) => {
	return (
		<section className='space-y-5'>
			<Button variant={"secondary"} className='text-xs'>
				<Icons.chevronLeft size={15} />
				<Link href={"/works"}>See all works</Link>
			</Button>
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
