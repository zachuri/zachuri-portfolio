import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import MainLayout from '../../components/Layouts/Main';
import LayoutMotion from '../../components/Layouts/Motion';

const BlogPost = (props: {
  frontMatter: { [key: string]: string };
  slug: string;
  content: string;
}) => (
  <MainLayout>
    <LayoutMotion>
      <div className="flex flex-col items-center justify-center">
        <div className="prose prose-sm sm:prose lg:prose-lg mx-auto prose-slate">
          <img
            src={props.frontMatter.thumbnail}
            alt={props.frontMatter.title}
          />
          <div dangerouslySetInnerHTML={{ __html: marked(props.content) }} />
        </div>
      </div>
    </LayoutMotion>
  </MainLayout>
);

export default BlogPost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files
    .filter(filename => filename.includes('.mdx'))
    .map(filename => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }: never) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content
    }
  };
}
