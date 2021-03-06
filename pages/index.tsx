import type { NextPage } from "next";
import Head from "next/head";
import MainBody from "../components/MainBody";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zkNews</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="#" />
      </Head>
      <div>
        <MainBody />
      </div>
    </>
  );
};

export default Home;
