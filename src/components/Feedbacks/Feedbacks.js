import React from "react";
import Cards from "../shared/Cards/Cards";

const Feedbacks = () => {
  return (
    <section className="pt-40">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h4 className="text-2xl font-bold text-testimonialColor">
              Testimonials
            </h4>
            <p className="py-6 text-clientSay text-6xl">
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
