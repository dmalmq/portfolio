import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark dark:bg-light dark:text-dark lg:px-4 lg:py-2 md:px-3 md:py-1.5 md:text-sm xs:bg-transparent xs:font-bold xs:text-dark xs:dark:bg-transparent xs:dark:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 w-full text-center text-8xl font-bold dark:text-light md:mt-32 md:text-6xl">
        Skills
      </h2>
      <div className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd md:dark:bg-circularDarkSm sm:h-[60vh] sm:bg-circularLightSm xs:h-[50vh]">
        <motion.div className="flex cursor-pointer items-center justify-center rounded-full bg-dark p-8 font-semibold text-light shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:p-2 xs:text-xs">
          Web
        </motion.div>

        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="TypeScript" x="0vw" y="12vw" />
        <Skill name="Ruby" x="-20vw" y="-15vw" />
        <Skill name="Rails" x="15vw" y="-12vw" />
        <Skill name="PostgreSQL" x="32vw" y="-5vw" />
        <Skill name="React" x="0vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-25vw" y="18vw" />
        <Skill name="GO" x="18vw" y="18vw" />
      </div>
    </>
  );
};
export default Skills;
