import React from "react";

const GetStarted = () => {
  return (
    <section className="flex items-center justify-center mb-[-200px] z-10">
      <div className="flex items-center justify-between text-whiteHigh md:h-[420px] w-10/12 bg-gradient-to-r from-getStartedGradientStart to-getStartedGradientEnd rounded-2xl">
        <div className="grid grid-cols-5 items-start justify-between gap-2 p-24 text-start">
          <p className="text-6xl col-span-3 font-semibold w-full">
            Get started today for
            <br />
            better press release!
          </p>
          <p className="text-2xl col-span-2 pl-8">
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
