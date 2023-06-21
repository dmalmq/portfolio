import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium dark:border-light dark:text-light">
      <Layout className="flex items-center justify-between py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/background">Background</Link>
        <Link href="/projects">Projects</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
