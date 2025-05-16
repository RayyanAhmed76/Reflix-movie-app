import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <div className=" flex bg-[#121212] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
