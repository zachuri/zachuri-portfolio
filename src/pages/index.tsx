import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import LayoutMotion from '../components/Layouts/Motion';
import Who from '../components/Who';

const url = 'https://zachuri.com';
const title = 'Zachary Punsalang - Homepage';
const description =
  "Hello, I'm a Web Developer based in Irvine, California! Zachary Punsalang. Developer (Web, Application, Game)";

const Home: NextPage = () => {
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
        <Who />
      </LayoutMotion>
    </>
  );
};

export default Home;
