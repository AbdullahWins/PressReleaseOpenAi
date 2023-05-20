import React from "react";
import TopNav from "../shared/TopNav/TopNav";

const FinalHero = () => {
  return (
    <section className="flex flex-col items-center justify-start bg-authHeroBg bg-no-repeat bg-bottom text-center md:pt-10">
      <TopNav></TopNav>
      <div className="flex flex-col items-center justify-center py-8 px-4 md:px-0 md:py-20 text-whiteHigh">
        <div className="md:w-2/3 text-3xl md:text-6xl pb-8 md:pb-28 font-black">
          <p>Press Release Result</p>
        </div>
      </div>
    </section>
  );
};
export default FinalHero;
