import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Props {
	children: React.ReactNode;
	name: string;
	desc: string;
	link: string;
	label: string;
}

const Link: React.FC<Props> = ({ children, name, desc, link, label }) => {
	return (
		<>
			<a href={link} aria-label={label}>
				<div className='mx-3 mb-4 items-center bg-[#FEF6F8] hover:bg-[#ded6d9] dark:bg-[#d0caca] dark:hover:bg-[#7c7878] transition text-[#77778b] dark:text-[#292929] p-3 rounded-xl grid grid-cols-5 hover '>
					<div className='ml-5 items-center'>{children}</div>
					<div className='col-span-3 flex flex-col items-center justify-center'>
						<h2 className='text-lg'>{name}</h2>
						<p className='text-xs'>{desc}</p>
					</div>
				</div>
			</a>
		</>
	);
};

const Links: React.FC = () => {
	return (
		<>
			{/* Links */}
			<div className='flex flex-col w-full mb-5'>
				<Link
					name='Github'
					desc='My spaghetti codes'
					link='https://github.com/zachuri'
					label='link to github'>
					<FaGithub size={30} className='fill-[#77778b] dark:fill-[#292929]' />
				</Link>
				<Link
					name='Linkden'
					desc='I might connect'
					link='https://www.linkedin.com/in/zachary-punsalang/'
					label='link to linkden'>
					<FaLinkedin
						size={30}
						className='fill-[#77778b] dark:fill-[#292929]'
					/>
				</Link>
				<Link
					name='Twitter'
					desc='Looking at content'
					link='https://twitter.com/zachurii'
					label='link to twitter'>
					<FaTwitter size={30} className='fill-[#77778b] dark:fill-[#292929]' />
				</Link>
				<Link
					name='Mail'
					desc='Ready to Responsd'
					link='mailto:punsalang.zachary.work@gmail.com?body='
					label='link to mail'>
					<AiOutlineMail
						size={30}
						className='fill-[#77778b] dark:fill-[#292929]'
					/>
				</Link>
			</div>
		</>
	);
};

export default Links;
