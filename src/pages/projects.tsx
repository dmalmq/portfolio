import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "Y/components/Icons";

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
}

interface ProjectProps {
  type: string;
  title: string;
  img: string;
  link: string;
  github: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl">
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt="title"
          className="h-auto w-full rounded-3xl"
          width={3100}
          height={1700}
        />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6">
        <span className="text-xl font-medium text-primary">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// const Project: React.FC<ProjectProps> = ({
//   type,
//   title,
//   img,
//   link,
//   github,
// }) => {
//   return (
//     <article className="flex relative flex-col justify-center items-center p-6 w-full rounded-2xl border border-solid border-dark bg-light">
//       <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark" />
//       <Link
//         href={link}
//         target="_blank"
//         className="overflow-hidden w-full rounded-lg cursor-pointer"
//       >
//         <Image
//           src={img}
//           alt="title"
//           className="w-full h-auto rounded-2xl"
//           width={3100}
//           height={1700}
//         />
//       </Link>
//       <div className="flex flex-col justify-between items-start w-full">
//         <span className="text-xl font-medium text-primary">{type}</span>
//         <Link
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-2"
//         >
//           <h2 className="my-2 w-full text-3xl font-bold text-left">{title}</h2>
//         </Link>
//         <div className="flex justify-between mt-2 w-full item-center">
//           <Link
//             href={link}
//             target="_blank"
//             className="ml-4 text-lg font-semibold"
//           >
//             Visit Project
//           </Link>
//           <div className="flex items-center mt-2">
//             <Link href={github} target="_blank" className="w-10">
//               <GithubIcon />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta
          name="description"
          content="software developer projects ruby rails typescript tokyo"
        />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Projects I have worked on" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="AI generated quiz app"
                type="Ruby on Rails"
                summary="A Ruby on Rails app that lets you generate quizzes based on your interests, the app uses the GPT-3 API to generate questions in the background using sidekiq. This was the final project at Le Wagoh, Tokyo and it was made over the course of two weeks."
                img="/images/quizmate.jpg"
                link="https://www.quizmate.tech/"
                github="https://github.com/dmalmq/Quizmate"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="An app to help you booking/renting out a hospital room"
                type="Ruby on Rails"
                summary="A Ruby on Rails app that lets doctors book hospital rooms for their patients and it lets hospitals rent out their hospital rooms. The project was part of our first project week at Le Wagon, Tokyo"
                img="/images/medease.jpg"
                link="https://medease.herokuapp.com/"
                github="https://github.com/dmalmq/Quizmate"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
