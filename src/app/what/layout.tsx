import PageAnimation from "@/components/animation/page-animation";
import MainContainer from "@/components/layout/main-container";
import { SiteFooter } from "@/components/site-footer";

interface MainLayoutProps {
	children: React.ReactNode;
}

const features = [
	{
		title: "Technical Skills",
		id: "Technical Skills",
	},
	{
		title: "Wolk Flow",
		id: "work-flow",
	},
	{
		title: "Personal Interests",
		id: "personal-interests",
	},
];

export default async function Layout({ children }: MainLayoutProps) {
	return (
		<div className='flex w-full items-start'>
			<div className='w-1/5 mx-auto bg-gray-500 flex h-screen sticky top-[64px]'>
				<div className='relative w-full bg-white p-4'>
					<ul>
						{features.map(feature => {
							return <li key={feature.id}>{feature.title}</li>;
						})}
					</ul>
				</div>
			</div>
			<div className='w-4/5 bg-blue-500'>
				<div className='w-3/4 bg-white p-4'>
					<PageAnimation>{children}</PageAnimation>
				</div>
			</div>
		</div>
	);
}
