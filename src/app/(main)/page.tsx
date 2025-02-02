"use client";

import MainContact from "@/components/main-contact";
import { FlipWords } from "@/components/ui/flip-words";
import { Separator } from "@/components/ui/separator";
import { contactConfig } from "@/config/contact";

const words = [
	"Software Engineer",
	"Full-Stack Engineer",
	"Technical Project Manager",
	"Quality Assurance Engineer",
];

export default function Home() {
	return (
		<section className='container space-y-6 lg:space-y-14 min-h-screen flex flex-col items-center justify-center'>
			<div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center gap-5'>
				<h2 className='font-heading font-semibold leading-[1.1] text-6xl'>
					Zachary Punsalang
				</h2>
				<div className='max-w-[85%] leading-normal text-muted-foreground sm:leading-7 text-lg md:text-xl p-5'>
					<FlipWords words={words} />
				</div>
			</div>
			<MainContact items={contactConfig.contactItems} />
		</section>
	);
}
