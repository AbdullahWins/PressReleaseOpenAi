import React from "react";
import Hero from "../../components/Hero/Hero";

const Support = () => {
  return (
    <div>
      <Hero></Hero>
      <section className="flex items-center justify-center">
        <div className="max-w-10/12 p-4 md:p-20 rounded-xl border-2 border-whiteMid m-4 md:my-28 w-full">
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 py-10 px-4">
            <div className="bg-whiteHigh rounded-2xl p-6 min-h-80">
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-getStartedGradientStart to-getStartedGradientEnd text-5xl md:text-8xl font-bold pb-8">
                Support
              </p>
              <p className="text-start md:text-2xl text-blackLow">
                If you have any questions or concerns regarding the press writer
                AI website, we are here to help.
                <br />
                Our team is dedicated to providing you with the best possible
                user experience and resolving any issues you may encounter.
                Whether you need assistance with registering for an account,
                using the webapp, or modifying your account settings, we are
                happy to assist you.
                <br />
                <br />
                Please don't hesitate to contact us through the contact form
                provided on our website or by sending an email to
                <span className="font-black"> support@netrocreative.com </span>.
                We will do our best to respond to your inquiry as soon as
                possible.
              </p>
              <p className="pt-2 text-start md:text-2xl text-blackLow">
                Or you can always contact us via social media!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
