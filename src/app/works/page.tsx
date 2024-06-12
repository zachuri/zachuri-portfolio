import { worksConfig } from "@/config/works";
import { getImagesExperience, getImagesWorks } from "@/utils/get-images";
import Image from "next/legacy/image";
import Link from "next/link";

export default async function Page() {
	const experience = await getImagesExperience(worksConfig.experience);
	const works = await getImagesWorks(worksConfig.works);

	return (
		<div className={"grid py-10 w-full"}>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-10 px-10 md:grid-cols-3 xl:grid-cols-4'>
				<h1 className='text-4xl font-semibold col-span-full'>Experience</h1>
				{experience.map(({ base64, img }) => (
					<Link key={img.id} href={img.website}>
						<div key={img.id} className='space-y-2 mb-10'>
							<div className='relative aspect-square h-auto border-[1px] rounded-sm '>
								<Image
									src={img.src}
									alt={img.src}
									sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
									placeholder='blur'
									blurDataURL={base64}
									layout='fill'
									objectFit='cover'
									className='rounded-sm'
								/>
							</div>
							<h2 className='text-md lg:text-2xl font-medium'>{img.title}</h2>
							<p className='text-xs lg:text-sm'>{img.desc}</p>
						</div>
					</Link>
				))}
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-10 px-10 md:grid-cols-3 xl:grid-cols-4'>
				<h1 className='text-4xl font-semibold col-span-full'>Projects</h1>
				{works.map(({ base64, img }) => (
					<Link key={img.id} href={`works/${img.id}`}>
						<div key={img.id} className='space-y-2 mb-10'>
							<div className='relative aspect-square h-auto border-[1px] rounded-sm '>
								<Image
									src={img.src}
									alt={img.src}
									sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
									placeholder='blur'
									blurDataURL={base64}
									layout='fill'
									objectFit='cover'
									className='rounded-sm'
								/>
							</div>
							<h2 className='text-md lg:text-2xl font-medium'>{img.title}</h2>
							<p className='text-xs lg:text-sm'>{img.desc}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
