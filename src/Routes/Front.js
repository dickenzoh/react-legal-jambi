import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Component/Home/Home";
import Blog from "../Component/Blogs/Blogs";
import Singleblog from "../Component/Blogs/Singleblog/Singleblog";
import Dashboard from "../Component/Dashboard/Dashboard";
import Sidebar from "../Component/global/Sidebar";
import { Box } from "@mui/material";

const Front = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog" element={<Singleblog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Front;
