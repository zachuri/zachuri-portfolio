import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '../../lib/api';
import { PostType } from '../../types/post';
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <MainLayout>
      <LayoutMotion>
        {/* <Layout> */}
        <h1 className="text-4xl">Blog</h1>
        {posts.map(post => (
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date as string), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <p>
              <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))}
        {/* </Layout> */}
      </LayoutMotion>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts }
  };
};

export default Index;
