import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./partials/Trending";
import Popular from "./partials/Popular";
import Movies from "./partials/Movies";
import TvShow from "./partials/TvShow";
import People from "./partials/People";
import MovieDetails from "./components/MovieDetails";
import PeopleDetails from "./components/PeopleDetails";
import TvDetails from "./components/TvDetails";
import Trailer from "./partials/Trailer";
import Error from "./components/Error";
import ContactUs from "./partials/ContactUs";

export default function App() {
  return (
    <div className=" flex bg-[#121212] w-screen h-screen overflow-y-hidden overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvShow />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PeopleDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
