import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-3 px-14 flex gap-5 bg-slate-200 border-b border-slate-200 fixed bg-white/70 backdrop-blur-3xl w-full z-10">
      <Link
        className="text-lg hover:scale-105 text-blue-600 transition-all duration-100 ease-in"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-lg hover:scale-105  text-blue-600  transition-all duration-100 ease-in"
        to="/favourites"
      >
        Favourites
      </Link>
    </nav>
  );
};

export default Navbar;
