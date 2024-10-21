import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
