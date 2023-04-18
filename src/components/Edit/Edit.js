import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";
import { StorageContext } from "../../contexts/StorageContext";

const Edit = () => {
  const { prompt, output, setOutput, processRequest } = useContext(AiContext);
  const { addToDb } = useContext(StorageContext);

  const handlePromptChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setOutput(value);
  };

  const handleSubmit = () => {
    processRequest();
    addToDb();
  };

  return (
    <section className="flex items-center justify-center md:mt-[-212px]">
      <div className="flex items-center justify-center pt-16 border-2 border-titleGradientEnd w-10/12 bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
        <div className="max-w-6xl">
          <div className="pb-16">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-6xl font-bold pb-3">
              Press Release Results
            </p>
          </div>
          <section className="flex flex-col pb-12 gap-4">
            <div>
              <p className="text-start text-textSubtitleColor text-sm">
                Press Release Description
              </p>
              <input
                required
                type="text"
                name="input"
                id="input"
                defaultValue={prompt}
                className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
              ></input>
            </div>
            <div>
              <p className="text-start text-textSubtitleColor text-sm">
                Edit Your Press Release
              </p>
              <textarea
                name="output"
                id="output"
                required
                defaultValue={output}
                onChange={handlePromptChange}
                className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
                rows="10"
                placeholder=""
              ></textarea>
            </div>
            <div>
              <p className="text-start text-textSubtitleColor text-sm">
                Your Corporate Email Address
              </p>
              <input
                type="email"
                name="email"
                id="email"
                className=" w-full max-w-6xl border-2 border-btnGradientEnd rounded-lg"
              />
            </div>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="btn btn-wide mt-12 mb-2 bg-gradient-to-r from-btnGradientStart to-btnGradientEnd normal-case border-none"
            >
              Generate Press Release
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Edit;
