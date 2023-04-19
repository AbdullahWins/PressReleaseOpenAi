import React from "react";
import Cards from "../shared/Cards/Cards";

const Feedbacks = () => {
  return (
    <section>
      <div className="flex items-center justify-center md:h-[949px] py-20">
        <div className="w-10/12">
          <div className="">
            <h4 className="text-3xl font-bold text-testimonialColor">
              Testimonials
            </h4>
            <p className="py-6 text-clientSay text-2xl md:text-6xl">
              What our happy clients say
            </p>
            <Cards></Cards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
