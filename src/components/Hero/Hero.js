import React from "react";
import TopNav from "../shared/TopNav/TopNav";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-start bg-pink-900 md:h-[1000px] md:pt-10">
      <TopNav></TopNav>
      <div className="flex flex-col items-center justify-center md:pt-[189px] text-white">
        <div className="text-2xl md:text-8xl md:pb-16 font-black">
          <p>The AI Press</p> <p>Release Writting Tool</p>
        </div>
        <p className="w-3/5 md:text-2xl">
          Created by the team at Newsworthy.ai, Newswriter.ai is a GPT-3 OpenAI
          powered generative AI press release writing tool that helps you create
          compelling and eye-catching press releases in minutes. Human editing
          is always recommended — never rely exclusively on AI.
        </p>
      </div>
    </section>
  );
};

export default Hero;
