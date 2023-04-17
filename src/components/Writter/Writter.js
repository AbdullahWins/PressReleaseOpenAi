import React from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";

const Writter = () => {
  return (
    <section className="flex items-center justify-center md:mt-[-212px]">
      <div className="pt-16 border-2 border-titleGradientEnd w-10/12 bg-whiteHigh rounded-3xl">
        <div className="pb-16">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-6xl font-bold pb-2">
            AI Press Release Writing Tool
          </p>
          <p className="text-2xl">
            Please do not write a chatGPT prompt here. Our system will do that
            for you.
          </p>
        </div>
        <sectionn className="flex flex-col md:flex-row gap-0 items-center justify-center p-4 pb-20 ">
          <div className="flex gap-6 items-start justify-center max-w-lg h-48 border-2 border-titleGradientStart rounded-2xl p-4">
            <img src={icon1} alt="" />
            <div className="text-start">
              <p className="text-xl font-bold pb-2">Write a Press Release</p>
              <p className="text-base">
                Write a description of your news announcement in the Step 2
                form. Remember, be conversational. Pretend that you're
                describing your news to a friend. You really should not need
                more than about 100 words. Refer to the Ideas for tips.
              </p>
            </div>
          </div>
          <hr className="w-16 text-titleGradientStart" />
          <div className="flex gap-6 items-start justify-center max-w-lg h-48 border-2 border-titleGradientStart rounded-2xl p-4">
            <img src={icon2} alt="" />
            <div className="text-start">
              <p className="text-xl font-bold pb-2">
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
        <section>
          <div>
            <select className="select w-full max-w-6xl border-2 border-btnGradientEnd mb-7">
              <option disabled selected>
                Step 1: What do you want AI to do for you?
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <textarea
            className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
            rows="10"
            placeholder="Bio"
          ></textarea>
        </section>
      </div>
    </section>
  );
};

export default Writter;
