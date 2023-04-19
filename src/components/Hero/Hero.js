import React from "react";
import TopNav from "../shared/TopNav/TopNav";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-start bg-heroBg bg-no-repeat bg-top text-center md:h-[1000px] md:pt-10">
      <TopNav></TopNav>
      <div className="flex flex-col items-center justify-center py-8 px-4 md:px-0 md:py-0 md:pt-[189px] text-whiteHigh">
        <div className="text-4xl md:text-8xl pb-8 md:pb-16 font-black">
          <p>The AI Press</p> <p>Release Writting Tool</p>
        </div>
        <p className="md:w-3/5 text-base md:text-2xl">
          Created by the team at Newsworthy.ai, Newswriter.ai is a GPT-3 OpenAI
          powered generative AI press release writing tool that helps you create
          compelling and eye-catching press releases in minutes. Human editing
          is always recommended, never rely exclusively on AI.
        </p>
      </div>
    </section>
  );
};

export default Hero;
