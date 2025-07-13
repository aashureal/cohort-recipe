import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-10 px-20 flex items-center text-2xl gap-10 justify-center">
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        to="/resps"
      >
        Resps
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        to="/create"
      >
        Create
      </NavLink>
    </div>
  );
};

export default Navbar;
