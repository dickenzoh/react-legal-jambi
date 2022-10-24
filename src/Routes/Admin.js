import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Component/Home/Home";
import Blog from "../Component/Blogs/Blogs";
import Singleblog from "../Component/Blogs/Singleblog/Singleblog";
import Dashboard from "../Component/Dashboard/Dashboard";
import Sidebar from "../Component/global/Sidebar";
import { Box } from "@mui/material";

const Admin = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
      }}
    >
      <BrowserRouter>
        <Box
          sx={{
            width: "30%",
          }}
        >
          <Sidebar isSidebar={isSidebar} />
        </Box>
        <Box
          sx={{
            width: "70%",
          }}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default Admin;
