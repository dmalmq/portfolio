import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimateText from "../components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/avatar.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";

const AnimatedNumbers = ({ value }) => {
  const ref = React.useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(parseFloat(value));
    }
  }, [isInView, value, motionValue]);

  React.useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= parseFloat(value)) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

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
            className="mb-16 !text-6xl"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About me
              </h2>
              <p className="font-medium">
                Hi, I'm a civil engineer originally from Sweden who recently
                made a move to Japan. I have always been fascinated by
                technology and have developed a strong interest in coding,
                especially in web development and software engineering. I'm
                excited about the potential of technology to make a positive
                impact on the world and want to be part of that change.
              </p>
              <p className="my-4 font-medium">
                With my background in engineering, I have honed my
                problem-solving skills and attention to detail, which I believe
                are essential qualities for a successful software developer. I
                have been teaching myself various programming languages,
                including JavaScript, React, Ruby, and Rails, and have worked on
                several projects to develop my skills further. I'm always
                looking for opportunities to improve and receive feedback from
                others in the field.
              </p>
              <p className="font-medium">
                I'm highly motivated and passionate about my goal of becoming a
                software developer. I believe that my unique background in civil
                engineering will make me a valuable addition to any team. I'm
                committed to continuing my learning and development in this
                field and excited about the constantly evolving challenges and
                opportunities it presents.{" "}
              </p>
              <p className="mt-4 font-medium">
                Overall, I'm a detail-oriented and ambitious individual with a
                strong drive to succeed. My passion for technology and
                problem-solving makes me a natural fit for software development,
                and I'm excited to see where this journey takes me.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Daniel Malnqvist"
                className="h-auto w-full rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value="7" />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of work experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value="5" />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value="2" />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
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
