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
	"Keeb Enthusiast",
	"I use Arch btw",
];

export default function Home() {
	return (
		<section className='container gap-6 lg:gap-14 min-h-screen flex flex-col items-center justify-center'>
			<div className='relative flex flex-col items-center justify-center gap-5'>
				<div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center gap-5'>
					<h2 className='font-heading font-semibold leading-[1.1] text-6xl'>
						Zachary Punsalang
					</h2>
				</div>
				<div className='text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400'>
					<FlipWords words={words} /> <br />
				</div>
				<MainContact items={contactConfig.contactItems} />
			</div>
		</section>
	);
}
