import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Admin from "./Routes/Admin";
import Front from "./Routes/Front";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Front />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
