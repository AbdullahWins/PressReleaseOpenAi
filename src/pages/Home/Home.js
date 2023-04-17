import React from "react";
import Feedbacks from "../../components/Feedbacks/Feedbacks";
import Hero from "../../components/Hero/Hero";
import Writter from "../../components/Writter/Writter";

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
