import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blogs/Blogs";
import Singleblog from "./Component/Blogs/Singleblog/Singleblog";

const App = () => {
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

export default App;
