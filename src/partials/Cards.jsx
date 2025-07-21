import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
const Cards = ({ data, title }) => {
  return (
    <div className=" w-full flex flex-wrap bg-[#121212] justify-center ">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="relative w-[30vh] mb-[5%] mr-[3%] object-cover"
        >
          <img
            className="h-[40vh] hover:shadow-[19px_17px_38px_8px_rgba(0,0,0,1.5)]"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/w1280/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-zinc-400 font-semibold text-2xl mt-[2%]">
            {c.name || c.original_title || c.title || c.original_name}
          </h1>
          {c.vote_average && (
            <div className=" absolute right-[3%] top-[5%]  text-white text-semibold text-xl flex items-center justify-center bg-yellow-500 h-[5vh] w-[5vh] rounded-full">
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
