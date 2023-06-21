import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimateText from "../components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/avatar.png";
import Skills from "../components/Skills";

const About = () => {
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
        <Layout className="pt-16">
          <AnimateText
            text="A Civil Engineer Turned Software Developer"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About me
              </h2>
              <p className="font-medium dark:text-light">
                Hi, I&apos;m a civil engineer originally from Sweden who
                recently made a move to Japan. I have always been fascinated by
                technology and have developed a strong interest in coding,
                especially in web development and software engineering. I&apos;m
                excited about the potential of technology to make a positive
                impact on the world and want to be part of that change.
              </p>
              <p className="my-4 font-medium dark:text-light">
                With my background in engineering, I have honed my
                problem-solving skills and attention to detail, which I believe
                are essential qualities for a successful software developer. I
                have been teaching myself various programming languages,
                including JavaScript, React, Ruby, and Rails, and have worked on
                several projects to develop my skills further. I&apos;m always
                looking for opportunities to improve and receive feedback from
                others in the field.
              </p>
              <p className="font-medium dark:text-light">
                I&apos;m highly motivated and passionate about my goal of
                becoming a software developer. I believe that my unique
                background in civil engineering will make me a valuable addition
                to any team. I&apos;m committed to continuing my learning and
                development in this field and excited about the constantly
                evolving challenges and opportunities it presents.{" "}
              </p>
              <p className="mt-4 font-medium dark:text-light">
                Overall, I&apos;m a detail-oriented and ambitious individual
                with a strong drive to succeed. My passion for technology and
                problem-solving makes me a natural fit for software development,
                and I&apos;m excited to see where this journey takes me.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Daniel Malnqvist"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  7+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of work experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  5+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  2+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  months of bootcamp
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
