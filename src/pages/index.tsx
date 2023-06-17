import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile.png";
import AnimatedText from "../components/AnimatedText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Malmqvists Portfolio</title>
      </Head>
      <main className="flex min-h-screen w-full items-center text-dark">
        <Layout className="pt-0">
          <div className="flex w-full items-center justify-between">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Daniel Malmqvist"
                className="h-auto w-full"
              />
            </div>
            <div className="w-1/2">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="text-6xl"
              />
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
