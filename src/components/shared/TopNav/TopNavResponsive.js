import React from "react";
import { Link } from "react-router-dom";

const TopNavResponsive = () => {
  return (
    <section className="md:hidden">
      <div className="navbar text-start w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-whiteMid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/help" className="">
                <button className="text-xl btn btn-ghost text-start rounded-full normal-case">
                  Help
                </button>
              </Link>
              <Link to="/about">
                <button className="text-xl btn btn-ghost rounded-full normal-case">
                  About us
                </button>
              </Link>
              <Link to="/home">
                <button className="text-xl btn btn-ghost rounded-full normal-case">
                  Home
                </button>
              </Link>
              <Link to="/support">
                <button className="text-xl btn btn-ghost rounded-full normal-case">
                  Support
                </button>
              </Link>
              <Link to="/privacy" className="">
                <button className="text-xl btn btn-ghost rounded-full normal-case">
                  Privacy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNavResponsive;
