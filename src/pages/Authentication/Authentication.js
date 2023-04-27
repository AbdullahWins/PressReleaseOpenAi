import React from "react";
import "firebase/firestore";
import AuthHero from "../../components/AuthHero/AuthHero";
import Feedbacks from "../../components/Feedbacks/Feedbacks";

const Authentication = () => {

  return (
    <div>
      <AuthHero></AuthHero>
      <Feedbacks></Feedbacks>
    </div>
  );
};

export default Authentication;
