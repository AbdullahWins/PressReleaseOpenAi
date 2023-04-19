import React, { useContext } from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import { AiContext } from "../../contexts/AiContext";
import { useNavigate } from "react-router-dom";

const Writter = () => {
  const { setInput, setPrompt, processRequest, output } = useContext(AiContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const selectedValue = e.target.value;
    setInput(selectedValue);
  };

  const handlePromptChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setPrompt(value);
  };

  if (output) {
    navigate("/edit");
  }

  const handleSubmit = () => {
    processRequest();
  };

  return (
    <section className="flex items-center justify-center mt-8 md:mt-[-212px]">
      <div className="flex items-center justify-center md:pt-16 w-10/12 bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
        <div className="max-w-6xl">
          <div className="pb-16">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-4xl md:text-6xl font-bold pb-3">
              AI Press Release Writing Tool
            </p>
            <p className="text-lg px-2 md:px-0 md:text-2xl">
              Please do not write a chatGPT prompt here. Our system will do that
              for you.
            </p>
          </div>
          <section className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center pb-20">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center max-w-xl md:h-48 border-2 border-titleGradientStart rounded-2xl p-4">
              <img src={icon1} alt="" />
              <div className="text-center md:text-start">
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
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center max-w-xl md:h-48 border-2 border-titleGradientStart rounded-2xl p-4">
              <img src={icon2} alt="" />
              <div className="text-center md:text-start">
                <p className="text-xl font-bold pb-2">
                  Improve My Existing Press Release
                </p>
                <p className="text-base">
                  Paste your existing press release in the Step 2 form. For
                  existing releases, Newswriter always returns creative ideas
                  that help you improve your already written press release.
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col pb-0 md:pb-12">
            <div>
              <select
                required
                onChange={handleInputChange}
                defaultValue={"Select One"}
                className="select w-full max-w-6xl border-2 border-btnGradientEnd mb-7"
              >
                <option disabled>Select One</option>
                <option value="Write a new press release about the following topic:">
                  New Press Release
                </option>
                <option value="Rewrite and improve this press release:">
                  Improve Press Release
                </option>
              </select>
            </div>
            <textarea
              required
              onChange={handlePromptChange}
              className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
              rows="10"
              placeholder="Step 2: Tell us about your news announcement."
            ></textarea>
            <p className="text-start text-textSubtitleColor text-sm">
              Describe your news in 3-4 sentences. Add a quote or two.
            </p>
            <button
              // disabled={prompt.length < 10}
              onClick={() => {
                handleSubmit();
              }}
              className="btn w-full md:btn-wide mt-12 mb-2 bg-gradient-to-r from-btnGradientStart to-btnGradientEnd normal-case border-none"
            >
              Generate Press Release
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Writter;
