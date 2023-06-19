import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Experience from "../components/Experience";
import Education from "../components/Education";

const background = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About Page</title>
        <meta
          name="description"
          content="software developer ruby rails typescript tokyo"
        />
      </Head>
      <main className="flex w-full items-center justify-center">
        <Layout className="mt-0 pt-16">
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default background;
