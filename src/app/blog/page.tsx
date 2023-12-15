import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"My blog to get to see my thoughts, ideas, and my personal interests!",
};

export default async function BlogPage() {
	const posts = allPosts
		.filter(post => post.published)
		.sort((a, b) => {
			return compareDesc(new Date(a.date), new Date(b.date));
		});

	return (
		<div className='container max-w-4xl py-6 lg:py-10'>
			<div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
				<div className='flex-1 space-y-4'>
					<h1 className='inline-block font-medium text-4xl lg:text-5xl'>
						Blog
					</h1>
					<p className='text-xl text-muted-foreground'>
						My thoughts and ideas!
					</p>
				</div>
			</div>
			<hr className='my-8' />
			{posts?.length ? (
				<div className='grid gap-10 md:grid-cols-2'>
					{posts.map((post, index) => (
						<article key={post._id} className='flex flex-col space-y-2'>
							{post.image && (
								<div className='relative h-[15rem]'>
									<Image
										src={post.image}
										alt={post.title}
										layout='fill'
										objectFit='cover'
										className='rounded-md border bg-muted transition-colors'
										priority={index <= 1}
									/>
								</div>
							)}
							<h2 className='text-2xl font-extrabold'>{post.title}</h2>
							{post.description && (
								<p className='text-muted-foreground'>{post.description}</p>
							)}
							{post.date && (
								<p className='text-sm text-muted-foreground'>
									{formatDate(post.date)}
								</p>
							)}
							<Link href={post.slug} className='absolute inset-0'>
								<span className='sr-only'>View Article</span>
							</Link>
						</article>
					))}
				</div>
			) : (
				<p>No posts published.</p>
			)}
		</div>
	);
}
