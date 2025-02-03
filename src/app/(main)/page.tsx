"use client";

import PageAnimation from "@/components/animation/page-animation";
import MainContact from "@/components/main-contact";
import { FlipWords } from "@/components/ui/flip-words";
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
			<div className='flex flex-col items-center justify-center gap-10'>
				<div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center gap-5'>
					<h2 className='font-heading font-semibold leading-[1.1] text-6xl'>
						Zachary Punsalang
					</h2>
				</div>
				<div className='relative text-lg font-normal w-full text-center pb-5'>
					<FlipWords words={words} />
				</div>
				<MainContact items={contactConfig.contactItems} />
			</div>
		</section>
	);
}
