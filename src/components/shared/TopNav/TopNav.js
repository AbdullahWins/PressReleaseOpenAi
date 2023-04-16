import React from "react";

const TopNav = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white md:rounded-full px-4 md:px-20 py-3">
      <button className="text-xl btn btn-ghost hover:bg-purple-600 hover:text-white rounded-full normal-case">
        Help
      </button>
      <button className="text-xl btn btn-ghost hover:bg-purple-600 hover:text-white rounded-full normal-case">
        About Us
      </button>
      <button className="text-xl btn btn-ghost hover:bg-purple-600 hover:text-white rounded-full normal-case">
        Home
      </button>
      <button className="text-xl btn btn-ghost hover:bg-purple-600 hover:text-white rounded-full normal-case">
        Support
      </button>
      <button className="text-xl btn btn-ghost hover:bg-purple-600 hover:text-white rounded-full normal-case">
        Privacy
      </button>
    </section>
  );
};

export default TopNav;
