import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}

      <span
        className={`transistion-[width] ease absolute -bottom-1 left-0 inline-block h-[2px]  bg-dark duration-300 group-hover:w-full ${router.asPath === href ? "w-full" : "w-0"
          }
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light">
      <button
        className="flex flex-col items-center justify-center"
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark dark:bg-light ${isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`display my-0.5 block h-0.5 w-6 rounded-sm bg-dark dark:bg-light ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark dark:bg-light ${isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
            }`}
        ></span>
      </button>

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/background" title="Background" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>

      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href="https://twitter.com/danielmalmqvist"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/dmalmq"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/daniel-malmqvist-profile/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setMode(mode === "dark" ? "light" : "dark");
          }}
          className={`ml-3 flex h-7 w-7 items-center justify-center rounded-full p-1
            ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
