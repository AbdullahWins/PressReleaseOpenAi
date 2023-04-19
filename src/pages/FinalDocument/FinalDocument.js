import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StorageContext } from "../../contexts/StorageContext";

const FinalDocument = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const { documentData } = useContext(StorageContext);

  useEffect(() => {
    setPrompt(documentData?.prompt);
    setOutput(documentData?.finalOutput);
  }, [documentData]);

  return (
    <section className="flex items-center justify-center md:mt-[-212px] pb-40">
      <div className="flex items-center justify-center pt-16 border-2 border-titleGradientEnd w-10/12 bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
        <div className="max-w-6xl">
          <div className="pb-16">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-7xl font-bold pb-3">
              Press Release Result
            </p>
          </div>
          <section className="flex flex-col gap-4 pb-12">
            <div>
              <p className="text-start text-textSubtitleColor text-sm">
                Given description to AI
              </p>
              <textarea
                required
                defaultValue={prompt}
                className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
                rows="3"
                placeholder=""
              ></textarea>
            </div>
            <div>
              <p className="text-start text-textSubtitleColor text-sm">
                AI Generated Press Release
              </p>
              <textarea
                required
                defaultValue={output}
                className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
                rows="10"
                placeholder=""
              ></textarea>
            </div>
            <Link className="flex items-start" to="/">
              <button className="btn btn-wide mt-12 mb-2 bg-gradient-to-r from-btnGradientStart to-btnGradientEnd normal-case border-none">
                Generate Another
              </button>
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FinalDocument;
