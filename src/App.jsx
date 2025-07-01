import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./partials/Trending";
import Popular from "./partials/Popular";
import Movies from "./partials/Movies";
import TvShow from "./partials/TvShow";

export default function App() {
  return (
    <div className=" flex bg-[#121212] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/blockbuster" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvShow" element={<TvShow />} />
      </Routes>
    </div>
  );
}
