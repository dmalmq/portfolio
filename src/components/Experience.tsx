import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface DetailProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto mb-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize dark:text-light">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="w-full font-medium dark:text-light">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-12">
      <h2 className="mb-32 w-full text-center text-8xl font-bold dark:text-light">
        Experience
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%]">
        <motion.div
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <Details
            position="Model Manager"
            companyLink="https://www.tengbom.se/"
            company="Tengbom"
            time="2022-Present"
            address="Stockholm, Sweden"
            work="As a Model Manager in architectural firms working on Revit projects, I am
responsible for overseeing and coordinating the digital building models. I
ensure that the models are accurate, up-to-date, and comply with project
standards and specifications. Additionally, I collaborate with project teams to
identify and resolve any design clashes or conflicts within the models. I also
manage the model’s organization, including file naming conventions, model
versions, and model sharing protocols. Overall, my role as a Model Manager
aims to optimize project efficiency, facilitate effective collaboration, and
deliver high-quality architectural designs."
          />
          <Details
            position="Civil Engineer"
            companyLink="https://www.tengbom.se/"
            company="Tengbom"
            time="2022-Present"
            address="Stockholm, Sweden"
            work="As a dedicated Civil Engineer specializing in hospital and school projects, I
have utilized Revit extensively to create detailed 3D models, design blueprints,
and collaborate with engineers from various disciplines, including
Electrical, HVAC, and Construction. Through interdisciplinary coordination
meetings, I have ensured seamless integration of different systems within the overall building design."
          />
          <Details
            position="Intern"
            companyLink="https://niras.se"
            company="Niras (formerly Aperto)"
            time="2015-2015"
            address="Stockholm, Sweden"
            work="I worked at the office as an intern while studying, it was part of my course at Stockholms Insitute of Technology to intern at a company. I worked on a school project called 'Kämpasten' where I did daylight simulations to make sure that the teachers and students would get enough daylight. This project was also part of the thesis I wrote as well."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
