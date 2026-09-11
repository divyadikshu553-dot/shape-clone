import React from "react";

function Nav() {
  return (
    <nav className="flex items-center justify-between border border-gray rounded-full px-6 py-3">
      <h1 className="text-2xl font-bold">SHAPE</h1>

      <div className="hidden gap-8 md:flex">
        <a href="#">Work</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
      </div>

      <button className="mt-8 rounded-full bg-lime-300 px-4 py-2 text-black hover:bg-lime-300">
        Start a project →
      </button>
    </nav>
  );
}

export default Nav;
