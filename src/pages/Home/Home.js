import React from "react";
import Feedbacks from "../../components/Feedbacks/Feedbacks";
import Writter from "../../components/Writter/Writter";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Writter></Writter>
      <Feedbacks></Feedbacks>
    </div>
  );
};

export default Home;
