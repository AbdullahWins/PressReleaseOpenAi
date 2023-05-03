import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StorageContext } from "../../contexts/StorageContext";
import FinalHero from "../../components/FinalHero/FinalHero";

const FinalDocument = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [headlinesOutput, setHeadlinesOutput] = useState("");
  const { documentData } = useContext(StorageContext);

  useEffect(() => {
    setPrompt(documentData?.prompt);
    setOutput(documentData?.finalOutput);
    setHeadlinesOutput(documentData?.headlinesOutput);
  }, [documentData]);

  return (
    <div>
      <FinalHero></FinalHero>
      <section className="flex items-center justify-center md:-mt-28 pb-8 md:pb-16 p-4">
        <div className="flex items-center justify-center md:pt-6 w-full max-w-5xl bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
          <div className="w-full">
            <section className="flex flex-col gap-4 pb-4">
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
              <div>
                <p className="text-start text-textSubtitleColor text-sm">
                  Some Alternative Headlines
                </p>
                <textarea
                  required
                  defaultValue={headlinesOutput}
                  className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
                  rows="7"
                  placeholder=""
                ></textarea>
              </div>
              <Link className="flex items-start" to="/">
                <button className="btn btn-wide mt-2 bg-gradient-to-r from-btnGradientStart to-btnGradientEnd normal-case border-none">
                  Generate Another
                </button>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalDocument;
