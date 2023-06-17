import React from "react";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center">
      <h1
        className={`inline-block w-full  font-bold capitalize text-dark ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <span key={word + "-" + index}>{word}&nbsp;</span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
