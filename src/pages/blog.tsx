import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '../../lib/api';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import MainLayout from '../components/Layouts/Main';
import LayoutMotion from '../components/Layouts/Motion';

type IndexProps = {
  posts: PostType[];
};

const url = 'https://zachuri.com/blog';
const title = 'Zachary Punsalang - Blog';
const description = 'Blog posts created by Zachary Punsalang | ZACHURI :)';

export const Index = ({ posts }: IndexProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `Zachary Punsalang - Blog`,
    description: 'Blog posts created by Zachary Punsalang | ZACHURI :)'
  };
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <MainLayout customMeta={customMeta}>
        <LayoutMotion>
          {/* <Layout> */}
          <h1 className="text-4xl">Blog</h1>
          {posts.map(post => (
            <article key={post.slug} className="my-5">
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(post.date as string), 'MMMM dd, yyyy')}
              </p>
              <h1 className="mb-2 text-xl">
                <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                  <a className="text-gray-900 dark:text-[#bd93f9] dark:hover:text-purple-500">
                    {post.title}
                  </a>
                </Link>
              </h1>
              <p className="mb-3">{post.description}</p>
              <p className="text-black dark:text-purple-200">
                <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                  <button className="text-sm rounded px-2 border border-[#333333] text-[#333333] dark:border-[#AAAAAA] dark:text-[#AAAAAA] hover:dark:border-gray-200 transition hover:border-gray-600 hover:dark:text-gray-200 hover:text-gray-600">
                    <a>Read More...</a>
                  </button>
                </Link>
              </p>
            </article>
          ))}
          {/* </Layout> */}
        </LayoutMotion>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts }
  };
};

export default Index;
