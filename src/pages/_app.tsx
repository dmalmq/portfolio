import { type AppType } from "next/dist/shared/lib/utils";
import "Y/styles/globals.css";
import Head from "next/head";
import Navbar from "Y/components/Navbar";
import Footer from "Y/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface MontserratOptions {
  subsets: string[];
  variable: string;
}

class Montserrat {
  constructor(options: MontserratOptions) {
    this.subsets = options.subsets;
    this.variable = options.variable;
  }

  subsets: string[];
  variable: string;
}

const montserrat: Montserrat = new Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${montserrat.variable} min-h-screen w-full bg-light font-mont dark:bg-dark`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
};

export default MyApp;
