import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import LayoutMotion from '../components/Layouts/Motion';
import Who from '../components/Who';
import { GetStaticProps } from 'next';
import { getBlurhash } from 'next-blurhash';

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const images = [{ src: '/assets/github-profile-pic.jpeg' }];

  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < images.length; i++) {
    const hash = await getBlurhash(images[i]?.src as string);
    hashes[images[i]?.src as string] = hash;
  }

  const imgHashes = images
    .filter(img => hashes[img.src] !== undefined)
    .map(img => ({
      src: img.src,
      hash: hashes[img.src]!
    }));

  return {
    props: {
      imgHashes
    }
  };
};

const url = 'https://zachuri.com';
const title = 'Zachary Punsalang - Homepage';
const description =
  "Hello, I'm a Web Developer based in Irvine, California! Zachary Punsalang. Developer (Web, Application, Game)";

const Home: NextPage<DemoProps> = ({ imgHashes }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Head>
        <title>Zachary Punsalang - Homepage</title>
        <meta
          name="Zachary Punsalng's Website"
          content="Website containing information about Zachary Punsalang"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
      </Head>

      <LayoutMotion>
        <Who imgHashes={imgHashes} />
      </LayoutMotion>
    </>
  );
};

export default Home;
