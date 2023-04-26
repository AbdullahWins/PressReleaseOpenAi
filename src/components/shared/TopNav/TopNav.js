import React from "react";
import { Link } from "react-router-dom";
import TopNavResponsive from "./TopNavResponsive";

const TopNav = () => {
  const pageTitle = document.title;

  return (
    <div>
      <TopNavResponsive></TopNavResponsive>
      <section className="hidden md:flex items-center justify-between gap-4 bg-whiteHigh rounded-full px-4 md:px-20 py-3">
        <Link to="/help" className="">
          <button
            className={`text-xl btn btn-ghost ${
              pageTitle === `${process.env.REACT_APP_ApplicationName} | Help`
                ? "bg-btnHoverColor text-whiteHigh"
                : ""
            } hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case`}
          >
            Help
          </button>
        </Link>
        <Link to="/about">
          <button
            className={`text-xl btn btn-ghost ${
              pageTitle === `${process.env.REACT_APP_ApplicationName} | About`
                ? "bg-btnHoverColor text-whiteHigh"
                : ""
            } hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case`}
          >
            About us
          </button>
        </Link>
        <Link to="/home">
          <button
            className={`text-xl btn btn-ghost ${
              pageTitle === `${process.env.REACT_APP_ApplicationName} | Home`
                ? "bg-btnHoverColor text-whiteHigh"
                : ""
            } hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case`}
          >
            Home
          </button>
        </Link>
        <Link to="/support">
          <button
            className={`text-xl btn btn-ghost ${
              pageTitle === `${process.env.REACT_APP_ApplicationName} | Support`
                ? "bg-btnHoverColor text-whiteHigh"
                : ""
            } hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case`}
          >
            Support
          </button>
        </Link>
        <Link to="/privacy" className="">
          <button
            className={`text-xl btn btn-ghost ${
              pageTitle === `${process.env.REACT_APP_ApplicationName} | Privacy`
                ? "bg-btnHoverColor text-whiteHigh"
                : ""
            } hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case`}
          >
            Privacy
          </button>
        </Link>
      </section>
    </div>
  );
};

export default TopNav;
