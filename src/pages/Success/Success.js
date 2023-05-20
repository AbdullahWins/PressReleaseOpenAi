import React, { useContext } from "react";
import success from "../../assets/icons/success.png";
import { AiContext } from "../../contexts/AiContext";
import Hero from "../../components/Hero/Hero";

const Success = () => {
  const { email } = useContext(AiContext);
  return (
    <div>
      <Hero></Hero>
      <section className="flex items-center justify-center mt-8 md:-mt-28 pb-8 md:pb-20">
        <div className="flex items-center justify-center max-w-5xl bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
          <div className="w-10/12 flex flex-col items-center justify-center md:py-2">
            <img className="w-40" src={success} alt="" />
            <p className="text-successTextColor text-5xl font-black pb-6">
              Success!
            </p>
            <p className="text-base md:text-xl pb-2 font-semibold">
              Thank you for using {process.env.REACT_APP_ApplicationName}! Your
              press release will be emailed at
              <span className="font-black"> {email} </span> within a few
              minutes, sooner depending on server load. Remember, while AI is a
              valuable tool in news writing, it requires human supervision so we
              always encourage human editing prior to finalizing a press
              release.
            </p>
            <p className="text-successPgColor text-sm md:text-lg">
              When you are ready to distribute your press release, consider
              using our press release distribution and news marketing platform,
              {process.env.REACT_APP_ApplicationName}. We'll include a discount
              code in your email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
