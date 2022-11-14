import Image from "next/image";
import React from "react";
import MainLayout from "../../components/Layouts/Main";
import LayoutMotion from "../../components/Layouts/Motion";
import { Badge } from "../../components/Project";

const Befit = () => {
	return (
		<MainLayout>
			<LayoutMotion>
				<h1 className='text-2xl font-bold dark:text-[#bd93f9] mb-5'>
					{" "}
					<span className='text-base font-normal text-black dark:text-white'>
						Works &gt;
					</span>{" "}
					BeFit
				</h1>
				<p className='ml-5 mb-5'>
					Designed and implemented with my brother{" "}
					<span>
						<a
							href='https://github.com/artifactz1'
							className='hover:underline text-purple-900 dark:text-[#bd93f9]'>
							(Artifactz1)
						</a>
					</span>{" "}
					to develop a Web and Mobile application that allows users to be able
					to track their fitness journey. It started off with helping me and my
					brother improve our fitness progress and later wanted to help
					beginners and advances individuals with their fitness progress too.
					The main aspects we wanted to track are diet, weight and workouts. We
					wanted to build this app with what that other fitness trackers are
					lacking and hope that our knowledge will help others who are getting
					into fitness succeed.
				</p>

				<ul className='mb-5'>
					<li>
						<Badge>Source</Badge>
						<a
							href='https://github.com/zachuri/BeFit'
							className='hover:underline text-purple-900 dark:text-[#bd93f9]'>
							github.com/zachuri/BeFit
						</a>
					</li>
					<li>
						<Badge>Website</Badge>
						<a
							href='https://be-fit-zachuri.vercel.app/'
							className='hover:underline text-purple-900 dark:text-[#bd93f9] '>
							be-fit-zachuri.vercel.app/
						</a>
					</li>
					<li>
						<Badge>Platform</Badge>
						Desktop, Mobile
					</li>
					<li>
						<Badge>Stack</Badge>
						T3-stack
					</li>
					<li>
						<Badge>Front-end</Badge>
						Next.js, React.js, Tailwind CSS
					</li>
					<li>
						<Badge>Back-end</Badge>
						tRPC, Prisma, NextAuth.js TypeScript
					</li>
				</ul>

				<div className='flex flex-col gap-8'>
					<div className='rounded-xl'>
						<Image
							src={`/assets/projects/be-fit.png`}
							alt={"be fit"}
							width='1200'
							height='700'
							className='rounded-xl mb-5'
							placeholder='blur'
							blurDataURL={`/assets/projects/be-fit.png`}
						/>
					</div>
					<div className='rounded-xl'>
						<Image
							src={`/assets/projects/be-fit-1.png`}
							alt={"be fit weight page"}
							width='1200'
							height='700'
							className='rounded-xl mb-5'
							placeholder='blur'
							blurDataURL={`/assets/projects/be-fit-1.png`}
						/>
					</div>
					<div className='rounded-xl'>
						<Image
							src={`/assets/projects/be-fit-2.png`}
							alt={"be fit weight page"}
							width='1200'
							height='700'
							className='rounded-xl mb-5'
							placeholder='blur'
							blurDataURL={`/assets/projects/be-fit-2.png`}
						/>
					</div>
				</div>
			</LayoutMotion>
		</MainLayout>
	);
};

export default Befit;
