import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";
import { StorageContext } from "../../contexts/StorageContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router";

const EditDocument = () => {
  const { prompt, output, setFinalOutput, setEmail } = useContext(AiContext);
  const { addToDb } = useContext(StorageContext);
  const navigate = useNavigate();

  const handlePromptChange = () => {
    const value = document.getElementById("output").innerText;
    setFinalOutput(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = () => {
    addToDb();
    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };

  return (
    <section className="flex items-center justify-center mt-8 md:-mt-28 pb-8 md:pb-40">
      <div className="flex items-center justify-center md:pt-16 max-w-5xl bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
        <div className="w-10/12">
          <div className="md:pb-16">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-4xl md:text-6xl font-bold pb-3">
              Press Release Results
            </p>
          </div>
          <section className="flex flex-col md:pb-12 gap-4">
            <div>
              <p className="text-start text-textSubtitleColor text-sm font-bold">
                Press Release Description
              </p>
              <input
                required
                type="text"
                name="input"
                id="input"
                defaultValue={prompt}
                className="input w-full max-w-6xl border-2 border-btnGradientEnd"
              ></input>
            </div>
            <div>
              <p className="text-start text-textSubtitleColor text-sm font-bold">
                Edit Your Press Release
              </p>
              <ReactQuill
                theme="snow"
                name="output"
                id="output"
                required
                defaultValue={output}
                onChange={() => {
                  handlePromptChange();
                }}
                className="textarea w-full max-w-6xl border-2 border-btnGradientEnd"
                rows="10"
                placeholder=""
              />
            </div>
            <div>
              <p className="text-start text-textSubtitleColor text-sm font-bold">
                Your Corporate Email Address
              </p>
              <input
                required
                onChange={handleEmailChange}
                type="email"
                name="user_email"
                id="email"
                className="input w-full max-w-6xl border-2 border-btnGradientEnd rounded-lg"
              />
              <div className="flex items-start justify-center md:justify-start">
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="btn mt-4 md:mt-12 mb-2 bg-gradient-to-r from-btnGradientStart to-btnGradientEnd normal-case border-none"
                >
                  Checkout
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EditDocument;
