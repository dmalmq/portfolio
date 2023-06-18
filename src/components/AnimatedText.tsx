import React from "react";
import { motion, Variants } from "framer-motion";

interface QuoteVariants extends Variants {
  initial: {
    opacity: number;
  };
  animate: {
    opacity: number;
    transition: {
      delay: number;
      staggerChildren: number;
    };
  };
}

interface SingleWordVariants extends Variants {
  initial: {
    opacity: number;
    y: number;
  };
  animate: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
    };
  };
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote: QuoteVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord: SingleWordVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full  text-8xl font-bold capitalize text-dark ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
