import React from "react";
import Feedbacks from "../../components/Feedbacks/Feedbacks";
import Writter from "../../components/Writter/Writter";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  // changing the webpage title dynamically
  document.title = `${process.env.REACT_APP_ApplicationName} | Home`;
  return (
    <div>
      <Hero></Hero>
      <Writter></Writter>
      <Feedbacks></Feedbacks>
    </div>
  );
};

export default Home;
