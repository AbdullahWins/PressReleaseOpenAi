import React from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";

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
        <sectionn className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center p-4">
          <div className="grid grid-cols-12 gap-1 items-start justify-center h-48 border-2 border-titleGradientStart rounded-2xl p-4">
            <img className="col-span-3" src={icon1} alt="" />
            <div className="col-span-9 text-start">
              <p className="text-xl font-bold">Write a Press Release</p>
              <p className="text-base">
                Write a description of your news announcement in the Step 2
                form. Remember, be conversational. Pretend that you're
                describing your news to a friend. You really should not need
                more than about 100 words. Refer to the Ideas for tips.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-1 items-start justify-center h-48 border-2 border-titleGradientStart rounded-2xl p-4">
            <img className="col-span-3" src={icon2} alt="" />
            <div className="col-span-9 text-start">
              <p className="text-xl font-bold">
                Improve My Existing Press Release
              </p>
              <p className="text-base">
                Paste your existing press release in the Step 2 form. For
                existing releases, Newswriter always returns creative ideas that
                help you improve your already written press release.
              </p>
            </div>
          </div>
        </sectionn>
      </div>
    </section>
  );
};

export default Writter;
