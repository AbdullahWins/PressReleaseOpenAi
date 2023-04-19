import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <section className="hidden md:flex items-center justify-between gap-4 bg-whiteHigh rounded-full px-4 md:px-20 py-3">
      <Link to="/help" className="">
        <button className="text-xl btn btn-ghost hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case">
          Help
        </button>
      </Link>
      <Link to="/about">
        <button className="text-xl btn btn-ghost hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case">
          About us
        </button>
      </Link>
      <Link to="/home">
        <button className="text-xl btn btn-ghost hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case">
          Home
        </button>
      </Link>
      <Link to="/support">
        <button className="text-xl btn btn-ghost hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case">
          Support
        </button>
      </Link>
      <Link to="/privacy" className="">
        <button className="text-xl btn btn-ghost hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case">
          Privacy
        </button>
      </Link>
    </section>
  );
};

export default TopNav;
