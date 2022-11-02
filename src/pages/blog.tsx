import React from 'react';
import MainLayout from '../components/Layouts/Main';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import LayoutMotion from '../components/Layouts/Motion';

const Blog = (props: {
  posts: [
    {
      slug: string;
      frontMatter: { [key: string]: string };
    }
  ];
}) => {
  return (
    <MainLayout>
      <LayoutMotion>
        <h1 className="text-bold text-4xl dark:text-[#bd93f9] mb-5">Blog</h1>
        <div className="flex flex-col items-center justify-center">
          {props.posts.map(({ slug, frontMatter: { title, description } }) => (
            <Link key={slug} href={`/blog/${slug}`} passHref>
              <a>
                <h5 className="text-2xl dark:text-[#bd93f9]">{title}</h5>
                <p>{description}</p>
                <hr className="my-5" />
              </a>
            </Link>
          ))}
        </div>
      </LayoutMotion>
    </MainLayout>
  );
};

export default Blog;

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  const posts = files
    .filter(filename => filename.includes('.mdx'))
    .map(filename => {
      // Create slug
      const slug = filename.replace('.mdx', '');

      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        slug,
        frontMatter
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    );

  return {
    props: {
      posts
    }
  };
}
