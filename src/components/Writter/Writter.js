import React, { useContext } from "react";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import { AiContext } from "../../contexts/AiContext";
import { useNavigate } from "react-router-dom";

const Writter = () => {
  const {
    setInput,
    setPrompt,
    processRequest,
    processHeadlinesRequest,
    output,
  } = useContext(AiContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const selectedValue = e.target.value;
    setInput(selectedValue);
  };

  const handlePromptChange = (e) => {
    const value = e.target.value;
    setPrompt(value);
  };

  if (output) {
    navigate("/edit");
  }

  const handleSubmit = () => {
    processRequest();
    processHeadlinesRequest();
  };

  return (
    <section className="flex items-center justify-center mt-8 md:-mt-28  p-4">
      <div className="flex items-center justify-center md:pt-8 bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4 max-w-5xl">
        <div className="w-10/12">
          <div className="pb-8">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-xl md:text-5xl font-bold py-3">
              AI Press Release Writing Tool
            </p>
            <p className="text-md px-2 md:px-0 md:text-lg">
              Please do not write a chatGPT prompt here. Our system will do that
              for you.
            </p>
          </div>
          <section className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center pb-4 md:p-4">
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 items-center md:items-start justify-center min-w-xl border-2 border-titleGradientStart rounded-2xl p-4">
              <img src={icon1} alt="" />
              <div className="text-center md:text-start">
                <p className="text-lg md:text-xl font-bold pb-2">
                  Write a Press Release
                </p>
                <p className="text-sm md:text-base">
                  Write a description of your news announcement in the Step 2
                  form. Remember, be conversational. Pretend that you're
                  describing your news to a friend.
                </p>
              </div>
            </div>
            <hr className="w-16 text-titleGradientStart" />
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 items-center md:items-start justify-center min-w-xl border-2 border-titleGradientStart rounded-2xl p-4">
              <img src={icon2} alt="" />
              <div className="text-center md:text-start">
                <p className="text-lg md:text-xl font-bold pb-2">
                  Improve My Press Release
                </p>
                <p className="text-sm md:text-base">
                  Paste your existing press release in the Step 2 form. For
                  existing releases, Newswriter always returns creative ideas
                  that help you improve your already written press release.
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center pb-0 md:pb-4">
            <div className="w-full">
              <select
                required
                onChange={handleInputChange}
                defaultValue={"Select One"}
                className="select w-full max-w-4xl border-2 border-btnGradientEnd mb-4"
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
              className="textarea w-full max-w-4xl border-2 border-btnGradientEnd"
              rows="10"
              placeholder="write something"
            ></textarea>
            <p className="text-start text-textSubtitleColor text-sm pt-1">
              Describe your news in 3-4 sentences. Add a quote or two.
            </p>
            <button
              // disabled={prompt.length < 10}
              onClick={() => {
                handleSubmit();
              }}
              className="btn w-full md:btn-wide mt-6 mb-2 bg-gradient-to-r from-btnGradientStart to-btnGradientEnd normal-case border-none"
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
