import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Layouts/Main";
import Who from "../components/Who";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZACHURI | DEV
        </title>
        <meta name="Zachary Punsalng Portfolio" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Who />
    </>
  );
};

export default Home;

