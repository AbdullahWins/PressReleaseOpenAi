import React from "react";
import "firebase/firestore";
// import { StorageContext } from "../../contexts/StorageContext";
// import { useNavigate } from "react-router";
import AuthHero from "../../components/AuthHero/AuthHero";
import Feedbacks from "../../components/Feedbacks/Feedbacks";

const Authentication = () => {
  // const { getDocumentFromFirestore } = useContext(StorageContext);
  // const [authCode, setAuthCode] = useState("");
  // const navigate = useNavigate();

  // const handleCodeChange = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setAuthCode(value);
  // };

  // const handleSubmit = () => {
  //   getDocumentFromFirestore(authCode);
  //   setTimeout(() => {
  //     navigate("/final");
  //   }, 1000);
  // };

  return (
    <div>
      <AuthHero></AuthHero>
      <Feedbacks></Feedbacks>
      {/* <section className="flex items-center justify-center md:mt-[-212px] pb-40">
        <div className="flex items-center justify-center pt-16 border-2 border-titleGradientEnd w-10/12 bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
          <div className="max-w-6xl">
            <div className="pb-16">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-titleGradientStart to-titleGradientEnd text-6xl font-bold pb-3">
                Authentication Required
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-titleGradientStart to-titleGradientEnd text-2xl font-bold pb-3">
                An access key was emailed to you with this link. Please enter it
                bellow.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 pb-16">
              <input
                required
                type="text"
                onChange={handleCodeChange}
                placeholder="Enter access key here"
                className="input w-full max-w-6xl border-2 border-btnGradientEnd"
              ></input>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="btn bg-gradient-to-r from-btnGradientStart to-btnGradientEnd normal-case border-none"
              >
                Validate
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Authentication;
