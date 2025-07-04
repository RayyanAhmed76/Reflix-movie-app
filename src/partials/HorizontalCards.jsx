import React from "react";
import { Dropdown } from "./Dropdown";
import { Link } from "react-router-dom";

function HorizontalCards({ data: d }) {
  return (
    <div className="w-full h-[40vh] px-[1%] flex overflow-y-hidden  ">
      {d.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[15%] bg-zinc-900 mr-5 mb-5  scroll-smooth"
        >
          <img
            className="w-full aspect-[16/9]  object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <div className="text-white  ">
            <h1 className="mt-4  text-2xl font-semibold h-16  ">
              {" "}
              {d.name || d.original_title || d.title || d.original_name}
            </h1>
            <p className="mt-6 ">
              {d.overview.slice(0, 150)}...
              <span Name="text-zinc-500"> more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HorizontalCards;
