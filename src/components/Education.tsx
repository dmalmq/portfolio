import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface DetailProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details: React.FC<DetailProps> = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto mb-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize dark:text-light sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium dark:text-light md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold dark:text-light md:mb-16 md:text-6xl xs:text-4xl">
        Education
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          <Details
            type="Web Development"
            time="2023, 2 months"
            place="Le Wagon, Tokyo"
            info="I studied web development at Le Wagon Tokyo. I am learned Ruby on Rails, JavaScript, HTML, CSS, and React. I am also learned how to use Git and GitHub. I am leaned how to use the command line and how to deploy my projects to Heroku."
          />
          <Details
            type="Civil Engineering"
            time="2013-2015"
            place="Stockholms Institute of Technology"
            info="I went to a vocational school for two years to study civil engineering. I learned how to draw in AutoCAD and Revit. The course was specialized in sustainability and I wrote my thesis about how to calculate daylight using modern 3d modelling software like Revit."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
