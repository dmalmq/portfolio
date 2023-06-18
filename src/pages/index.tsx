import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile.png";
import AnimatedText from "../components/AnimatedText";
import { LinkArrow } from "../components/Icons";

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
            <div className="flex w-1/2 flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-left !text-6xl"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="mt-2 flex items-center self-start">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"ml-1 w-6"} />
                </Link>
                <Link
                  href="mailto:daniel@malmqvist.dev"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
