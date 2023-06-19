import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

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
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
