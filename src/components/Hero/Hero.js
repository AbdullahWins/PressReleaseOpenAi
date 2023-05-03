import React from "react";
import TopNav from "../shared/TopNav/TopNav";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-heroBg bg-no-repeat bg-top text-center md:py-8">
      <section className="max-w-6xl flex flex-col items-center justify-start">
        <div className="w-10/12">
          <TopNav></TopNav>
          <div className="flex flex-col items-center justify-center py-20 px-4 md:px-0 text-whiteHigh">
            <div className="text-3xl md:text-6xl pb-4 font-black">
              <p>The AI Press</p> <p>Release Writting Tool</p>
            </div>
            <p className="md:w-3/5 text-sm md:text-base md:px-0 md:pb-20">
              Created by the team at Newsworthy.ai, Newswriter.ai is a GPT-3
              OpenAI powered generative AI press release writing tool that helps
              you create compelling and eye-catching press releases in minutes.
              Human editing is always recommended, never rely exclusively on AI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
