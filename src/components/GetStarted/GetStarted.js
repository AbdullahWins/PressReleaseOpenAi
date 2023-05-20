import React from "react";

const GetStarted = () => {
  return (
    <section className="flex items-center justify-center mb-8 md:-mb-28 z-10 p-4">
      <div className="flex items-center justify-between text-whiteHigh bg-gradient-to-r from-getStartedGradientStart to-getStartedGradientEnd rounded-2xl max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-between gap-2 p-4 md:p-12 text-center md:text-start">
          <p className="text-xl md:text-4xl col-span-1 md:col-span-3 font-semibold w-full">
            Get started today for
            <br />
            better press release!
          </p>
          <p className="text-sm md:text-lg col-span-1 md:col-span-2">
            aipressrelease is a compass for business leaders, scale with
            checking and saving accounts, custom tools, and access to our
            investor box.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
