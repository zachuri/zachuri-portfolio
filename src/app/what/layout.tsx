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
			<div className='max-md:hidden w-1/5 mx-auto flex h-screen sticky top-[64px]'>
				<div className='relative mx-auto text-[2vw] w-full p-4'>
					<ul>
						{features.map(feature => {
							return <li key={feature.id}>{feature.title}</li>;
						})}
					</ul>
				</div>
			</div>
			<div className='w-4/5'>
				<div className='w-3/4 p-4'>
					<PageAnimation>{children}</PageAnimation>
				</div>
			</div>
		</div>
	);
}
