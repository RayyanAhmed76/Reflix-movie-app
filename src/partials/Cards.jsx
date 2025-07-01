import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap bg-[#121212] px-[4%]">
      {data.map((c, i) => (
        <Link key={i} className="w-[25vh] mb-[5%] mr-[3%] object-cover">
          <img
            className="h-[40vh] hover:shadow-[19px_17px_38px_8px_rgba(0,0,0,1.5)]"
            src={`https://image.tmdb.org/t/p/w1280/${
              c.poster_path || c.backdrop_path
            }`}
            alt=""
          />
          <h1 className="text-zinc-400 font-semibold text-2xl mt-[2%]">
            {c.name || c.original_title || c.title || c.original_name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
