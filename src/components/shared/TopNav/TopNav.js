import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4 bg-whiteHigh md:rounded-full px-4 md:px-20 py-3">
      <Link to="/help">
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
      <Link to="/privacy">
        <button className="text-xl btn btn-ghost hover:bg-btnHoverColor hover:text-whiteHigh rounded-full normal-case">
          Privacy
        </button>
      </Link>
    </section>
  );
};

export default TopNav;
