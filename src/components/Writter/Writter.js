import React from "react";

const Writter = () => {
  return (
    <section className="flex items-center justify-center md:mt-[-160px]">
      <div className="pt-16 border-2 border-titleGradientEnd w-10/12 bg-whiteHigh rounded-3xl">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-6xl font-bold pb-2">
          AI Press Release Writing Tool
        </p>
        <p className="text-2xl">
          Please do not write a chatGPT prompt here. Our system will do that for
          you.
        </p>
        <div className="pb-24"></div>
      </div>
    </section>
  );
};

export default Writter;
