import React from "react";
import Cards from "../shared/Cards/Cards";

const Feedbacks = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center p-4 py-8 md:py-20">
        <div className="max-w-5xl">
          <div className="">
            <h4 className="text-3xl font-bold text-testimonialColor">
              Testimonials
            </h4>
            <p className="py-6 text-clientSay text-2xl md:text-4xl">
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
