import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.css";
import TopNav from "../components/shared/TopNav/TopNav";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-start md:justify-between bg-mainBg bg-no-repeat bg-top`}
    >
      <TopNav></TopNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
