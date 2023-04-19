import React from "react";
import customer1 from "../../../assets/images/customer1.png";
import customer2 from "../../../assets/images/customer2.png";
import customer3 from "../../../assets/images/customer3.png";

const Cards = () => {
  return (
    <section className="flex items-center justify-between gap-8">
      <div className="flex flex-col items-center justify-between gap-4 shadow-md shadow-blackLow p-14 rounded-xl max-w-md text-start">
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-customerText">
            <div>
              <img src={customer1} alt="" />
            </div>
            <div>
              <p className="text-2xl font-semibold">Mila McSabbu</p>
              <p className="text-xl">Freelancer Designer</p>
            </div>
          </div>
          <div className="text-starsColor">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div>
          <p className="pt-2">
            OMG! I cannot believe that I have got a brand new landing page after
            getting appmax. It was super easy to edit and publish.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 shadow-md shadow-blackLow p-14 rounded-xl max-w-md text-start">
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-customerText">
            <div>
              <img src={customer2} alt="" />
            </div>
            <div>
              <p className="text-2xl font-semibold">Robert Fox</p>
              <p className="text-xl">UI/UX Designer</p>
            </div>
          </div>
          <div className="text-starsColor">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div>
          <p className="pt-2">
            OMG! I cannot believe that I have got a brand new landing page after
            getting appmax. It was super easy to edit and publish.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 shadow-md shadow-blackLow p-14 rounded-xl max-w-md text-start">
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-customerText">
            <div>
              <img src={customer3} alt="" />
            </div>
            <div>
              <p className="text-2xl font-semibold">Jenny Willson</p>
              <p className="text-xl">Web Developer</p>
            </div>
          </div>
          <div className="text-starsColor">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div>
          <p className="pt-2">
            OMG! I cannot believe that I have got a brand new landing page after
            getting appmax. It was super easy to edit and publish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
