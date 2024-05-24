import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlurhashCanvas } from "react-blurhash";
import { MetaProps } from "../../types/layout";
import MainLayout from "./Layouts/Main";
import Links from "./Links";

type DemoProps = {
	imgHashes: { src: string; hash: string }[];
};

const Who: React.FC<DemoProps> = ({ imgHashes }) => {
	const customMeta: MetaProps = {
		title: `Zachary Punsalang - Homepage`,
		description: `Hola I'm ZACHURI a Computer and Information Science graduate from the University of California, Irvine. 
    What inspires me to code is being able to build valuable projects that can help individuals with their
    lives, my curiosity on wanting to know how things are built from the
    ground up, and how one is able to express their ideas through code.
    I am a developer that is willing to learn new ideas and
    technologies. Let's build together! 
    `,
	};
	return (
		<MainLayout customMeta={customMeta}>
			{/* Name */}
			<div className='backdrop-blur-xl bg-white/30 rounded-xl p-5 w-full flex flex-col-reverse md:flex-row items-center justify-center md:gap-10 mb-5'>
				<div className='text-center md:text-left'>
					<h1 className='text-3xl md:text-4xl text-gray-600 dark:text-[#bd93f9]'>
						Zachary Punsalang
					</h1>
					<p className='text-center'>Developer (Web, Application, Game)</p>
				</div>
				<div className='relative'>
					<BlurhashCanvas
						hash={imgHashes.at(0)?.hash as string}
						width={32}
						height={32}
						punch={1}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							width: "100%",
							height: "94%",
						}}
						className='rounded-full'
					/>
					<Image
						src={"/assets/github-profile-pic.jpeg"}
						alt={"avatar"}
						width='100'
						height='100'
						className='rounded-full'
					/>
				</div>
			</div>

			{/* My Portfolio */}
			<div className='mb-5'>
				<div className='flex justify-center'>
					<Link href='/works'>
						<button className='border dark:border rounded-xl px-8 py-2 hover:dark:text-gray-700 hover:text-gray-500 hover:border-gray-500 transition'>
							<div className='flex flex-row items-center justify-center'>
								<p>My Portfolio</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5 h-5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M8.25 4.5l7.5 7.5-7.5 7.5'
									/>
								</svg>
							</div>
						</button>
					</Link>
				</div>
			</div>

			{/* Links */}
			<Links />

			{/* More About me */}
			<div className='flex justify-center mb-5'>
				<Link href='/what'>
					<button
						role='navigate to what page'
						aria-label='press to get to know more about me (link to what page)'
						className='border dark:border rounded-xl px-8 py-2 hover:dark:text-gray-700 hover:text-gray-500 hover:border-gray-500 transition'>
						<div className='flex flex-row items-center justify-center'>
							<p>MORE ABOUT ME</p>
							<div className='flex items-center justify-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5 h-5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M8.25 4.5l7.5 7.5-7.5 7.5'
									/>
								</svg>
							</div>
						</div>
					</button>
				</Link>
			</div>

			{/* Who */}
			<div className='w-full flex flex-items-center rounded-xl mb-5'>
				<div className='backdrop-blur-sm bg-white/30 rounded-xl p-5'>
					<h2 className='font-bold text-2xl text-gray-600 dark:text-[#bd93f9] mb-2'>
						Who
					</h2>
					<p>
						Hola I&apos;m{" "}
						<span className='text-gray-600 dark:text-[#bd93f9]'>ZACHURI</span>.
						I&apos;m a Computer and Information Science graduate from the
						University of California, Irvine. What inspires me to code is being
						able to build valuable projects that can help individuals with their
						lives, my curiosity on wanting to know how things are built from the
						ground up, and how one is able to express their ideas through code.
						I am a developer that is willing to learn new ideas and
						technologies. Let&apos;s build together!
					</p>
				</div>
			</div>
		</MainLayout>
	);
};

export default Who;
