import React from "react";
import Hero from "../../components/Hero/Hero";

const About = () => {
  return (
    <div>
      <Hero></Hero>
      <section className="flex items-center justify-center">
        <div className="max-w-10/12 p-4 md:p-20 rounded-xl border-2 border-whiteMid m-4 md:my-28 w-full">
          <div className="text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-aboutTextStart to-aboutTextEnd text-4xl md:text-7xl font-bold pb-2">
              About us
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 py-10 px-4">
            <div className="bg-whiteHigh rounded-2xl p-6 min-h-80">
              <p className="text-2xl text-aboutHeaderColor">Who</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-b  from-getStartedGradientStart to-getStartedGradientEnd text-5xl md:text-8xl font-bold">
                We Are
              </p>
              <p className="text-base md:text-2xl text-aboutDetailsColor pt-12">
                Press Writer AI, a Chat GPT API-powered AI News Generator app
                developed by Netro Creative, provides natural language
                conversations with a virtual assistant for task assistance and
                helpful information. Its advanced language processing
                capabilities make it convenient for both personal and business
                use.
              </p>
            </div>
            <div className="bg-whiteHigh rounded-2xl p-6 min-h-80">
              <p className="text-2xl text-aboutHeaderColor">What</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-getStartedGradientStart to-getStartedGradientEnd text-5xl md:text-8xl font-bold">
                We Do
              </p>
              <p className="text-base md:text-2xl text-aboutDetailsColor pt-12">
                Netro Creative's Press Writer AI is a News Generator app that
                uses Chat GPT API, helping users to accomplish their tasks and
                obtain helpful information via natural language conversations,
                thanks to its advanced language processing features. You're
                responsible for its development, deployment, and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
