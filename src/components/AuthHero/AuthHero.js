import React, { useContext, useState } from "react";
import TopNav from "../shared/TopNav/TopNav";
import { StorageContext } from "../../contexts/StorageContext";
import { useNavigate } from "react-router-dom";
import { AiContext } from "../../contexts/AiContext";

const AuthHero = () => {
  const { email } = useContext(AiContext);
  const { getDocumentFromFirestore } = useContext(StorageContext);
  const [authCode, setAuthCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setAuthCode(value);
  };

  const handleSubmit = () => {
    getDocumentFromFirestore(authCode);
    setTimeout(() => {
      navigate("/final");
    }, 1000);
  };
  return (
    <section className="flex flex-col items-center justify-start bg-authHeroBg bg-no-repeat bg-bottom text-center pt-10">
      <TopNav></TopNav>
      <div className="flex flex-col items-center justify-center px-4 md:px-0 md:py-32 text-whiteHigh">
        <div className="max-w-10/12 w-full">
          <div className="pb-16">
            <p className="text-whiteHigh text-4xl md:text-6xl font-bold pb-1">
              Authentication Required
            </p>
            <p className="text-whiteHigh text-md md:text-lg font-bold pb-1">
              An access key was emailed to
              <span className="font-black">{email}</span> with this link. Please
              enter it bellow.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pb-16">
            <input
              required
              type="text"
              onChange={handleCodeChange}
              placeholder="Enter access key here"
              className="input w-full max-w-5xl border-2 text-blackMid border-btnGradientEnd"
            ></input>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="btn bg-gradient-to-r text-2xl from-btnGradientStart to-btnGradientEnd normal-case border-none"
            >
              Validate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthHero;
