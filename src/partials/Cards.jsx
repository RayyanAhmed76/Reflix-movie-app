import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(title);
  return (
    <div className=" w-full flex flex-wrap bg-[#121212] px-[4%]">
      {data.map((c, i) => (
        <Link
          to={`/${c.title}/details/${c.id}`}
          key={i}
          className="relative w-[25vh] mb-[5%] mr-[3%] object-cover"
        >
          <img
            className="h-[40vh] hover:shadow-[19px_17px_38px_8px_rgba(0,0,0,1.5)]"
            src={`https://image.tmdb.org/t/p/w1280/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-zinc-400 font-semibold text-2xl mt-[2%]">
            {c.name || c.original_title || c.title || c.original_name}
          </h1>
          {c.vote_average && (
            <div className=" absolute right-[-7%] top-[5%]  text-white text-semibold text-xl flex items-center justify-center bg-yellow-500 h-[4vh] w-[4vh] rounded-full">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
