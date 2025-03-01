// 'use client';

import { ThreeModel } from "@/components/three/three-model";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Interests from "@/components/what/interests";
import Section from "@/components/what/section-div";
import Skills from "@/components/what/skills";
import Workflow from "@/components/what/workflow";

const Page = () => {
	return (
		<div className='max-sm:-mt-10 flex flex-col lg:mx-[5vw] xl:mx-[10vw] gap-32'>
			<Section id='3d-model' className='flex items-center justify-center'>
				<div className='lg:w-[80%] sm:-mb-52 -mb-32 z-10'>
					<center className='h-[400px] sm:h-[600px] flex items-center justify-center'>
						<ThreeModel />
					</center>
				</div>
				<Section id={"me"} className='gap-5'>
					<h1 className='uppercase leading-normal text-muted-foreground text-2xl sm:text-3xl sm:leading-7'>
						Hi I&apos;m{" "}
						<span className='text-foreground font-medium'>ZACHURI</span>.
					</h1>
					<p className='text-gray-500 dark:text-gray-300'>
						I&apos;m a Computer Science graduate from the University of
						California, Irvine, driven by a passion for building meaningful
						projects that positively impact people&apos;s lives. My curiosity
						about how things are created from the ground up inspires me to
						explore and understand the intricate details of technology. I’m also
						fascinated by how coding allows us to express ideas and bring them
						to life. As a developer, I’m always eager to learn new technologies,
						embrace innovative ideas, and grow through collaboration and
						challenges.
					</p>
				</Section>
			</Section>

			<Section id={"technical-skills"}>
				<Skills />
			</Section>

			<Section id={"workflow"}>
				<Workflow />
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger className='uppercase font-semibold'>
							Why?
						</AccordionTrigger>
						<AccordionContent className='flex flex-col space-y-2'>
							<span>
								For most of my work flow it really depends on a keyboard. When I
								was a student in college, I would use my laptop track pad to
								navigate my code. My first class at UCI, one of my professors
								taught his course while using VIM. It was amazing to see him
								code like a hacker who can type and navigate around his code
								really fast. To me I adored him and saw him as a professional
								coder because of that. He showed us how to use it but again it
								took practice.
							</span>
							<span>
								Throughout my college carrer I was able to use vim really well;
								however, this abiilty to increase work flow only really worked
								in an IDE. I later discovered the power of linux (Arch) and a
								desktop enviroment called &quot;Suckless Dynamic Window Manager
								(DWM)&quot;. These two combined helped me reach another level as
								a developer which for me increased my work flow and love for
								coding.
							</span>
							<span>
								Linux showed me the power of the terminal. I remember dreading
								to use the terminal and typing commands but later enjoyed it so
								much that I&apos;d rather use a CLI instead of GUI. Also, I use
								a linux distribution called Arch. I spent couple months building
								my own linux from sractch and I love it. I&apos; learned so much
								about linux which made me forget about Windows LOL. There are
								many specfic reasons but I&apos;ll go into detail later.
							</span>
							<span>
								Linux showed me the power of the terminal. I remember dreading
								to use the terminal and typing commands but later enjoyed it so
								much that I&apos;d rather use a CLI instead of GUI. Also, I use
								a linux distribution called Arch. I spent couple months building
								my own linux from sractch and I love it. I&apos;ve learned so
								much about linux which made me forget about Windows LOL. There
								are many specfic Laslty, DWM made my linux experince even
								better. The way DWM is able to organize your windows efficently
								and being able to navigate around your desktop with only a
								keyboard again made me feel like a professional developer. Just
								to be clear all of these configs I&apos;ve mentioned are
								preference and it isn&apos;t for everyone. It&apos;s very
								technical and takes a while to get used to. Similar to driving a
								manual transmission because when your starting you will make a
								lot of mistakes but once you get it down the more fun it
								becomes. For me, it just makes me feel proud to be a coder.
							</span>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Section>

			<Section id={"interests"} className='pb-96'>
				<Interests />
			</Section>
		</div>
	);
};

export default Page;
