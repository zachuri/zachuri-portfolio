"use client";

import MainContact from "@/components/main-contact";
import { Button } from "@/components/ui/button";
import { contactConfig } from "@/config/contact";
import Link from "next/link";

export default function Home() {
	return (
		<section className='container space-y-6 lg:space-y-14 min-h-screen flex flex-col items-center justify-center'>
			<div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center'>
				<h2 className='font-heading font-semibold leading-[1.1] text-6xl'>
					Zachary Punsalang
				</h2>
				<p className='max-w-[85%] leading-normal text-muted-foreground sm:leading-7 text-lg md:text-xl'>
					Full Stack Developer
				</p>
			</div>

			<div className='flex flex-row justify-center items-center space-x-4'>
				<Button className='p-6'>
					<Link href='/works'>My Portfolio</Link>
				</Button>
				<Button className='p-6' variant={"secondary"}>
					<Link href='/what'>About Me</Link>
				</Button>
			</div>

			<MainContact items={contactConfig.contactItems} />

			<div className='mx-auto text-center md:max-w-[58rem] space-y-3'>
				<p className='leading-normal text-muted-foreground text-2xl sm:text-3xl sm:leading-7'>
					Hi I&apos;m{" "}
					<span className='text-foreground font-medium'>ZACHURI</span>.
				</p>
				<p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
					I&apos;m a Computer Science graduate from the University of
					California, Irvine, driven by a passion for building meaningful
					projects that positively impact people&apos;s lives. My curiosity
					about how things are created from the ground up inspires me to explore
					and understand the intricate details of technology. I’m also
					fascinated by how coding allows us to express ideas and bring them to
					life. As a developer, I’m always eager to learn new technologies,
					embrace innovative ideas, and grow through collaboration and
					challenges.
				</p>
				<p className='leading-normal text-foreground font-medium text-lg sm:text-xl sm:leading-7'>
					Let&apos;s build together!
				</p>
			</div>
		</section>
	);
}
