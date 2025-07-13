import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resps from "../pages/Resps";
import About from "../pages/About";
import Create from "../pages/Create";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resps" element={<Resps />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
